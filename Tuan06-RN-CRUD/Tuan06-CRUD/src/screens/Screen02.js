import React, { useState, useEffect } from 'react';
import { View, TextInput, FlatList, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
// import jobsData from '../data/jobsData'; // Dữ liệu cứng
import { useFocusEffect } from '@react-navigation/native';
import { getJobs, deleteJob, updateJob, addJob } from '../api'; // Sử dụng API


const Screen02 = ({ navigation, route }) => {
  // const [jobs, setJobs] = useState(jobsData); // Có dữ liệu cứng
  const [jobs, setJobs] = useState([]); // Tạo mảng rỗng chờ API trả về
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadJobs = async () => {
      try {
        const fetchedJobs = await getJobs(); // Gọi API 
        setJobs(fetchedJobs);
      } catch (error) {
        console.error("Error fetching jobs: ", error);
      }
    };

    loadJobs();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      if (route.params?.newJob) {
        const updatedJobs = jobs.map(job =>
          job.id === route.params.newJob.id ? { ...job, title: route.params.newJob.title } : job
        );
        setJobs(updatedJobs);
      } else if (route.params?.addedJob) {
        setJobs(prevJobs => [...prevJobs, route.params.addedJob]);
      }
    }, [route.params])
  );

  const handleDeleteJob = async (id) => {
    try{
      await deleteJob(id);
      const filteredJobs = jobs.filter(job => job.id !== id);
      setJobs(filteredJobs);
    }catch(error){
      console.error("Error deleting job: ", error);
    }
  };

  const handleNavigateToScreen03 = (item) => {
    navigation.navigate('Screen03', {
      job: item,
      name: route.params.name,
    });
  };

  const renderJobItem = ({ item }) => (
    <View style={styles.jobItemContainer}>
      <Icon name="check-square" size={24} color="green" style={styles.checkIcon} />
      <Text style={styles.jobTitle}>{item.title}</Text>
      <View style={styles.actionIcons}>
        <TouchableOpacity onPress={() => handleNavigateToScreen03(item)}>
          <Icon name="pencil" size={24} color="red" style={styles.editIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDeleteJob(item.id)}>
          <Icon name="trash" size={24} color="black" style={styles.deleteIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-left" size={20} color="black" />
        </TouchableOpacity>

        <Image source={{ uri: 'https://randomuser.me/api/portraits/women/44.jpg' }} style={styles.avatar} />
        <View style={styles.headerText}>
          <Text style={styles.welcomeText}>Hi {route.params.name}!</Text>
          <Text style={styles.subText}>Have a great day ahead</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="black" style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          value={search}
          onChangeText={(text) => setSearch(text)}
          style={styles.searchInput}
        />
      </View>

      <FlatList
        data={filteredJobs}
        keyExtractor={item => item.id.toString()}
        renderItem={renderJobItem}
      />

      <TouchableOpacity 
        style={styles.addButton}
        onPress={() => navigation.navigate('Screen03', {
          name: route.params.name,
        })}
      >
        <Icon name="plus" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  backButton: {
    marginRight: 25,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
    fontSize: 22,
    fontWeight: 'bold',
  },
  subText: {
    color: 'gray',
    fontSize: 14,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    height: 40,
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#00BDD6',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  jobItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10,
    borderRadius: 20,
  },
  checkIcon: {
    marginRight: 10,
  },
  jobTitle: {
    flex: 1,
    fontSize: 16,
  },
  actionIcons: {
    flexDirection: 'row',
  },
  editIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
  deleteIcon: {
    marginRight: 10,
  },  
});

export default Screen02;
