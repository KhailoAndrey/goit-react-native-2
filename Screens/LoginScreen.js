// import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import PropTypes from 'prop-types';

export default function LoginScreen({ setIsLogged }) {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const passwordHandler = (email) => setPassword(email);
    const mailHandler = (password) => setEmail(password);

    const onLogin = () => {
        if ( password === '' || email === '') {
            return Alert.alert("Все поля должны быть заполнены")
        }
        Alert.alert("Credentials", `${email} + ${password}`);
    };

    const linkToRegitryScreen = () => {
        setIsLogged(true)
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Войти</Text>
                    </View>                    
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
                    <TouchableOpacity activeOpacity={0.2} style={styles.button}>
                    <Text style={styles.buttonText} onPress={onLogin}>Войти</Text>
                                        </TouchableOpacity>
                    <TouchableOpacity onPress={linkToRegitryScreen}>
                    <Text style={styles.linkText}>Нет аккаунта? Зарегистрироваться</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    titleBox: {
        marginBottom: 32,
        marginTop: 32,
    },
    title: {
        fontSize: 30,
        fontWeight: '500',
        textAlign: 'center'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '400',
        alignItems: 'center',
        lineHeight: 19,
        color: '#fff'
    },
    container: {
        padding: 0,
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 490,
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
        display: 'flex',
        flexDirection: 'column',
        width: 343,
        height: 52,
        marginTop: 40,
        padding: 16,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems: 'center',
    },
    linkText: {
        textAlign: 'center',
        marginTop: 16,
        color: '#1B4371',
        fontSize: 16,
        fontWeight: '400',
    },
});

LoginScreen.propTypes = {
    setIsLogged: PropTypes.func.isRequired
}