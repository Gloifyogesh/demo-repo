import {View, Text} from 'react-native';
import React from 'react';
// import styles from './styles';

const Typography = ({
  content,
  fontSize,
  color,
  fontFamily,
  fontWeight,
  align,
}) => {
  return (
    <Text
      style={{
        fontSize,
        color,
        fontFamily,
        fontWeight,
        alignSelf: align,
      }}>
      {content}
    </Text>
  );
};

export default Typography;
