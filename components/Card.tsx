import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type CardProps = {
  title: string;
};

export const Card = ({title}: CardProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {margin: 20, padding: 20},
  title: {fontSize: 16},
});
