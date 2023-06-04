import React from "react";
import { moduleName } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack'
import DefaultScreenPosts from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/DefaultScreenPosts";
import MapScreen from "../nestedScreens/DefaultScreenPosts";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
    <NestedScreen.Navigator>
    <NestedScreen.Screen name="DefaultScreen" component={DefaultScreenPosts} />
    <NestedScreen.Screen name="Comments" component={CommentsScreen}/>
    <NestedScreen.Screen name="Map" component={MapScreen}/>
        
</NestedScreen.Navigator>
}

export default PostsScreen;