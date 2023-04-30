// import { PostsScreen } from "./PostsScreen";


// export default function Home() { 

//     return (
//         <PostsScreen>
//         </PostsScreen>
//     )
// }

import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from '@expo/vector-icons';
import PostsScreen from "./PostsScreen";
import ProfileScreen from "./ProfileScreen";



const Tabs = createBottomTabNavigator();
{/* <Ionicons name="grid-outline" size={24} color="black" /> */ }
{/* <Feather name="user" size={24} color="black" /> */}
const Home = () => {
    return (<>
        {/* <PostsScreen>
        </PostsScreen> */}
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "Post") {
                        iconName = focused
                            ? "grid"
                            : "grid-outline";
                    } else if (route.name === "Profile") {
                        iconName = focused ? "user" : "user";
                    }
                    return <Feather name={iconName} size={size} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: "tomato",
                inactiveTintColor: "gray",
            }}
        >
            <Tabs.Screen name="Post" component={PostsScreen} options={{ headerShown: false }} />
            <Tabs.Screen name="Profile" component={ProfileScreen} />
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
});

export default Home;