import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default function Thumbnail(imageName) {
  console.log(imageName);
  console.log(imageName.imageName.dataArray.item);
  const k = imageName.imageName.dataArray.item.urlToImage;
  //const paths = ;

  return (
    <View>
      <Image
        style={style.thumbnail}
        source={require('/home/amit/Documents/NewsAppv2/img/image1.jpg')}
      />
    </View>
  );
}

const style = StyleSheet.create({
  thumbnail: {
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 15,
  },
});
