import React from 'react'
import firebase from 'firebase';
import { AppRegistry, Image, StatusBar } from "react-native";
import {createBottomTabNavigator} from 'react-navigation'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Footer, List, ListItem, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RankingTabNavigator from '../RankingScreen/index'
import MyPageStuckNavigator from '../MyPageScreen/index'
import SearchScreen from '../SearchScreen/SearchScreen'
import HomeScreen from './HomeScreen'

const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen:HomeScreen,
        },
        Search: {
            screen:SearchScreen,
        },
        Ranking: {
            screen:RankingTabNavigator,
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
                } else if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
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


export default (RootBottomTabNavigator);
