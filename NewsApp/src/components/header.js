import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Header() {
  return (
    <View style={style.header}>
      <Text style={style.title}>LOGIN PAGE</Text>
    </View>
  );
}

const style = StyleSheet.create({
  header: {
    height: 80,
    backgroundColor: 'cornflowerblue',
    padding: 0,
    margin: 20,
    borderRadius: 30,
  },
  title: {
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
});
