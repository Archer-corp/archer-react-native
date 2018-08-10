import React from 'react'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import {Text} from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title} from 'native-base'
import RankingScreen from './RankingScreen'

const RankingTabNavigator = createMaterialTopTabNavigator(
    {
        Rise: { screen:RankingScreen , },
        Day: { screen: RankingScreen ,},
        Week: { screen: RankingScreen,},
        Total: { screen: RankingScreen ,},
    }
);

export default RankingTabNavigator;
