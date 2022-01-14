import React from 'react'
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.boxes} onPress={() => {navigation.navigate('DesignOne')}}>
        <Text style={styles.boxText}>Design 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.boxes}></TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  boxes: {
    width: Dimensions.get('window').width / 2 - 20,
    height: Dimensions.get('window').width / 4 - 20,
    backgroundColor: '#8F6F7Ea1',
    margin: 8,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  boxText: {
    color: '#fff',
    fontSize: 20,
  }
});
