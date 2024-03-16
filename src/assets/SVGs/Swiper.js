import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MySwiper = () => {
  return (
    <View style={styles.container}>
      <View style={styles.path1} />
      <View style={styles.rect1} />
      <View style={styles.rect2} />
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 72,
    height: 8,
    flexDirection: 'row',
    marginBottom: 10,
  },
  path1: {
    width: 16,
    height: 8,
    backgroundColor: '#FDD590',
    borderRadius: 4,
  },
  rect1: {
    width: 32,
    height: 8,
    marginLeft: 4,
    backgroundColor: '#FFB129',
    borderRadius: 4,
  },
  rect2: {
    width: 16,
    height: 8,
    marginLeft: 4,
    backgroundColor: '#FDD590',
    borderRadius: 4,
  },
});

export default MySwiper;
