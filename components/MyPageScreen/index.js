import React from 'react'
import {createStackNavigator} from 'react-navigation'
import MyPageScreen from './MyPageScreen'
import AccountTabNavigator from './AccountNavigation'
import { Header, Left, Body, Right, Button, Icon, Title } from 'native-base';

const MyPageStuckNavigator = createStackNavigator(
    {
        MyPage: {
            screen: MyPageScreen,
            navigationOptions: ({navigation}) => ({
              //ヘッダー描写
              header: (
                <Header>
                  <Left>
                    <Button
                      transparent
                      onPress={()=>navigation.openDrawer()}
                    >
                      <Icon name='menu' />
                    </Button>
                  </Left>
                  <Body>
                    <Title>MyPage</Title>
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
            )})
        },
        Login: {
            screen: AccountTabNavigator,
            navigationOptions: ({navigation}) => ({
              //ヘッダー描写(戻るボタン)
              header: (
                <Header>
                  <Left>
                    <Button
                      transparent
                      onPress={()=>navigation.goBack()}
                    >
                      <Icon name='arrow-back' />
                    </Button>
                  </Left>
                  <Body />
                  <Right />
                </Header>
            )})
        }
    }
);
export default MyPageStuckNavigator;
