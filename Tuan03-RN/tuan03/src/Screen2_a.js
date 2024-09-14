import React from 'react';
import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BF9A00',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 60,
    color: 'black',
  },
  icon: {
    marginRight: 10,
  },
   inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: '#CFCFCF',
    backgroundColor: '#E5C34D',
    marginBottom: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    color: 'black',
  },
  eyeIcon: {
    paddingHorizontal: 5,
  },
   loginButton: {
    width: '100%',
    backgroundColor: 'black',
    padding: 15,
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 20,
    alignSelf: 'center',
  },
  loginText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  createAccountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    textAlign: 'center',
  },
})

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  
  const togglePasswordVisibility = () =>{
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>LOGIN</Text> 

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="black" style={styles.icon}/>
        <TextInput 
          placeholder="Name"
          placeholderTextColor="#000000"
          style={styles.input}
        />  
      </View>

      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={24} color="black" style={styles.icon} />
        <TextInput 
          placeholder="Password"
          placeholderTextColor="#000000"
          secureTextEntry={!passwordVisible}
          style={styles.input}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <FontAwesome
            name={passwordVisible ? "eye" : "eye-slash"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      
      <TouchableOpacity>
        <Text style={styles.createAccountText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoginScreen;