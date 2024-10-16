import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const DrinksScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { shop } = route.params; 
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    if (shop.drinks && shop.drinks.length > 0) {
      // Tạo thêm cái quantity do data không có quantity khi mua mới có
      const initialDrinks = shop.drinks.map(drink => ({ ...drink, quantity: 0 }));
      setDrinks(initialDrinks);
    }
  }, [shop.drinks]);

  const increaseQuantity = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) => (drink.id === id ? { ...drink, quantity: drink.quantity + 1 } : drink))
    );
  };

  const decreaseQuantity = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) => (drink.id === id && drink.quantity > 0 ? { ...drink, quantity: drink.quantity - 1 } : drink))
    );
  };

  const renderDrink = ({ item }) => (
    <View style={styles.drinkItem}>
      <Image style={styles.drinkImage} source={{ uri: item.imageUrl }} />
      <View style={styles.drinkInfo}>
        <Text style={styles.drinkName}>{item.name}</Text>
        <Text style={styles.drinkPrice}>${item.price}</Text>
      </View>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={() => decreaseQuantity(item.id)}>
          <Icon name="remove-circle-outline" size={26} color="green" />
        </TouchableOpacity>
        <Text style={styles.quantityText}>{item.quantity}</Text>
        <TouchableOpacity onPress={() => increaseQuantity(item.id)}>
          <Icon name="add-circle-outline" size={26} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );

  const selectedDrinks = drinks.filter(drink => drink.quantity > 0);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Drinks</Text>
        <Icon name="search" size={24} color="green" />
      </View>

      <FlatList
        data={drinks}
        renderItem={renderDrink}
        keyExtractor={(item) => item.id}
      />

      {selectedDrinks.length === 0 ? (
        <Text style={styles.emptyMessage}>Chưa chọn thức uống nào</Text>
      ) : (
        <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('OrdersScreen', { drinks: selectedDrinks })}>
          <Text style={styles.cartButtonText}>GO TO CART</Text>
        </TouchableOpacity>
      )}
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
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  drinkItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    backgroundColor: 'white',
    padding: 2,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#bbbbbb',
  },
  drinkImage: {
    width: 60,
    height: 60,
    borderRadius: 5,
  },
  drinkInfo: {
    flex: 1,
    marginLeft: 10,
    height: '100%',
    justifyContent: 'space-between',
  },
  drinkName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  drinkPrice: {
    color: 'gray',
    fontSize: 14,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  cartButton: {
    backgroundColor: '#eeb034',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  cartButtonText: {
    color: 'white',
    fontSize: 18,
  },
  emptyMessage: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default DrinksScreen;
