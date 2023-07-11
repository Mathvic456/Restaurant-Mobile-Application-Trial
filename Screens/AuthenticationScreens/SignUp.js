import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const checkAllFields = () => {
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '' || repeatPassword.trim() === '') {
      setModalVisible(true);
    } else if (password !== repeatPassword) {
      setModalVisible(true);
    } else {
      // Perform the sign-up action here
      // You can navigate to another screen or perform other actions
      navigation.navigate('Home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Sign up</Text>

      <View style={styles.FullNameContainer}>
        <TextInput
          style={styles.FullNameInput}
          placeholder="Full name"
          placeholderTextColor="black"
          cursorColor="black"
          onChangeText={(text) => setFullName(text)}
          value={fullName}
        />
      </View>

      <View style={styles.EmailContainer}>
        <TextInput
          style={styles.EmailInput}
          placeholder="E-mail"
          placeholderTextColor="black"
          cursorColor="black"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
      </View>

      <View style={styles.PasswordContainer}>
        <TextInput
          style={styles.PasswordInput}
          placeholder="Password"
          placeholderTextColor="black"
          cursorColor="black"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      <View style={styles.PasswordContainer}>
        <TextInput
          style={styles.PasswordInput}
          placeholder="Repeat Password"
          placeholderTextColor="black"
          cursorColor="black"
          secureTextEntry={true}
          onChangeText={(text) => setRepeatPassword(text)}
          value={repeatPassword}
        />
      </View>

      <TouchableOpacity style={styles.SignUp} onPress={checkAllFields}>
        <Text style={styles.SignUpText}>Sign Up</Text>
      </TouchableOpacity>

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

      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Please fill all the fields correctly.</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: '5%',
    paddingLeft: '5%',
    paddingRight: '5%',
    paddingBottom: '5%',
  },
  FullNameContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '10%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  FullNameInput: {
    borderColor: 'green',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    fontSize: 21,
  },
  EmailContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '5%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
  },
  EmailInput: {
    borderColor: 'green',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    fontSize: 21,
  },
  PasswordContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '5%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  PasswordInput: {
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    fontSize: 21,
    width: '90%',
  },
  SignUp: {
    height: 50,
    width: '60%',
    alignSelf: 'center',
    marginTop: '5%',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e7a5e2',
  },
  SignUpText: {
    fontSize: 25,
    color: 'white',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#e7a5e2',
    borderRadius: 10,
    padding: 10,
    minWidth: 100,
    alignItems: 'center',
  },
  modalButtonText: {
    color: 'white',
    fontSize: 18,
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
});

export default SignUp;
