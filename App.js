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
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Item from './Item'
import BottomTabsComp from './Navigation/Tabs'
import { FavoritesContextProvider } from './Components/Contexts/FavouritesContext';
import NewsMedia from './AllMediaOutLets'
const Stack = createNativeStackNavigator();


export default function App() {

  return (

    <FavoritesContextProvider>
      <NavigationContainer >
        <Stack.Navigator >
          <Stack.Screen name='BottomTabsComp' component={BottomTabsComp} options={{ headerShown: false }} />
          <Stack.Screen name='NewsMedia' component={NewsMedia} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer >
    </FavoritesContextProvider>

  );
}

//Used the stack inside the navigator container because I will be adding onboarding screen later

/*
//oLD CODE

export default function App() {

  const [currentTheme, setCurrentTheme] = useState(true)

  const themeToggler = () => {
    setCurrentTheme(!currentTheme)
  }

  return (
    <NavigationContainer theme={currentTheme ? DefaultTheme : DarkTheme} >
      <Stack.Navigator >
        <Stack.Screen name="BottomTabsComp" component={BottomTabsComp} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name='FavouritesScreen' component={FavouritesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewsMedia" component={NewsMedia} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
*/
