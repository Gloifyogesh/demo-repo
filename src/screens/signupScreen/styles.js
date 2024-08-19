import {StyleSheet} from 'react-native';
import {WHITE} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  signupForm: {
    display: 'flex',
    gap: 10,
    marginTop: 20,
  },
  signupButton: {
    display: 'flex',
    alignSelf: 'center',
    marginTop: 20,
  },
  loaderContainer: {
    width: '70%',
  },
});

export default styles;
