import React from 'react'
import firebase from 'firebase'
import {createDrawerNavigator, createStackNavigator} from 'react-navigation'
import { Container, Content, Thumbnail, List, ListItem, Text, Header, Left, Button, Icon, Body, Right, Title, Item, Input, Form} from 'native-base'
import HomeScreen from '../HomeScreen/HomeScreen'
import RankingScreen from '../RankingScreen/RankingScreen'
import MyPageScreen from '../MyPageScreen/MyPageScreen'
import RootBottomTabNavigator from '../HomeScreen/index'
import SearchScreen from '../SearchScreen/SearchScreen'

const AppDrawer = createDrawerNavigator(
  {
    Root: {screen:RootStackNavigator},
    Home: {screen: HomeScreen},
    Ranking: {screen: RankingScreen},
    MyPage: {screen: MyPageScreen},
  },
  {
    contentComponent: (props) => <SideBar {...props}/>
  }
);

//const routes = ["Home", "Chat", "Profile"];
const routes = ['Home','Ranking','MyPage'];
class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigation, screenProps } = this.props;
    return (
      <Container>
        <Content>
          <Thumbnail large source={{uri: screenProps.userData.uri}} />
          <Text>{screenProps.userData.name}</Text>
          <List
            dataArray={routes}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => navigation.navigate(data)}>
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}
export default AppDrawer;
