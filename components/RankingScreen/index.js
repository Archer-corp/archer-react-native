import React from 'react'
import {createMaterialTopTabNavigator} from 'react-navigation'
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
