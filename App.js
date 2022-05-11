import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
  useTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import HomeScreen from './Home'
import NewsMedia from './AllMediaOutLets'
import MyProfileScreen from './MyProfileScreen'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FavouritesScreen from './FavouritesScreen'


const TrendingScreen = () => {
  return (
    <View>
    </View>
  )
}
const BookmarkssScreen = () => {
  return (
    <View>
    </View>
  )
}


const Tab = createBottomTabNavigator();


const BottomTabsComp = () => {
  return (
    <Tab.Navigator
      tabLabel={false}
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          height: 60,
          width: '90%',
          backgroundColor: '#b30000',
          borderBottomWidth: 0.5,
          borderRightWidth: 0.5,
          borderLeftWidth: 0.5,
          borderColor: 'white',
          position: 'absolute',
          borderRadius: 30,
          bottom: 5,
          left: 20,
          elevation: 0,
          ...styles.tabBarShadow
        }
      }} >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'Home',
        tabBarIcon: ({ focused, color }) => (
          <MaterialCommunityIcons name="home" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
      {/* color={ focused ? 'red' : 'blue'} - this means that the colour of the icon is red when the tab icon is focused and blue when another tab icon is focused */}
      <Tab.Screen name="Favs" component={FavouritesScreen} options={{
        title: 'Favs',
        tabBarIcon: ({ focused, color }) => (
          <MaterialCommunityIcons name="heart" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
      <Tab.Screen name="Trending" component={TrendingScreen} options={{
        title: 'Trending',
        tabBarIcon: ({ focused, color }) => (
          <MaterialCommunityIcons name="trending-up" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
      <Tab.Screen name="Bookmarks" component={BookmarkssScreen} options={{
        title: 'Bookmarks',
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name="bookmarks" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
      <Tab.Screen name="Profile" component={MyProfileScreen} options={{
        title: 'My Profile',
        tabBarIcon: ({ focused, color }) => (
          <Feather name="user" color={focused ? 'white' : '#999999'} size={26} />)
      }} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  tabBarShadow: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },


})

const Stack = createNativeStackNavigator();


export default function App() {

  const [favData, setFavData] = useState([])

  const [currentTheme, setCurrentTheme] = useState(true)

  const themeToggler = () => {
    setCurrentTheme(!currentTheme)
  }

  /*  const onIconClick = (item) => {
     const isItemInFavData = favData.find(i => i.id === item.id) !== undefined
     if (isItemInFavData) {
       removeItem(item)
     } else {
       addItem(item)
     }
   }

   const addItem = (item) => {
     setFavData([item, ...favData])
   }

   const removeItem = (item) => {
     const favItemsCopy = favData.filter(favItem => favItem.id !== item.id)
     setFavData(favItemsCopy)
   }
  */
  return (
    <NavigationContainer theme={currentTheme ? DefaultTheme : DarkTheme} >
      <Stack.Navigator >
        <Stack.Screen name="BottomTabsComp" component={BottomTabsComp} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewsMedia" component={NewsMedia} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
