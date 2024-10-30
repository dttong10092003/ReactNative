// Screen1.js
import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Screen1 = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={{ uri: 'https://i.postimg.cc/T3YrTGCv/f6ee0953600008083c32857b2d79ab5e.png' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Manage Your Tasks</Text>
      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="gray" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          placeholderTextColor="gray"
          value={name}
          onChangeText={setName}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen2', { name })}>
        <Text style={styles.buttonText}>Get Started</Text>
        <Icon name="arrow-right" size={20} color="#fff" style={styles.buttonIcon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  logo: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#6a1b9a',
    marginBottom: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    width: '80%',
    marginBottom: 25,
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 10,
  },
  input: {
    fontSize: 16,
    color: '#333',
    flex: 1,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#5e35b1',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 10,
  },
  buttonIcon: {
    marginLeft: 5,
  },
});

export default Screen1;
