/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import falcor from 'falcor';
import HttpDataSource from 'falcor-http-datasource';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FalcorDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Hello from React Native!' };
  }

  componentDidMount() {
    const model = new falcor.Model({
      source: new HttpDataSource('http://localhost:3000/model.json')
    });

    model.get('greeting').then((response) => {
      this.setState({
        greeting: response.json.greeting
      });
    })
    .catch((err) => {
      this.setState({
        greeting: 'We had trouble connecting to Falcor. Is the server running?'
      });
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {this.state.greeting}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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

AppRegistry.registerComponent('FalcorDemo', () => FalcorDemo);
