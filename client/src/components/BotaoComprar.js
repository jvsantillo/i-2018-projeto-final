import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import React, { Component } from 'react';
import {Button}  from 'react-native';



export default class BotaoDetalhesItem extends Component{

    render(){

        return(
                        <Button
                            onPress = {() => {
                                <amqp></amqp>

                            }}
                            title = "Comprar"
                            >
                        </Button>


        );
    }

}

// if the connection is closed or fails to be established at all, we will reconnect
