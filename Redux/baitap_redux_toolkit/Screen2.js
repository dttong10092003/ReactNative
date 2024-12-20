// Screen2.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import { fetchJobs, deleteJob } from './jobSlice';

const Screen2 = ({ navigation, route }) => {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJob(id));
  };

  const handleAddJob = () => {
    navigation.navigate('Screen3', { job: null, name });
  };

  const handleEditJob = (job) => {
    navigation.navigate('Screen3', { job, name });
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.jobText}>{item.title}</Text>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.editButton} onPress={() => handleEditJob(item)}>
          <Icon name="pencil" size={18} color="#2196F3" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteJob(item.id)}>
          <Icon name="trash" size={18} color="#FF5252" />
        </TouchableOpacity>
      </View>
    </View>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>Hi {name}, have a great day ahead!</Text>
      <TextInput
        style={styles.input}
        placeholder="Search job"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={jobs.filter((job) => job.title.toLowerCase().includes(searchQuery.toLowerCase()))}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderJobItem}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleAddJob}>
        <Icon name="plus" size={24} color="#fff" />
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
  greetingText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a4a4a',
    marginBottom: 15,
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  jobItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  jobText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButton: {
    marginRight: 15,
  },
  deleteButton: {},
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#5e35b1',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default Screen2;
