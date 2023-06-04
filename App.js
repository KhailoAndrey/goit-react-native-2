import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/AuthScreen/RegistrationScreen';
import LoginScreen from './Screens/AuthScreen/LoginScreen';
// import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import MapScreen from './Screens/nestedScreens/MapScreen';
import CommentsScreen from './Screens/nestedScreens/CommentsScreen';

const MainStack = createStackNavigator();
export default function App() {
  // const [isLogged, setIsLogged] = useState(true);

  return (
    <NavigationContainer>
      {/* <View style={styles.container}>
        <StatusBar style="auto" />
        <ImageBackground source={require('./Screens/Images/PhotoBG.jpg')}
          style={{ width: '100%', height: '100%' }}
        >
        </ImageBackground>
      </View> */}
      <MainStack.Navigator initialRouteName="LoginScreen">
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            // title: 'Войти',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30 },
          }}
        />

        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false, title: 'Регистрация' }}
        />

        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Map"
          component={MapScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Comments"
          component={CommentsScreen}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
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
