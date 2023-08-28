import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import LoginScreen from './Screens/AuthScreen/LoginScreen';
import RegistrationScreen from './Screens/AuthScreen/RegistrationScreen';
import Home from './Screens/Home';
import MapScreen from './Screens/nestedScreens/MapScreen';
import CommentsScreen from './Screens/nestedScreens/CommentsScreen';

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import CreatePostsScreen from './Screens/MainScreen/CreatePostsScreen';
import ProfileScreen from './Screens/MainScreen/ProfileScreen';
import PostsScreen from './Screens/MainScreen/PostsScreen';
import { useSelector } from 'react-redux';

export const useRoute = () => {
    const isLoggedIn = useSelector((state) => state.auth.isAuth);

  if (!isLoggedIn) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
            // title: 'Войти',
            headerTitleAlign: 'center',
            headerTitleStyle: { fontSize: 30 },
          }}
        />

        <AuthStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{ headerShown: false, title: 'Регистрация' }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator tabBarOptions={{
        showLabel: false,
    }} 
    >
      <MainTab.Screen
        name="Posts"
        component={PostsScreen}
        options={{ headerShown: false, tabBarIcon: ({ focused, size, color}) => (<MaterialCommunityIcons
              name="postage-stamp"
              size={size}
              color={color}
            />) }}
      />
      <MainTab.Screen
        name="Add"
        component={CreatePostsScreen}
        options={{ headerShown: false, tabBarVisible: false }}
      />
      <MainTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerShown: false, tabBarVisible: false }}
      />
    </MainTab.Navigator>
  );
};