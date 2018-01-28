import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import myData from './Data';
export default class ListCell extends Component {
  constructor() {
    super();
    this.state = {
      percentChange: 0,
      value: 0,
    }
  }

  getChange(price) {

    for (let i = 0; i < myData.length; i++) {
      if (myData[i].code === this.props.dataList.code) {
        const afterChange = this.props.dataList.price - myData[i].price;
        const percent = myData[i].price * afterChange / 100;
        if (afterChange > 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, color: 'green', fontWeight: 'bold' }} > {Math.round(afterChange * 100) / 100} </Text>);
        }
        if (afterChange < 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, color: 'red', fontWeight: 'bold' }} > {Math.round(afterChange * 100) / 100} </Text>);
        }
        else if (afterChange === 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, fontWeight: 'bold' }} > -- </Text>);
        }
      }
    }



  }

  _renderPercentChange(price) {

    for (let i = 0; i < myData.length; i++) {
      if (myData[i].code === this.props.dataList.code) {
        const afterChange = this.props.dataList.price - myData[i].price;
        const percent = myData[i].price * afterChange / 100;
        if (afterChange > 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, color: 'green', fontWeight: 'bold' }} > {Math.round(percent * 100) / 100} % </Text>);
        }
        if (afterChange < 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, color: 'red', fontWeight: 'bold' }} > {Math.round(percent * 100) / 100} % </Text>);
        }
        else if (afterChange === 0) {
          return (<Text style={{ flex: 1.1, fontSize: 12, fontWeight: 'bold' }} > 0 % </Text>);
        }
      }
    }

  }


  Comma(number) {
    number = '' + number;
    if (number.length > 3) {
      var mod = number.length % 3;
      var output = (mod > 0 ? (number.substring(0, mod)) : '');
      for (i = 0; i < Math.floor(number.length / 3); i++) {
        if ((mod == 0) && (i == 0))
          output += number.substring(mod + 3 * i, mod + 3 * i + 3);
        else
          output += ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
      }
      return (output);
    }
    else return number;
  }


  _renderValue() {
    for (let i = 0; i < myData.length; i++) {
      if (myData[i].code === this.props.dataList.code) {
        const value = this.props.dataList.price * myData[i].volume;
        return (<Text style={{ flex: 1.5, fontSize: 12, fontWeight: 'bold', color: 'black' }} >{this.Comma(Math.floor(value))} </Text>);
      }
    }

  }


  render() {

    const { code, company, price } = this.props.dataList;
    return (
      <View>
        <View style={styles.ViewHead}>
          <Text style={{ flex: 1.5, fontSize: 12, color: '#0099CC', fontWeight: 'bold' }}> {code}.afterChange </Text>
          <Text style={{ flex: 2, fontSize: 12 }} > {company} </Text>
          <Text style={{ flex: 1, fontSize: 12, fontWeight: 'bold', color: 'black' }}  > {Math.round(price * 100) / 100} </Text>
          {this._renderValue()}
          {this.getChange(price)}
          {this._renderPercentChange(price)}
        </View>
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