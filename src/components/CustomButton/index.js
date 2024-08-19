import {Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const CustomButton = ({
  bgColor,
  title,
  leftIcon,
  rightIcon,
  width,
  height,
  textColor,
  fontSize,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: bgColor, width, height}]}
      onPress={onPress}>
      {leftIcon ? <Image source={leftIcon} style={styles.icon} /> : null}
      <Text style={[styles.btnText, {fontSize, color: textColor}]}>
        {title}
      </Text>
      {rightIcon ? <Image source={rightIcon} style={styles.icon} /> : null}
    </TouchableOpacity>
  );
};

export default CustomButton;
