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
    Platform,
    AsyncStorage,
    ListView,
    InteractionManager,






} from 'react-native';


import Storage from 'react-native-storage';
import Swiper from 'react-native-swiper';
import Geolocation from 'Geolocation';



const WINWIDTH = Dimensions.get('window').width;
const WINHEIGHT = Dimensions.get('window').height;


var storage = new Storage({
    // 最大容量，默认值1000条数据循环存储
    size: 1000,

    // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
    // 如果不指定则数据只会保存在内存中，重启后即丢失
    storageBackend: AsyncStorage,

    // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
    defaultExpires: null,

    // 读写时在内存中缓存数据。默认启用。
    enableCache: true,

    // 如果storage中没有相应数据，或数据已过期，
    // 则会调用相应的sync同步方法，无缝返回最新数据。
    sync: {
        // 同步方法的具体说明会在后文提到
    }
});


global.storage = storage;

var ipdy = 'api.jxqianyi.com';
global.ipdy = ipdy;


export  default class home extends Component {
    constructor(props) {
        super(props);
        var ds =new ListView.DataSource({rowHasChanged:(r1,r2)=> r1!==r2});
        this.state = {
            dataSource: ds,
            imgurls: '',
        };

        Geolocation.getCurrentPosition((data) => {
            //为了看到效果 不要用console输出，同时记得计时器一定要全部清空，否则会有问题，而且一时看不出
            // alert('得到位置信息-'+JSON.stringify(data.coords)+'当前时间为：'+moment().format('YYYY-MM-DD HH:mm:ss'));
            // console.log(JSON.stringify(data.coords));
            this.setState({
                lat: data.coords.latitude.toString(),
                lng:data.coords.longitude.toString()})
            //实时获取地理位置
            this._data();


        }, () => {});



    }



    _data(){

        InteractionManager.runAfterInteractions(() => {

            //通过经纬度api获取返回地理位置参数
            fetch('http://api.haoservice.com/api/getLocationinfor?latlng='+this.state.lat+','+this.state.lng+'&type=2&key=b81a11973e6c4776bf11adcbcce6e2d8')
                .then((response) => response.json())
                .then((responseJson) => {
                    //获取到返回地理位置参数json
                    console.log(responseJson),

                        this.setState({
                            city: responseJson.result.city,
                            province: responseJson.result.province,


                        }),
                        //最近十条接口
                        console.log('http://'+ipdy+'/app_dev.php/business/gettenbusiness/'+this.state.lat+'/'+this.state.lng+'/'+this.state.province+'/'+this.state.city)

                    fetch('http://'+ipdy+'/app_dev.php/business/gettenbusiness/'+this.state.lat+'/'+this.state.lng+'/'+this.state.province+'/'+this.state.city)
                        .then((response) => response.json())
                        .then((responseJson) => {
                            console.log(responseJson)
                            if(responseJson.code==10000){
                                this.setState({dataSource: this.state.dataSource.cloneWithRows(responseJson.data),dataState:1})
                            }else if(responseJson.code==10001){
                                this.setState({dataState:0})
                            }
                        })
                        .catch((error) => {

                        })

                }).catch((error) => {
                console.error(error);

            });

        });

    }

    showProductDetail(id){
        this.props.navigator.push({
            name:'details',
            params:{
                'bid':id,
            }
        })
    }

    _renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={1}style={{backgroundColor:'#ffffff'
            }}  >
                <View style={{
                    width:WINWIDTH,
                    height:WINHEIGHT*(0.2),
                    borderBottomColor:'#e6e6e6',
                    borderBottomWidth:1,
                    flexDirection:'row',
                    padding:WINWIDTH*(0.03),

                }}>

                    <Image source ={{uri:'http://www.jxqianyi.com/Uploads/'+rowData.imgurl}} style={{
                        width:WINWIDTH*(0.35),
                        height:WINWIDTH*(0.28),
                    }}/>
                    <View>
                        <Text style={styles.TX}>{rowData.title}</Text>
                        <View style = {{width:WINWIDTH*(0.06),marginTop:WINHEIGHT*(0.01),marginLeft:WINWIDTH*(0.03)}}>
                            {/*<StarRating*/}
                                {/*disabled={true}*/}
                                {/*maxStars={5}*/}
                                {/*rating={rowData.star}*/}
                                {/*selectedStar={(rating) => this.onGeneralStarRatingPress(rating)}*/}
                                {/*starColor={'orange'}*/}
                                {/*emptyStarColor={'orange'}*/}
                                {/*starSize = {WINWIDTH*(0.05)}*/}

                            {/*/>*/}
                        </View>
                        <Text style={styles.TX1}>{rowData.address.substr(0,12)}...</Text>
                        <View style={{flexDirection:'row',alignItems:'flex-end',}}>
                            <Text style={styles.TX3}>Tel:{rowData.phonenum}</Text>
                            <Text style={styles.TX2}>{(rowData.dis/1000).toFixed(1)}km</Text>
                        </View>
                    </View>


                </View>


            </TouchableOpacity>



        )

    }




    componentDidMount() {




    }

    render() {
        return (
            <ScrollView style={{flex:1,backgroundColor:'#e5e5e5'}}>
                <View
                    style={{height:Platform.OS == 'ios' ? 64 : WINHEIGHT*(0.09),backgroundColor:'#F0454D',flexDirection:'row',alignItems:'center',justifyContent:'space-between',}}>
                    <View
                        style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),flexDirection:'row',marginTop:WINHEIGHT*(0.02)}}>
                        {/*<TouchableOpacity onPress = {() => this.props.navigator.pop()} style={{flex:1,width:WINWIDTH*(0.15),justifyContent:'center',alignItems:'center',}}>*/}
                        {/*<Image source={require('../../img/fanhui.png')}*/}
                        {/*style={{width:WINWIDTH*(0.07),height:WINWIDTH*(0.07),}}*/}
                        {/*/>*/}
                        {/*</TouchableOpacity>*/}
                        <View style={{flex:1,width:WINWIDTH*(0.15),}}></View>
                    </View>

                    <View
                        style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),justifyContent:'center',alignItems:'center',marginTop:WINHEIGHT*(0.02)}}>
                        <Text style={{fontSize:WINWIDTH*(0.05),color:'#f6f6f6'}}>首页</Text>
                    </View>

                    <View
                        style={{flex:1,width:WINWIDTH*(0.3),height:Platform.OS == 'ios' ? 44 : WINHEIGHT*(0.06),flexDirection:'row',marginTop:WINHEIGHT*(0.02)}}>
                        <View style={{flex:1,width:WINWIDTH*(0.15)}}>
                        </View>
                        {/*<TouchableOpacity onPress={this._shezhi.bind(this)} style={{flex:1,width:WINWIDTH*(0.15),justifyContent:'center',alignItems:'center'}}>*/}
                        {/*<Text style={{color:'#ffffff',fontSize:WINWIDTH*(0.04)}}>设置</Text>*/}
                        {/*</TouchableOpacity>*/}
                    </View>
                </View>

                {/*轮播图*/}
                <Swiper width={WINWIDTH} height={WINHEIGHT *(0.25)} autoplay={true} showsPagination={true}
                        autoplayout={2.0}>
                    <TouchableOpacity activeOpacity={1} style={styles.slide}>
                        <Image source={require('../../img/lbt.png')} style={{width:WINWIDTH ,height:WINHEIGHT*(0.25)}}/>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} style={styles.slide}>
                        <Image source={require('../../img/lbt.png')} style={{width:WINWIDTH ,height:WINHEIGHT*(0.3)}}/>
                    </TouchableOpacity>
                </Swiper>
                {/*4按钮*/}
                <View style={{width:WINWIDTH,height:WINHEIGHT*0.15,backgroundColor:'#f5f5f5',flexDirection:'row',justifyContent:'space-around',alignItems:'center',borderBottomColor:'#dbdbdb',borderBottomWidth:1}}>
                <TouchableOpacity style={{width:WINWIDTH*0.2,height:WINHEIGHT*0.15,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center'}}>
                    <Image source={require('../../img/区域与板块-01.png')} style={{width:WINWIDTH*0.1,height:WINWIDTH*0.1,}} />
                    <Text style={{fontSize:WINWIDTH*0.03,color:'#696969',marginTop:10}}>区域商城</Text>
                </TouchableOpacity>

                    <TouchableOpacity style={{width:WINWIDTH*0.2,height:WINHEIGHT*0.15,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../img/oder222.png')} style={{width:WINWIDTH*0.1,height:WINWIDTH*0.1,}} />
                        <Text style={{fontSize:WINWIDTH*0.03,color:'#696969',marginTop:10}}>我的订单</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:WINWIDTH*0.2,height:WINHEIGHT*0.15,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../img/shangcheng.png')} style={{width:WINWIDTH*0.1,height:WINWIDTH*0.1,}} />
                        <Text style={{fontSize:WINWIDTH*0.03,color:'#696969',marginTop:10}}>双创商城</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{width:WINWIDTH*0.2,height:WINHEIGHT*0.15,backgroundColor:'#f5f5f5',justifyContent:'center',alignItems:'center'}}>
                        <Image source={require('../../img/红包.png')} style={{width:WINWIDTH*0.1,height:WINWIDTH*0.1,}} />
                        <Text style={{fontSize:WINWIDTH*0.03,color:'#696969',marginTop:10}}>红包特权</Text>
                    </TouchableOpacity>
                </View>

                <View style={{borderBottomColor:'#dbdbdb',borderBottomWidth:1,flexDirection:'row',backgroundColor:'#f5f5f5',height:WINHEIGHT*(0.06),alignItems:'center'}}>
                    <View style={{backgroundColor:'#F0454D',width:WINWIDTH*(0.01),height:WINHEIGHT*(0.02)}}></View>
                    <Text
                        style={{
                                fontSize:WINWIDTH*(0.035),
                                marginLeft:WINWIDTH*(0.06)
                            }}
                    >猜你喜欢</Text>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow.bind(this)}
                    enableEmptySections = {true}
                />






            </ScrollView>


        )
    }


}


const styles = StyleSheet.create({

    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    },
    TX:{
        marginLeft:WINWIDTH*(0.03),
        fontSize:WINWIDTH*(0.04),
    },
    TX1:{
        color:'#696969',
        marginLeft:WINWIDTH*(0.03),
        fontSize:WINWIDTH*(0.04),
        marginTop:WINHEIGHT*(0.01),

    },
    TX2:{
        color:'#696969',
        marginLeft:WINWIDTH*(0.05),
        fontSize:WINWIDTH*(0.04),
        marginTop:WINHEIGHT*(0.01),


    },
    TX3:{
        color:'red',
        fontWeight:'bold',
        marginLeft:WINWIDTH*(0.03),
        fontSize:WINWIDTH*(0.035),
        marginTop:WINHEIGHT*(0.01),

    }


});

