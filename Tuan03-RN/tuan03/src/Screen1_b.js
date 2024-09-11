import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

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
        <Image     // Lý do chạy bằng cái này không add Ảnh từ máy lên chỉ được sài link      
          source={{uri:'https://e7.pngegg.com/pngimages/467/409/png-clipart-computer-icons-computer-software-padlock-my-account-icon-brand-security-thumbnail.png',}} 
          style={{ width: 100, height: 100 }} 
          
        />
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          color: 'black',
          textAlign: 'center',
        }}>
        FORGET
      </Text>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 40,
          color: 'black',
          textAlign: 'center',
        }}>
        PASSWORD
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
