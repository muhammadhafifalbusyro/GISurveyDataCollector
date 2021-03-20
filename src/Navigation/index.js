import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../Screen/Login';
import Splash from '../Screen/Splash';
import Home from '../Screen/Home';
import Region from '../Screen/Region';
import Detail from '../Screen/Detail';
import Peta from '../Screen/Peta';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Region" component={Region} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Peta" component={Peta} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
