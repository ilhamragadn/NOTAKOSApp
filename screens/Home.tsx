/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {BottomNavbar} from '../components/BottomNavbar';
import {Card} from '../components/Card';
import ListIncome from '../components/ListIncome';
import ListOutcome from '../components/ListOutcome';

const Home = ({navigation}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={[backgroundStyle, {flex: 1}]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={
          isDarkMode ? backgroundStyle.backgroundColor : '#813358'
        }
      />
      <View
        style={[
          isDarkMode
            ? [backgroundStyle.backgroundColor, styles.boxLogo]
            : [{backgroundColor: '#813358'}, styles.boxLogo],
        ]}>
        <Text style={{fontSize: 18, color: 'white', padding: 30}}>NOTAKOS</Text>
      </View>
      <ScrollView style={{flex: 1}}>
        <ListIncome />
        <ListOutcome />
        <View style={{alignItems: 'center'}}>
          <Card>
            <Text>TEST</Text>
          </Card>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 450,
          left: 0,
          right: 0,
        }}>
        <BottomNavbar navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  boxLogo: {
    shadowColor: '#353535',
    shadowOpacity: 0.25,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Home;
