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
} from "react-native";

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
        width: 375,
        height: 550,
        marginTop: 260,
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        ...Platform.select({
            ios: {
                backgroundColor: '#000000'
            },
            android: {
                backgroundColor: '#878b86'
            },
        }),
    },
    input: {
        width: 343,
        height: 50,
        padding: 10,
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10,
    },
});