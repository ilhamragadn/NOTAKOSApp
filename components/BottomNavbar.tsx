/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import ModalChoose from './ModalChoose';
import {TabBarIcon} from './TabBarIcon';

export const BottomNavbar = ({navigation}: any) => {
  return (
    <View style={styles.centeredView}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Home')}>
          <TabBarIcon textIcon="Beranda">
            {/* outline */}
            <Svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#813358"
              strokeWidth={2}>
              <Path
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TabBarIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.box, {marginRight: 10}]}
          onPress={() => navigation.navigate('Alokasi')}>
          <TabBarIcon textIcon="Alokasi">
            {/* //outline */}
            <Svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#813358"
              strokeWidth={2}>
              <Path
                d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <Path
                d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TabBarIcon>
        </TouchableOpacity>
        <View style={[styles.box, {left: 30, bottom: 25}]}>
          <ModalChoose navigation={navigation} />
        </View>
        <TouchableOpacity
          style={[styles.box, {marginLeft: 10}]}
          onPress={() => navigation.navigate('Ekstra')}>
          <TabBarIcon textIcon="Ekstra">
            {/* //outline */}
            <Svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#813358"
              strokeWidth={2}>
              <Path
                d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TabBarIcon>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.box}
          onPress={() => navigation.navigate('Profil')}>
          <TabBarIcon textIcon="Profil">
            <Svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#813358"
              strokeWidth={2}>
              <Path
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </TabBarIcon>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    alignItems: 'center',
    top: 450,
  },
  container: {
    width: 350,
    height: 50,
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    shadowColor: '#813358',
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    shadowOffset: {width: 0, height: 10},
    elevation: 3,
    justifyContent: 'space-evenly',
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  text: {
    color: 'white',
  },
});
