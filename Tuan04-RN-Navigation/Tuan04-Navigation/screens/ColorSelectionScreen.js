import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorSelectionScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.productInfo}>
        <Image source={require('../assets/vs_blue.png')} style={styles.productImage} />
        <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 {'\n'} Hàng chính hãng</Text>
      </View>

      <View style={styles.colorBox}>
        <Text style={styles.title}>Chọn một màu bên dưới:</Text>
        <View style={styles.colorOptions}>
          <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#c5f1fb' }]} />
          <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#f30d0d' }]} />
          <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#000000' }]} />
          <TouchableOpacity style={[styles.colorOption, { backgroundColor: '#234896' }]} />
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
