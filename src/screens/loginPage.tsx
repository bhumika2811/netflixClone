import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { image } from '../constants/netflixName'
import { useNavigation } from '@react-navigation/native';
const NetflixLoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
    const handleLogin = () => {
        navigation.navigate('User');
    };

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={{ uri: image.image }} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#aaa"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType='email-address'
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor="#aaa"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    value={password}
                    keyboardType='default'
                />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        width: "100%",
        alignItems: 'center',
    },
    logo: {
        width: "75%",
        height: 100,
        marginBottom: 50,
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#333',
        color: '#fff',
        borderRadius: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 15,
    },
    loginButton: {
        backgroundColor: '#e50914',
        padding: 15,
        borderRadius: 5,
        width: '80%',
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default NetflixLoginPage;
