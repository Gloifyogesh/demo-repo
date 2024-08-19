import {StyleSheet} from 'react-native';
import {WHITE} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: 20,
  },
  otpContainer: {
    marginTop: 100,
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
  },
  otpInput: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    marginTop: 20,
  },
  loaderContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
});

export default styles;
