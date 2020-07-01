import React from 'react';
import { View, Text } from 'react-native';

export default ({ item }) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red',
      width: '100%',
    }}
    key={item.id}
  >
    <Text>{item.name}</Text>
    <Text>{item.amount}</Text>
  </View>
);
