/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
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
    Dimensions,



} from 'react-native';

import Home from './home';
import Lbs from '../near/lbs';
import Mall from '../mall/mall';
import My from '../my/my';



const WINWIDTH = Dimensions.get('window').width;
const WINHEIGHT = Dimensions.get('window').height;


import TabNavigator from 'react-native-tab-navigator';



var ipdy = 'xinchangtai.dayuanyun.cn';
global.ipdy = ipdy;

var qm = 'pass4xcht';
global.qm = qm;

var tu = 'xctadmin.dayuanyun.cn';
global.tu = tu;

var c = '#ffa07a';
global.c = c;

var filetitle ='薪常态';
global.filetitle = filetitle;

//关于我们
var letter ='Copyrght © 2016-2016 XinChangTai.All Rights Reservrd.';
global.letter = letter;

export  default class root extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'home',
        };
    }










    // _onDidFocus(obj)
    // {
    //     if(obj.name == 'home'||obj.name=='shop'||obj.name=='cart'||obj.name=='me'||obj.name == 'login')
    //     {
    //         this.setState({boolheight:1});
    //     }else
    //     {
    //         this.setState({boolheight:0});
    //     }
    // }

//     tabBarStyle={this.state.boolheight?styles.norTabBarStyle:styles.tabBarStyle}
// sceneStyle={{ paddingBottom: 0 }}

    render() {
        return (
            <TabNavigator
                tabBarStyle={{height:WINHEIGHT*0.08}}
            >


                <TabNavigator.Item
                    ref={'tab1'}
                    selectedTitleStyle={{color:'black'}}
                    selected={this.state.selectedTab === 'home'}
                    title="首页"
                    renderIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/home.png')} />}
                    renderSelectedIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/home-s.png')} />}
                    onPress={() => this.setState({ selectedTab: 'home' })}>

                    <Navigator
                        ref={'nav1'}
                        initialRoute={{name: 'home', component:Home}}
                        renderScene={
                            (route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator}/>
                            }
                        }
                    />
                </TabNavigator.Item>


                <TabNavigator.Item
                    selected={this.state.selectedTab === 'lbs'}
                    title="附近"
                    selectedTitleStyle={{color:'black'}}
                    renderIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/lsb.png')} />}
                    renderSelectedIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/lbs-s.png')} />}
                    onPress={() => this.setState({ selectedTab: 'lbs'})}>
                    <Navigator
                        ref={'nav2'}
                        //translucent={false}
                        initialRoute={{name: 'lbs', component:Lbs}}
                        renderScene={
                            (route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator}/>
                            }
                        }
                    />
                </TabNavigator.Item>


                <TabNavigator.Item

                    selected={this.state.selectedTab === 'mall'}
                    title="商城"
                    selectedTitleStyle={{color:'black'}}
                    renderIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/mall.png')} />}
                    renderSelectedIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/mall-s.png')} />}
                    onPress={() => this.setState({ selectedTab: 'mall'})}>
                    <Navigator
                        ref={'nav3'}
                        initialRoute={{name: 'mall',component:Mall}}
                        renderScene={
                            (route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator}/>
                            }
                        }
                    />
                </TabNavigator.Item>


                <TabNavigator.Item

                    selected={this.state.selectedTab === 'my'}
                    title="我的"
                    selectedTitleStyle={{color:'black'}}
                    renderIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/my.png')} />}
                    renderSelectedIcon={() => <Image style={{width:WINWIDTH*0.08,height:WINWIDTH*0.08}} source={require('../../img/my-s.png')} />}
                    onPress={() => this.setState({ selectedTab: 'my'})}>
                    <Navigator
                        ref={'nav4'}
                        initialRoute={{name: 'my',component:My }}
                        renderScene={
                            (route, navigator) => {
                                let Component = route.component;
                                return <Component {...route.params} navigator={navigator}/>
                            }
                        }

                    />
                </TabNavigator.Item>

            </TabNavigator>


        )
    }


}


