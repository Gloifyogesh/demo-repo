import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../screens/homeScreen';
import Demo1 from '../screens/Demo1';
import Demo2 from '../screens/Demo2';
import Demo3 from '../screens/Demo3';
import Demo4 from '../screens/Demo4';
import Demo5 from '../screens/Demo5';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="homeScreen">
      <Drawer.Screen name="homeScreen" component={Home} />
      <Drawer.Screen name="demo1" component={Demo1} />
      <Drawer.Screen name="demo2" component={Demo2} />
      <Drawer.Screen name="demo3" component={Demo3} />
      <Drawer.Screen name="demo4" component={Demo4} />
      <Drawer.Screen name="demo5" component={Demo5} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
