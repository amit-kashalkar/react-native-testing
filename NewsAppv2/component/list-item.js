import React from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from 'react-native';

import Thumbnail from './thumbail';

export default function List_item(dataArray) {
  console.log('in image link');
  console.log(dataArray.dataArray.item.urlToImage);
  var k = dataArray.dataArray.item.urlToImage;
  return (
    <View style={style.list1}>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          Linking.openURL(dataArray.dataArray.item.url);
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={{
              uri: dataArray.dataArray.item.urlToImage,
            }}
          />
        </View>
        <View>
          <Text style={style.title}>{dataArray.dataArray.item.title}</Text>
          <Text style={style.descp}>
            {dataArray.dataArray.item.description}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  list1: {
    backgroundColor: 'transparent',
    margin: 5,
  },
  title: {
    width: 250,
    flex: 1,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    margin: 10,
  },
  descp: {
    width: 250,
    flex: 1,
    fontSize: 10,
    margin: 10,
  },
  list: {
    backgroundColor: 'cornflowerblue',
    flexDirection: 'row',
    borderRadius: 20,

    margin: 10,
  },
  thumbnail: {
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 5,
  },
});
