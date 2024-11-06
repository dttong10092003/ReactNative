import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addBike } from '../slices/bikeSlice';
import { Picker } from '@react-native-picker/picker';

const AddBikeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [newBike, setNewBike] = useState({
    name: '',
    price: '',
    type: 'Mountain', 
    image: 'xe1.png', 
    description: '',
    discount: '',
    originalPrice: '',
    heart: false,
  });

  const validateFields = () => {
    const { name, price, type, description, discount, originalPrice } = newBike;
    if (!name.trim() || !price.trim() || !type.trim() || !description.trim() || !discount.trim() || !originalPrice.trim()) {
      Alert.alert("Error", "All fields must be filled.");
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateFields()) {
      dispatch(addBike({
        ...newBike,
        price: parseFloat(newBike.price),
        discount: parseInt(newBike.discount),
        originalPrice: parseFloat(newBike.originalPrice),
      }));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Bike</Text>
      <TextInput
        placeholder="Bike Name"
        style={styles.input}
        value={newBike.name}
        onChangeText={(text) => setNewBike({ ...newBike, name: text })}
      />
      <TextInput
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
        value={newBike.price}
        onChangeText={(text) => setNewBike({ ...newBike, price: text })}
      />
 
      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={newBike.type}
        style={styles.picker}
        onValueChange={(value) => setNewBike({ ...newBike, type: value })}
      >
        <Picker.Item label="Mountain" value="Mountain" />
        <Picker.Item label="Roadbike" value="Roadbike" />
      </Picker>

      <Text style={styles.label}>Image</Text>
      <Picker
        selectedValue={newBike.image}
        style={styles.picker}
        onValueChange={(value) => setNewBike({ ...newBike, image: value })}
      >
        <Picker.Item label="xe1.png" value="xe1.png" />
        <Picker.Item label="xe2.png" value="xe2.png" />
        <Picker.Item label="xe3.png" value="xe3.png" />
        <Picker.Item label="xe4.png" value="xe4.png" />
      </Picker>

      <TextInput
        placeholder="Description"
        style={[styles.input, styles.descriptionInput]}
        value={newBike.description}
        onChangeText={(text) => setNewBike({ ...newBike, description: text })}
      />
      <TextInput
        placeholder="Discount (%)"
        style={styles.input}
        keyboardType="numeric"
        value={newBike.discount}
        onChangeText={(text) => setNewBike({ ...newBike, discount: text })}
      />
      <TextInput
        placeholder="Original Price"
        style={styles.input}
        keyboardType="numeric"
        value={newBike.originalPrice}
        onChangeText={(text) => setNewBike({ ...newBike, originalPrice: text })}
      />
      <Button title="Save Bike" onPress={handleSave} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  descriptionInput: {
    height: 60,
    textAlignVertical: 'top',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
});

export default AddBikeScreen;
