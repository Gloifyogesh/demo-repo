import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../../components/CustomButton';
import {BLACK, PRIMARY, SECONDARY} from '../../styles/colors';
import {FONT_SIZE_18} from '../../styles/fontSize';
import styles from './styles';

const OnBoarding = ({navigation}) => {
  return (
    <View style={styles.container}>
      <CustomButton
        bgColor={PRIMARY}
        width={250}
        height={50}
        fontSize={FONT_SIZE_18}
        textColor={BLACK}
        title={'Login'}
        rightIcon={require('../../assets/icons/login.png')}
        onPress={() => navigation.navigate('loginScreen')}
      />
      <CustomButton
        bgColor={SECONDARY}
        width={250}
        height={50}
        fontSize={FONT_SIZE_18}
        textColor={BLACK}
        title={'SignUp'}
        rightIcon={require('../../assets/icons/signup.png')}
        onPress={() => navigation.navigate('signupScreen')}
      />
    </View>
  );
};

export default OnBoarding;
