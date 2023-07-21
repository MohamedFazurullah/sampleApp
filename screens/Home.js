import 'react-native-gesture-handler';
import React from 'react';
import {Button, SafeAreaView, StyleSheet,View} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import ForgetPassword from './forgetPassword';
import Login from './login';
import MenuItem from './menuitem';
import forgetPassword from './forgetPassword';
import MenuDetails from './MenuDetails';


const Drawer = createDrawerNavigator();


const Home = ({ props }) => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName='MenuItem' drawerPosition="right"
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#c6cbef', //Set Drawer background
            width: 250, //Set Drawer width
          },
          headerStyle: {
            backgroundColor: 'gray', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          }
        }}>
        <Drawer.Screen
          name="MenuItem"
          options={{
            drawerLabel: 'MenuItem',
            title: 'MenuItem',
            headerShown: true
          }}
          component={MenuItem}
        /> 
        <Drawer.Screen
          name="Login"
          options={{
            drawerLabel: 'logout',
            title: 'Login',
            headerShown: false
          }}
          component={Login}
        /> 
        <Drawer.Screen
          name="Home"
          options={{
            drawerLabel: '',
            title: 'Home',
            headerShown: false
          }}
          component={Home}
        /> 
        <Drawer.Screen
          name="forgetPassword"
          options={{
            drawerLabel: '',
            title: 'forgetPassword',
            headerShown: true
          }}
          component={ForgetPassword}
        /> 
        <Drawer.Screen
          name="MenuDetails"
          options={{
            drawerLabel: '',
            title: 'MenuDetails',
            headerShown: true
          }}
          component={MenuDetails}
        /> 
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  
});

export default Home;