import React from 'react'
import { createStackNavigator } from 'react-navigation'
import { Header, Left, Button, Icon, Body, Right, Title ,Input,Form,Item,Content} from 'native-base'
import SearchScreen from './SearchScreen'

const SearchStuckNavigator = createStackNavigator(
  {
    Search: {
      screen: SearchScreen,
      navigationOptions: ({navigation,screenProps}) => ({
        //ヘッダー描写
        header: (
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="search" />
            </Item>
          </Header>
        )})
    }
  }
)

export default (SearchStuckNavigator);
