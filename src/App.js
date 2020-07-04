import { v4 as getId } from 'uuid';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import { foodListings as defaultFoodListings } from './data';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FoodItem from './components/FoodItem';

import { replaceById } from './util';

const UnprovidedApp = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);

  const [foodListings, setFoodListings] = useState([...defaultFoodListings]);

  const updateFoodListing = newListing =>
    setFoodListings(replaceById(foodListings, newListing));

  const addFoodListing = newListing =>
    setFoodListings([...foodListings, newListing]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>CALORIE CRUNCH</Text>
      <FlatList
        ItemSeparatorComponent={() => (
          <View style={{ height: 16, backgroundColor: 'pink' }} />
        )}
        contentContainerStyle={{
          width: screenWidth * 0.8,
          display: 'flex',
          flexDirection: 'column',
        }}
        data={foodListings}
        renderItem={item => (
          <FoodItem item={item} onUpdate={updateFoodListing} />
        )}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Button
          onPress={() =>
            addFoodListing({
              name: 'Add a name',
              amount: 0,
              id: getId(),
            })
          }
          title="Add an item"
          style={{ width: 20, height: 20, fontSize: 30 }}
        >
          +
        </Button>
      </View>
      <Text>Total Calories: </Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default App = () => (
  <SafeAreaProvider>
    <UnprovidedApp />
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
