import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { getJobs, deleteJob, updateJob, addJob } from '../api';

const Screen03 = ({ route, navigation }) => {
  const job = route.params?.job;
  const [jobTitle, setJobTitle] = useState(job ? job.title : '');

  const handleFinish = async () => {
    if (job) {
      const updatedJob = { id: job.id, title: jobTitle };
      await updateJob(updatedJob); 
      navigation.navigate('Screen02', {
        newJob: updatedJob,
      });
    } else {
      const newJob = {
        id: Math.floor(Math.random() * 1000), 
        title: jobTitle,
      };
      const addedJob = await addJob(newJob); 
      navigation.navigate('Screen02', { addedJob });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Hi {route.params?.name}!</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

      <Text style={styles.title}>{job ? "EDIT YOUR JOB" : "ADD YOUR JOB"}</Text>

      <View style={styles.inputContainer}>
        <Icon name="list-alt" size={24} color="gray" style={styles.inputIcon} />
        <TextInput
          placeholder="Input your job"
          value={jobTitle}
          onChangeText={setJobTitle}
          style={styles.textInput}
        />
      </View>

      <TouchableOpacity style={styles.finishButton} onPress={handleFinish}>
        <Text style={styles.finishButtonText}>FINISH →</Text>
      </TouchableOpacity>

      <Image source={{ uri: 'https://i.postimg.cc/T3YrTGCv/f6ee0953600008083c32857b2d79ab5e.png' }} 
      style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 50,
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  headerText: {
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
    fontSize: 14,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%',
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    height: 40,
    width: '100%',
  },
  finishButton: {
    backgroundColor: '#00BDD6',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  finishButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 50,
  },
});

export default Screen03;
