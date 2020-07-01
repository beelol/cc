import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
} from 'react-native';
import { foodListings } from './data';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import FoodItem from './components/FoodItem';

const UnprovidedApp = () => {
  const screenWidth = Math.round(Dimensions.get('window').width);

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
        renderItem={FoodItem}
        keyExtractor={item => item.id}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Button title="+" style={{ width: 20, height: 20, fontSize: 30 }}>
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
