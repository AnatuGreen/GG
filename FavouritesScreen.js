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
import { useNavigation, useTheme } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import MediaData from './Data'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function FavouritesScreen({ navigation, data, onIconClick }) {

    const { colors } = useTheme();

    return (
        <View style={styles.pageContainer}>

        </View>
    )
}


const styles = StyleSheet.create({
    pageContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: color.backgroundColor
    },

})