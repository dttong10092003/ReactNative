import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const productList = [
  {
    id: '1',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    reviewCount: 14,
    image: require('../images/giacchuyen.png'),
  },
  {
    id: '2',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 79900,
    discount: 39,
    reviewCount: 15,
    image: require('../images/daynguon.png'),
  },
  {
    id: '3',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 89900,
    discount: 39,
    reviewCount: 11,
    image: require('../images/dauchuyendoipsps.png'),
  },
  {
    id: '4',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 69900,
    discount: 39,
    reviewCount: 33,
    image: require('../images/dauchuyendoi.png'),
  },
  {
    id: '5',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 79800,
    discount: 39,
    reviewCount: 45,
    image: require('../images/carbusbtops.png'),
  },
  {
    id: '6',
    name: 'Cáp chuyển từ Cổng USB sang PS2...',
    price: 99900,
    discount: 39,
    reviewCount: 15,
    image: require('../images/daucam.png'),
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.productCard}>
    <Image source={item.image} style={styles.productImage} />
    <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
    <View style={styles.ratingContainer}>
      <View style={styles.ratingStar}>
        <FontAwesome name="star" size={16} color="#FBE41B" />
        <FontAwesome name="star" size={16} color="#FBE41B" />
        <FontAwesome name="star" size={16} color="#FBE41B" />
        <FontAwesome name="star" size={16} color="#FBE41B" />
        <FontAwesome name="star" size={16} color="#C4C4C4" />
      </View>
      <Text style={styles.ratingText}>({item.reviewCount})</Text>
    </View>
    <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>{item.price.toLocaleString('vi-VN')} đ</Text>
        <Text style={styles.productDiscount}>-{item.discount}%</Text>
    </View>
    
  </View>
);

const ProductListScreen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <TouchableOpacity>
            <Image source={require('../images/ant-design_arrow-left-outlined.png')} />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
            <TouchableOpacity>
                <FontAwesome name="search" size={24} color="black" />
            </TouchableOpacity>
            <TextInput
            placeholder="Dây cáp usb"
            style={styles.searchInput}
        />
        </View>

        <TouchableOpacity>
          <Image source={require('../images/bi_cart-check.png')} />
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}> </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
            <Image source={require('../images/3cham.png')} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
        numColumns={2}
      />

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="bars" size={28} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <MaterialIcons name="home" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <FontAwesome name="arrow-left" size={28} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  topBar: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1ba9ff',
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingLeft: 10,  
    maxWidth: '60%',
    height: 30,
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#ffffff',  
    marginLeft: 10,
  },
  cartBadge: {
    position: 'absolute',
    right: -10,
    top: -10,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
  },
  productCard: {
    backgroundColor: '#f2f2f2',
    margin: 5,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    borderColor: '#ddd',
  },
  productImage: {
    width: 140,
    height: 80,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 14,
    textAlign: 'flex-start',
    width: '90%',
  },
  priceContainer: {
    flexDirection: 'row',
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  productDiscount: {
    fontSize: 14,
    color: '#969DDA',
    marginRight: 30,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 5,
  },
  ratingStar: {
    flexDirection: 'row',
    width: 90,
    justifyContent: 'space-between',
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 14,
  },
  bottomBar: {
    height: 50,
    backgroundColor: '#1ba9ff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  iconContainer: {
    padding: 10,
  },
});

export default ProductListScreen2;
