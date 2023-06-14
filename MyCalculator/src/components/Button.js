import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function Button({ textKey, onPress }) {
  const { buttonText, buttonStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={buttonText}>{textKey}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    fontSize: 24,
  },
  buttonStyle: {
    flex: 1,
    borderRadius: 8,
    backgroundColor: 'gray',
    padding: 16,
    marginHorizontal: 8,
    marginVertical: 4,
    alignItems: 'center',
  },
});
