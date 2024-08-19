import AsyncStorage from '@react-native-async-storage/async-storage';

export const setDataToLocal = async () => {
  try {
    const data = await AsyncStorage.getItem('data');
    if (data !== null) {
      return JSON.parse(data);
    }
  } catch (error) {
    console.log(error);
  }
};

export const getDataFromLocal = async uid => {
  try {
    await AsyncStorage.setItem('userId', uid);
  } catch (error) {
    console.log(error);
  }
};
