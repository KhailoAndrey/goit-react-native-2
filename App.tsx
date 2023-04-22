import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
// import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function App() {
  return (

    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./Screens/Images/PhotoBG.jpg')}
        style={{ width: '100%', height: '100%' }}
      >
        <RegistrationScreen />
        {/* <LoginScreen /> */}
      </ImageBackground>
    </View>


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});