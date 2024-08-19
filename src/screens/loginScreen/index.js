import {View, Alert, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomButton from '../../components/CustomButton';
import {BLACK, PRIMARY, WHITE} from '../../styles/colors';
import {
  FONT_SIZE_12,
  FONT_SIZE_16,
  FONT_SIZE_18,
  FONT_SIZE_20,
} from '../../styles/fontSize';
import Typography from '../../components/Typography';
import InputField from '../../components/InputField';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import Loader from '../../components/Loader';
import {useSelector, useDispatch} from 'react-redux';
import {
  signinRequest,
  signinSuccess,
  signinFailure,
} from '../../redux/actions/user/userActions';
import {emailValidator} from '../../utils/Validator';
import {setDataToLocal} from '../../utils/Helper';
import crashlytics from '@react-native-firebase/crashlytics';

const Login = () => {
  // console.log('Navigator -> AuthNavigator -> LoginScreen');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    crashlytics().log('App Mounted');
  }, []);

  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  // const handleLogin = async () => {
  //   if (email !== '' && password !== '') {
  //     if (emailValidator(email)) {
  //       dispatch(signinRequest());
  //       await auth()
  //         .signInWithEmailAndPassword(email, password)
  //         .then(response => {
  //           console.log(response);
  //           setDataToLocal(response.user.uid);
  //           console.log('User account signed in!');
  //           setEmail('');
  //           setPassword('');
  //           dispatch(signinSuccess());
  //         })
  //         .catch(error => {
  //           if (error.code === 'auth/invalid-credential') {
  //             dispatch(signinFailure('Invalid Credentials!'));
  //             Alert.alert(userState?.error);
  //             setEmail('');
  //             setPassword('');
  //             console.error(error);
  //           } else {
  //             console.log(error);
  //           }
  //         });
  //     } else {
  //       Alert.alert('Invalid Email!');
  //       setEmail('');
  //     }
  //   } else {
  //     Alert.alert('Please fill in all fields');
  //   }
  // };

  async function onSignIn(user) {
    crashlytics().log('User signed in.');
    await Promise.all([
      crashlytics().setUserId(user.uid),
      crashlytics().setAttribute('credits', String(user.credits)),
      crashlytics().setAttributes({
        role: 'admin',
        followers: '13',
        email: user.email,
        username: user.username,
      }),
    ]);
  }
  return (
    <View style={styles.container}>
      {userState.isLoading ? <Loader /> : null}
      <Typography
        content={'Hey!\nLogin Here'}
        fontFamily={'OpenSans'}
        color={BLACK}
        fontSize={32}
        fontWeight={'bold'}
        align={'flex-start'}
      />
      <View style={styles.fieldContainer}>
        <InputField
          placeholderText={'Enter your mail id'}
          keyboardType={'email'}
          fontSize={FONT_SIZE_18}
          width={250}
          value={email}
          onChangeText={text => {
            setEmail(text);
          }}
        />
        <InputField
          placeholderText={'Enter your password'}
          keyboardType={'password'}
          fontSize={FONT_SIZE_18}
          maxLength={20}
          width={250}
          secureTextEntry={true}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
      </View>
      <CustomButton
        bgColor={PRIMARY}
        height={50}
        width={250}
        title={'Login'}
        textColor={WHITE}
        fontSize={FONT_SIZE_18}
        onPress={() =>
          onSignIn({
            uid: 'Aa0Bb1Cc2Dd3Ee4Ff5Gg6Hh7Ii8Jj9',
            username: 'Joaquin Phoenix',
            email: 'phoenix@example.com',
            credits: 42,
          })
        }
      />
      <Button title="Test Crash" onPress={() => crashlytics().crash()} />
    </View>
  );
};

export default Login;
