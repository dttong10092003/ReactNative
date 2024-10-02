import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image} from 'react-native';

const Screen01 = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://i.postimg.cc/T3YrTGCv/f6ee0953600008083c32857b2d79ab5e.png' }}
        style={styles.image}
      />

      <Text style={styles.manageText}>
        MANAGE YOUR {'\n'} TASK
      </Text>

      <TextInput
        placeholder="✉ Enter your name"
        placeholderTextColor="gray"
        value={name}
        onChangeText={setName}
        style={styles.textName}
      />
      
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen02', { name })}
        style={styles.buttonGetStarted}
      >
        <Text style={styles.buttonText}>GET STARTED →</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center', 
    flex: 1,
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 30,
  },
  manageText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8353E2', 
    textAlign: 'center', 
    marginBottom: 30,
    lineHeight: 35, 
    marginTop: 50,
  },
  textName: {
    width: '80%',
    height: 40,
    padding: 10,
    borderRadius: 10,
    marginBottom: 50,
    marginTop: 30,
    borderWidth: 1,
    borderColor: 'gray',
  },
  buttonGetStarted: {
    backgroundColor: '#00BDD6',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 30,
  },
  buttonText: {
    color: 'white',
    fontSize: 14,
  }
})

export default Screen01;
