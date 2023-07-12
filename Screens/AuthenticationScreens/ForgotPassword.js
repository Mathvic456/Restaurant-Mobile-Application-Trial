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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [successModalVisible, setSuccessModalVisible] = useState(false);
  const navigation = useNavigation();

  const checkFields = () => {
    if (email.trim() === '' || !validateEmail(email)) {
      setModalVisible(true);
    } else {
      // Perform the reset password action here
      // You can navigate to a success screen or perform other actions
      showSuccessModal();
    }
  };

  const showSuccessModal = () => {
    setSuccessModalVisible(true);
  };

  const validateEmail = (email) => {
    // Simple email validation regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', alignSelf: 'center', marginTop: '20%' }}>
        Forgot password
      </Text>
      <Text style={{ fontSize: 18, alignSelf: 'center', marginTop:'2%'  }}>Forgotten your password? No problem!</Text>
      <Text style={{ fontSize: 18, alignSelf: 'center' }}>Just type in the email with your account</Text>
      <Text style={{ fontSize: 18, alignSelf: 'center' }}>associated with your account</Text>


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

      <TouchableOpacity style={styles.Login} onPress={checkFields}>
        <Text style={styles.LoginText}>Reset password</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                {email.trim() === ''
                  ? 'Please enter your email address.'
                  : 'Please enter a valid email address.'}
              </Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.modalButtonText}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <Modal visible={successModalVisible} animationType="fade" transparent>
        <TouchableWithoutFeedback onPress={() => setSuccessModalVisible(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>A link has been sent to your email, to enable you .</Text>
              <TouchableOpacity style={styles.modalButton} onPress={() => setSuccessModalVisible(false)}>
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
  EmailContainer: {
    borderWidth: 1,
    borderColor: 'black',
    marginTop: '10%',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
  },
  EmailInput: {
    borderColor: 'green',
    height: '100%',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    fontSize: 21,
    fontWeight: 'normal',
  },
  Login: {
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
  LoginText: {
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
});

export default ForgotPassword;
