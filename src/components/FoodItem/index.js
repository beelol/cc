import React from 'react';
import { View, TextInput } from 'react-native';

export default ({ item, onUpdate }) => (
  <View
    style={{
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: 'red',
      width: '100%',
    }}
    key={item.id}
  >
    <TextInput
      value={item.name}
      style={{
        backgroundColor: 'blue',
        width: '50%',
      }}
      onChangeText={text => {
        onUpdate({ ...item, name: text });
      }}
    ></TextInput>
    <TextInput
      value={item.amount}
      style={{
        backgroundColor: 'blue',
        width: '50%',
      }}
      onChangeText={text => {
        onUpdate({ ...item, amount: text });
      }}
    ></TextInput>
  </View>
);
