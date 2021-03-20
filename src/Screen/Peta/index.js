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
import MapView, {Marker} from 'react-native-maps';

const height = Dimensions.get('window').height;

class Peta extends React.Component {
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
            alignItems: 'center',
            paddingHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Icon
            name="arrow-left"
            size={30}
            color="white"
            onPress={() => this.props.navigation.goBack()}
          />
          <View
            style={{
              flexDirection: 'row',
              width: '40%',
              justifyContent: 'space-between',
            }}>
            <Icon name="search" size={30} color="white" />
            <Icon name="crosshair" size={30} color="white" />
            <Icon name="more-vertical" size={30} color="white" />
          </View>
        </View>
        <MapView
          style={{
            height: height - 50,
            width: '100%',
          }}
          initialRegion={{
            latitude: 0.777398116662058,
            longitude: 122.8607829233708,
            latitudeDelta: 0.009,
            longitudeDelta: 0.009,
          }}></MapView>
      </View>
    );
  }
}
export default Peta;
