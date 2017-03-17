
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



export  default class home extends  Component{
    constructor(props){
        super(props);
        this.state={

        };
    }



    render(){
        return(
            <View style={{flex:1}}>

                <View style={{height:Platform.OS == 'ios' ? 64 : WINHEIGHT*(0.09),backgroundColor:'#DC143C',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                    <View style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),flexDirection:'row',marginTop:WINHEIGHT*(0.02)}}>
                        {/*<TouchableOpacity onPress = {() => this.props.navigator.pop()} style={{flex:1,width:WINWIDTH*(0.15),justifyContent:'center',alignItems:'center',}}>*/}
                        {/*<Image source={require('../../img/fanhui.png')}*/}
                        {/*style={{width:WINWIDTH*(0.07),height:WINWIDTH*(0.07),}}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                        <View style={{flex:1,width:WINWIDTH*(0.15),}}></View>
                    </View>


                    <View style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),justifyContent:'center',alignItems:'center',marginTop:WINHEIGHT*(0.02)}}>
                        <Text style={{fontSize:WINWIDTH*(0.05),color:'#f6f6f6'}}>首页</Text>
                    </View>


                    <View style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),flexDirection:'row',marginTop:WINHEIGHT*(0.02)}}>
                        <View style={{flex:1,width:WINWIDTH*(0.15)}}>
                        </View>
                        {/*<TouchableOpacity onPress={this._shezhi.bind(this)} style={{flex:1,width:WINWIDTH*(0.15),justifyContent:'center',alignItems:'center'}}>*/}
                        {/*<Text style={{color:'#ffffff',fontSize:WINWIDTH*(0.04)}}>设置</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>

                </View>

            </View>


        )
    }



}


