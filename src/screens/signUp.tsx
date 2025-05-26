import React, { useEffect, useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet, Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { image } from '../constants/netflixName';

import { getAuth, createUserWithEmailAndPassword, updateProfile } from '@react-native-firebase/auth';
import { getApp } from '@react-native-firebase/app';
import { FirebaseError } from 'firebase/app'; 
const SignUp = () => {
  const [name, setName] = useState('');
  // console.log({name});
  
  const [nameError, setNameError] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [generalError, setGeneralError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const auth = getAuth(getApp());

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const validateInputs = () => {
    let valid = true;

    if (!name.trim()) {
      setNameError('Name is required');
      valid = false;
    } else {
      setNameError('');
    }

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
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  
      // Update display name
      await updateProfile(userCredential.user, { displayName: name });
  
      // Reload to reflect updated displayName
      await userCredential.user.reload();
  
      console.log('User created:', userCredential.user);
  
      // Send verification email
      if (!userCredential.user.emailVerified) {
        await userCredential.user.sendEmailVerification();
        console.log('Verification email sent.');
      }
  
      setLoading(false);
  
      // Navigate or show success message
      navigation.navigate('EmailVerification', { user: userCredential.user });
    } catch (error) {
      let message = 'An unknown error occurred';
  
      if (error) {
        // console.log({error});
        
        switch (error.code) {
          case 'auth/email-already-in-use':
            message = 'This email is already registered.';
            break;
          case 'auth/invalid-email':
            message = 'Invalid email address.';
            break;
          case 'auth/weak-password':
            message = 'Password should be at least 6 characters.';
            break;
          default:
            message = error.message;
        }
      }
  
      setGeneralError(message);
      setLoading(false);
      // console.log(error.code, "code");
      
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
          placeholder="Name"
          placeholderTextColor="#aaa"
          onChangeText={setName}
          value={name}
          autoCapitalize="words"
          textContentType="name"
        />
        {!!nameError && <Text style={styles.errorText}>{nameError}</Text>}

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
        // onPress={()=>navigation.navigate('EmailVerification', {userEmail: "abc@ggmail.com"})}
        onPress={handleLogin}
        disabled={loading}
      >
        <Text style={styles.loginButtonText}>{loading ? 'Loading...' : 'Sign Up'}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>

      <Text style={{color:'white', fontSize:16}}>Already have an account? Login</Text>
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
    marginBottom: 25,
    gap:10
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
    marginBottom: 30
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
    paddingHorizontal:30
  },
});

export default SignUp;
