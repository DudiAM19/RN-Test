import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
const {width} = Dimensions.get('screen');
import {Button} from '../../components';
import styles from './styles';
import PropTypes from 'prop-types';

const ContentCard = ({
  imgSource,
  countLike,
  functionLike,
  functionDislike,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: imgSource}} style={styles.imagesection} />
      <View style={styles.btnsection}>
        <Button medium flex text={countLike + ' Like'} disabled />
        <Button
          header
          small
          text="Like"
          backgroundColor="#4267B2"
          onPress={functionLike}
        />
        <Button
          small
          text="dislike"
          backgroundColor="#E11937"
          onPress={functionDislike}
          disabled={disabled}
        />
      </View>
    </View>
  );
};

ContentCard.propTypes = {
  imgSource: PropTypes.any,
  countLike: PropTypes.number,
  functionLike: PropTypes.func,
  functionDislike: PropTypes.func,
};

ContentCard.defaultProps = {
  imgSource: null,
  countLike: 0,
  functionLike: () => Alert.alert('Button Like'),
  functionDislike: () => Alert.alert('Button Dislike'),
};

export default ContentCard;
