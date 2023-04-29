import { StatusBar } from 'expo-status-bar'
import { View, Text, StyleSheet } from 'react-native'

export function PostsScreen() {
    <StatusBar style="auto" />

    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Публикации
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: "100%"
    },
    header: {
        height: 90,
        alignItems: "center",
        paddingBottom: 90,
        fontWeight: '500',
        fontSize: 17,
        color: '#212121'
    }
})