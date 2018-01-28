import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';
import GainersScreen from './Gainers';
export default class LosersScreen extends Component {
  constructor() {
    super();
  }
  render() {

    return (
     <GainersScreen sort={true} />
    );
  }
}
