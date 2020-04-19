import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Settings = ({ navigation }) => (
    <View style={styles.container}>
        <Text>This is my settings screen...</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f3',
        alignItems:'center',
        justifyContent: 'center'
    }
})

export default Settings