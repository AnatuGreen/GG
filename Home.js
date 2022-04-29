import * as React from 'react';
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
    ImageBackground
} from 'react-native';
import { Ionicons, EvilIcons, Feather, AntDesign, MaterialCommunityIcons, MaterialIcons, FontAwesome5, SimpleLineIcons } from '@expo/vector-icons'
import Constants from 'expo-constants'
import { StatusBar } from 'expo-status-bar';
import { WebView } from 'react-native-webview';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MediaDATA = [
    {
        id: '1',
        src: require('./assets/punch_ng_logo.png')
    }

]

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


function MainHome({ navigation }) {
    return (
        <View style={styles.pageContainer}>
            <StatusBar style='auto' backgroundColor={'#b30000'} />
            <View style={styles.searchBarContainer}>
                <TouchableOpacity style={styles.filterIconBackground}>
                    <MaterialCommunityIcons name="filter-variant" size={24} color="black" />
                </TouchableOpacity>
                <TextInput style={styles.searchBar} placeholder="Search" />
            </View>

            <ScrollView>
                <View style={styles.companyCompsView}>
                    <TouchableOpacity onPress={() => navigation.navigate('PunchNigeria')}>
                        <CompanyComponent
                            mediaLogo={<Image source={require('./assets/punch_ng_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Punch NewsPaper" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent
                            mediaLogo={<Image source={require('./assets/premiumtimes_Logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Premium Times" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/vanguard_ng_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Vanguard Newspaper" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/the_daily_sun_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Daily Sun" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/this_day_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="This Day" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/Tribune-Online-Homelogo.jpg')} style={[styles.mediaLogoMain,]} />}
                            mediaName="Nigerian Tribune" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/Nigerian_independent_logo.png')} style={[styles.mediaLogoMain, { resizeMode: 'contain' }]} />}
                            mediaName="Nigerian Independent" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/thenation_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="The Nation" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/daily_trust_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Daily Trust" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/NAN_Nigeria_Logo.png')} style={[styles.mediaLogoMain, { resizeMode: 'contain' }]} />}
                            mediaName="NAN" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/pmNews_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="PM News" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/Nigerian_monitor_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Nigerian Monitor" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/the_Daily_times_logo.png')} style={[styles.mediaLogoMain, { resizeMode: 'contain' }]} />}
                            mediaName="The Daily Times" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <CompanyComponent mediaLogo={<Image source={require('./assets/businessday_logo.png')} style={styles.mediaLogoMain} />}
                            mediaName="Business Day" />
                    </TouchableOpacity>
                </View>

            </ScrollView>

        </View>
    )
}


function PremiumTimes(navigation) {
    return (
        <WebView
            style={styles.WebView}
            source={{ uri: 'https://premiumtimesng.com/' }}
        />
    );
}
function Vanguard(navigation) {
    return (
        <WebView
            style={styles.WebView}
            source={{ uri: 'https://www.vanguardngr.com/' }}
        />
    );
}

const Stack = createNativeStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
            <Stack.Screen name="MainHome" component={MainHome} />
            {/* <Stack.Screen name="PunchNigeria" component={PunchNigeria} /> */}
            <Stack.Screen name="PremiumTimes" component={PremiumTimes} />
            <Stack.Screen name="Vanguard" component={Vanguard} />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    pageContainer: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff'
    },
    searchBar: {
        height: 50,
        width: "70%",
        borderRadius: 25,
        backgroundColor: '#fff',
        left: 10,
        padding: 10,
        color: 'white',
        right: 10,

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
    }


})