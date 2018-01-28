import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import myData from './Data';
import ListCell from './ListCell';
export default class GainersScreen extends Component {
  constructor() {
    super();
    this.state = {
      dataSrc: JSON.parse(JSON.stringify(myData)),
    }
  }

  componentDidMount() {
    const items = [];
    for (let i = 0; i < this.state.dataSrc.length; i++) {
      items.push(i);
    }
    setInterval(function () {
      const arr_copy = [...this.state.dataSrc];
      const index = items[Math.floor(Math.random() * items.length)];
      const changeAlway = [];
      const ChangeVolume = [];
      for (let i = arr_copy[index].price * 5 / 100; i >= - arr_copy[index].price * 5 / 100; i--) {
        changeAlway.push(i);
      }

      for (let i = 30; i >= 10; i--) {
        ChangeVolume.push(i);
      }

      const changeAlways = changeAlway[Math.floor(Math.random() * changeAlway.length)];
      const ChangeVolumes = ChangeVolume[Math.floor(Math.random() * ChangeVolume.length)];

      arr_copy[index].price = this.state.dataSrc[index].price + changeAlways;
      arr_copy[index].value = arr_copy[index].price * arr_copy[index].volume;
      arr_copy[index].volume = this.state.dataSrc[index].volume + ChangeVolumes;
      this.setState({
        dataSrc: arr_copy,
      });
    }.bind(this), 5000);

  }

  sortData() {
    if (this.props.sort) {
      this.state.dataSrc.sort(function (a, b) { return (a.value > b.value) ? 1 : ((b.value > a.value) ? -1 : 0); });
    } else {
      this.state.dataSrc.sort(function (a, b) { return (a.value < b.value) ? 1 : ((b.value < a.value) ? -1 : 0); });
    }
  }
  render() {
    this.sortData();
    return (
      <View>
        <View style={styles.ViewHead}>
          <Text style={{ flex: 1.5, fontSize: 12, fontWeight: 'bold' }}> Code </Text>
          <Text style={{ flex: 2, fontSize: 12, fontWeight: 'bold' }} > Company </Text>
          <Text style={{ flex: 1, fontSize: 12, fontWeight: 'bold' }}  > Price </Text>
          <Text style={{ flex: 1.5, fontSize: 12, fontWeight: 'bold' }} > Value </Text>
          <Text style={{ flex: 1.1, fontSize: 12, fontWeight: 'bold' }} > Change </Text>
          <Text style={{ flex: 1.3, textAlign: 'right', fontSize: 12, fontWeight: 'bold' }} > %Change </Text>
        </View>
        <FlatList
          keyExtractor={(item) => item.code}
          data={this.state.dataSrc.slice(0, 20)}
          renderItem={({ item, index }) => <ListCell dataList={item} vitri={index} />}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ViewHead: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    height: 30

  },

});