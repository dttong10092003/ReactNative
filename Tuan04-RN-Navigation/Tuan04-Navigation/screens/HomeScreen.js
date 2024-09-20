import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/vs_blue.png')} style={styles.productImage} />
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
        <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ ⭐ ⭐ ⭐ ⭐</Text>
            <Text style={styles.reviews}>(Xem 828 đánh giá)</Text>
        </View>
        <View style={styles.priceContainer}>
            <Text style={styles.currentPrice}>1.790.000 đ</Text>
            <Text style={styles.oldPrice}>1.790.000 đ</Text>
        </View>
        <View style={styles.redTextContainer}>
          <Text style={styles.redText}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
          <FontAwesome name="question-circle-o" size={22} color="gray" />
        </View>
        <TouchableOpacity 
          style={styles.chooseColorButton}
          onPress={() => navigation.navigate('ColorSelection')}
        >
          <Text style={styles.chooseColorText}>4 MÀU - CHỌN MÀU</Text>          
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
            <Text style={styles.buyButtonText}>CHỌN MUA</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  productImage: {
    width: 190,
    height: 300,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 10,
    width: '80%',
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
    width: '80%',
  },
  rating: {
    fontSize: 16,
    color: '#FFD700',
  },
  reviews: {
    fontSize: 14,
    marginLeft: 10,
    color: '#555',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    justifyContent: 'space-between',
    width: '80%',
  },
  currentPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  oldPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: '#888',
    marginRight: 45,
  },
  redTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },
  redText: {
    color: 'red',
    fontSize: 12,
    marginRight: 10,
  },
  chooseColorButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 7,
    width: '80%',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  chooseColorText: {
    color: 'black',
  },
  buyButton: {
    padding: 12,
    backgroundColor: '#E53935',
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
  },
  buyButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
