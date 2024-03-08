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
import {Card} from '../components/Card';
// import {Card} from '../components/Card';

const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView>
        <View style={styles.container}>
          <Card title="NOTAKOS" />
        </View>
        <View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
          <View style={styles.card}>
            <Text style={{flex: 1, textAlign: 'center'}}>Icon</Text>
            <Text style={{flex: 2, marginLeft: 10}}>Pemasukan</Text>
            <Text style={{flex: 1, textAlign: 'center'}}>Rp 500.000,-</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#813358',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    borderColor: 'white',
    borderWidth: 1,
    // marginTop: 200,
    // marginBottom: 10,
    paddingTop: 20,
    paddingBottom: 20,
    // paddingLeft: 20,
  },
});

export default Home;
