import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
    View,    
  Text,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* <StatusBar style="auto" /> */}
      <ImageBackground
        source={require('../Images/PhotoBG.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <View style={styles.profileConteiner}>
          <View style={styles.photo}>
            <Image
              style={styles.avatar}
              source={require('../Images/JS.jpg')}
            ></Image>
            <Image
              style={{ ...styles.addPhoto, transform: [{ rotate: '45deg' }] }}
              source={require('../Images/add.jpg')}
            />
          </View>
          <TouchableOpacity
            style={{ marginRight: 16, marginTop: 22, alignItems: 'flex-end' }}
            onPress={() => navigation.navigate('LoginScreen')}
          >
            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
                  </TouchableOpacity>
                  <View style={styles.userName}>
                      <Text style={styles.userText}>User name</Text>
                  </View>
          <ScrollView></ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  profileConteiner: {
    backgroundColor: '#fff',
    width: '100%',
    height: 665,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  photo: {
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    borderRadius: 16,
    position: 'absolute',
    alignSelf: 'center',
    // left: '30%',
    top: -50,
    zIndex: 100,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 16,
  },
  addPhoto: {
    position: 'absolute',
    // width: 25,
    // height: 25,
    right: -12,
    bottom: 14,
    borderRadius: 25,
    },
    userName: {
        height: 35,
        width: '80%',
        alignSelf: 'center',
        marginHorizontal: 20,
        // backgroundColor: 'grey',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    userText: {
        fontSize: 30,
        fontWeight: '500',
    }
});
