import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { foodListings } from './data';
import { useSafeArea, SafeAreaProvider } from 'react-native-safe-area-context';

const UnprovidedApp = () => {
  const safeAreaInsets = useSafeArea();

  return (
    <View
      style={{
        ...styles.container,
        paddingTop: safeAreaInsets.top,
        paddingBottom: safeAreaInsets.bottom,
        paddingLeft: safeAreaInsets.left,
        paddingRight: safeAreaInsets.right,
      }}
    >
      <Text>Waw'poejawe;lkfmawer;klfmaewr;lkfm;</Text>
      <FlatList>
        {foodListings.map(listing => {
          return <Text>This is a listing</Text>;
        })}
      </FlatList>
      <Text>What is going on</Text>
      <StatusBar style="auto" />
    </View>
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
