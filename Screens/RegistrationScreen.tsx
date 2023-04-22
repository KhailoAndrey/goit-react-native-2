import React, { useState } from "react";
import {
    StyleSheet,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Alert,
    Button,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
} from "react-native";
import LoginScreen from "./LoginScreen";
// import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function App() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const nameHandler = (name) => setName(name);
    const passwordHandler = (email) => setPassword(email);
    const mailHandler = (password) => setEmail(password);

    const onLogin = () => {
        if (name === '' || password === '' || email === '') {
            return Alert.alert("Все поля должны быть заполнены")
        }
        Alert.alert("Credentials", `${name} + ${email} + ${password}`);
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS == "ios" ? "padding" : "height"}
                >

                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Регистрация</Text>
                    </View>
                    <TextInput
                        value={name}
                        onChangeText={nameHandler}
                        placeholder="Логин"
                        style={styles.input}
                    />
                    <TextInput
                        value={email}
                        onChangeText={mailHandler}
                        placeholder="Адрес электронной почты"
                        style={styles.input}
                    />
                    <TextInput
                        value={password}
                        onChangeText={passwordHandler}
                        placeholder="Пароль"
                        secureTextEntry={true}
                        style={styles.input}
                    />
                    <Button title={"Зарегистрироваться"} onPress={onLogin} />
                    <TouchableOpacity onPress={<LoginScreen/>}>
                    <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        textAlign: 'center'
    },
    titleBox: {
        marginBottom: 30,
    },
    container: {
        width: '100%',
        height: 550,
        marginTop: 260,
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                backgroundColor: '#000'
            },
            android: {
                backgroundColor: '#fff'
            },
        }),
    },
    input: {
        width: 343,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "#e8e8e8",
        backgroundColor: '#f6f6f6',
        marginBottom: 10,
        borderRadius: 8,
        shadowOpacity: 0.25,
        shadowColor: '#000',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 2 },
        elevation: 4,

    },
    button: {
        backgroundColor: '#FF6C00',
        borderRadius: 100,
    },
    linkText: {
        textAlign: 'center',
        marginTop: 16
    },
});