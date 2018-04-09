//Importações
import { Text, View, StyleSheet, ScrollView, Alert} from 'react-native';
import React, { Component } from 'react';
import Itens from './Itens'
import axios from 'axios';

/*Aqui temos um bom exemplo de execução assíncrona dos métodos 
do ciclo de montagem de um componente, pois a requisição HTTP é executada via 
método componentWillMount e enquanto ela está sendo executada, o fluxo de execução é direcionado 
para o método render*/


export default class ListaItens extends Component{
    //Ciclo de montagem de um componente
    
    constructor(props){
        super(props);
        this.state = { listaItens:[] };
    }

    //A requisição HTTP será feita antes da renderização do componente.
    
    componentWillMount(){
        //Requisição HTTP
        axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
             .then(response => {this.setState({listaItens: response.data});})
             .catch(() => {Alert.alert('Erro ao recuperar os dados')});
    }
    

    //{this.state.listaItens.map((item) => { return(<Text>{item.titulo}</Text>) })}

    render(){
        return(
            <ScrollView>
                <View>
                    {this.state.listaItens.map(item => { return (<Itens key = {item.titulo} item = {item} navigation = {this.props.navigation}/>)})}
                </View>
            </ScrollView>
        );        
    }
}

