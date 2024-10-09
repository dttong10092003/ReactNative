import React, { useState } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

const DonutDetailScreen = () => {
  const route = useRoute(); // Sử dụng useRoute để lấy dữ liệu bằng route mà không cần thông qua props
  const { donut } = route.params || {}; 
  const [quantity, setQuantity] = useState(1); 

  if (!donut) {
    return <Text>No Donut Data Available</Text>; 
  }

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image source={{ uri: donut.imageUrl }} style={styles.image} />

      <Text style={styles.name}>{donut.name}</Text>

      <View style={styles.descriptionandprice}>
        <Text style={styles.description}>{donut.description}</Text>

        <Text style={styles.price}>{`$${donut.price.toFixed(2)}`}</Text>
      </View>

      <View style={styles.deliveryandquantity}>
        <View style={styles.infoContainer}>
          <View style={styles.deliveryContainer} >
            <Icon name="clock-o" size={20} color="#555" style={styles.icon} />
            <Text style={styles.delivery}>Delivery in</Text>
          </View>
          <Text style={styles.deliveryTime}>30 min</Text>
        </View>

        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton} onPress={handleDecrease}>
            <Text style={styles.quantityButtonText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantityText}>{quantity}</Text>
          <TouchableOpacity style={styles.quantityButton} onPress={handleIncrease}>
            <Text style={styles.quantityButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.restaurantInfo}>
        <Text style={styles.infoLabel}>Restaurants info</Text>
        <Text style={styles.restaurantText}>
          Order a Large Pizza but the size is the equivalent of a medium/small from other places at the same price range.
        </Text>
      </View>

      <TouchableOpacity style={styles.addToCartButton}>
        <Text style={styles.addToCartButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginBottom: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  descriptionandprice:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  deliveryandquantity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  deliveryContainer: {
    flexDirection: 'row',   

  },
  icon: {
    marginRight: 5, 
  },
  infoLabel: {
    fontSize: 18,
    marginRight: 10,
    fontWeight: 'bold',
  },
  delivery: {
    fontSize: 15,
    marginRight: 10,
  },
  deliveryTime: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantityContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: '#F1B000',
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  restaurantInfo: {
    marginBottom: 20,
  },
  restaurantText: {
    fontSize: 14,
    color: '#777',
  },
  addToCartButton: {
    backgroundColor: '#F1B000',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  addToCartButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default DonutDetailScreen;
