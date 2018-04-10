import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import {Button}  from 'react-native';

export default class BotaoDetalhesItem extends Component{

    render(){

        return(
                        <Button
                            onPress = {() => {this.props.navigation.navigate('DetalhesItem', {
                                item_titulo: this.props.item.titulo,
                                item_foto: this.props.item.foto,
                                item_valor: this.props.item.valor,
                                item_local_anuncio: this.props.item.local_anuncio,
                                item_publicacao: this.props.item.data_publicacao})}}
                            title = "Detalhes do item"
                            >
                        </Button>
        );
    }

}