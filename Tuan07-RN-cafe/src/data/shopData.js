export const shops = [
  {
    id: 1,
    imageUrl: 'https://picsum.photos/200',
    name: 'Jewel Box Cafe',
    address: '1145 GE 54 St',
    deliveryTime: '10-15 minutes',
    isOpen: false, // Shop này đang đóng cửa
    drinks: [
      { id: 1, name: 'Espresso', price: 9 },
      { id: 2, name: 'Cappuccino', price: 23 },
    ],
  },
  {
    id: 2,
    imageUrl: 'https://picsum.photos/200',
    name: 'Kitanda Espresso',
    address: '1121 NE 45 St',
    deliveryTime: '5-10 minutes',
    isOpen: true, // Shop này đang mở cửa
    drinks: [
      { id: 1, name: 'Latte', price: 15, imageUrl: 'https://picsum.photos/200' },
      { id: 2, name: 'Americano', price: 12, imageUrl: 'https://picsum.photos/200' },
      { id: 3, name: 'Cafe', price: 10, imageUrl: 'https://picsum.photos/200' },
      { id: 4, name: 'Milk', price: 12, imageUrl: 'https://picsum.photos/200' },
      { id: 5, name: 'Milk-Tea', price: 15, imageUrl: 'https://picsum.photos/200' },
    ],
  },
];
