import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from '@expo/vector-icons';

const Tabs = createBottomTabNavigator();

// function Settings() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//     </View>
//   );
// }

// function Profile() {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Profile!</Text>
//     </View>
//   );
// }

export default function PostsScreen() {
    <StatusBar style="auto" />

    return (
        <View style={styles.container}>
            <View style={styles.titleBox}>
                <Text style={styles.header}>
                    Публикации
                </Text>
            </View>
            <View style={styles.user}>
                <View>
                    <Image source={require('./Images/JS.jpg')} style={styles.userImage}></Image>
                </View>
                <View style={styles.userInfo}>  
                    <Text style={styles.userInfoText}>User name</Text>    
                    <Text style={styles.userInfoMail}>User e-mail</Text>    
                </View>
            </View>
            <View style={ styles.footer}>
{/* <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Profile") {
            iconName = focused
              ? "ios-information-circle"
              : "ios-information-circle-outline";
          } else if (route.name === "Settings") {
            iconName = focused ? "ios-list-box" : "ios-list";
          }
          return <Feather name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen} />
      <Tabs.Screen name="CommentsScreen" component={CommentsScreen} />
    </Tabs.Navigator> */}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%",
        backgroundColor: '#fff'
    },
    titleBox: {
        margin: 0,
        alignItems: "center",
        backgroundColor: '#fff',
        height: 88,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0,0,0,0.3)',
    },
    header: {
        height: 22,
        fontWeight: '500',
        fontSize: 17,
        color: '#212121',
        marginTop: 55,
        marginBottom: 11,
    },
    user: {
        flexDirection: 'row',
        alignItems: "center",
        marginTop: 32,
        marginLeft: 16,
        width: 170,
        height: 60,
        
    },
    userImage: {
        resizeMode: "contain",
        width: 60,
        height: 60,
        borderWidth: 1,
        borderRadius: 16
    },
    userInfo: {
        marginLeft: 8,
        
    },
    userInfoText: {
        fontWeight: '700',        
        fontSize: 13
    },
    userInfoMail: {
        fontWeight: '400',        
        fontSize: 11
    },
    footer: {
        borderTopWidth: 1,
        borderTopColor: 'rgba(0,0,0,0.3)',
        width: '100%',
        height: 83,                
        position: 'absolute',
        bottom: 0,
    }
})