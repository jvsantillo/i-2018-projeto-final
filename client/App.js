import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Inicio from './src/components/Inicio';
import DetalhesItem from './src/components/DetalhesItem';
import {StackNavigator} from 'react-navigation';


export default class App extends Component{
  render(){
    return <NavegacaoCentral/>
  }
}

const NavegacaoCentral = StackNavigator({
  Principal: {
    screen: Inicio //referenciar apenas o nome do compenente no arquivo de configuração de rota
  },
  DetalhesItem: {
    screen: DetalhesItem  
  }
},
  {
    initialRouteName: 'Principal'
  }
);






