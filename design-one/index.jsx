import React from 'react'
import { View, Text, Dimensions, Platform } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import FavouriteScreen from './FavouriteScreen';
import ProfileScreen from './ProfileScreen';
import CartScreen from './CartScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const DesignOne = () => {
  return (
    <Tab.Navigator
      initialRouteName="D1Home"
      activeColor="#D86F73"
      inactiveColor="#F5F5F5"
      labeled={false}
      barStyle={{ 
        backgroundColor: '#182224',
        borderRadius: 25,
        width: Dimensions.get('window').width -30,
        maxWidth: 380,
        padding: 8,
        marginBottom: 15,
        alignSelf: 'center',
        position: 'absolute',
        left: Platform.OS === 'web' ? 0 : 15,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Tab.Screen 
        name="D1Home" 
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <AntDesign name="home" color={color} size={24} />
          ),
        }}
       />
      <Tab.Screen 
        name="D1Favourite" 
        component={FavouriteScreen} 
        options={{
          tabBarLabel: 'Favourite',
          tabBarIcon: ({ color }) => (
            <AntDesign name="staro" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="D1Profile" 
        component={ProfileScreen} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-person-outline" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen 
        name="D1Cart" 
        component={CartScreen} 
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <AntDesign name="shoppingcart" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default DesignOne
