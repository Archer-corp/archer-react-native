import React from 'react';
import { createBottomTabNavigator,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import QRReadScreen from './QRReadScreen';
import QRShowScreen from './QRShowScreen';

const QRBottomTabNavigator = createBottomTabNavigator(
    {
        Show: {
            screen: QRShowScreen,
        },
        Read: {
            screen: QRReadScreen,
        }
    }
)

const QRStackNavigator = createStackNavigator(
    {
        QRStack: {
            screen: QRBottomTabNavigator,
            navigationOptions: ({ navigation }) => ({
                //ヘッダー描写
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
                            <Title>QR Code</Title>
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
        },
    }
);

export default (QRStackNavigator);