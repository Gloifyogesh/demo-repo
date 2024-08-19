import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  btn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    gap: 10,
    margin: 5,
    borderRadius: 10,
  },
  btnText: {
    fontFamily: 'OpenSans',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default styles;
