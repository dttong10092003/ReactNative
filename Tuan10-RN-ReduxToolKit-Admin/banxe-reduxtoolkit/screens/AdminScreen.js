import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBike } from '../slices/bikeSlice';

const AdminScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { bikes } = useSelector((state) => state.bike);

  const handleAddBike = () => {
    navigation.navigate('AddBike'); 
  };

  const handleUpdateBike = (bike) => {
    navigation.navigate('UpdateBike', { bike }); 
  };

  const handleDeleteBike = (bikeId) => {
    dispatch(deleteBike(bikeId));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Admin Panel - Manage Bikes</Text>
      
      <TouchableOpacity style={styles.addButton} onPress={handleAddBike}>
        <Text style={styles.addButtonText}>Add New Bike</Text>
      </TouchableOpacity>

      <FlatList
        data={bikes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bikeCard}>
            <Text style={styles.bikeName}>{item.name}</Text>
            <Text style={styles.bikeDetails}>${item.price} - {item.type}</Text>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => handleUpdateBike(item)} style={styles.updateButton}>
                <Text style={styles.updateText}>Update</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteBike(item.id)} style={styles.deleteButton}>
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  addButton: {
    padding: 15,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  bikeCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 10,
    borderRadius: 8,
    elevation: 3,
  },
  bikeName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  bikeDetails: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updateButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  deleteButton: {
    backgroundColor: '#f44336',
    padding: 10,
    borderRadius: 5,
  },
  updateText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default AdminScreen;
