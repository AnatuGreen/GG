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
    Button,
    Keyboard,
    ImageBackground
} from 'react-native';
import { Ionicons, EvilIcons, Entypo, Feather, AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { CommonActions } from '@react-navigation/native';
import MediaData from './Data'
//the data to be passed into the flatlist. This is far better than having a loooooong code using Scrollview


// definition of the Item, which will be rendered in the FlatList for all Media houses

const Item = ({ mediaLink, mediaLogo, mediaName }) => {
    const navigation = useNavigation();

    const navigateToWebView = () => {
        navigation.navigate('NewsMedia', { mediaLink, mediaName })
    }

    return (
        <TouchableOpacity onPress={navigateToWebView}>
            <View style={[styles.CompanyComponent, styles.tabBarShadow]}>
                <View style={styles.mediaLogoView}>
                    <Image source={mediaLogo} style={styles.mediaLogoMain} />
                    <Text style={styles.mediaName}>
                        {mediaName}
                    </Text>
                </View>
                <View style={styles.mediaActionButtonContainer}>
                    <MaterialCommunityIcons name="information-outline" size={24} color="black" />
                    <Ionicons name="md-heart-outline" size={24} color="black" />
                </View>
            </View>

        </ TouchableOpacity >
    )
}

// the filter

export default function HomeScreen({ navigation }) {

    const [clicked, setClicked] = useState(false);
    const [textInputValue, setTextInputValue] = useState('')

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
                                    }}
                                    style={styles.searchCancelButton}
                                >
                                    <Text style={{ fontWeight: 'bold' }}>Cancel</Text>
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
                data={MediaData}
                value={textInputValue}
                renderItem={renderItem}
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
        backgroundColor: '#fff'
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
        justifyContent: 'center',
        height: 60,
        width: "100%"
    },

    filterIconBackground: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        alignItems: "center",
        paddingTop: 15
    },

    CompanyComponent: {
        height: 178,
        width: 165,
        backgroundColor: '#fff',
        borderRadius: 27,
        margin: 10,
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
