import {StyleSheet} from 'react-native';
import {WHITE} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 50,
  },
  fieldContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    marginVertical: 100,
  },
});

export default styles;
