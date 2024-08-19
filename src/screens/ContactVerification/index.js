import {View, Text, Keyboard, Alert} from 'react-native';
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react';
import Typography from '../../components/Typography';
import {BLACK} from '../../styles/colors';
import {
  FONT_SIZE_12,
  FONT_SIZE_16,
  FONT_SIZE_20,
  FONT_SIZE_25,
} from '../../styles/fontSize';
import styles from './styles';
import InputField from '../../components/InputField';
import Loader from '../../components/Loader';
import Media from '../../components/Media';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
  otpVerificationFailure,
  otpVerificationRequest,
  otpVerificationSuccess,
} from '../../redux/actions/user/userActions';
import firestore from '@react-native-firebase/firestore';

const ContactVerification = () => {
  const inputOne = useRef(null);
  const inputTwo = useRef(null);
  const inputThree = useRef(null);
  const inputFour = useRef(null);
  const inputFive = useRef(null);
  const inputSix = useRef(null);

  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [phoneNumber, setPhoneNumber] = useState('+91 626-081-1979');
  // const [confirm, setConfirm] = useState(false);
  const dispatch = useDispatch();

  const userState = useSelector(state => state.user);

  useLayoutEffect(() => {
    setTimeout(() => {
      inputOne.current?.blur();
      inputOne.current?.focus();
    }, 100);
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    console.log('user Id: ', userState.user.id);
    const data = await firestore()
      .collection('Users')
      .doc(userState.user.id)
      .get();
    console.log('user data from db :', data._data);
    setPhoneNumber(data._data.contact);
  };

  const handleInputChange = (text, index) => {
    let newOtp = [...otp];
    newOtp[index] = text;

    setOtp(newOtp);

    // Move to next input when one character is typed
    if (text.length === 1) {
      switch (index) {
        case 0:
          inputTwo?.current?.focus();
          break;
        case 1:
          inputThree?.current?.focus();
          break;
        case 2:
          inputFour?.current?.focus();
          break;
        case 3:
          inputFive?.current?.focus();
          break;
        case 4:
          inputSix?.current?.focus();
          break;
        case 5:
          // Submit OTP if all fields are filled
          Keyboard.dismiss();
          console.log('OTP Submitted:', newOtp.join(''));
          handleOtpVerification(newOtp.join(''));
          break;
      }
    }
  };

  const handleOtpVerification = async code => {
    dispatch(otpVerificationRequest());
    console.log('Handling OTP Verification...');
    console.log('Contact Number: ', phoneNumber);
    await auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(response => response.confirm(code))
      .then(res => {
        setOtp(['', '', '', '', '', '']);
        // setConfirm(true);
        dispatch(otpVerificationSuccess());
      })
      .catch(error => {
        if (error.code === 'auth/invalid-verification-code') {
          dispatch(otpVerificationFailure());
          setOtp(['', '', '', '', '', '']);
          Alert.alert('Invalid Code');
        }
      });
  };

  return (
    <View style={styles.container}>
      <Typography
        content={'Verify your contact'}
        align={'flex-start'}
        color={BLACK}
        fontFamily={'OpenSans'}
        fontSize={FONT_SIZE_25}
        fontWeight={'bold'}
      />
      <Typography
        content={'Verify using OTP (One Time Passcode)'}
        align={'flex-start'}
        color={BLACK}
        fontFamily={'OpenSans'}
        fontSize={FONT_SIZE_16}
      />
      {/* OTP Enter Field */}
      <View style={styles.otpContainer}>
        {otp.map((_, index) => (
          <InputField
            key={index}
            ref={
              index === 0
                ? inputOne
                : index === 1
                ? inputTwo
                : index === 2
                ? inputThree
                : index === 3
                ? inputFour
                : index === 4
                ? inputFive
                : inputSix
            }
            keyboardType={'numeric'}
            placeholderText={'0'}
            secureTextEntry={false}
            onChangeText={text => handleInputChange(text, index)}
            value={otp[index]}
            maxLength={1}
            width={50}
            fontSize={FONT_SIZE_20}
            autoComplete={'off'}
            autoCorrect={false}
          />
        ))}
      </View>
      <View style={styles.footerText}>
        <Typography
          content={'Check SMS for OTP to verify your contact!'}
          align={'flex-end'}
          color={BLACK}
          fontFamily={'OpenSans'}
          fontSize={FONT_SIZE_12}
          fontWeight={'bold'}
        />
      </View>
      <View style={styles.loaderContainer}>
        {userState.isLoading ? (
          <Loader />
        ) : // : confirm ? (
        //   <Media
        //     source={require('../../assets/icons/check.png')}
        //     width={50}
        //     height={50}
        //     resizeMode={'contain'}
        //   />
        // )
        null}
      </View>
    </View>
  );
};

export default ContactVerification;
