//Importações
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';

export default class DetalhesItem extends Component{

    render(){

        /* Leitura dos parâmetros recibidos da atividade anterior, através do state
        da props navigation */
        const { params } = this.props.navigation.state;
        const item_titulo = params ? params.item_titulo : null;
        const item_foto = params ? params.item_foto : null;
        const item_valor = params ? params.item_valor : null;
        const item_local_anuncio = params ? params.item_local_anuncio : null;
        const item_publicacao = params ? params.item_publicacao : null;

        return(<View>
                            <View style = {styles.detalhe_item}>    
                                
                                <View style = {styles.view_imagem}>
                                    <Image style={{width: 175, height: 175}} source={{uri: item_foto}}/>
                                </View>
                                
                                <View style = {styles.view_titulo}>
                                    <Text style = {styles.texto_titulo}>{JSON.stringify(item_titulo)}</Text>
                                </View>
                              
                            </View>
                            
                            <Text>{JSON.stringify(item_valor)}</Text>
                            <Text>{JSON.stringify(item_local_anuncio)}</Text>    
                            <Text>{JSON.stringify(item_publicacao)}</Text> 
                </View>
        );
    }
}

const styles = StyleSheet.create({
    detalhe_item: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      //width: Dimensions.get('window').width * 0.9,
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
        width: 200,
        height: 200
    }

});