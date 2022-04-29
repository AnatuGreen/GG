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


//Punch newspaper

function PunchNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://punchng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Punch NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};

//Premiumtimes

function PremiumTimes({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://premiumtimesng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Premium Times</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};


//Vanguard newspaper

function VanguardNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://vanguardngr.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Vanguard NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};


//Dailysun news paper

function DailySunNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://www.sunnewsonline.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>The Daily Sun Ng</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};

//Tribune news paper

function ThisDayNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://www.thisdaylive.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>ThisDay NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//Tribune news paper

function TribuneNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://tribuneonlineng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Nigerian Tribune</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//Independent news paper

function IndependentNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://punchng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Independent NewsPaper Ng</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//The nation news paper

function TheNationNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://thenationonlineng.net/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>TheNation NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//PMNewsNigeria

function PMNewsNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://pmnewsnigeria.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>PM News Nigeria NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//NANNigeria

function NANNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://www.nannews.ng/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>News Agency of Nigeria NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//Nigeria Monitor

function NigerianMonitor({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    // function LoadingIndicatorView() {
    //     return (
    //         <ActivityIndicator
    //             color="#009b88"
    //             size="large"
    //             style={styles.ActivityIndicatorStyle}
    //         />
    //     );
    // }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'http://www.nigerianmonitor.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Nigerian Monitor NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//DailyTimes Nigeria

function DailyTimesNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    function LoadingIndicatorView() {
        return (
            <ActivityIndicator
                color="#009b88"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://dailytimesng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>DailyTimes NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};
//Punch news paper

function BusinessDayNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    function LoadingIndicatorView() {
        return (
            <ActivityIndicator
                color="#009b88"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://businessday.ng/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>BusinessDay Nigeria</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};

//Daily trust news paper

function DailyTrustNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    function LoadingIndicatorView() {
        return (
            <ActivityIndicator
                color="#009b88"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://dailytrust.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Daily TrustNigeria NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};

{/*

//Punch news paper

function PunchNigeria({ navigation }) {
    //webviewref to help with going back and forth withing the webview
    const webviewRef = React.useRef(null);

    //webViewgoback: to go the previous web page inside the WebView

    function webViewgoback() {
        if (webviewRef.current) webviewRef.current.goBack();
    }

    //Loading indicator in case of slow network
    function LoadingIndicatorView() {
        return (
            <ActivityIndicator
                color="#009b88"
                size="large"
                style={styles.ActivityIndicatorStyle}
            />
        );
    }

    return (
        <View style={{ flex: 1 }}>

            <WebView
                webViewgoback
                style={styles.WebView}
                source={{ uri: 'https://punchng.com/' }}
                // renderLoading={LoadingIndicatorView}
                startInLoadingState={true}
                ref={webviewRef}
            />
            <View style={styles.lowerNavInWebView} >
                <AntDesign name="home" size={24} color="black" onPress={() => navigation.navigate('BottomTabsComp')} />
                <Text style={{}}>Punch NewsPaper</Text>
                <Ionicons name="arrow-back-outline" size={24} color="black" onPress={webViewgoback} />

            </View>
        </View>

    );
};

*/}


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

export default PunchNigeria;
export {
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
}


