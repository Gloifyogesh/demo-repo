import {StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

const styles = StyleSheet.create({
  profile: {
    borderRadius: 100,
    borderColor: PRIMARY,
    borderWidth: 5,
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
