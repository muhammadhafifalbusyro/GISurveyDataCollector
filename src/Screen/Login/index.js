import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableNativeFeedback,
} from 'react-native';

class Login extends React.Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <View
            style={{
              width: '100%',
              paddingBottom: 30,
              alignItems: 'center',
            }}>
            <Image
              source={require('../../Assets/Images/logo.png')}
              style={{resizeMode: 'contain'}}
            />
          </View>
          <View
            style={{
              width: '100%',
              paddingVertical: 20,
              paddingHorizontal: 30,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#19D2BA'}}>
              Hello Surveyor, Please Login !
            </Text>
          </View>
          <View
            style={{
              width: '100%',
              paddingVertical: 10,
              paddingHorizontal: 30,
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginBottom: 5,
                color: 'grey',
              }}>
              Username
            </Text>
            <TextInput
              placeholder=""
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#d1d1d1',
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              paddingVertical: 10,
              paddingHorizontal: 30,
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginBottom: 5,
                color: 'grey',
              }}>
              Password
            </Text>
            <TextInput
              placeholder=""
              style={{
                height: 50,
                width: '100%',
                backgroundColor: 'rgba(0,0,0,0.1)',
                borderRadius: 5,
                borderWidth: 1,
                borderColor: '#d1d1d1',
              }}
            />
          </View>
          <View
            style={{
              width: '100%',
              paddingVertical: 10,
              paddingHorizontal: 30,
              alignItems: 'center',
            }}>
            <Text
              style={{
                alignSelf: 'flex-start',
                marginBottom: 5,
                color: 'white',
              }}>
              Username
            </Text>
            <TouchableNativeFeedback
              onPress={() => this.props.navigation.replace('Home')}>
              <View
                style={{
                  height: 50,
                  width: '100%',
                  backgroundColor: '#19D2BA',
                  borderRadius: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white', fontSize: 16}}>LOGIN</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </View>
    );
  }
}
export default Login;
