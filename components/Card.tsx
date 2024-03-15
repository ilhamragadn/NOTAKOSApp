import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Card = ({children}: any) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    margin: 5,
    padding: 6,
    backgroundColor: '#fafafa',
    borderRadius: 10,
    shadowColor: '#d9d9d9',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: {width: 0, height: 10},
    elevation: 3,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
