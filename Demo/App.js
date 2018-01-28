
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import GainersScreen from './components/Gainers';
import LosersScreen from './components/Losers';

const myApp = TabNavigator({
  Gainers: {
    screen: GainersScreen,
    navigationOptions: {
      tabBarLabel: '  Top Gainers'
    }
  },
  Loser: {
    screen: LosersScreen,
    navigationOptions: {
      tabBarLabel: 'Top Losers',
    }
  },
}, {
    tabBarOptions: {
      activeTintColor: '#ffffff',
      inactiveTintColor: '#ffffff',
      inactiveBackgroundColor: '#353539',
      activeBackgroundColor: '#353539',
      showIcon: false,
      indicatorStyle: {
        borderBottomColor: 'red',
        borderBottomWidth: 2,
      }
    }
  });

const App = StackNavigator({
  Home: {
    screen: myApp,
    navigationOptions: {
      title: 'S&P/ASX',
      headerTitleStyle: {
        color: 'white',
        alignSelf: 'center'
      },
      headerStyle: {
        backgroundColor: '#0099FF'
      },
      titleStyle: {
        justifyContent: 'space-between',
        textAlign: 'center'
      }
    }
  }
});
export default App;


