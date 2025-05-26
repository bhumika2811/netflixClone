import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import auth from '@react-native-firebase/auth';

const POLL_INTERVAL_MS = 1000; 
const TIMEOUT_MS = 60000; // 1 minute timeout

const EmailVerification = ({ route, navigation }) => {
  const { user } = route?.params || {};
  const [status, setStatus] = useState('checking'); // 'checking' | 'verified' | 'failed'
  const [timeLeft, setTimeLeft] = useState(TIMEOUT_MS / 1000); // seconds

  useEffect(() => {
    let intervalId;
    let timeoutId;
    let countdownId;

    const checkVerification = async () => {
      const currentUser = auth()?.currentUser;
      if (currentUser) {
        await currentUser?.reload();
        if (currentUser?.emailVerified) {
          setStatus('verified');
          clearInterval(intervalId);
          clearTimeout(timeoutId);
          clearInterval(countdownId);
          setTimeout(() => navigation.replace('User', { user }), 1500);
        }
      }
    };

    intervalId = setInterval(checkVerification, POLL_INTERVAL_MS);

    timeoutId = setTimeout(() => {
      setStatus('failed');
      clearInterval(intervalId);
      clearInterval(countdownId);
      setTimeout(() => navigation.replace('User', { user }), 2000);
    }, TIMEOUT_MS);

    // Timer countdown every second
    countdownId = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(countdownId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    checkVerification();

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
      clearInterval(countdownId);
    };
  }, [navigation, user]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Verify Your Email</Text>

      <Text style={styles.message}>
        We’ve sent a verification link to{'\n'}
        <Text style={styles.email}>{user?.email}</Text>
      </Text>

      <Text style={styles.note}>
        Please check your inbox and click the link to verify your account before continuing.
      </Text>

      <View style={styles.statusContainer}>
        {status === 'checking' && (
          <>
            <ActivityIndicator size="large" color="#E50914" />
            <Text style={styles.statusText}>Waiting for email verification...</Text>
            <Text style={styles.timerText}>Time left: {timeLeft} sec</Text>
          </>
        )}
        {status === 'verified' && (
          <Text style={[styles.statusText, { color: '#4BB543' }]}>
            Email verified! Redirecting...
          </Text>
        )}
        {status === 'failed' && (
          <Text style={[styles.statusText, { color: '#FF3333' }]}>
            Verification failed. Please try again.
          </Text>
        )}
      </View>
    </View>
  );
};

export default EmailVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  message: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  email: {
    color: '#E50914',
    fontWeight: 'bold',
  },
  note: {
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 40,
  },
  statusContainer: {
    alignItems: 'center',
  },
  statusText: {
    color: '#fff',
    fontSize: 18,
    marginTop: 15,
    textAlign: 'center',
  },
  timerText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 8,
  },
});
