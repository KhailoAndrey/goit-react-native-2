import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Camera } from "expo-camera";
import { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
import MapScreen from "../MapScreen";

export default function CreatePostsScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

    const [camera, setCamera] = useState(null);
    const [photo, setPhoto] = useState(null);

     useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
     }, []);
    
    if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  } 
    
    const takePhoto = async () => {
        const photo = await camera.takePictureAsync();
        setPhoto(photo.uri);
    };

    return (
        <View style={styles.container}>
            <View style={styles.photoBox}>
                <Camera style={styles.camera} ref={setCamera} type={type}>
                    {photo ? (<>
                        <View >
                            <Image source={{ uri: photo }}
                                style={styles.photoContainer}
                            />
                        </View>
                            </>
                    ) : (
                            <>                    
                                <TouchableOpacity onPress={takePhoto} style={{ ...styles.photoBoxIcon, opasity: photo ? 0 : 1 }}>                                    
                        {/* <View style={styles.photoBoxIcon}>                             */}
                                    <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
                                    
                        {/* </View> */}
                                </TouchableOpacity>                                
                            </>
                        )
                    }
                </Camera>
            </View>
            <View>
            <Text style={styles.photoBoxText}>Загрузите фото</Text>
            </View>
            <TextInput
                placeholder="Название..."
                style={styles.postTitle}
            ></TextInput>
            <View>
                {/* <MapScreen /> */}
                <TouchableOpacity onPress={MapScreen}>
                <TextInput
                    placeholder="Местность..."
                    style={styles.postLocation}
                >

                </TextInput>
                    </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.createPostBtn}>
                    <Text>Опубликовать
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    photoBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
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
        height: 240,
        width: 310,
        borderRadius: 10,
        
    },
    photoBoxIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        
    },
    camera: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    flipContainer: {
    position: "absolute",
    bottom: 8,
    right: 8,
    borderRadius: 8,
    borderColor: "#fff",
    borderWidth: 1,
        padding: 5,
        // color: "#FF0000",
    
    },
    flipText: {
    color: "#f00",
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

    }
})