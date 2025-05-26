import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { image } from '../constants/netflixName';

import { getAuth, signInWithEmailAndPassword } from '@react-native-firebase/auth';
// import { auth } from '../../firebaseConfig';

const NetflixLoginPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = getAuth();
  const navigation = useNavigation();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateInputs = () => {
    let valid = true;

    if (!email.trim()) {
      setEmailError('Email is required');
      valid = false;
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
      valid = false;
    } else {
      setPasswordError('');
    }

    return valid;
  };

  const handleLogin = async () => {
    setGeneralError('');
    if (!validateInputs()) return;

    setLoading(true);

    try {
     const userCredential= await signInWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;

      setLoading(false);
      console.log('Login successful!');
      navigation.navigate('User');  
    } catch (err) {
      setLoading(false);
      const message = err?.message || 'Login failed. Please try again.';
      setGeneralError(message);
      console.log('Login error:', message);
    }
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
          keyboardType="email-address"
          autoCapitalize="none"
          autoComplete="email"
          textContentType="emailAddress"
        />
        {!!emailError && <Text style={styles.errorText}>{emailError}</Text>}

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#aaa"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
          autoCapitalize="none"
          autoComplete="password"
          textContentType="password"
        />
        {!!passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
      </View>

      {!!generalError && <Text style={styles.generalErrorText}>{generalError}</Text>}

      <TouchableOpacity
        style={[styles.loginButton, loading && styles.disabledButton]}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>{loading ? 'Logging In...' : 'Log In'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>

<Text style={{color:'white', fontSize:16}}>Dont have an account? Sign Up</Text>
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
    width: '100%',
    alignItems: 'center',
  },
  logo: {
    width: '75%',
    height: 100,
    marginBottom: 50,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20,
    gap:15,
    // backgroundColor:"red"
  },
  input: {
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },
  loginButton: {
    backgroundColor: '#e50914',
    padding: 15,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom:20
  },
  disabledButton: {
    opacity: 0.6,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    color: '#ff4d4d',
    marginBottom: 10,
    fontSize: 13,
  },
  generalErrorText: {
    color: '#ff4d4d',
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default NetflixLoginPage;
