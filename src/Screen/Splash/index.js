import React from 'react';
import {View, Text, Image, ActivityIndicator} from 'react-native';

class Splash extends React.Component {
  componentDidMount = () => {
    // Remember the timer handle
    this.timerHandle = setTimeout(() => {
      this.props.navigation.replace('Login');
      this.timerHandle = 0;
    }, 4000);
  };
  componentWillUnmount = () => {
    // Is our timer running?
    if (this.timerHandle) {
      // Yes, clear it
      clearTimeout(this.timerHandle);
      this.timerHandle = 0;
    }
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        <Image
          source={require('../../Assets/Images/logo.png')}
          style={{resizeMode: 'contain'}}
        />
        <ActivityIndicator
          size="large"
          color="#19D2BA"
          style={{marginTop: 20}}
        />
      </View>
    );
  }
}
export default Splash;
