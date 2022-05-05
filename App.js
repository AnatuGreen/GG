import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, EvilIcons, Feather, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import HomeScreen from './Home'
import NewsMedia from './AllMediaOutLets'


/* import NewsMedia,
{
  PremiumTimes,
  VanguardNigeria,
  DailySunNigeria,
  ThisDayNigeria,
  TribuneNigeria,
  IndependentNigeria,
  TheNationNigeria,
  DailyTrustNigeria,
  NANNigeria,
  PMNewsNigeria,
  NigerianMonitor,
  DailyTimesNigeria,
  BusinessDayNigeria,
  CNN,
  LeadershipNg,
  AriseTV,
  ChannelsTV,
  BBCInternational,

} from './AllMediaOutLets'
 */

import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const FavouritesScreen = () => {
  return (
    <View>
    </View>
  )
}
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
const MyProfileScreen = () => {
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
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="BottomTabsComp" component={BottomTabsComp} options={{ headerShown: false }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewsMedia" component={NewsMedia} options={{ headerShown: false }} />
        {/* <Stack.Screen name="PunchNigeria" component={PunchNigeria} options={{ headerTitleAlign: 'center', headerShown: false }} />
        <Stack.Screen name="PremiumTimes" component={PremiumTimes} options={{ headerShown: false }} />
        <Stack.Screen name="VanguardNigeria" component={VanguardNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="DailySunNigeria" component={DailySunNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="ThisDayNigeria" component={ThisDayNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="TribuneNigeria" component={TribuneNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="IndependentNigeria" component={IndependentNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="TheNationNigeria" component={TheNationNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="DailyTrustNigeria" component={DailyTrustNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="NANNigeria" component={NANNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="PMNewsNigeria" component={PMNewsNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="NigerianMonitor" component={NigerianMonitor} options={{ headerShown: false }} />
        <Stack.Screen name="DailyTimesNigeria" component={DailyTimesNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="BusinessDayNigeria" component={BusinessDayNigeria} options={{ headerShown: false }} />
        <Stack.Screen name="CNN" component={CNN} options={{ headerShown: false }} />
        <Stack.Screen name="LeadershipNg" component={LeadershipNg} options={{ headerShown: false }} />
        <Stack.Screen name="AriseTV" component={AriseTV} options={{ headerShown: false }} />
        <Stack.Screen name="ChannelsTV" component={ChannelsTV} options={{ headerShown: false }} />
        <Stack.Screen name="BBCInternational" component={BBCInternational} options={{ headerShown: false }} />
*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
