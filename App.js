/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Button, View} from 'react-native';
import { Apptentive, ApptentiveConfiguration } from 'apptentive-react-native';

const credentials = Platform.select({
  ios: {
    apptentiveKey: 'IOS-PURCHASING-POWER-DEV',
    apptentiveSignature: '9773e6fa497e1ff50118a4bdfc402f72'
  },
  android: {
    apptentiveKey: '<YOUR_ANDROID_APP_KEY>',
    apptentiveSignature: '<YOUR_ANDROID_APP_SIGNATURE>'
  }
});


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
export default class App extends Component {

  componentDidMount() {
    const configuration = new ApptentiveConfiguration(
      credentials.apptentiveKey,
      credentials.apptentiveSignature
    );
    Apptentive.register(configuration);
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={() => { Apptentive.presentMessageCenter()
        .then((presented) => console.log(`Message center presented: ${presented}`));
      }}
        title="Show Message Center"
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
