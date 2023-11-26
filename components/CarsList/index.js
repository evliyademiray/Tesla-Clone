import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import styles from './styles';
import cars from './cars';
import CarItem from '../carItem';


const CarsList = () => {
  return (
    <View>
        <FlatList
        data={cars}
        renderItem={({item})=><CarItem car={item}/>}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        showsVerticalScrollIndicator={false}
        />
    </View>
  )
}

export default CarsList;
