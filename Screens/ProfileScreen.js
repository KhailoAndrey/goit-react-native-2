import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function ProfileScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            {/* <StatusBar style="auto" /> */}
            <ImageBackground source={require('./Images/PhotoBG.jpg')}
                style={{ width: '100%', height: '100%' }}
            >
                <View style={styles.profileConteiner}>
                    <TouchableOpacity
                        style={{ marginRight: 16, marginTop: 22, alignItems: 'flex-end' }}
                        onPress={() => navigation.navigate("LoginScreen")}
                    >
                        <MaterialIcons name="logout" size={24} color="#BDBDBD" />
                    </TouchableOpacity>
                    <ScrollView>

                    </ScrollView>
                </View>
            </ImageBackground>
        </View>
    )
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


    }
})