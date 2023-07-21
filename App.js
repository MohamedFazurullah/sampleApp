/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Login from './screens/login';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ForgetPassword from './screens/forgetPassword';
import HomePage from './screens/Home';
import Menuitem from './screens/menuitem';
import MenuDetails from './screens/MenuDetails'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
        />
      <Stack.Screen 
        name="forgetPassword" 
        component={ForgetPassword} 
        options={{ headerShown: true }}/>
      <Stack.Screen 
        name="Home" 
        component={HomePage} 
        options={{ headerShown: false }}/>
      <Stack.Screen 
        name="MenuItem" 
        component={Menuitem} 
        options={{ headerShown: true }}/>
        <Stack.Screen 
        name="MenuDetails" 
        component={MenuDetails} 
        options={{ headerShown: true }}/>
    </Stack.Navigator>
  </NavigationContainer> );
};

const styles = StyleSheet.create({
  });

export default React.memo(App);
