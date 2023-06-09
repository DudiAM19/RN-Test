import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '../screen';

const AppStack = createNativeStackNavigator();
const AppStackScreen = () => (
  <AppStack.Navigator screenOptions={{headerShown: false}}>
    <AppStack.Screen name="Home" component={Home} />
  </AppStack.Navigator>
);

export default AppStackScreen;
