import React from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TextInput,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const height = Dimensions.get('window').height;

class Region extends React.Component {
  state = {
    data: [
      {
        id: 1,
        dukuh: 'Ponggok',
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
            Desa Ponggok{' '}
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
            <Text
              style={{
                fontSize: 16,
                color: '#19D2BA',
                fontWeight: 'bold',
                marginTop: 10,
                marginBottom: 20,
              }}>
              Pilih Dukuh:
            </Text>
            <ScrollView style={{flex: 1}}>
              {this.state.data.map((value, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    style={{marginBottom: 15}}
                    activeOpacity={0.7}
                    delayPressIn={100}
                    onPress={() => this.props.navigation.navigate('Detail')}>
                    <View
                      style={{
                        width: '100%',
                        flexDirection: 'row',
                        paddingVertical: 10,
                        paddingHorizontal: 20,
                        backgroundColor: '#FEBF63',
                        borderRadius: 5,
                        justifyContent: 'space-between',
                      }}>
                      <Text style={{fontWeight: 'bold', color: 'white'}}>
                        {value.dukuh}
                      </Text>
                      <Text style={{color: 'white'}}>50/135 data</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        </View>
      </View>
    );
  }
}
export default Region;
