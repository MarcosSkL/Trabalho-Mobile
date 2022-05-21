import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';


import MainStack from './src/stacks/MainStack';

export default props => {
    return (
        
      <NavigationContainer>
            <MainStack />            
      </NavigationContainer>
    )
}
