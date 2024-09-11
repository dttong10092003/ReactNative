import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Screen1_a = () => {
  return (
    <LinearGradient
      colors={['#C7F4F6', '#D1F4F6', '#E5F4F5', '#37D6F8', '#00CCF9']}
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}>
      <View
        style={{
          width: 120,
          height: 120,
          borderRadius: 60,
          borderWidth: 10,
          borderColor: 'black',
          marginBottom: 40,
        }}
      />

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: 'black',
        }}>
        GROW
      </Text>

      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          marginBottom: 10,
          color: 'black',
          paddingBottom: 45,
        }}>
        YOUR BUSINESS
      </Text>

      <Text
        style={{
          fontSize: 16,
          textAlign: 'center',
          marginBottom: 50,
          color: 'black',
        }}>
        We will help you to grow your business using online server
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD700',
            padding: 15,
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#FFD700',
            padding: 15,
            borderRadius: 5,
            marginHorizontal: 10,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'black',
            }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>

      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 30,
          color: 'black',
          paddingTop: 30,
        }}>
        HOW WE WORK?
      </Text>
    </LinearGradient>
  );
};

export default Screen1_a;
