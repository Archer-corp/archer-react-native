import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content } from 'native-base'
import TutorialScreen from './TutorialScreen'

const TutorialStuckNavigator = createStackNavigator(
    {
        Tutorial: {
            screen: TutorialScreen,
            navigationOptions: ({ navigation }) => ({
                //ヘッダー描写
                header: (
                    <Header>
                        <Body>
                            <Title>Archerにようこそ</Title>
                        </Body>
                    </Header>
                )
            })
        }
    }
)

export default (TutorialStuckNavigator);