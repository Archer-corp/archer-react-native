import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content } from 'native-base'
import TopicScreen from './TopicScreen'

const TopicStuckNavigator = createStackNavigator(
    {
        Topic: {
            screen: TopicScreen,
            navigationOptions: ({ navigation }) => ({
                //ÉwÉbÉ_Å[ï`é 
                header: (
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => navigation.openDrawer()}
                            >
                                <Icon name='menu' />
                            </Button>
                        </Left>
                        <Body>
                            <Title>Topic</Title>
                        </Body>
                        <Right>
                            <Button
                                transparent
                                onPress={() => navigation.navigate('Search')}
                            >
                                <Icon name='search' />
                            </Button>
                        </Right>
                    </Header>
                )
            })
        }
    }
)

export default (TopicStuckNavigator);