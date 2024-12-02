import React from 'react';
import { View, StyleSheet, Dimensions, SafeAreaView } from 'react-native';
import File from './src/file.js';

const { width } = Dimensions.get('window'); 

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <File />
        </View>

        <View style={styles.row}>
          <View style={styles.box1} />
          <View style={styles.box2} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#dddee0', 
  },
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  textContainer: {
    marginBottom: 20, 
  },
  row: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width: '100%', 
    paddingHorizontal: 0, 
  },
  box1: {
    width: 100,
    height: 100,
    backgroundColor: '#364830', 
    marginLeft: 0, 
  },
  box2: {
    width: 100,
    height: 100,
    backgroundColor: '#5f7d54', 
    marginRight: 0, 
  },
});

export default App;
