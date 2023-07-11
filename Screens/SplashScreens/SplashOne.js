//import liraries
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import One from '../../assets/Onboarding/One.png';


// create a component
const SplashOne = () => {
    const navigation = useNavigation();

    const NextPage = () => {
        navigation.navigate("SplashTwo")
    }
    const Skip = () => {
        navigation.navigate("Login")
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto" />
            <TouchableOpacity style={styles.SkipButton} onPress={Skip}>
                <Text style={{color:'#e7a5e2',fontWeight:'bold',fontSize:18}}>Skip</Text>
            </TouchableOpacity>
            <View style={styles.ImageHolder}>
                <Image source={One} style={{height:'100%',width:'100%',}}/>
            </View>
            <View style={styles.TextContainer}>
                <Text style={{fontSize:25,fontWeight:'bold'}}>Enjoy your meals {'\n'} near your house</Text>
            </View>
            <View style={styles.Pointer}>
                <View style={{borderWidth:0,borderColor:'blue',flexDirection:'row',width:'20%',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{borderWidth:6,borderColor:'#b563b0',borderRadius:100,height:5,width:30}}></View>
                    <View style={{borderWidth:6,borderColor:'#b563b0',borderRadius:100,height:0}}></View>
                    <View style={{borderWidth:6,borderColor:'#b563b0',borderRadius:100,height:0}}></View>
                    <View style={{borderWidth:6,borderColor:'#b563b0',borderRadius:100,height:0,}}></View>
                </View>
            </View>
            <View style={styles.NextHouse}>
                <TouchableOpacity style={styles.Next} onPress={NextPage}>
                    <Text style={{fontWeight:'bold',fontSize:25,color:'white'}}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      SkipButton:{
        borderWidth:2,
        borderColor:'#b563b0',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
        width:'23%',
        alignSelf:'flex-end',
        borderRadius:20,
        marginTop:'5%',
        marginRight:'3%',
      },
      ImageHolder:{
        // borderWidth:1,
        borderColor:'black',
        height:'60%',
        marginTop:'10%',
      },
      TextContainer:{
        // borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      },
      Pointer:{
        // borderWidth:1,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'center',
        marginTop:'4%'
      },
      NextHouse:{
        // borderWidth:1,
        borderColor:'black',
        borderTopRightRadius:35,
        borderTopLeftRadius:35,
        marginTop:'auto',
        backgroundColor:'#e7a5e2',
        justifyContent:'center',
        alignItems:'center',
        height:150
      },
      Next:{
        // borderWidth:1,
        borderColor:'black',
        height:50,
        width:'55%',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#b563b0',
      },
});

//make this component available to the app
export default SplashOne;
