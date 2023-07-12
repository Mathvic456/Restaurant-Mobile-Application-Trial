import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../MajorScreens/Home";
import Profile from "../MajorScreens/Profile";
import Stores from "../MajorScreens/Stores";
import Favourites from "../MajorScreens/Favourites";
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        width: '80%',
        alignSelf: 'center',
        marginBottom: 10,
        justifyContent: 'center',
        marginTop: 10,
        height: 60,
        borderRadius: 45,
        backgroundColor: '#e7a5e2',
        position:'absolute',
        left:'10%',
      },
    }}>
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="home" color={focused ? 'black' : 'black'} size={24} />
        ), headerShown: false, tabBarActiveTintColor:'black', 
      }}  />
      <Tab.Screen name="Stores" component={Stores} options={{
        tabBarIcon: ({ focused }) => (
          <Feather name="map" color={focused ? 'black' : 'black'} size={24} />
        ), headerShown: false, tabBarActiveTintColor:'black'
      }} />
      <Tab.Screen name="Favourites" component={Favourites} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="heart" color={focused ? 'black' : 'black'} size={24} />
        ), headerShown: false, tabBarActiveTintColor:'black'
      }} />
      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="user" color={focused ? 'black' : 'black'} size={24} />
        ), headerShown: false, tabBarActiveTintColor:'black'
      }} />
    </Tab.Navigator>
  );
};

export default Navigator;
