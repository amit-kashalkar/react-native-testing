import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {b, c} from '/home/amit/Documents/NewsAppFinal/screen/homescreen';
import {
  setCate,
  getArticles,
} from '/home/amit/Documents/NewsAppFinal/component/news';
import {ScrollView} from 'react-native-gesture-handler';

export default function Bottom1() {
  return (
    <ScrollView horizontal={true}>
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
          <View
            style={{
              width: 120,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>GENERAL</Text>
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
          <View
            style={{
              width: 150,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>TECHNOLOGY</Text>
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
          <View
            style={{
              width: 110,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>SPORTS</Text>
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
          <View
            style={{
              width: 180,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>ENTERTAINMENT</Text>
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
          <View
            style={{
              width: 100,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>HEALTH</Text>
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
          <View
            style={{
              width: 110,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>SCIENCE</Text>
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
          <View
            style={{
              width: 130,
              alignItems: 'center',
              height: 100,
              padding: 15,
            }}>
            <Text>BUSSINESS</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  top: {width: 120, alignItems: 'center', height: 100, padding: 20},
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
