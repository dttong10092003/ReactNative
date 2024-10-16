import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const OrdersScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [drinks, setDrinks] = useState(route.params.drinks.filter((drink) => drink.quantity > 0));
  const [total, setTotal] = useState(
    drinks.reduce((sum, drink) => sum + drink.quantity * drink.price, 0)
  );

  const increaseQuantity = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) => {
        if (drink.id === id) {
          const newQuantity = drink.quantity + 1;
          setTotal(total + drink.price);
          return { ...drink, quantity: newQuantity };
        }
        return drink;
      })
    );
  };

  const decreaseQuantity = (id) => {
    setDrinks((prevDrinks) =>
      prevDrinks.map((drink) => {
        if (drink.id === id && drink.quantity > 0) {
          const newQuantity = drink.quantity - 1;
          setTotal(total - drink.price);
          return { ...drink, quantity: newQuantity };
        }
        return drink;
      })
    );
  };

  const handlePayNow = () => {
    const itemsToPurchase = drinks.filter((drink) => drink.quantity > 0);
    if (itemsToPurchase.length > 0) {
      alert('Payment Successful!');
      // Mua xong thì set lại mảng rỗng
      setDrinks([]);
      setTotal(0);
    } else {
      alert('Không có sản phẩm hợp lệ để thanh toán.');
    }
  };

  const renderCartItem = ({ item }) => (
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

  return (
    <View style={styles.container}>
      {/* Header với nút quay lại và tiêu đề */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Your orders</Text>
        <Icon name="search" size={24} color="green" />
      </View>

      {/* Hiển thị đơn hàng với các đơn khác nhau */}
      <View style={styles.orderContainer}>
        <View style={[styles.orderCard, { backgroundColor: '#00c2cb' }]}>
          <View>
            <Text style={styles.orderType}>CAFE DELIVERY</Text>
            <Text style={styles.orderNumber}>Order #18</Text>
          </View>
          <Text style={styles.orderPrice}>$5</Text>
        </View>
        <View style={[styles.orderCard, { backgroundColor: '#9b51e0' }]}>
          <View>
            <Text style={styles.orderType}>CAFE</Text>
            <Text style={styles.orderNumber}>Order #18</Text>
          </View>
          {/*<Text style={styles.orderPrice}>$25</Text>*/}
          <Text style={styles.orderPrice}>${total}</Text>
        </View>
      </View>

      {/* Hiển thị danh sách đồ uống trong đơn hàng */}
      {drinks.length === 0 ? ( // Kiểm tra nếu không có thức uống nào được chọn
        <Text style={styles.emptyMessage}>Hãy đặt 1 đơn hàng mới</Text>
      ) : (
        <>
          <FlatList
            data={drinks}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
          />
          <TouchableOpacity style={styles.payButton} onPress={handlePayNow}>
            <Text style={styles.payButtonText}>PAY NOW</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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
  orderContainer: {
    marginBottom: 5,
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  orderType: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orderNumber: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  },
  orderPrice: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
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
  payButton: {
    backgroundColor: '#efb034',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  payButtonText: {
    color: 'white',
    fontSize: 18,
  },
  emptyMessage: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default OrdersScreen;
