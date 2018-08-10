import React from 'react'
import {createStackNavigator} from 'react-navigation'
import MyPageScreen from './MyPageScreen'
import AccountTabNavigator from './AccountNavigation'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Item, Input, Form} from 'native-base'

const MyPageStuckNavigator = createStackNavigator(
    {
        MyPage: {
            screen: MyPageScreen,
            navigationOptions: ({navigation}) => ({
              //ヘッダーを表示させない
              header: null
            })
        },
        Login: {
            screen: AccountTabNavigator,
            navigationOptions: ({navigation}) => ({
              //ヘッダーを表示させない
              header: null
            })
        }
    }
);
export default MyPageStuckNavigator;
