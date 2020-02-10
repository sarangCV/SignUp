import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, ActivityIndicator } from 'react-native';

export default class LoadingScreen extends Component {
    
  render() {
    const navigation = this.props.navigation;
    return (
      <View style = {styles.container}>
        <ActivityIndicator
        size = "large"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
