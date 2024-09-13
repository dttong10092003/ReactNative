import React from 'react';
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const LoginScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible); // Khi chạy thì sẽ thay đổi 1 trong 2 giá trị True / False
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#E8F5E9' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 50, color: 'black' }}>
        LOGIN
      </Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#8E8E8E"
        style={{
          width: '80%',
          height: 50,
          borderWidth: 1,
          borderColor: '#CFCFCF',
          borderRadius: 2,
          padding: 10,
          marginBottom: 30,
          backgroundColor: '#DFF5D7',
          color: 'black'
        }}
      />

      <View style={{
        flexDirection: 'row',
        width: '80%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        borderRadius: 2,
        backgroundColor: '#DFF5D7',
        alignItems: 'center',
        marginBottom: 60,
      }}>
        <TextInput
          placeholder="Password"
          placeholderTextColor="#8E8E8E"
          secureTextEntry={!passwordVisible}
          style={{
            flex: 1,
            padding: 10,
            color: 'black'
          }}
        />
        <TouchableOpacity onPress={togglePasswordVisibility} style={{ padding: 10 }}>
          <FontAwesome
            name={passwordVisible ? "eye" : "eye-slash"}
            size={24}
            color="black"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={{
        width: '80%',
        backgroundColor: '#D35400',
        padding: 15,
        borderRadius: 2,
        alignItems: 'center',
        marginBottom: 20,
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          LOGIN
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 12, textAlign: 'center', color: 'black', marginBottom: 10 }}>
        When you agree to terms and conditions
      </Text>

      <TouchableOpacity>
        <Text style={{ fontSize: 12, color: '#2980B9', marginBottom: 20 }}>
          For got your password?
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 14, color: 'black', marginBottom: 30 }}>
        Or login with
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <TouchableOpacity style={{
          flex: 1,
          backgroundColor: '#00AFF0',
          alignItems: 'center',
        }}>
          <Image       
          source={{uri:'https://upload.wikimedia.org/wikipedia/commons/1/16/Facebook-icon-1.png',}} 
          style={{ width: 70, height: 50, }} 
          
          />
        </TouchableOpacity> 

        <TouchableOpacity style={{ 
          flex: 1,
          backgroundColor: '#00AFF0',
          padding: 5,
          alignItems: 'center',
        }}>
          <Text style={{ fontSize: 28, fontWeight: 'bold', color: 'white' }}>Z</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{
          flex: 1,
          padding: 5,
          alignItems: 'center',
          borderColor: '#00AFF0',
          borderWidth: 1,
        }}>
          <Image       
          source={{uri:'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',}} 
          style={{ width: 50, height: 40, }} 
          
        />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
