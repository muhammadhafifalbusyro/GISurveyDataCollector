import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const height = Dimensions.get('window').height;

class Detail extends React.Component {
  state = {
    data: [
      {
        id: 1,
        desa: '00561 - No Data',
        status: 50,
      },
    ],
  };
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <View
          style={{
            height: 50,
            width: '100%',
            backgroundColor: '#19D2BA',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
        <View style={{width: '100%', padding: 20}}>
          <Text style={{fontSize: 16, color: '#19D2BA', fontWeight: 'bold'}}>
            Dukuh Ponggok{' '}
            <Text style={{color: 'red'}}>(256/265 Data Belum Lengkap)</Text>
          </Text>
        </View>
        <View style={{width: '100%', paddingHorizontal: 20, paddingBottom: 10}}>
          <View
            style={{
              width: '100%',
              height: height / 1.25,
              borderWidth: 1,
              borderColor: '#d1d1d1',
              borderRadius: 5,
              padding: 10,
            }}>
            <View
              style={{
                width: '100%',
                height: 50,
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#d1d1d1',
                marginBottom: 10,
                flexDirection: 'row',
              }}>
              <TextInput
                placeholder="Cari Lokasi"
                style={{
                  width: '85%',
                  paddingHorizontal: 10,
                }}
              />
              <View
                style={{
                  height: 50,
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="search" size={25} color="#d1d1d1" />
              </View>
            </View>
            <ScrollView style={{flex: 1}}>
              {this.state.data.map((value, key) => {
                return (
                  <View
                    key={key}
                    style={{
                      width: '100%',
                      paddingVertical: 15,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        width: '70%',
                        color: '#B1B1B1',
                        fontWeight: 'bold',
                      }}>
                      {value.desa}
                    </Text>
                    <TouchableOpacity
                      activeOpacity={0.7}
                      delayPressIn={100}
                      onPress={() => this.props.navigation.navigate('Peta')}
                      style={{
                        height: 30,
                        width: '25%',
                        backgroundColor: '#FEBF63',
                        borderRadius: 3,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: 'white'}}>Peta</Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
export default Detail;
