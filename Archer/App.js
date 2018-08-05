import React from 'react';
import firebase from 'firebase';
import { Button, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar, StackNavigator ,TabNavigator,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import MyPageScreen from './MyPageScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import RankingScreen from './RankingScreen';

//GLOBAL
var Archer = {};
Archer.loggedIn = null;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AccountTabNavigator = createMaterialTopTabNavigator(
    {
        Login: {screen: LoginScreen,},
        Signup: {screen: SignupScreen,},
    }
);

const RankingTabNavigator = createMaterialTopTabNavigator(
    {
        Rise: {
            screen: RankingScreen,
        },
    

        Day: { screen: RankingScreen,},
        Week: { screen: RankingScreen,},
        Total: { screen: RankingScreen,},
    },
    {
        header:null
    }
);

const MyPageStuckNavigator = createStackNavigator(
    {
        MyPage: {
            screen: MyPageScreen,
        },
        Login: {
            screen: AccountTabNavigator,
        }
    }
);



const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen:HomeScreen,
        },
        Ranking: {
            screen: RankingTabNavigator,
        },
        MyPage: {
            screen: MyPageStuckNavigator,
        },
    },
    {
        //initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'MyPage') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'Ranking') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }  
);

class App extends React.Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyBK8ri7rFLGHWz10l9BH6xYG82PjweYECk",
            authDomain: "archer-corp.firebaseapp.com",
            databaseURL: "https://archer-corp.firebaseio.com",
            projectId: "archer-corp",
            storageBucket: "archer-corp.appspot.com",
            messagingSenderId: "208210760399"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
                console.log("logged in");
            } else {
                this.setState({ loggedIn: false });
                console.log("not logged in");
            }
        })
    }

    render() {
        return <RootBottomTabNavigator/>;
    }
}

export default (App);

