import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useFetch from '../hooks/useFetch';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ShopsScreen = () => {
  const navigation = useNavigation();
  const { data: shops, loading, error } = useFetch('https://63b3a5b7bcac4e2ea4e79c2b86d48a11.api.mockbin.io/');
  console.log(shops)
  const renderShop = ({ item }) => (
    <TouchableOpacity
      onPress={() => item.isOpen && navigation.navigate('DrinksScreen', { shop: item })}
      disabled={!item.isOpen}
      style={styles.shopItem}
    >
      <Image style={styles.shopImage} source={{ uri: item.imageUrl }} />
      <View style={styles.shopInfo}>
        <View style={styles.textContainer}>
          <View style={styles.statusRow}>
            <View style={styles.isOpen}>
              <Icon
                name={item.isOpen ? 'check-circle' : 'lock'}
                size={18}
                color={item.isOpen ? 'green' : 'red'}
                style={styles.statusIcon}
              />
              <Text style={item.isOpen ? styles.openStatus : styles.closedStatus}>
                {item.isOpen ? 'Accepting Orders' : 'Temporary Unavailable'}
              </Text>
            </View>
            <View style={styles.isOpen}>
              <Icon name="schedule" size={18} color="green" />
              <Text style={styles.deliveryTime}>{item.deliveryTime}</Text>
            </View>
            <Icon name="location-on" size={24} color="green" />
          </View>
          <Text style={styles.shopName}>{item.name}</Text>
          <Text>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error loading shops...</Text>;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Shops Near Me</Text>
        <Icon name="search" size={24} color="green" />       
      </View>
      
      <FlatList
        data={shops}
        renderItem={renderShop}
        keyExtractor={(item) => item.id}
        
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  shopItem: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 3,
    marginBottom: 15,
  },
  shopInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  shopImage: {
    width: '100%',
    height: 100,
    borderRadius: 5,
    marginRight: 10,
  },
  textContainer: {
    justifyContent: 'space-around',
  },
  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  openStatus: {
    color: 'green',
  },
  closedStatus: {
    color: 'red',
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  statusIcon: {
    marginRight: 5,
  },
  isOpen: {
    padding: 5,
    flexDirection: 'row',
    backgroundColor: '#eeeeee',
    marginRight: 5,
  },
  deliveryTime: {
    color: 'red',
  }
});

export default ShopsScreen;
