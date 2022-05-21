import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import {
    NavigationContainer,
    DefaultTheme,
    DarkTheme,
    useTheme,
} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from '../Item'
import NewsMedia from '../AllMediaOutLets';
import HomeScreen from '../Screens/Home';
import TrendingScreen from '../Screens/Trending';
import BookmarksScreen from '../Screens/BookMarks';
import MyProfileScreen from '../Screens/MyProfileScreen';
import FavouritesScreen from '../Screens/FavouritesScreen';

const Tab = createBottomTabNavigator();


export default function BottomTabsComp({ navigation }) {

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
            <Tab.Screen name="Bookmarks" component={BookmarksScreen} options={{
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