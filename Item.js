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
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import MediaData from './Data'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { useTheme } from '@react-navigation/native';
import { FavoritesContext } from './Components/Contexts/FavouritesContext';


// definition of the Item, which will be rendered in the FlatList for all Media houses

export default function Item({ id, name, size, mediaLink, mediaLogo, mediaName, mediaAbout, }) {
    const navigation = useNavigation();
    const { favoriteList, setFavoriteList } = useContext(FavoritesContext)

    //Toggler initiator
    const [isModalVisible, setModalVisible] = useState(false);
    let [heartIconColor, setHeartIconColor] = useState(true);

    const toggleHeart = () => {
        setHeartIconColor(!heartIconColor)
    }

    //Toggle for the info pop up for media
    const toggleInfoModal = () => {
        setModalVisible(!isModalVisible);
    };

    const navigateToWebView = () => {
        navigation.navigate('NewsMedia', { mediaLink, mediaName })
    }


    return (
        <View>
            <Modal style={styles.mediaInfoModal}
                isVisible={isModalVisible}
                onBackdropPress={toggleInfoModal}
                onBackButtonPress={toggleInfoModal}>
                <View style={{ height: '90%' }}>
                    <Image source={mediaLogo} style={[styles.mediaLogoMain, { top: 10 }]} />
                    <Text style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: 20 }}>{mediaName}</Text>
                    <Text style={styles.mediaAboutStyle}>{mediaAbout}</Text>
                </View>
                <TouchableOpacity style={styles.closeMediaInforModalStyle} onPress={toggleInfoModal} >
                    <Text>Close</Text>
                </TouchableOpacity>
            </Modal>

            <TouchableOpacity onPress={navigateToWebView}>
                <View style={[styles.CompanyComponent, styles.tabBarShadow]}>
                    <View style={styles.mediaLogoView}>
                        <Image source={mediaLogo} style={styles.mediaLogoMain} />
                        <Text style={styles.mediaName}>
                            {mediaName}
                        </Text>
                    </View>
                    <View style={styles.mediaActionButtonContainer}>
                        <TouchableOpacity onPress={toggleInfoModal} >
                            <MaterialCommunityIcons name="information-outline" size={24} color="black" />
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => Alert.alert('Added to favorites')} > */}
                        <TouchableOpacity onPress={() => {
                            toggleHeart(); ifExists(item)
                                ? onRemoveFavorite(item)
                                : onFavorite(item)
                        }} >
                            <Ionicons name="md-heart-outline" size={24} color={heartIconColor ? 'black' : 'red'} />
                        </TouchableOpacity>

                    </View>
                </View>

            </ TouchableOpacity >

        </View >
    )
}



const styles = StyleSheet.create({
    pageContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: color.backgroundColor
    },
    searchBar_clicked: {
        height: 50,
        width: "65%",
        borderRadius: 25,
        backgroundColor: '#fff',
        left: 10,
        padding: 10,
        color: 'black',
        right: 10,

    },
    searchBar_unclicked: {
        height: 50,
        width: "70%",
        borderRadius: 25,
        backgroundColor: '#ffb3b3',
        left: 10,
        padding: 10,
        color: 'black',
        right: 10,

    },

    searchIcon_clicked: {
        marginLeft: 1,
        display: 'none',

    },

    searchIcon_unclicked: {
        marginLeft: 1,
        right: 35,
    },

    searchBarContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#b30000',
        justifyContent: 'space-evenly',
        height: 60,
        width: "100%",

    },
    searchBarStyle_Visible: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#b30000',
        justifyContent: 'center',
        height: 60,
        width: "100%",
    },
    searchBarStyle_Hidden: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#b30000',
        justifyContent: 'center',
        height: 60,
        width: "100%",
        display: 'none'
    },

    filterIconBackground: {
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: "center",
        justifyContent: 'center',

    },

    CompanyComponent: {
        height: 178,
        width: 165,
        backgroundColor: '#fff',
        borderRadius: 27,
        margin: 10,
    },
    mediaInfoModal: {
        backgroundColor: 'white',
        height: '60%',
        paddingHorizontal: 10,
        width: '85%',
        position: 'absolute',
        top: 70,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        zIndex: 5,
        alignSelf: 'center',
    },
    closeMediaInforModalStyle: {
        bottom: 10,
        position: 'absolute',
        alignSelf: 'center',
        height: 30,
        width: 100,
        backgroundColor: 'red',
        alignItems: 'center',
        borderRadius: 15,
        justifyContent: 'center',
    },
    companyCompsView: {
        width: 400,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginBottom: 100,
    },

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

    mediaLogoView: {
        marginTop: 30

    },

    mediaLogoMain: {
        height: 50,
        width: '80%',
        alignSelf: 'center',
        resizeMode: 'center',
    },

    mediaName: {
        textAlign: 'center',
        marginTop: 10,
    },

    mediaActionButtonContainer: {
        width: '80%',
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },

    WebView: {
        marginTop: Constants.statusBarHeight
    },


    lowerNavInWebView: {
        height: 60,
        width: '100%',
        paddingTop: 10,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },

    searchCancelButton: {

    },

    flatListStyle: {
        alignSelf: 'center',
        paddingBottom: 150,

    }


})
