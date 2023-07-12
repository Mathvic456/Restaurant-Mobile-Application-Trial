import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground } from 'react-native';
import One from '../../assets/Resturants/One.png';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import Two from '../../assets/Resturants/Two.png';
import Three from '../../assets/Resturants/Three.png';
import Four from '../../assets/Resturants/Four.png';
import Five from '../../assets/Resturants/Five.png';
import Six from '../../assets/Resturants/Six.png';
import Seven from '../../assets/Resturants/Seven.png';
import Eight from '../../assets/Resturants/Eight.png';
import Nine from '../../assets/Resturants/Nine.png';



// Array of Nigerian states
const states = [
  'Abia',
  'Adamawa',
  'Akwa Ibom',
  'Anambra',
  'Bauchi',
  'Bayelsa',
  'Benue',
  'Borno',
  'Cross River',
  'Delta',
  'Ebonyi',
  'Edo',
  'Ekiti',
  'Enugu',
  'FCT - Abuja',
  'Gombe',
  'Imo',
  'Jigawa',
  'Kaduna',
  'Kano',
  'Katsina',
  'Kebbi',
  'Kogi',
  'Kwara',
  'Lagos',
  'Nasarawa',
  'Niger',
  'Ogun',
  'Ondo',
  'Osun',
  'Oyo',
  'Plateau',
  'Rivers',
  'Sokoto',
  'Taraba',
  'Yobe',
  'Zamfara',
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedState, setSelectedState] = useState('Nigeria');

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.FirstContainer}>
        <TouchableOpacity
          style={styles.TextBoxOne}
          onPress={() => setModalVisible(true)}
        >
          <EvilIcons name="location" size={30} color="black" />
          <Text style={{ fontFamily: 'Montserrat-Regular', fontSize: 18 }}>
            {selectedState}
          </Text>
          <Entypo name="chevron-small-down" size={20} color="black" />
        </TouchableOpacity>
        <Fontisto name="bell" size={24} color="black" />
      </View>

      <TouchableOpacity style={styles.NearResturants}>
        <Text style={{fontFamily:'Montserrat-Regular',fontSize:17}}>Resturants near you</Text>
      </TouchableOpacity>

        <View style={styles.HeadlineResturant}>
            <TouchableOpacity style={styles.HeadlineResturantCard}>
                <ImageBackground source={One} style={{height:'100%',width:'100%'}} resizeMode='cover'/>
            </TouchableOpacity>

            <Text style={{fontSize:25,fontFamily:'Montserrat-SemiBold',marginTop:15}}>Idee's Resturant</Text>
            <View style={styles.SecondTextBox}>
                <View style={styles.ResturantAddress}>
                    <EvilIcons name="location" size={24} color="black" />
                    <Text style={{fontFamily:'Montserrat-Regular'}}>Somewhere Str Road, 15</Text>
                </View>
                <View style={styles.OperationTime}>
                    <SimpleLineIcons name="clock" size={18} color="black" style={{marginLeft:40}}/>
                    <Text style={{fontFamily:'Montserrat-Regular',marginLeft:5}}>8:00-22:00</Text>
                </View>
                <Ionicons name="ios-heart-circle-sharp" size={24} color="#e7a5e2"  style={{marginLeft:'auto'}}/>
            </View>
        </View>

        <View style={styles.OtherResturantsHouse}>
            <ScrollView horizontal={true}>
                <TouchableOpacity style={styles.OtherResturantCard}>
                    <View style={styles.ResturantImage}>
                        <ImageBackground source={Two} style={{flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>Somewhere</Text>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>8:00-18:00</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.OtherResturantCard}>
                    <View style={styles.ResturantImage}>
                        <ImageBackground source={Two} style={{flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>Somewhere</Text>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>8:00-18:00</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.OtherResturantCard}>
                    <View style={styles.ResturantImage}>
                        <ImageBackground source={Two} style={{flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>Somewhere</Text>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>8:00-18:00</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.OtherResturantCard}>
                    <View style={styles.ResturantImage}>
                        <ImageBackground source={Two} style={{flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>Somewhere</Text>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>8:00-18:00</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.OtherResturantCard}>
                    <View style={styles.ResturantImage}>
                        <ImageBackground source={Two} style={{flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>Somewhere</Text>
                        <Text style={{fontFamily:'Montserrat-Regular'}}>8:00-18:00</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>

        <TouchableOpacity style={styles.NewsButton}>
          <Text style={{fontFamily:'Montserrat-Bold',fontSize:18}}>News</Text>
        </TouchableOpacity>


        <View style={styles.ResturantNewsHouse}>
          <ScrollView horizontal={true}>
            <TouchableOpacity style={styles.ResturantNewsCard}>
              <View style={styles.ResturantImage}>
                <ImageBackground source={Three} style={{flex:1}} resizeMode='cover'/>
              </View>
              <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,alignSelf:'center'}}>New cafe was opened</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ResturantNewsCard}>
              <View style={styles.ResturantImage}>
                <ImageBackground source={Three} style={{flex:1}} resizeMode='cover'/>
              </View>
              <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,alignSelf:'center'}}>New cafe was opened</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ResturantNewsCard}>
              <View style={styles.ResturantImage}>
                <ImageBackground source={Three} style={{flex:1}} resizeMode='cover'/>
              </View>
              <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,alignSelf:'center'}}>New cafe was opened</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ResturantNewsCard}>
              <View style={styles.ResturantImage}>
                <ImageBackground source={Three} style={{flex:1}} resizeMode='cover'/>
              </View>
              <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,alignSelf:'center'}}>New cafe was opened</Text>
                    </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.ResturantNewsCard}>
              <View style={styles.ResturantImage}>
                <ImageBackground source={Three} style={{flex:1}} resizeMode='cover'/>
              </View>
              <View style={styles.ResturantName}>
                        <Text style={{fontFamily:'Montserrat-Regular',fontSize:15,alignSelf:'center'}}>New cafe was opened</Text>
                    </View>
            </TouchableOpacity>

          </ScrollView>
        </View>







      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={states}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.stateItem}
                  onPress={() => handleStateSelect(item)}
                >
                  <Text style={styles.stateText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: '5%',
  },
  FirstContainer: {
    // borderWidth: 1,
    borderColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TextBoxOne: {
    // borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // height:80
  },
  modalContent: {
    backgroundColor: 'white',
    marginHorizontal: '10%',
    borderRadius: 5,
    paddingVertical: '5%',
  },
  stateItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  stateText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    textAlign: 'center',
  },
  NearResturants:{
    borderWidth:2,
    borderColor:'black',
    marginTop:30,
    width:190,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:15,
    borderRadius:23,
  },
  HeadlineResturant:{
    // borderWidth:1,
    marginTop:35
  },
  HeadlineResturantCard:{
    // borderWidth:1,
    height:150,
    borderRadius:20,
    overflow:'hidden',
  },
  SecondTextBox:{
    // borderWidth:1,
    marginTop:5,
    flexDirection:'row',
    justifyContent: 'flex-start',
  },
  ResturantAddress:{
    flexDirection:'row',
    alignItems:'center',
  },
  OperationTime:{
    flexDirection:'row',
    alignItems:'center',
  },
  OtherResturantsHouse:{
    // borderWidth:1,
    marginTop:30,
    flexDirection:'row'
  },
  OtherResturantCard:{
    height:120,
    borderWidth:1,
    width:110,
    borderRadius:30,
    overflow:'hidden',
    marginLeft:5
  },
  ResturantImage:{
    // borderWidth:1,
    height:'60%',
  },
  ResturantName:{
    // borderWidth:1,
    height:'40%',
    paddingLeft:5
  },
  NewsButton:{
    borderWidth:2,
    borderColor:'black',
    marginTop:30,
    width:80,
    paddingTop:15,
    paddingLeft:15,
    paddingRight:15,
    paddingBottom:15,
    borderRadius:23,
  },
  ResturantNewsHouse:{
    // borderWidth:1,
    marginTop:30,
    flexDirection:'row'
  },
  ResturantNewsCard:{
    height:100,
    borderWidth:0.5,
    width:170,
    borderRadius:30,
    overflow:'hidden',
    marginLeft:5
  },
});

export default Home;
