/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ListIncome = () => {
  return (
    <View style={styles.list}>
      <View style={styles.listItem}>
        <View style={styles.bgIconIncome}>
          <Svg viewBox="0 0 24 24" width={30} height={30} fill="#fafafa">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.22 6.268a.75.75 0 0 1 .968-.431l5.942 2.28a.75.75 0 0 1 .431.97l-2.28 5.94a.75.75 0 1 1-1.4-.537l1.63-4.251-1.086.484a11.2 11.2 0 0 0-5.45 5.173.75.75 0 0 1-1.199.19L9 12.312l-6.22 6.22a.75.75 0 0 1-1.06-1.061l6.75-6.75a.75.75 0 0 1 1.06 0l3.606 3.606a12.695 12.695 0 0 1 5.68-4.974l1.086-.483-4.251-1.632a.75.75 0 0 1-.432-.97Z"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.listContent}>
        <Text style={styles.title}>Judul Pemasukan</Text>
        <Text style={{fontSize: 11}} numberOfLines={1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          neque pariatur quidem voluptates? Excepturi ex sed iste. Nisi, at
          adipisci! Voluptates, repudiandae. Ratione exercitationem laborum
          maxime temporibus quo pariatur repudiandae?
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text>Rp 1.000.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    height: 60,
    // marginHorizontal: 10,
  },
  listItem: {
    padding: 5,
    marginHorizontal: 5,
    alignItems: 'center',
    // borderWidth: 1,
  },
  listContent: {
    flex: 2,
    marginHorizontal: 2,
    padding: 5,
    // borderWidth: 1,
  },
  bgIconIncome: {backgroundColor: '#00d008', borderRadius: 20, padding: 5},
  title: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 4,
  },
});

export default ListIncome;
