// Screen3.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useSetRecoilState } from 'recoil';
import { addJobSelector, editJobSelector } from './atoms';

const Screen3 = ({ navigation, route }) => {
  const { job, name } = route.params;
  const [title, setTitle] = useState(job ? job.title : '');
  const addJob = useSetRecoilState(addJobSelector);
  const editJob = useSetRecoilState(editJobSelector);

  const handleSave = () => {
    if (job) {
      editJob({ ...job, title });
    } else {
      addJob({ title });
    }
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{job ? 'Edit Job' : 'Add New Job'}</Text>
      <TextInput
        placeholder="Job Title"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
        placeholderTextColor="#888"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Icon name="save" size={20} color="#fff" style={styles.buttonIcon} />
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 30,
    color: '#333',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: '#5e35b1',
    borderRadius: 10,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
  },
  buttonIcon: {
    marginRight: 5,
  },
});

export default Screen3;
