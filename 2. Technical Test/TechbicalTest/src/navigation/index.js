import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppStackScreen from './app-navigator';
import {useDispatch} from 'react-redux';
import {handleGetData} from '../redux/actions/getData';

const RootNavigator = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetData());
  }, []);
  return (
    <NavigationContainer>
      <AppStackScreen />
    </NavigationContainer>
  );
};

export default RootNavigator;
