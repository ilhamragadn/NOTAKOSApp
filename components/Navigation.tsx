import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Alokasi from '../screens/Alokasi';
import Ekstra from '../screens/Ekstra';
import Home from '../screens/Home';
import Profil from '../screens/Profil';

const Nav = createBottomTabNavigator();

const Navigation = () => {
  return (
    <Nav.Navigator screenOptions={{headerShown: false}}>
      <Nav.Screen name="Home" component={Home} />
      <Nav.Screen name="Alokasi" component={Alokasi} />
      <Nav.Screen name="Ekstra" component={Ekstra} />
      <Nav.Screen name="Profil" component={Profil} />
    </Nav.Navigator>
  );
};

export default Navigation;
