import React from 'react';
import { Text ,View, TouchableOpacity  } from 'react-native';

const FirstScreen = () => {
  return (
    <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00BFFF',
        padding: 20,
        }}>
      
      <View style={{
        width: 120,
        height: 120,
        borderRadius: 60,
        borderWidth: 10,
        borderColor: 'black',
        marginBottom: 70,
      }} />

      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
      }}>
      GROW
      </Text>

      <Text style={{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black',
        paddingBottom: 60,
      }}>
      YOUR BUSINESS
      </Text>

      <Text style={{
         fontSize: 16,
        textAlign: 'center',
        marginBottom: 40,
        color: 'black',
      }}>
      We will help you to grow your business using online server
      </Text>

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#FFD700',
          padding: 15,
          borderRadius: 5,
          marginHorizontal: 10,
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{

          backgroundColor: '#FFD700',
          padding: 15,
          borderRadius: 5,
          marginHorizontal: 10,
        }}>
          <Text style={{
            fontSize: 16,
            fontWeight: 'bold',
            color: 'black',
          }}>SIGN UP</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default FirstScreen;