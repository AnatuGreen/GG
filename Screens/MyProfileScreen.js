import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ActivityIndicator,
    TouchableOpacity,
    TextInput,
    Image,
    FlatList,
    Alert,
    Button,
    Keyboard,
    ImageBackground,
} from 'react-native';
import Modal from "react-native-modal";
import { Ionicons, EvilIcons, Entypo, Feather, AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import MediaData from '../Data'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import Item from '../Item'


export default function MyProfileScreen() {
    return (
        <View>
        </View>
    )
}

