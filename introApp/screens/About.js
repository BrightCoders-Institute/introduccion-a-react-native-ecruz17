import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default function About({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Bienvenido a: <Text style={{ fontWeight: 'bold' }}>Acerca de</Text>
            </Text>
            <Text style={styles.instructions}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam veniam et mollitia, nostrum voluptate unde at distinctio eaque quo! Expedita sequi voluptatem sunt id possimus dolorem voluptas, repellendus eaque repellat.
            </Text>
            <Button title='Ir a: Página principal' onPress={() => navigation.push('Home')}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
