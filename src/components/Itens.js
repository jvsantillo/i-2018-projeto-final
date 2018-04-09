//Importações
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import { Button } from 'react-native';

export default class Itens extends Component{

    render(){
        return(<View style = {styles.item}>
                            <View style = {styles.view_titulo}>
                                <Text style = {styles.texto_titulo}>{this.props.item.titulo}</Text>
                            </View>
                            <View style = {styles.view_imagem}>
                                <Image style={{width: 250, height: 250}} source={{uri: this.props.item.foto}}/>
                            </View>
                            <Text>{this.props.item.valor}</Text>
                            <Text>{this.props.item.local_anuncio}</Text>    
                            <Text>{this.props.item.data_publicacao}</Text>
                            
                            

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
                </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
      justifyContent: 'space-between',
      alignItems: 'center',
      width: Dimensions.get('window').width * 0.9,
      marginTop: 10,
      marginBottom: 10,
      backgroundColor: '#CCDAD1',
      borderColor: '#6F6866',
      borderWidth: 0.5
    }, 
    texto_titulo: {
        textAlign: 'center',
        fontWeight: "300", 
        fontSize: 20,
        fontFamily: 'Arial',
        
    },

    view_titulo:{
        width: 200,
        height: 50,
        marginBottom: 10,
        marginTop: 5
    }, 

    view_imagem:{
        width: 252,
        height: 252
    }

});