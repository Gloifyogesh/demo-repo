import {View, Text, PermissionsAndroid, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import Typography from '../../components/Typography';
import ProfileUpload from '../../components/ProfileUpload';
import styles from './styles';
import {FONT_SIZE_18, FONT_SIZE_20} from '../../styles/fontSize';
import {BLACK, GRAY_LIGHT, PRIMARY, SECONDARY} from '../../styles/colors';
import {launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import {useDispatch, useSelector} from 'react-redux';
import {
  profileuploadFailure,
  profileuploadRequest,
  profileuploadSuccess,
} from '../../redux/actions/user/userActions';
import Loader from '../../components/Loader';
import CustomButton from '../../components/CustomButton';

const ProfileSelection = ({navigation}) => {
  const [profileImage, setProfileImage] = useState();
  const dispatch = useDispatch();
  const userState = useSelector(state => state.user);

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const handleUploadImage = async () => {
    try {
      const result = await launchImageLibrary(options);
      if (result.assets.length) {
        const imageUri = result.assets[0].uri;

        const imageType = result.assets[0].type.split('/', 2)[1];

        const storageRef = storage().ref(`profile-image/avatar.${imageType}`);

        const task = storageRef.putFile(imageUri);
        task.on('state_changed', taskSnapshot => {
          dispatch(profileuploadRequest());
          console.log(
            `Uploaded ${taskSnapshot.bytesTransferred} of ${taskSnapshot.totalBytes}`,
          );
        });
        task
          .then(() => {
            dispatch(profileuploadSuccess());
            console.log('Image uploaded successfully!');
            setProfileImage(imageUri);
            setTimeout(() => {
              navigation.navigate('contactVerification');
            }, 2000);
          })
          .catch(error => {
            dispatch(profileuploadFailure());
            console.log('Error uploading image:', error);
          });
      } else {
        Alert.alert('Error', 'No image selected');
      }
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'No image selected');
    }
  };

  return (
    <View style={styles.container}>
      {userState.isLoading ? <Loader /> : null}
      <Typography
        content={'Please, upload your profile photo'}
        fontSize={FONT_SIZE_20}
        color={BLACK}
        align={'center'}
        fontFamily={'OpenSans'}
        fontWeight={'bold'}
      />
      <ProfileUpload
        width={200}
        height={200}
        btnWidth={50}
        btnHeight={50}
        handlePress={handleUploadImage}
        profileImg={profileImage}
      />

      <CustomButton
        bgColor={SECONDARY}
        width={200}
        height={50}
        fontSize={FONT_SIZE_18}
        title={"I'll do it later"}
        textColor={BLACK}
        rightIcon={require('../../assets/icons/right-arrow.png')}
        onPress={() => navigation.navigate('contactVerification')}
      />
    </View>
  );
};

export default ProfileSelection;
