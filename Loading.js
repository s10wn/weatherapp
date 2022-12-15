import React from 'react'
import { StyleSheet, Text, View, StatusBar } from 'react-native';



export const Loading = () => {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Loading Weather...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
        // justifyContent: 'center',
        // ali gnItems: 'center'
    },
    text: {
        fontSize: 25,
        color: "#2c2c2c"
    }
})
