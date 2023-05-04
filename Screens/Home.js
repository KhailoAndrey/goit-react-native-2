import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import LoginScreen from "./LoginScreen";



const Tabs = createBottomTabNavigator();
{/* <Ionicons name="grid-outline" size={24} color="black" /> */ }
{/* <Feather name="user" size={24} color="black" /> */ }


const Home = () => {
    const navigation = useNavigation();
    return (<>
        {/* <PostsScreen>
        </PostsScreen> */}
        <Tabs.Navigator
            initialRouteName="PostsSceen"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Posts") {
                        iconName = "grid";
                    } else if (route.name === "Profile") {
                        iconName = "user";
                    } else if (route.name === "Add") {
                        iconName = "plus-square";
                    }
                    return <Feather name={iconName} size={size} color={color} />
                }
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen name="Posts" component={PostsScreen}
                options={{
                    headerStyle: {borderBottomColor: 'rgba(0,0,0,0.3)'},
                    headerTitle: "Публикации",
                    headerTitleAlign: 'center',
                    // headerShown: false,
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ width: 24, marginRight: 16 }}
                            onPress={() => navigation.navigate("LoginScreen")}
                        >
                            <MaterialIcons name="logout" size={24} color="#BDBDBD" />
                        </TouchableOpacity>
                    ),
                }} />

            <Tabs.Screen name="Add" component={CreatePostsScreen}
                // options={{ headerShown: false }}
                options={{
                    headerTitle: 'Создать публикацию',
                    // tabBarStyle: { display: "none" }
                }}
            />
            <Tabs.Screen name="Profile" component={ProfileScreen}
                options={{ headerShown: false }} />
        </Tabs.Navigator>
    </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    addBtn: {
        width: 70,
        height: 40,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Home;