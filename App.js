import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();
export default function App() {
  const [isLogged, setIsLogged] = useState(true);

  return (
<NavigationContainer>
      
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={require('./Screens/Images/PhotoBG.jpg')}
        style={{ width: '100%', height: '100%' }}
        >
          <MainStack.Navigator initialRouteName="Login">

        
          <MainStack.Screen name="Registration" component={RegistrationScreen} />
          <MainStack.Screen name="Login" component={LoginScreen} />
        

        </MainStack.Navigator>
      </ImageBackground>
    </View>
        </NavigationContainer>


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