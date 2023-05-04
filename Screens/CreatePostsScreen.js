import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function CreatePostsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.photoBox}>
                <View style={styles.photoBoxIcon}>
                    <MaterialIcons name="camera-alt" size={24} color="#BDBDBD" />
                </View>
            </View>
            <View>
            <Text style={styles.photoBoxText}>Загрузите фото</Text>
            </View>
            <TextInput
                placeholder="Название..."
                style={styles.postTitle}
            ></TextInput>
            <View>
                <TextInput
                    placeholder="Местность..."
                    style={styles.postLocation}
                >                    
                </TextInput>
            </View>
            <View>
                <TouchableOpacity style={styles.createPostBtn}>
                    <Text>Опубликовать
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#fff'
    },
    photoBox: {
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F6F6F6',
        borderWidth: 1,
        borderColor: '#E8E8E8',
        height: 240,
        width: '80%',
        marginTop: 32,
        borderRadius: 8,
        marginBottom: 8,
        marginHorizontal: 'auto',
    },
    photoBoxIcon: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoBoxText: {
        alignSelf: 'center',
        width: '80%',
        color: '#BDBDBD',
        fontSize: 16,
        // 
    },
    postTitle: {
        height: 50,
        // backgroundColor: 'grey',
        width: '80%',
        alignSelf: 'center',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        marginTop: 32,
    },
    postLocation: {
        height: 50,
        // backgroundColor: 'grey',
        width: '80%',
        alignSelf: 'center',
        marginTop: 16,
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
    },
    createPostBtn: {
        marginTop: 32,
        alignSelf: 'center',
        width: '80%',
        backgroundColor: '#F6F6F6',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        // fontSize: 16,
        // fontWeight: 400,

    }
})