/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

import {AppNavigator} from "./src/router";
import Provider from "react-redux/es/components/Provider";
import {store} from "./src/redux/store";

export default class App extends Component<{}> {
  render() {
    return (
        <Provider store={store}>
            <AppNavigator/>
        </Provider>

    );
  }
}

