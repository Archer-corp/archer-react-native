import React from 'react'
import firebase from 'firebase';
import { AppRegistry, Image, StatusBar } from "react-native";
import {createBottomTabNavigator} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons';
import RankingStuckNavigator from '../RankingScreen/index'
import MyPageStuckNavigator from '../MyPageScreen/index'
import SearchStuckNavigator from '../SearchScreen/index'
import HomeStuckNavigator from '../HomeScreen/index'
import TopicStuckNavigator from '../TopicScreen/index'


const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen:HomeStuckNavigator,
        },
        Topic: {
            screen:TopicStuckNavigator
        },
        Search: {
            screen:SearchStuckNavigator
        },
        Ranking: {
            screen:RankingStuckNavigator,
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
                    iconName = `ios-home${focused ? '' : '-outline'}`;//今開いているページのアイコンなら強調
                } else if (routeName === 'Topic') {
                    iconName = `ios-megaphone${focused ? '' : '-outline'}`;
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
