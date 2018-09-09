import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content } from 'native-base'
import TutorialScreen from './TutorialScreen'

const TutorialStuckNavigator = createStackNavigator(
    {
        Tutorial: {
            screen: TutorialScreen,
            navigationOptions: ({ navigation }) => ({
                //�w�b�_�[�`��
                header: (
                    <Header>
                        <Body>
                            <Title>Archer�ɂ悤����</Title>
                        </Body>
                    </Header>
                )
            })
        }
    }
)

export default (TutorialStuckNavigator);