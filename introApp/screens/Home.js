import React, { useState } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';

export default function Home({ navigation }) {
    const [estado, setEstado] = useState(false)
    const [texto, setTexto] = useState('Bright Coders')

    const translate = () => {
        if (estado) {
            setTexto('Bright Coders')
        } else {
            setTexto('Codificadores Iluminados')
        }
        setEstado(!estado);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>
                Bienvenido a: <Text style={{ fontWeight: 'bold' }}>{texto}</Text>
            </Text>
            <Text style={styles.instructions}>
                Esta es una app de prueba
            </Text>
            <Button title='Traducir' onPress={() => translate()}></Button>
            <Button title='Ir a: Acerca De' onPress={() => navigation.navigate('About')}></Button>
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
