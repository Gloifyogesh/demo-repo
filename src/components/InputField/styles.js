import {StyleSheet} from 'react-native';
import {BLACK} from '../../styles/colors';

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: 'white',
    height: 60,
    padding: 5,
    borderColor: BLACK,
    borderWidth: 1,
    borderRadius: 5,
  },
  inputField: {
    fontFamily: 'OpenSans',
    color: BLACK,
    backgroundColor: 'transparent',
  },
});

export default styles;
