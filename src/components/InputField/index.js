import {View, Text, TextInput} from 'react-native';
import React, {forwardRef} from 'react';
import styles from './styles';
import {BLACK} from '../../styles/colors';

const InputField = forwardRef((props, ref) => {
  return (
    <View style={[styles.inputContainer, {width: props.width}]}>
      <TextInput
        ref={ref}
        keyboardType={props.keyboardType}
        placeholder={props.placeholderText}
        onChangeText={props.onChangeText}
        value={props.value}
        maxLength={props.maxLength}
        style={[styles.inputField, {fontSize: props.fontSize}]}
        secureTextEntry={props.secureTextEntry}
        cursorColor={BLACK}
        autoComplete={props.autoComplete}
        autoCorrect={props.autoCorrect}
      />
    </View>
  );
});

export default InputField;
