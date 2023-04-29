import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from 'react-native';
const {width} = Dimensions.get('screen');
import {HeaderWithButton, ContentCard} from '../../components';
import styles from './styles';
import {useSelector} from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Home = () => {
  const {data, loading} = useSelector(({dataReducer}) => ({
    data: dataReducer.data,
    loading: dataReducer.loading,
  }));

  const [newData, setNewData] = useState();
  const [disableDislike, setDisableDislike] = useState(false);
  const [liked, setLiked] = useState([]);
  useEffect(() => {
    setNewData(data);
    data?.map(val => {
      if (val.like <= 1) {
        setDisableDislike(true);
      } else {
        setDisableDislike(false);
      }
    });
  }, [data]);

  const functionLikeAll = () => {
    setDisableDislike(false);
    let arr = [];
    const data = newData?.map(val => {
      arr.push(val.id);
      val.like = +1;
      return val;
    });
    setLiked(arr);
    setNewData(data);
  };

  const functionDislikeAll = () => {
    setLiked([]);
    const data = newData?.map(val => {
      liked?.some(e => e === val.id) ? (val.like -= 1) : null;
      return val;
    });
    setNewData(data);
  };

  const functionResetAll = () => {
    setDisableDislike(true);
    const data = newData?.map(val => {
      val.like = 0;
      return val;
    });
    setLiked([]);
    setNewData(data);
  };

  const functionLike = id => {
    setDisableDislike(false);
    const data = newData?.map(val => {
      if (liked?.find(e => id === e.id)) {
        setLiked(liked?.filter(val => val !== id));
      } else {
        setLiked([...liked, id]);
      }
      if (val.id === id) {
        val.like = +1;
      }
      return val;
    });
    setNewData(data);
  };

  const functionDislike = id => {
    const data = newData?.map(val => {
      if (liked?.find(e => val === e.id)) {
        setLiked(liked?.filter(val => val !== id));
      }
      setLiked([]);
      if (val.id === id) {
        if (val.like <= 1) {
          val.like -= 1;
        } else {
          null;
        }
      }
      return val;
    });
    setNewData(data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Spinner visible={loading} />
      <View>
        <HeaderWithButton
          disabledDislikeAll={disableDislike}
          functionLikeAll={functionLikeAll}
          functionDislikeAll={functionDislikeAll}
          functionResetAll={functionResetAll}
        />
        <View style={{marginTop: width * 0.05, marginBottom: width * 0.2}}>
          {newData !== undefined && (
            <ScrollView showsVerticalScrollIndicator={false}>
              {newData?.map((val, index) => {
                return (
                  <ContentCard
                    disabled={liked?.some(e => e !== val.id)}
                    functionLike={() => functionLike(val.id)}
                    functionDislike={() => functionDislike(val.id)}
                    key={index}
                    imgSource={val.avatar}
                    countLike={val.like}
                  />
                );
              })}
            </ScrollView>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
