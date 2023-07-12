import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashOne from './ Screens/SplashScreens/SplashOne';
// import SplashTwo from './Screens/SplashScreens/SplashTwo';
// import SplashThree from './Screens/SplashScreens/SplashThree';
import Login from './Screens/AuthenticationScreens/Login';
import SignUp from './Screens/AuthenticationScreens/SignUp';
import ForgotPassword from './Screens/AuthenticationScreens/ForgotPassword';
import SplashOne from './Screens/SplashScreens/SplashOne';
import SplashTwo from './Screens/SplashScreens/SplashTwo';
import SplashThree from './Screens/SplashScreens/SplashThree';
import Navigator from './Screens/Navigator/Navigator';
import { useFonts } from 'expo-font';



const Stack = createNativeStackNavigator();

export default function App() {

  const [ Fonts ] = useFonts ({
    'Montserrat-Black' : require('./assets/Fonts/Montserrat-Black.ttf'),
    'Montserrat-BlackItalic' : require('./assets/Fonts/Montserrat-BlackItalic.ttf'),
    'Montserrat-Bold' : require('./assets/Fonts/Montserrat-Bold.ttf'),
    'Montserrat-BoldItalic' : require('./assets/Fonts/Montserrat-BoldItalic.ttf'),
    'Montserrat-ExtraBold' : require('./assets/Fonts/Montserrat-ExtraBold.ttf'),
    'Montserrat-ExtraBoldItalic' : require('./assets/Fonts/Montserrat-ExtraBoldItalic.ttf'),
    'Montserrat-Italic' : require('./assets/Fonts/Montserrat-Italic.ttf'),
    'Montserrat-Light' : require('./assets/Fonts/Montserrat-Light.ttf'),
    'Montserrat-LightItalic' : require('./assets/Fonts/Montserrat-LightItalic.ttf'),
    'Montserrat-Medium' : require('./assets/Fonts/Montserrat-Medium.ttf'),
    'Montserrat-MediumItalic' : require('./assets/Fonts/Montserrat-MediumItalic.ttf'),
    'Montserrat-Regular' : require('./assets/Fonts/Montserrat-Regular.ttf'),
    'Montserrat-SemiBold' : require('./assets/Fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-SemiBoldItalic' : require('./assets/Fonts/Montserrat-SemiBoldItalic.ttf'),
    'Montserrat-Thin' : require('./assets/Fonts/Montserrat-Thin.ttf'),
    'Montserrat-ThinItalic' : require('./assets/Fonts/Montserrat-ThinItalic.ttf'),
  });  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = "SplashOne" component={SplashOne} options={{headerShown: false}}/>
        <Stack.Screen name = "SplashTwo" component={SplashTwo} options={{headerShown: false}}/>
        <Stack.Screen name = "SplashThree" component={SplashThree} options={{headerShown: false}}/>
        <Stack.Screen name = "Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name = "SignUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name = "ForgotPassword" component={ForgotPassword} options={{headerShown: false}}/>
        <Stack.Screen name = "Navigator" component={Navigator} options={{headerShown: false}}/>
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
