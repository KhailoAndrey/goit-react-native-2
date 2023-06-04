import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Camera, CameraType } from 'expo-camera';
import React, { useEffect, useState } from 'react';
import * as MediaLibrary from 'expo-media-library';
import MapScreen from '../nestedScreens/MapScreen';
import * as Location from 'expo-location';

export default function CreatePostsScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [isCameraReady, setCameraReady] = useState(false);

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    //   if (!isCameraReady) {resumePreview()}
    const picture = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    console.log('location', location);
    setPhoto(picture.uri);
  };

  const sendPhoto = () => {
    navigation.navigate('DefaultScreen', { photo });
    //   setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.photoBox}>
        <Camera
          style={styles.camera}
          ref={setCamera}
          type={type}
          onCameraReady={() => setCameraReady(true)}
        >
          {photo && (
            <View style={styles.photoContainer}>
              <Image source={{ uri: photo }} />
            </View>
          )}
          <>
            <TouchableOpacity onPress={takePhoto} style={styles.photoBoxIcon}>
              <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </>
        </Camera>
      </View>
      <View>
        <Text style={styles.photoBoxText}>Загрузите фото</Text>
      </View>
      <TextInput placeholder="Название..." style={styles.postTitle}></TextInput>
      <View>
        <TouchableOpacity onPress={MapScreen}>
          <View>
            <Feather
              name="map-pin"
              size={24}
              color={'#BDBDBD'}
              style={styles.iconLocation}
            />
            <TextInput
              placeholder="Местность..."
              style={styles.postLocation}
            ></TextInput>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={sendPhoto} style={styles.createPostBtn}>
          <Text>Опубликовать</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  photoBox: {
    alignSelf: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#F6F6F6',
    borderWidth: 1,
    borderColor: '#E8E8E8',
    height: 240,
    width: '80%',
    marginTop: 32,
    borderRadius: 8,
    marginBottom: 8,
    marginHorizontal: 'auto',
  },
  photoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 240,
    width: 310,
    borderRadius: 10,
  },
  photoBoxIcon: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
    opacity: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  camera: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  flipContainer: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
    padding: 5,
    // color: "#FF0000",
  },
  flipText: {
    color: '#f00',
    fontSize: 10,
    lineHeight: 12,
  },
  photoBoxText: {
    alignSelf: 'center',
    width: '80%',
    color: '#BDBDBD',
    fontSize: 16,
    fontWeight: '400',
  },
  postTitle: {
    height: 50,
    // backgroundColor: 'grey',
    width: '80%',
    alignSelf: 'center',
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    marginTop: 32,
  },
  postLocation: {
    height: 50,
    // backgroundColor: 'grey',
    width: '80%',
    alignSelf: 'center',
    marginTop: 16,
    borderBottomColor: '#E8E8E8',
    borderBottomWidth: 1,
    paddingStart: 28,
  },
  createPostBtn: {
    marginTop: 32,
    alignSelf: 'center',
    width: '80%',
    backgroundColor: '#F6F6F6',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    // fontSize: 16,
    // fontWeight: 400,
  },
  iconLocation: {
    position: 'absolute',
    top: 30,
    left: 38,
  },
});
