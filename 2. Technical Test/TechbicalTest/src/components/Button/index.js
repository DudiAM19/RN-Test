import React from 'react';
import {Text, TouchableOpacity, Dimensions, View, Alert} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
const {width} = Dimensions.get('screen');

const Button = ({
  header,
  backgroundColor,
  text,
  flex,
  medium,
  small,
  disabled,
  onPress,
}) => {
  return (
    <View style={{flex: flex ? 1 : 0}}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[
          styles.buttonsection(backgroundColor, medium, small),
          header ? {marginHorizontal: width * 0.015} : null,
        ]}>
        <Text style={styles.buttontext(backgroundColor)}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

Button.propTypes = {
  header: PropTypes.bool,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  flex: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  header: false,
  backgroundColor: 'white',
  text: 'Button text',
  large: false,
  medium: false,
  small: false,
  flex: false,
  disabled: false,
  onPress: () => Alert.alert('Button Function'),
};

export default Button;
