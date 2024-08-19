import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import Typography from '../../components/Typography';
import {FONT_SIZE_16, FONT_SIZE_20} from '../../styles/fontSize';
import {
  BLACK,
  GRAY_MEDIUM,
  LIGHT_BLUE,
  PRIMARY,
  SECONDARY,
  WHITE,
} from '../../styles/colors';
import InputField from '../../components/InputField';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import {contactValidator, emailValidator} from '../../utils/Validator';
import firestore from '@react-native-firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {
  signupFailure,
  signupRequest,
  signupSuccess,
} from '../../redux/actions/user/userActions';
import Loader from '../../components/Loader';

const Signup = ({navigation}) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
  });

  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  const handleOnChange = (text, id) => {
    setUser({...user, [id]: text});
  };
  const handleSignUp = async () => {
    const {email, password, confirmPassword, contact, name} = user;
    if (
      email === '' ||
      password === '' ||
      confirmPassword === '' ||
      contact === '' ||
      name === ''
    ) {
      Alert.alert('Please, fill all fields!');
    } else {
      if (password !== confirmPassword) {
        Alert.alert('Password & confirm password \n should match!');
        setUser({...user, password: '', confirmPassword: ''});
      } else {
        if (contactValidator(contact)) {
          dispatch(signupRequest());
          await auth()
            .createUserWithEmailAndPassword(email, password)
            .then(response => {
              console.log(response);
              firestore()
                .collection('Users')
                .doc(response.user.uid)
                .set({
                  name: name,
                  email: email,
                  contact: contact,
                  password: password,
                })
                .then(res => {
                  console.log(res);
                  dispatch(
                    signupSuccess({
                      id: response.user.uid,
                      name: name,
                      email: email,
                      contact: contact,
                    }),
                  );
                  navigation.navigate('profileSelectionScreen');
                })
                .catch(error => {
                  dispatch(signupFailure());
                  console.log(error);
                });
            })
            .catch(error => {
              dispatch(signupFailure());
              console.log(error);
              if (error.code === 'auth/weak-password') {
                Alert.alert('Password should be atleast 6 characters!');
                setUser({...user, password: '', confirmPassword: ''});
              } else if (error.code === 'auth/email-already-in-use') {
                Alert.alert('Account already created, please login!');
                setTimeout(() => {
                  navigation.navigate('loginScreen');
                }, 2000);
              } else if (error.code === 'auth/invalid-email') {
                Alert.alert('Invalid email!');
              } else {
                Alert.alert('Error creating account!');
              }
            });
        } else {
          Alert.alert('Please, enter valid contact number!');
        }
      }
    }
  };
  return (
    <View style={styles.container}>
      <Typography
        content={'Create your identity!'}
        fontSize={FONT_SIZE_20}
        color={BLACK}
        fontFamily={'OpenSans'}
        fontWeight={'bold'}
        align={'center'}
      />
      <View style={styles.signupForm}>
        <InputField
          placeholderText={'Your name'}
          fontSize={FONT_SIZE_16}
          keyboardType={'default'}
          maxLength={20}
          value={user.name}
          onChangeText={text => handleOnChange(text, 'name')}
        />
        <InputField
          placeholderText={'Your email'}
          fontSize={FONT_SIZE_16}
          keyboardType={'email-address'}
          maxLength={30}
          value={user.email}
          onChangeText={text => handleOnChange(text, 'email')}
        />
        <InputField
          placeholderText={'Set your password'}
          fontSize={FONT_SIZE_16}
          keyboardType={'password'}
          maxLength={18}
          secureTextEntry={true}
          value={user.password}
          onChangeText={text => handleOnChange(text, 'password')}
        />
        <InputField
          placeholderText={'Confirm your password'}
          fontSize={FONT_SIZE_16}
          keyboardType={'password'}
          maxLength={18}
          secureTextEntry={true}
          value={user.confirmPassword}
          onChangeText={text => handleOnChange(text, 'confirmPassword')}
        />
        <InputField
          placeholderText={'Your contact'}
          fontSize={FONT_SIZE_16}
          keyboardType={'number-pad'}
          maxLength={10}
          value={user.contact}
          onChangeText={text => handleOnChange(text, 'contact')}
        />
      </View>
      <View style={styles.signupButton}>
        <CustomButton
          title={'Submit'}
          fontSize={FONT_SIZE_16}
          bgColor={BLACK}
          width={250}
          height={50}
          textColor={WHITE}
          onPress={handleSignUp}
        />
        <CustomButton
          title={'Signup with Google'}
          fontSize={FONT_SIZE_16}
          bgColor={SECONDARY}
          width={250}
          height={50}
          textColor={BLACK}
          leftIcon={require('../../assets/icons/google.png')}
        />
        <CustomButton
          title={'Signup with Github'}
          fontSize={FONT_SIZE_16}
          bgColor={GRAY_MEDIUM}
          width={250}
          height={50}
          textColor={BLACK}
          leftIcon={require('../../assets/icons/github.png')}
        />
        <CustomButton
          title={'Signup with Facebook'}
          fontSize={FONT_SIZE_16}
          bgColor={LIGHT_BLUE}
          width={250}
          height={50}
          textColor={BLACK}
          leftIcon={require('../../assets/icons/facebook.png')}
        />
      </View>
      <View style={styles.loaderContainer}>
        {userState.isLoading ? <Loader /> : null}
      </View>
    </View>
  );
};

export default Signup;
