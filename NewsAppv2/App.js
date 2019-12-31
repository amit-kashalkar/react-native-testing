/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Header from './component/header';

import Thumbnail from './component/thumbail';

import List from './component/list-item';

import {getArticles} from './component/news';

export class App extends Component {
  constructor(props) {
    super(props);
    this.item = [
      {
        key: '1',
        uriToImage: () =>
          require('/home/amit/Documents/NewsAppv2/img/image3.jpeg'),
        title: 'TITLE 1',
        description: 'descrioptin of first',
        source: 'bbc',
      },
    ];

    this.state = {
      isLoading: true,
      data: null,
      isError: false,
    };
  }
  componentDidMount() {
    getArticles().then(
      data => {
        this.setState({
          isLoading: false,
          data: data,
        });
        console.log(data);
      },
      error => Alert.alert(JSON.stringify(error)),
    );
  }
  render() {
    var img = require('/home/amit/Documents/NewsAppv2/img/image1.jpg');
    //console.log('image ' + this.item[0].uriToImage);
    //const k = this.item[0].uriToImage;
    const view = this.state.isLoading ? (
      <View style={{flex: 1, marginTop: 200, alignContent: 'center'}}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>wait..</Text>
      </View>
    ) : (
      <View style={style.body}>
        <FlatList
          data={this.state.data}
          renderItem={item => <List dataArray={item} />}></FlatList>
      </View>
    );
    return (
      <View style={{flex: 1}}>
        <Header />

        <ScrollView>{view}</ScrollView>
      </View>
    );
  }
}
const style = StyleSheet.create({
  fl: {flex: 1},
  body: {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: 10,
  },
  thumbnail: {
    height: 80,
    width: 80,
    margin: 20,
    borderRadius: 5,
  },
  title: {
    padding: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
  },
});
export default App;
