import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderRadius: 6,
    width: '45%',
    fontSize: 20,
    padding: 10,
  },
});

export default ({ item, onUpdate }) => {
  console.log(item);
  return (
    <View style={styles.container} key={item.id}>
      <TextInput
        value={item.name}
        style={styles.input}
        onChangeText={text => {
          onUpdate({ ...item, name: text });
        }}
        placeholder="Food"
      />
      <TextInput
        value={item.amount.toString()}
        style={styles.input}
        onChangeText={text => {
          onUpdate({ ...item, amount: parseFloat(text) || 0 });
        }}
        placeholder="Calories"
      />
    </View>
  );
};
