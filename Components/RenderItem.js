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
    const onFavorite = newsCard => {
        setFavoriteList([...favoriteList, newsCard]);
    };

    const onRemoveFavorite = newsCard => {
        const filteredList = favoriteList.filter(
            item => item.id !== newsCard.id
        );
        setFavoriteList(filteredList);
    };

    const ifExists = newsCard => {
        if (favoriteList.filter(item => item.id === newsCard.id).length > 0) {
            return true;
        }
        return false;
    };

    //When no search input is entered
    if (item.mediaName.toLowerCase().includes(textInputValue.toLowerCase())) {
        return (
            <Item mediaName={item.mediaName} mediaLogo={item.mediaLogo} mediaLink={item.mediaLink} mediaAbout={item.mediaAbout} />
        )
    }
    if (textInputValue === '') {
        return (
            <Item mediaName={item.mediaName} mediaLogo={item.mediaLogo} mediaLink={item.mediaLink} mediaAbout={item.mediaAbout} />
        )
    }

};

