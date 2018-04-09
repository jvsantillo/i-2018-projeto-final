import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';
import ListaItens from './ListaItens';


export default class Inicio extends Component {
    render() {
      return (
        <View style={styles.container}>
          <ListaItens navigation = {this.props.navigation}></ListaItens>
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
    }});