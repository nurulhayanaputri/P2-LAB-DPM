import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const File = () => {
  return (
    <View>
      <Text style={styles.text}>Nurul Hayana Putri</Text>
      <Text style={styles.text}>223510821</Text>
      <Text style={styles.text}>5C</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center', 
    marginVertical: 5, 
  },
});

export default File;
