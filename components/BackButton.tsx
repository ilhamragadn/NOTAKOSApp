import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

export const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}>
      <Text style={styles.backText}>Kembali</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    width: 100,
    alignItems: 'center',
    backgroundColor: '#dddddd',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingBottom: 8,
    paddingTop: 6,
    margin: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // paddingVertical: 8,
  },
  backText: {
    fontWeight: '600',
    color: '#000000',
  },
});
