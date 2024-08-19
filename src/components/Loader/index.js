import {View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import styles from './styles';
import {PRIMARY} from '../../styles/colors';

const Loader = () => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator style={styles.loader} size={'large'} color={PRIMARY} />
    </View>
  );
};

export default Loader;
