import React from 'react'
import { createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation'
import { Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content, Segment,Text } from 'native-base'
import Ionicons from 'react-native-vector-icons/Ionicons';
import TutorialScreen from './TutorialScreen'
import MyPageScreen from '../MyPageScreen/index'

const TutorialTopTabNavigator = createMaterialTopTabNavigator(
    {
        tHome: TutorialScreen,
        tTopic: TutorialScreen,
        tSearch: TutorialScreen,
        tRanking: TutorialScreen,
        tMyPage: MyPageScreen,
        Terms:TutorialScreen,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'tHome') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;//今開いているページのアイコンなら強調
                } else if (routeName === 'tTopic') {
                    iconName = `ios-megaphone${focused ? '' : '-outline'}`;
                } else if (routeName === 'tMyPage') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'tRanking') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                } else if (routeName === 'tSearch') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                } else if (routeName === 'Terms') {
                    iconName =  `ios-alert${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            showIcon: true,
            showLabel:false,
        },
    }
);

const TutorialStuckNavigator = createStackNavigator(
    {
        Tutorial: {
            screen: TutorialTopTabNavigator,
            navigationOptions: ({ navigation }) => ({
                //ヘッダー描写
                header: (
                    <Header>
                        <Body>
                            <Title>Archerチュートリアル</Title>
                        </Body>
                    </Header>
                )
            })
        }
    }
);

export default (TutorialStuckNavigator);