import React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

function ColorSelectionScreen({ navigation, route }) {
  const selectedProduct = route.params?.selectedProduct || {
    name: 'Điện Thoại Vsmart Joy 3',
    price: 1790000,
    supplierName: 'Tiki Trading',
    color: 'Xanh dương',
    image: require('../assets/vs_blue.png')
  };

  const products = [
    {
      name: 'Điện Thoại Vsmart Joy 3',
      price: 1790000,
      supplierName: 'Tiki Trading',
      color: 'Xanh dương',
      image: require('../assets/vs_blue.png')
    },
    {
      name: 'Điện Thoại Vsmart Joy 3',
      price: 1890000,
      supplierName: 'Tiki Trading',
      color: 'Đỏ',
      image: require('../assets/vs_red.png')
    },
    {
      name: 'Điện Thoại Vsmart Joy 3',
      price: 1990000,
      supplierName: 'Tiki Trading',
      color: 'Đen',
      image: require('../assets/vs_black.png')
    },
    {
      name: 'Điện Thoại Vsmart Joy 3',
      price: 1690000,
      supplierName: 'Tiki Trading',
      color: 'Bạc',
      image: require('../assets/vs_silver.png')
    }
  ];

  const selectColor = (product) => {
    navigation.navigate('Home', { selectedProduct: product });
  };

  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image source={selectedProduct.image} style={styles.productImage} />
        <Text style={styles.productName}>{selectedProduct.name} 
          {'\n'} 
          Hàng chính hãng 
          {'\n'}
          Màu: {selectedProduct.color} {'\n'}
          Giá: {selectedProduct.price.toLocaleString('vi-VN')} đ {'\n'}
          Cung cấp bởi {selectedProduct.supplierName}
        </Text>
      </View>

      <View style={styles.colorBox}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorOptions}>
          {products.map((product, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.colorOption, { backgroundColor: product.color === 'Xanh dương' ? '#c5f1fb' : product.color === 'Đỏ' ? '#f30d0d' : product.color === 'Đen' ? '#000000' : '#ffffff' }]}
              onPress={() => selectColor(product)}
            />
          ))}
        </View>
        <TouchableOpacity 
          style={styles.doneButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.doneButtonText}>XONG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30,
    alignItems: 'center',
  },
  productInfo: {
    flexDirection: 'row',
    marginBottom: 20,
    width: '90%',
  },
  productImage: {
    width: 120,
    height: 160,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 15,
    marginTop: 15,
    marginLeft: 15,
  },
  colorBox: {
    backgroundColor: '#c4c4c4',
    padding: 20,
    width: '100%',
  },
  title: {
    fontSize: 16,
    marginBottom: 10,
  },
  colorOptions: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  colorOption: {
    width: 60,
    height: 60,
    marginBottom: 12,
  },
  doneButton: {
    backgroundColor: '#3f51b5',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  doneButtonText: {
    color: '#f9f2f2',
    fontWeight: 'bold',
  },
});

export default ColorSelectionScreen;
