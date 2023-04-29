import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  buttonsection: (backgroundColor, medium, small) => ({
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: medium ? width * 0.265 : small ? width * 0.262 : width * 0.3,
    height: medium ? width * 0.095 : small ? width * 0.092 : width * 0.1,
    marginHorizontal: width * 0.001,
    backgroundColor: backgroundColor ? backgroundColor : 'white',
  }),
  buttontext: backgroundColor => ({
    color: backgroundColor !== 'white' ? 'white' : '#525151',
    fontWeight: '500',
    fontSize: 15,
  }),
});
