import React from 'react';
import {Text, TouchableOpacity, Dimensions, View} from 'react-native';
import Button from '../Button';
import styles from './styles';

const HeaderWithButton = ({
  functionLikeAll,
  functionResetAll,
  functionDislikeAll,
  disabledLikeAll,
  disabledResetAll,
  disabledDislikeAll,
}) => {
  const dataHeader = [
    {
      backgroundColor: '#4267B2',
      text: 'Like All',
      function: functionLikeAll,
      disabled: disabledLikeAll,
    },
    {
      backgroundColor: 'white',
      text: 'Reset All',
      function: functionResetAll,
      disabled: disabledResetAll,
    },
    {
      backgroundColor: '#E11937',
      text: 'Dislike All',
      function: functionDislikeAll,
      disabled: disabledDislikeAll,
    },
  ];
  return (
    <View style={styles.headerSection}>
      {dataHeader.map((val, index) => {
        return (
          <Button
            disabled={val.disabled}
            onPress={val.function}
            header
            key={index}
            backgroundColor={val.backgroundColor}
            text={val.text}
          />
        );
      })}
    </View>
  );
};

export default HeaderWithButton;
