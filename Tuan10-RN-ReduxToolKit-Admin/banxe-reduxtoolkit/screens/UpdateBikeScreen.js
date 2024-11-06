import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { updateBike } from '../slices/bikeSlice';
import { Picker } from '@react-native-picker/picker';

const UpdateBikeScreen = ({ route, navigation }) => {
  const { bike } = route.params;
  const dispatch = useDispatch();

  const [name, setName] = useState(bike.name);
  const [price, setPrice] = useState(bike.price.toString());
  const [type, setType] = useState(bike.type);
  const [image, setImage] = useState(bike.image);
  const [description, setDescription] = useState(bike.description);
  const [discount, setDiscount] = useState(bike.discount.toString());
  const [originalPrice, setOriginalPrice] = useState(bike.originalPrice.toString());


  const validateFields = () => {
    if (!name.trim() || !price.trim() || !type.trim() || !description.trim() || !discount.trim() || !originalPrice.trim()) {
      Alert.alert("Error", "All fields must be filled.");
      return false;
    }
    return true;
  };

  // Hàm xử lý lưu cập nhật
  const handleSave = () => {
    if (validateFields()) {
      const updatedBike = {
        name,
        price: parseFloat(price),
        type,
        image,
        description,
        discount: parseFloat(discount),
        originalPrice: parseFloat(originalPrice),
      };

      dispatch(updateBike({ id: bike.id, updatedData: updatedBike }))
        .unwrap() 
        .then(() => {
          Alert.alert('Success', 'Cập nhật thành công!');
          navigation.goBack(); 
        })
        .catch(() => {
          Alert.alert('Error', 'Có lỗi xảy ra khi lưu thay đổi.');
        });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update Bike</Text>

      <TextInput
        placeholder="Bike Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Price"
        style={styles.input}
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />

      <Text style={styles.label}>Type</Text>
      <Picker
        selectedValue={type}
        style={styles.picker}
        onValueChange={setType}
      >
        <Picker.Item label="Mountain" value="Mountain" />
        <Picker.Item label="Roadbike" value="Roadbike" />
      </Picker>

      <Text style={styles.label}>Image</Text>
      <Picker
        selectedValue={image}
        style={styles.picker}
        onValueChange={setImage}
      >
        <Picker.Item label="xe1.png" value="xe1.png" />
        <Picker.Item label="xe2.png" value="xe2.png" />
        <Picker.Item label="xe3.png" value="xe3.png" />
        <Picker.Item label="xe4.png" value="xe4.png" />
      </Picker>

      <TextInput
        placeholder="Description"
        style={[styles.input, styles.descriptionInput]}
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        placeholder="Discount (%)"
        style={styles.input}
        keyboardType="numeric"
        value={discount}
        onChangeText={setDiscount}
      />
      <TextInput
        placeholder="Original Price"
        style={styles.input}
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />

      <TouchableOpacity style={styles.updateButton} onPress={handleSave}>
        <Text style={styles.updateButtonText}>Update Bike</Text>
      </TouchableOpacity>
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
  updateButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  updateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateBikeScreen;
