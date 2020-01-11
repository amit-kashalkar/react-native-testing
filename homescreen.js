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
  FlatList,
  Alert,
  ActivityIndicator,
  Button,
} from 'react-native';

import HorScroll from '/home/amit/Documents/NewsAppFinal/component/hor_scroll.js';

import Webview from 'react-native-webview';

import Header from '/home/amit/Documents/NewsAppFinal/component/header.js';

import Bottom1 from '/home/amit/Documents/NewsAppFinal/component/bottom';

import List from '/home/amit/Documents/NewsAppFinal/component/list-item';

import {
  getArticles,
  getArticlesearch,
  getArticlesquery,
} from '/home/amit/Documents/NewsAppFinal/component/news';
import {TouchableOpacity} from 'react-native-gesture-handler';

export var b, c;
export class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,

      data: null,

      isError: false,
    };

    formatwait = () => {
      this.setState({
        isLoading: true,
      });
    };
    formatdata = props => {
      if (1) {
        this.setState({
          isLoading: false,
          data: props,
        });
      }
    };

    b = formatdata;
    c = formatwait;
  }

  componentDidMount() {
    getArticles('general').then(
      data => {
        formatdata(data);
      },
      error => Alert.alert(JSON.stringify(error)),
    );
  }
  render() {
    const view = this.state.isLoading ? (
      <View style={{flex: 1, marginTop: 200, alignContent: 'center'}}>
        <ActivityIndicator animating={this.state.isLoading} />
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>wait..</Text>
      </View>
    ) : (
      <View style={style.body}>
        <FlatList
          data={this.state.data}
          renderItem={item => (
            <List
              navigate={url =>
                this.props.navigation.navigate('Newspage', {url: url})
              }
              dataArray={item}
            />
          )}></FlatList>
      </View>
    );

    return (
      <View style={{flex: 1}}>
        <Bottom1 />

        <ScrollView>
          <HorScroll />
        </ScrollView>
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
    height: 200,
  },
});
export default HomeScreen;
