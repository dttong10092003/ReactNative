import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ForgetPasswordScreen = () => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#00CCF9']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>

      <View 
        style={{
          width: 200,
          height: 100,
          marginBottom: 40,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Icon name="lock" size={100} color="black"/>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
          marginBottom: 40,
        }}>
        FORGET {'\n'} PASSWORD
      </Text>

      <Text
        style={{
          fontSize: 14,
          textAlign: 'center',
          marginBottom: 30,
          color: 'black',
          fontWeight: 'bold',
        }}>
        Provide your account's email for which you want to reset your password
      </Text>

      <TextInput
        placeholder="✉ Email"
        placeholderTextColor="gray"
        style={{
          width: '80%',
          height: 50,
          backgroundColor: '#EAEAEA',
          padding: 10,
          borderRadius: 2,
          marginBottom: 20,
          borderWidth: 1,
          borderColor: 'gray',
        }}
      />

      <TouchableOpacity
        style={{
          width: '80%',
          backgroundColor: '#E3C000',
          padding: 10,
          borderRadius: 2,
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            color: 'black',
          }}>
          NEXT
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default ForgetPasswordScreen;
