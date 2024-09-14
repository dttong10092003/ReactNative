import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const RegisterScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [gender, setGender] = useState(null); 

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#E8F5E9' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20, color: 'black' }}>
        REGISTER
      </Text>

      <TextInput
        placeholder="Name"
        placeholderTextColor="#8E8E8E"
        style={{
          width: '96%',
          height: 50,
          borderWidth: 1,
          borderColor: '#CFCFCF',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#DFF5D7',
          color: 'black'
        }}
      />

      <TextInput
        placeholder="Phone"
        placeholderTextColor="#8E8E8E"
        keyboardType="phone-pad"
        style={{
          width: '96%',
          height: 50,
          borderWidth: 1,
          borderColor: '#CFCFCF',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#DFF5D7',
          color: 'black'
        }}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#8E8E8E"
        keyboardType="email-address"
        style={{
          width: '96%',
          height: 50,
          borderWidth: 1,
          borderColor: '#CFCFCF',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#DFF5D7',
          color: 'black'
        }}
      />

      <View style={{
        flexDirection: 'row',
        width: '96%',
        height: 50,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        backgroundColor: '#DFF5D7',
        alignItems: 'center',
        marginBottom: 20,
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

      <TextInput
        placeholder="Birthday"
        placeholderTextColor="#8E8E8E"
        style={{
          width: '96%',
          height: 50,
          borderWidth: 1,
          borderColor: '#CFCFCF',
          padding: 10,
          marginBottom: 20,
          backgroundColor: '#DFF5D7',
          color: 'black'
        }}
      />

      <View style={{
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 20,
      }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="male"
            status={gender === 'male' ? 'checked' : 'unchecked'}
            onPress={() => setGender('male')}
            color="black"
          />
          <Text style={{ fontSize: 16, color: 'black' }}>Male</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <RadioButton
            value="female"
            status={gender === 'female' ? 'checked' : 'unchecked'}
            onPress={() => setGender('female')}
            color="black"
          />
          <Text style={{ fontSize: 16, color: 'black' }}>Female</Text>
        </View>
      </View>

      <TouchableOpacity style={{
        width: '96%',
        backgroundColor: '#D35400',
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
      }}>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>
          REGISTER
        </Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 12, textAlign: 'center', color: 'black' }}>
        When you agree to terms and conditions
      </Text>
    </View>
  );
};

export default RegisterScreen;
