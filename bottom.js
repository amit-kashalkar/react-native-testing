import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {setCate, getArticles} from './news';

import {b, c} from '/home/amit/Documents/NewsAppv2/App.js';
export default function Bottom1() {
  return (
    <View style={style.bottom}>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('general').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-google-news-96.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('technology').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-science-fiction-100.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('sports').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-sports-mode-52.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('entertainment').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-cinema-ticket-150.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('health').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-health-checkup-100.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('science').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-science-application-100.png')}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={style.list}
        onPress={() => {
          c();
          getArticles('bussiness').then(
            data => {
              b(data);
              console.log(data);
            },
            error => Alert.alert(JSON.stringify(error)),
          );
        }}>
        <View>
          <Image
            style={style.thumbnail}
            source={require('/home/amit/Documents/NewsAppv2/img/icons8-money-pound-96.png')}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const style = StyleSheet.create({
  list: {
    backgroundColor: 'transparent',

    borderRadius: 42,

    margin: 0,
  },
  thumbnail: {
    height: 40,
    width: 40,
    margin: 10,
    borderRadius: 5,
  },
  bottom: {
    backgroundColor: 'cornflowerblue',
    flexDirection: 'row',
    height: 60,
    alignContent: 'center',
  },
  title: {
    padding: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'transparent',
    fontSize: 20,
  },
});
