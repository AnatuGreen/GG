import React, { useState, useContext, useEffect } from 'react';
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
import { useNavigation, useRoute } from '@react-navigation/native';
import MediaData from '../Data'
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { FavoritesContext } from '../Components/Contexts/FavouritesContext';
import RenderItem from '../Components/RenderItem';

export default function HomeScreen() {
    const { favoriteList } = useContext(FavoritesContext)
    const [textInputValue, setTextInputValue] = useState('')
    const navigation = useNavigation();
    const [clicked, setClicked] = useState(false);
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        const result = MediaData.filter((v) => v.mediaLink.uri.includes(textInputValue))
        setFiltered(result)
    }, [textInputValue])


    return (
        <View style={styles.pageContainer}>
            <StatusBar style='auto' backgroundColor={'#b30000'} />
            <View style={styles.searchBarContainer}>
                <TouchableOpacity style={styles.filterIconBackground}>
                    <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
                </TouchableOpacity>
                {/*Search component begins */}
                <>
                    <TextInput
                        style={
                            clicked ? styles.searchBar_clicked : styles.searchBar_unclicked}
                        placeholder="Search"
                        value={textInputValue}
                        onChangeText={(textInputValue) => { setTextInputValue(textInputValue); }}
                        onFocus={() => {
                            setClicked(true);
                        }}
                        onBlur={() => {
                            setClicked(false)
                        }}
                    />
                    <Feather
                        name="search"
                        size={20}
                        color="black"
                        style={clicked ? styles.searchIcon_clicked : styles.searchIcon_unclicked}
                    />

                    {/* cross Icon, depending on whether the search bar is clicked or not */}
                    {
                        clicked && (
                            <Entypo name="cross" size={20} color="black" style={{ padding: 1, right: 20 }} onPress={() => {
                                setTextInputValue("")
                            }} />
                        )
                    }

                    {/* cancel button, depending on whether the search bar is clicked or not */}
                    {
                        clicked && (
                            <View>
                                <TouchableOpacity
                                    //On pressing the cancel button, the keyboard will close, the clicked stated will chnage to unclicked and the phase typed so far in the search bar will clear
                                    onPress={() => {
                                        Keyboard.dismiss();
                                        setClicked(false);
                                        setTextInputValue("");
                                        //searchBarToggle;
                                    }}
                                    style={styles.searchCancelButton}
                                >
                                    <Text style={{ fontWeight: 'bold', right: 10, color: 'white' }}>Cancel</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }
                </>
                {/*Search component ends */}

            </View>

            {/* In the flatlist below, key was given the value of '_' so that the numColumns that decides how many column the listed items should be divided into*/}
            < FlatList
                key={'_'}
                data={textInputValue?filtered:MediaData}
                value={textInputValue}
                renderItem={({ item }) => {
                    return (
                        <RenderItem item={item} />
                    );
                }}
                keyExtractor={item => item.id}
                numColumns={2}
                contentContainerStyle={styles.flatListStyle}
            />

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

//Might use this later to toggle search on and off
    //const [searchBarVisible, setSearchBarVisible] = useState(true);

    //Toggle for the search bar pop up

/*  const searchBarToggle = () => {
     setSearchBarVisible(!searchBarVisible)
 }; */


// the filter

/* const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MainHome" component={MainHome} />
           <Stack.Screen name="PunchNigeria" component={PunchNigeria} />
 <Stack.Screen name="PremiumTimes" component={PremiumTimes} />
 <Stack.Screen name="Vanguard" component={Vanguard} />
 </Stack.Navigator >
    )
}

const CompanyComponent = (props) => {
    return (
        <View style={[styles.CompanyComponent, styles.tabBarShadow]}>
            <View style={styles.mediaLogoView}>
                {props.mediaLogo}
                <Text style={styles.mediaName}>
                    {props.mediaName}
                </Text>
            </View>
            <View style={styles.mediaActionButtonContainer}>
                <MaterialCommunityIcons name="information-outline" size={24} color="black" />
                <Ionicons name="md-heart-outline" size={24} color="black" />
            </View>
        </View>
    )
}

// Search component


const SearchBar = () => {

    const [clicked, setClicked] = useState(false)
    const [textInputValue, setTextInputValue] = useState('')


    return (
        <>
            <TextInput
                style={
                    clicked ? styles.searchBar_clicked : styles.searchBar_unclicked}
                placeholder="Search"
                value={textInputValue}
                onChangeText={(textInputValue) => { setTextInputValue(textInputValue); }}
                onFocus={() => {
                    setClicked(true);
                }}
                onBlur={() => {
                    setClicked(false)
                }}
            />
            <Feather
                name="search"
                size={20}
                color="black"
                style={clicked ? styles.searchIcon_clicked : styles.searchIcon_unclicked}
            />

            //cross Icon, depending on whether the search bar is clicked or not
{
    clicked && (
        <Entypo name="cross" size={20} color="black" style={{ padding: 1, right: 20 }} onPress={() => {
            setSearchPhrase("")
        }} />
    )
}

// cancel button, depending on whether the search bar is clicked or not
{
    clicked && (
        <View>
            <TouchableOpacity
                //On pressing the cancel button, the keyboard will close, the clicked stated will chnage to unclicked and the phase typed so far in the search bar will clear
                onPress={() => {
                    Keyboard.dismiss();
                    setClicked(false);
                    setSearchPhrase("");
                }}
                style={styles.searchCancelButton}
            >
                <Text style={{ fontWeight: 'bold' }}>Cancel</Text>
            </TouchableOpacity>
        </View>
    )
}
        </>

    )
}

//Former list component

const List = ({ searchPhrase, setClicked, MediaDATA }) => {
    const navigation = useNavigation();
    const renderItem = ({ item }) => {
        //When no search input is entered
        if (item.mediaName.toLowerCase().includes(textInputValue.toLowerCase())) {
            return <Item mediaName={item.mediaName} mediaLogo={item.mediaLogo} mediaLink={item.mediaLink} />
        }
        if (textInputValue === '') {
            return (
                <Item mediaName={item.mediaName} mediaLogo={item.mediaLogo} mediaLink={item.mediaLink} />
            )
        }
    };

    const [textInputValue, setTextInputValue] = useState('')


    return (

        <View
            onStartShouldSetResponder={() => {
                setClicked(false)
            }}
            style={{}}>
      //  In the flatlist below, key was given the value of '_' so that the numColumns that decides how many column the listed items should be divided into
< FlatList
    key={'_'}
    data={mediaData}
    value={textInputValue}
    renderItem={renderItem}
    keyExtractor={item => item.id}
    numColumns={2}
    contentContainerStyle={styles.flatListStyle}
/>
        </View >

    )
}



 */
