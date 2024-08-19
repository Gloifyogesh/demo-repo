import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Media from '../Media';
import styles from './styles';

const ProfileUpload = ({
  profileImg,
  width,
  height,
  btnWidth,
  btnHeight,
  handlePress,
}) => {
  return (
    <View style={[styles.profile, {width: width + 5, height: height + 5}]}>
      {profileImg ? (
        <Media
          width={width}
          height={height}
          source={{uri: profileImg}}
          resizeMode={'cover'}
          borderRadius={100}
        />
      ) : (
        <Media
          width={width}
          height={height}
          source={require('../../assets/icons/avatar.png')}
          resizeMode={'contain'}
        />
      )}

      <TouchableOpacity style={styles.camera} onPress={handlePress}>
        <Media
          width={btnWidth}
          height={btnHeight}
          source={require('../../assets/icons/camera.png')}
          resizeMode={'contain'}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileUpload;
