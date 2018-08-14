import React from 'react'
import {createStackNavigator} from 'react-navigation'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import HomeScreen from './HomeScreen'

const HomeStuckNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
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
              <Title>Home</Title>
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
    }
  }
);

export default (HomeStuckNavigator);
