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

import Bottom1 from './component/bottom';

import Thumbnail from './component/thumbail';

import List from './component/list-item';

import {getArticles} from './component/news';

export var b, c;
export class App extends Component {
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
      this.setState({
        isLoading: false,
        data: props,
      });
      console.log('inside formatdata');
      console.log(this.state.data);
    };
    b = formatdata;
    c = formatwait;
  }

  componentDidMount() {
    getArticles('general').then(
      data => {
        console.log('before formatdata');
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
          renderItem={item => <List dataArray={item} />}></FlatList>
      </View>
    );
    return (
      <View style={{flex: 1}}>
        <Header />

        <ScrollView>{view}</ScrollView>

        <Bottom1 />
      </View>
    );
  }
}
const style = StyleSheet.create({
  bottom: {
    margin: 19,
    backgroundColor: 'cornflowerblue',
    borderRadius: 40,
  },
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
    fontSize: 20,
  },
});
export default App;
