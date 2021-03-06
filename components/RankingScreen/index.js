import React from 'react'
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation'
import { Header, Left, Body, Right, Button, Icon, Title, Text } from 'native-base';
import RankingScreen from './RankingScreen'

const RankingTabNavigator = createMaterialTopTabNavigator(
    {
        Rise: { screen:RankingScreen , },
        Day: { screen: RankingScreen ,},
        Week: { screen: RankingScreen,},
        Total: { screen: RankingScreen ,},
    }
);


//上のTabNavigatorに飛ぶ
const RankingStuckNavigator = createStackNavigator(
  {
    Ranking: {
      screen: RankingTabNavigator,
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
              <Title>Ranking</Title>
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

export default RankingStuckNavigator;
