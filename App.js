import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashOne from './Screens/SplashScreens/SplashOne';
import SplashTwo from './Screens/SplashScreens/SplashTwo';
import SplashThree from './Screens/SplashScreens/SplashThree';
import Login from './Screens/AuthenticationScreens/Login';
import SignUp from './Screens/AuthenticationScreens/SignUp';
import ForgotPassword from './Screens/AuthenticationScreens/ForgotPassword';
import Home from './Screens/Screens/Home';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name = "SplashOne" component={SplashOne} options={{headerShown: false}}/>
      <Stack.Screen name = "SplashTwo" component={SplashTwo} options={{headerShown: false}}/>
      <Stack.Screen name = "SplashThree" component={SplashThree} options={{headerShown: false}}/>
        <Stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name = "SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name = "Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
});
