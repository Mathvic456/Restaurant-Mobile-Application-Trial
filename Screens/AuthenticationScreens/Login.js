//import liraries
import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';



// create a component
const Login = () => {
    const navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordSecure, setPasswordSecure] = useState(true);

    const togglePasswordSecureEntry = () => {
        setPasswordSecure(!passwordSecure);
      };

    const Login = () => {
        navigation.navigate("Navigator")
    }

    const ForgotPassword = () => {
        navigation.navigate("ForgotPassword")
    }

    const SignUp = () => {
        navigation.navigate("SignUp")
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar style="auto"/>
            <Text style={{fontWeight:'bold',fontSize:30}}>Log in</Text>
            <View style={styles.AuthOptions}>
                <TouchableOpacity style={styles.AppleLogin}>
                    <AntDesign name="apple1" size={30} color="black" />
                    <Text style={{fontWeight:'bold',fontSize:22}}>Apple</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.GoogleLogin}>
                    <AntDesign name="google" size={30} color="black" />
                    <Text style={{fontWeight:'bold',fontSize:22}}>Google</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.OptionContainer}>
                <View style={{borderWidth:1,width:'30%',height:0}}></View>
                <Text style={{fontWeight:'bold',fontSize:16}}>Or log in with e-mail</Text>
                <View style={{borderWidth:1,width:'30%',height:0}}></View>
            </View>
            <View style={styles.EmailContainer}>
                <TextInput style={styles.EmailInput} placeholder='E-mail' placeholderTextColor={'black'} cursorColor={'black'}></TextInput>
            </View>
            <View style={styles.PasswordContainer}>
                <TextInput style={styles.PasswordInput} placeholder='Password' placeholderTextColor={'black'} cursorColor={'black'} secureTextEntry={passwordSecure} onChangeText={text => setPassword(text)}></TextInput>
                <TouchableOpacity onPress={togglePasswordSecureEntry} style={{borderWidth:0}}>
                    <Ionicons name={passwordSecure ? "eye-off" : "eye"} size={24} color="gray" />
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={ForgotPassword}>
            <Text style={{fontSize:18,marginTop:15,alignSelf:'flex-end'}}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.Login} onPress={Login}>
                <Text style={styles.LoginText}>Log in</Text>
            </TouchableOpacity>


            <Text style={{fontSize:18,marginTop:'auto',alignSelf:'center'}}>Don't have an account?</Text>
            <TouchableOpacity style={{alignSelf:'center'}} onPress={SignUp}><Text style={{color:'#e7a5e2',fontSize:18,}}>Sign Up</Text></TouchableOpacity>
        </SafeAreaView>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop:'5%',
        paddingLeft:'5%',
        paddingRight:'5%',
        paddingBottom:'5%',
    },
    AuthOptions:{
        // borderWidth:1,
        borderColor:'black',
        marginTop:'5%',
        height:55,
        flexDirection:'row',
        paddingLeft:'10%',
        paddingRight:'10%',
        justifyContent:'space-between',
    },
    AppleLogin:{
        borderWidth:1,
        borderColor:'black',
        width:'40%',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    GoogleLogin:{
        borderWidth:1,
        borderColor:'black',
        width:'40%',
        borderRadius:20,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
    },
    OptionContainer:{
        // borderWidth:1,
        borderColor:'black',
        marginTop:'4%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly'
    },
    EmailContainer:{
        borderWidth:1,
        borderColor:'black',
        marginTop:'10%',
        height:60,
        borderRadius:10,
        overflow:'hidden'
    },
    EmailInput:{
        // borderWidth:1,
        borderColor:'green',
        height:'100%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        fontSize:21,
    },
    PasswordContainer:{
        borderWidth:1,
        borderColor:'black',
        marginTop:'5%',
        height:60,
        borderRadius:10,
        overflow:'hidden',
        flexDirection:'row',
        alignItems:'center'
    },
    PasswordInput:{
        // borderWidth:1,
        // borderColor:'green',
        height:'100%',
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        paddingLeft:15,
        fontSize:21,
        width:'90%'
    },
    Login:{
        // borderWidth:1,
        height:50,
        width:'60%',
        alignSelf:'center',
        marginTop:'5%',
        borderRadius:15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#e7a5e2',
    },
    LoginText:{
        fontSize:25,
        color:'white',
    },
});

//make this component available to the app
export default Login;
