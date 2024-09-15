import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFHiqHxMsqkjpwaMbbcgdtYbV-UF8pi5G8NQ&s' }}
        style={styles.eyeImage}
      />

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#386FFC" style={styles.icon} />
        <TextInput 
          placeholder="Please input user name"
          placeholderTextColor="gray"
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="#386FFC" style={styles.icon} />
        <TextInput 
          placeholder="Please input password"
          placeholderTextColor="gray"
          secureTextEntry={!passwordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <FontAwesome
            name={passwordVisible ? "eye" : "eye-slash"}
            size={24}
            color="gray"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Forgot Password</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.otherLoginText}>Other Login Methods</Text>
      <View style={styles.otherLoginContainer}>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#386FFC' }]}>
          <FontAwesome name="user-plus" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#FFA500' }]}>
          <FontAwesome name="wifi" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.socialButton, { backgroundColor: '#3a579c' }]}>
          <FontAwesome name="facebook" size={50} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  eyeImage: {
    width: 130,
    height: 130,
    marginBottom: 70,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderBottomWidth: 1,
    borderColor: 'gray',
    marginBottom: 35,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
    fontSize: 18,
  },
  eyeIcon: {
    paddingHorizontal: 10,
  },
  loginButton: {
    width: '100%',
    backgroundColor: '#007AFF', 
    padding: 16,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  linkText: {
    fontSize: 16,
    color: 'black',
  },
  otherLoginText: {
    marginBottom: 10,
    fontSize: 16,
    color: 'black',
  },
  otherLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  socialButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 5,
    height: 80,
    width: 80,
  },
});

export default LoginScreen;
