import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import Barber from '../screens/Barber/index';
import BarberModal from '../screens/BarberModal/index'


const Stack = createNativeStackNavigator();

export default props => {
  return (
  
  <Stack.Navigator
      initialRouteName="Barber"
      screenOptions={{
        headerShown: false
      }}
  >
  
    <Stack.Screen name="Barber" component={Barber} />
    
    <Stack.Screen name="BarberModal" component={BarberModal} />
    

    

  </Stack.Navigator>
  
)}
