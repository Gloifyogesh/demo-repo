import {StyleSheet} from 'react-native';
import {PRIMARY} from '../../styles/colors';

const styles = StyleSheet.create({
  loaderContainer: {
    width: 100,
    height: 100,
    position: 'absolute',
    zIndex: 10,
    opacity: 0.5,
    borderRadius: 25,
    backgroundColor: 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default styles;
