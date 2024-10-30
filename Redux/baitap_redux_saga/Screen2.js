// Screen1.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobsRequest, deleteJobRequest } from './actions';

const Screen2 = ({ navigation, route }) => {
  const { name } = route.params;
  const [searchQuery, setSearchQuery] = useState('');
  const dispatch = useDispatch();

  const { jobs, loading, error } = useSelector((state) => state.job);

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const handleDeleteJob = (id) => {
    dispatch(deleteJobRequest(id));
  };

  const handleAddJob = () => {
    navigation.navigate('Screen3', { job: null, name });
  };

  const handleEditJob = (job) => {
    navigation.navigate('Screen3', { job, name });
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text>{item.title}</Text>
      <TouchableOpacity style={styles.editButton} onPress={() => handleEditJob(item)}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteJob(item.id)}>
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <View style={styles.container}>
      <Text>Hi {name}, Have a great day ahead!</Text>
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
        <Text style={styles.addButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  input: { padding: 10, borderWidth: 1, marginBottom: 20 },
  jobItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  editButton: { backgroundColor: '#2196F3', padding: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: '#FF5252', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', textAlign: 'center' },
  addButton: { position: 'absolute', bottom: 20, right: 20, backgroundColor: '#0f0', padding: 10, borderRadius: 50 },
  addButtonText: { fontSize: 24, color: '#fff' },
});

export default Screen2;
