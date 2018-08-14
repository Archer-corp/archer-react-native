import React from 'react'
import firebase from 'firebase';
import { AppRegistry, Image, StatusBar } from "react-native";
import {createBottomTabNavigator} from 'react-navigation'
import { Container, Content, Header, Left, Body, Right, Button, Icon, Title, Footer, List, ListItem, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import RankingStuckNavigator from '../RankingScreen/index'
import MyPageStuckNavigator from '../MyPageScreen/index'
import SearchStuckNavigator from '../SearchScreen/index'
import HomeStuckNavigator from '../HomeScreen/index'


/*const RootStackNavigator = createStackNavigator(
  {
  RootTab: {
    screen: RootBottomTabNavigator,
    navigationOptions: ({navigation,screenProps}) => ({
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
            <Title>{screenProps.Page}</Title>
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
      )})}
  }
);*/

const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen:HomeStuckNavigator,
        },
        Search: {
            screen:SearchStuckNavigator
        },
        Ranking: {
            screen:RankingStuckNavigator,
        },
        MyPage: {
            screen: MyPageStuckNavigator,
        },
    },
    {
        //initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'MyPage') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'Ranking') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                } else if (routeName === 'Search') {
                    iconName = `ios-search${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);


export default (RootBottomTabNavigator);
