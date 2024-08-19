import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Media = ({source, width, height, resizeMode, borderRadius}) => {
  return (
    <Image
      source={source}
      style={[styles.image, {width, height}]}
      resizeMode={resizeMode}
      borderRadius={borderRadius}
    />
  );
};

export default Media;
