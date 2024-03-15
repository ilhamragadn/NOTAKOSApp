import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Card} from '../components/Card';

const CatatPemasukan = ({}: any) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor="#813358"
      />
      <View style={{backgroundColor: '#813358'}}>
        <Text
          style={{
            fontSize: 18,
            color: 'white',
            padding: 30,
            fontWeight: '600',
          }}>
          Catat Pemasukan
        </Text>
      </View>
      {/* <View style={styles.container}>
        <View style={styles.box}>
          <Text>Judul Catatan Pemasukan</Text>
          <TextInput placeholder="Masukkan Judul" style={styles.input} />
        </View>
        <View style={styles.box}>
          <Text>Deskripsi Catatan Pemasukan</Text>
          <TextInput placeholder="Masukkan Deskripsi" style={styles.input} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <TombolKembali />
          <TombolKembali />
        </View>
      </View> */}
      <ScrollView>
        <View style={styles.container}>
          <Card>
            <View style={styles.box}>
              <Text>Judul Catatan Pemasukan</Text>
              <TextInput placeholder="Masukkan Judul" style={styles.input} />
            </View>
            <View style={styles.box}>
              <Text>Deskripsi Catatan Pemasukan</Text>
              <TextInput
                placeholder="Masukkan Deskripsi"
                style={styles.input}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {margin: 10, alignItems: 'center'},
  box: {
    marginVertical: 2,
    padding: 5,
  },
  input: {
    height: 40,
    margin: 5,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#813358',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});

export default CatatPemasukan;
