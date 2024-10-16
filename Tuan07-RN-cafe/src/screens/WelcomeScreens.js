import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Cafe world</Text>

      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
      <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />

      <TouchableOpacity style={styles.buttonContainer} onPress={() => navigation.navigate('ShopsScreen')}>
        <Text style={styles.textGetStarted}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  image: {
    width: 200,
    height: 70,
    marginVertical: 25,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#00bdd6',
    padding: 15,
    alignItems: 'center',
    borderRadius: 3,
    marginTop: 20,
    width: '80%',
  },
  textGetStarted: {
    color: "white",
  },
});

export default WelcomeScreen;
