import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    width: '100%',
    height: width * 0.7,
    // borderWidth: 0.5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    marginVertical: width * 0.02,
  },
  imagesection: {
    backgroundColor: 'red',
    width: '100%',
    height: width * 0.42,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
  },
  btnsection: {
    height: width * 0.15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
