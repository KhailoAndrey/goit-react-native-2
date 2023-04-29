import { useNavigation } from "@react-navigation/native";
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
    Text,
    TouchableOpacity,
    Image,
} from "react-native";
// import PropTypes from 'prop-types';

export default function RegistrationScreen() {
    const navigation = useNavigation();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const nameHandler = (name) => setName(name);
    const passwordHandler = (email) => setPassword(email);
    const mailHandler = (password) => setEmail(password);
    const [isShowKeyboard, setIsShowKeyboard] = useState(false);

    const onLogin = () => {
        if (name === '' || password === '' || email === '') {
            return Alert.alert("Все поля должны быть заполнены")
        }
        Alert.alert("Credentials", `${name} + ${email} + ${password}`);
   console.log('name: ', {name})
    };

    const linkToLoginScreen = () => {
        navigation.navigate("LoginScreen")
    }
    const handlePress = () => {
        // setIsShowKeyboard(false);
        Keyboard.dismiss();
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress} >
            <View style={styles.container} >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                >
                    <View style={styles.photo} >
                        <Image style={styles.addPhoto} source={require('./Images/add.jpg')} />
                    </View>
                    <View style={styles.titleBox}>
                        <Text style={styles.title}>Регистрация</Text>
                    </View>
                    <View>
                        <TextInput
                            value={name}
                            onChangeText={nameHandler}
                            placeholder="Логин"
                            style={styles.input}
                            onFocus={() => { setIsShowKeyboard(true) }}
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
                    </View>
                    <TouchableOpacity activeOpacity={0.2} style={styles.button}>
                        <Text style={styles.buttonText} onPress={onLogin}>Зарегистрироваться</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={linkToLoginScreen}>
                        <Text style={styles.linkText}>Уже есть аккаунт? Войти</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    photo: {
        width: 120,
        height: 120,
        backgroundColor: '#F6F6F6',
        borderRadius: 16,
        position: 'absolute',
        left: '30%',
        top: '-20%',
        zIndex: 100,
    },
    addPhoto: {
        position: 'absolute',
        width: 25,
        height: 25,
        right: -12.5,
        bottom: 14,

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
    titleBox: {
        marginBottom: 30,
        marginTop: 90,
    },
    container: {
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 550,
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

// RegistrationScreen.propTypes = {
//     setIsLogged: PropTypes.func.isRequired
// }