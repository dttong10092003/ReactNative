import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ActivityIndicator, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useFetch from '../hooks/useFetch';

const DonutListScreen = ({ navigation }) => {
  const { data: donuts, loading, error } = useFetch('https://67020003b52042b542d8f513.mockapi.io/portrait/Donut');
  const [filter, setFilter] = useState(null); 
  const [searchText, setSearchText] = useState(''); 

  const handleAdd = () => {};

  const filteredDonuts = donuts
    ? donuts.filter((donut) =>
        (!filter || donut.name === filter) && donut.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : [];

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading donuts: {error.message}</Text>;

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('DonutDetail', { donut: item })}>
      <View style={styles.item}>
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.price}>{`$${item.price.toFixed(2)}`}</Text>
        </View>
        <TouchableOpacity style={styles.addButton} onPress={() => {handleAdd}}>
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.welcome}>Welcome, Jala!</Text>
      <Text style={styles.title}>Choice you Best food</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search donut"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />

      <View style={styles.filterContainer}>
        <TouchableOpacity 
          style={[styles.filterButton, filter === null && styles.selectedFilterButton]} 
          onPress={() => setFilter(null)}
        >
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'Tasty Donut' && styles.selectedFilterButton]} 
          onPress={() => setFilter('Tasty Donut')}
        >
          <Text style={styles.filterText}>Tasty Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'Pink Donut' && styles.selectedFilterButton]} 
          onPress={() => setFilter('Pink Donut')}
        >
          <Text style={styles.filterText}>Pink Donut</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.filterButton, filter === 'Floating Donut' && styles.selectedFilterButton]} 
          onPress={() => setFilter('Floating Donut')}
        >
          <Text style={styles.filterText}>Floating</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredDonuts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchInput: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 8,
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ccc',
    backgroundColor: '#f8f8f8',
  },
  selectedFilterButton: {
    backgroundColor: '#F1B000', 
    borderColor: '#F1B000',
  },
  filterText: {
    color: '#000',
    fontSize: 13,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#F4DDDD',
    marginVertical: 8,
    borderRadius: 8,
    borderColor: '#ddd',
    position: 'relative',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
    borderRadius: 5,
  },
  info: {
    flex: 1,
    justifyContent: 'space-around',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    color: 'gray',
  },
  price: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  addButton: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{ translateY: 10 }],
    backgroundColor: '#F1B000',
    borderRadius: 50,
    padding: 10,
  },
  addButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DonutListScreen;
