import React, { useState, useContext } from 'react';
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
import { FavoritesContext } from './Contexts/FavouritesContext';
import Item from '../Item'

export default function RenderItem({ item }) {
    const [textInputValue, setTextInputValue] = useState('')

    const { favoriteList, setFavoriteList } = useContext(FavoritesContext)

    //const [textInputValue, setTextInputValue] = useState('')

    //When no search input is entered
    if (item.mediaName.toLowerCase().includes(textInputValue.toLowerCase())) {
        return (
            <Item item={item} />
        )
    }
    if (textInputValue === '') {
        return (
            <Item item={item} />
        )
    }

};

