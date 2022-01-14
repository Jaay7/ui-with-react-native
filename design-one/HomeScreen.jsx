import React from 'react'
import { StyleSheet, Text, View, StatusBar, TouchableOpacity, TextInput, ScrollView, Image, Dimensions } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialTopTabNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabbar}>
        <TouchableOpacity style={styles.back} onPress={() => {navigation.goBack()}}>
          <Ionicons name="md-chevron-back" size={24} color="#182224" />
        </TouchableOpacity>
        <Ionicons name="md-person" size={24} color="#182224" />
      </View>
      <Text style={styles.mainText}>Discover</Text>
      <Text style={styles.mainText}>our new items</Text>
      <View style={styles.search}>
        <View style={styles.seachBar}>
          <Ionicons name="md-search" size={18} color="#182224" />
          <TextInput style={styles.searchInput} placeholder="Search" />
        </View>
        <TouchableOpacity style={styles.filter}>
          <Ionicons name="md-options" size={18} color="#f5f5f5" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        initialRouteName="MostPopular"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
            textTransform: 'capitalize',
            width: '100%',
          },
          tabBarItemStyle: { 
            width: 'auto'
          },
          tabBarStyle: {
            backgroundColor: '#E6F0F2',
            elevation: 0,
            marginLeft: 30,
          },
          // tabBarIndicator: () => {
          //   return <View style={styles.indicator} />;
          // },
          tabBarIndicatorStyle: styles.indicator,
        }}
      >
        <Tab.Screen 
          name="Most Popular" 
          component={MostPopular} 
        />
        <Tab.Screen
          name="Chairs"
          component={Chairs}
        />
        <Tab.Screen
          name="Sofas"
          component={Sofas}
        />
        <Tab.Screen
          name="Tables"
          component={Tables}
        />
      </Tab.Navigator>
    </View>
  )
}

export default HomeScreen;

const chairsMP = [
  {title: 'Scandinavian chair', subtitle: 'Chairs', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80', rating: "4.7", price: 59, fav: true},
  {title: 'Wooden Airchair', subtitle: 'Chairs', image: 'https://images.unsplash.com/photo-1567538096621-38d2284b23ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80', rating: "5.0", price: 129, fav: true}
]

const MostPopular = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexGrow: 0}}>
        {
          chairsMP.map((item, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.cardImage}>
              <Image source={{uri: item.image}} style={styles.image} />
              <View style={styles.cardRating}>
                <AntDesign name="star" size={14} color="#C9A325" />
                <Text style={{color: '#C9A325', fontSize: 12, fontWeight: 'bold', paddingLeft: 6}}>{item.rating}</Text>
              </View>
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardSubTitle}>{item.subtitle}</Text>
              <View style={styles.cardFooter}>
                <Text style={styles.cardTitle}>&#36;{item.price}</Text>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                  <TouchableOpacity style={{backgroundColor: '#D86F7330', borderRadius: 30, height: 26, width: 26, justifyContent: 'center', alignItems: 'center'}}>
                    <Ionicons name="md-heart" size={14} color="#D86F73" />
                  </TouchableOpacity>
                  <Ionicons name="add-circle" size={28} color="#182224" />
                </View>
              </View>
            </View>
          </View>
          ))
        }
      </ScrollView>
      <View style={{paddingHorizontal: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 10}}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image source={{uri: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'}} style={{height: 50, width: 50, borderRadius: 30}} />
          <View style={{paddingLeft: 10}}>
            <Text style={{fontSize: 14, fontWeight: 'bold', color: '#182224'}}>Living room</Text>
            <Text style={{fontSize: 12, color: '#727272'}}>Chairs</Text>
          </View>
        </View>
        <Text style={{fontSize: 15, fontWeight: 'bold', color: '#182224'}}>43 items</Text>
      </View>
    </View>
  )
}

const Chairs = () => {
  return (
    <View>
      <Text>Design 1 chairs</Text>
    </View>
  )
}

const Sofas = () => {
  return (
    <View>
      <Text>Design 1 sofas</Text>
    </View>
  )
}

const Tables = () => {
  return (
    <View>
      <Text>Design 1 Tables</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F0F2',
  },
  tabbar: {
    height: 70,
    marginTop: StatusBar.currentHeight,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 15,
  },
  back: {
    backgroundColor: '#ffffff7c',
    padding: 7,
    borderRadius: 30
  },
  mainText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 40,
    lineHeight: 30,
    color: '#182224',
  },
  search: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 15,
    width: '100%',
  },
  seachBar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff7c',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginRight: 5,
    width: '85%',
  },
  searchInput: {
    color: '#182224',
    paddingLeft: 10,
    fontWeight: 'bold',
    width: '90%',
  },
  filter: {
    backgroundColor: '#182224db',
    padding: 16,
    borderRadius: 10,
    width: '15%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  indicator: {
    backgroundColor: '#D86F73',
    // height: 8,
    // width: 8,
    // borderRadius: 4,
    // marginHorizontal: 5,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: 180,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
  cardImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 10,
  },
  cardRating: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    right: 10,
    backgroundColor: '#ffffff7c',
    padding: 5,
    borderRadius: 10,
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#182224',
  },
  cardSubTitle: {
    fontSize: 13,
    color: '#727272',
  },
  cardFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
});