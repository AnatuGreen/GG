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
import Item from './Item'


export default function FavouritesScreen({ navigation, data, onIconClick }) {

    const { colors } = useTheme();


    const renderItem = ({ item }) => {
        return (
            <Item id={item.id} name={item.name} size={item.size} onIconClick={onIconClick} />
        )
    }

    return (
        <View>

            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    pageContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: color.backgroundColor
    },


    navigateAcross: {
        height: 50,
        width: 150,
        borderRadius: 25,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    }
})