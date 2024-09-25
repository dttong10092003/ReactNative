import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

const productList = [
  {
    id: '1',
    name: 'Ca nấu lẩu, nấu mì mini',
    shopName: 'Devang',
    image: require('../images/ca_nau_lau.png'),
  },
  {
    id: '2',
    name: '1KG KHÔ GÀ BƠ TỎI',
    shopName: 'LTD Food',
    image: require('../images/ga_bo_toi.png'),
  },
  {
    id: '3',
    name: 'Xe cần cẩu đa năng',
    shopName: 'Thế giới đồ chơi',
    image: require('../images/xa_can_cau.png'),
  },
  {
    id: '4',
    name: 'Đồ chơi dạng mô hình',
    shopName: 'Thế giới đồ chơi',
    image: require('../images/do_choi_dang_mo_hinh.png'),
  },
  {
    id: '5',
    name: 'Lãnh đạo giản đơn',
    shopName: 'Minh Long Book',
    image: require('../images/lanh_dao_gian_don.png'),
  },
  {
    id: '6',
    name: 'Hiểu lòng con trẻ',
    shopName: 'Minh Long Book',
    image: require('../images/hieu_long_con_tre.png'),
  },
  {
    id: '7',
    name: 'Donald Trump thiên tài lãnh đạo',
    shopName: 'Thanh Tòng',
    image: require('../images/trump.png'),
  },
];

const ProductItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <Image source={item.image} style={styles.productImage} />
    <View style={styles.infoContainer}>
      <Text numberOfLines={1} style={styles.productName}>{item.name}</Text>
      <View style={styles.shopContainer}>
        <Text style={styles.shopTitle}>Shop </Text>
        <Text style={styles.shopName}>{item.shopName}</Text>
      </View>
    </View>
    <TouchableOpacity style={styles.chatButton}>
      <Text style={styles.chatButtonText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

function ProductListScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Image source={require('../images/ant-design_arrow-left-outlined.png')} />
        <Text style={styles.topBarText}>Chat</Text>
        <Image source={require('../images/bi_cart-check.png')} />
      </View>

      <Text style={styles.titleShop}>Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!</Text>

      <FlatList
        data={productList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ProductItem item={item} />}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  topBar: {
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#1ba9ff',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  topBarText: {
    color: '#ffffff',
    fontSize: 18,
  },
  titleShop: {
    fontSize: 13,
    paddingTop: 10,
    paddingBottom: 5,
    paddingHorizontal: 25,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  productImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',

  },
  productName: {
    fontSize: 16,
  },
  shopContainer: {
    flexDirection: 'row',
  },
  shopName: {
    fontSize: 14,
    color: 'black',
  },
  shopTitle: {
    fontSize: 14,
    color: '#7D5B5B',
  },
  chatButton: {
    backgroundColor: '#F31111',
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
  },
  chatButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  bottomBar: {
    height: 60,
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

export default ProductListScreen;
