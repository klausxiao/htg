
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Navigator,
    TouchableOpacity,
    TextInput,
    Dimensions


} from 'react-native';



const  WINWIDTH = Dimensions.get('window').width;
const  WINHEIGHT = Dimensions.get('window').height;

import { Button } from 'antd-mobile';

export  default class mall extends  Component{
    constructor(props){
        super(props);
        this.state={

        };
    }



    render(){
        return(
            <View style={{marginTop:40}}>
                <Button  style={{backgroundColor:'red'}} type="primary" size='small' onClick={e => console.log(e)}>primary 按钮</Button>


            </View>
        )
    }



}


