import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import Media from '../../components/Media/index';
import Typography from '../../components/Typography';
import {BLACK} from '../../styles/colors';
import {FONT_SIZE_20, FONT_SIZE_25, FONT_SIZE_30} from '../../styles/fontSize';
import styles from './styles';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('onboardingScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Media
        source={require('../../assets/images/firebase.png')}
        width={300}
        height={300}
        resizeMode={'contain'}
      />
      <Typography
        color={BLACK}
        fontFamily={'OpenSans'}
        content={'Firebase'}
        fontSize={FONT_SIZE_30}
        fontWeight={'bold'}
      />
    </View>
  );
};

export default Splash;
