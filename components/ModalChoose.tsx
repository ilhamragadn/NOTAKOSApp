/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const ModalChoose = ({navigation}: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                }}
                onPress={() => setModalVisible(!modalVisible)}>
                <Svg
                  width={25}
                  height={25}
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="#000000">
                  <Path
                    d="M6 18 18 6M6 6l12 12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </Svg>
              </TouchableOpacity>
              <View>
                <Text style={styles.modalText}>
                  Catat Keuanganmu hari ini yuk!
                </Text>
                <View style={styles.fixToText}>
                  <TouchableHighlight
                    onPress={() => navigation.navigate('CatatPemasukan')}
                    style={styles.button}>
                    <Text style={{color: 'yellow'}}>Catat Pemasukan</Text>
                  </TouchableHighlight>
                  <TouchableHighlight
                    onPress={() => navigation.navigate('CatatPengeluaran')}
                    style={styles.button}>
                    <Text style={{color: 'yellow'}}>Catat Pengeluaran</Text>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1,
        }}
        onPress={() => setModalVisible(!modalVisible)}>
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#813358',
            shadowColor: '#813358',
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5,
          }}>
          <View
            style={{
              // position: 'absolute',
              // right: 13,
              // top: 13,
              top: 13,
              alignItems: 'center',
            }}>
            <Svg
              width={35}
              height={35}
              viewBox="0 0 24 24"
              strokeWidth={3}
              stroke="yellow">
              <Path
                d="M12 4.5v15m7.5-7.5h-15"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
    elevation: 2,
    backgroundColor: '#813358',
  },
  modalText: {
    marginBottom: 15,
    marginTop: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default ModalChoose;
