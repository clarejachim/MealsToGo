import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';

export default function App() {
  return (
    <>
    <SafeAreaView style={{ flex: 1}}>
      <View style={{ padding: 16, backgroundColor: 'green'}}>
        <Text>Search bar</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: 'blue'}}>
        <Text>List of Resturants</Text>
      </View>
    </SafeAreaView>
    <StatusBar style='auto'/>
   
    </>
  );
}

const styles = StyleSheet.create({ });
