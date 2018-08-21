import React from 'react'
import firebase from 'firebase'
import {createDrawerNavigator } from 'react-navigation'
import { Container, Content, Thumbnail, List, ListItem, Text, Button, Icon, Body, Right, Title, Item, Input, Form} from 'native-base'
import HomeScreen from '../HomeScreen/HomeScreen'
import RankingScreen from '../RankingScreen/RankingScreen'
import MyPageScreen from '../MyPageScreen/MyPageScreen'
import SearchScreen from '../SearchScreen/SearchScreen'
import RootBottomTabNavigator from '../Root/index'

//ドロワーからrootに飛ぶ、ドロワーに表示するrouteは書いておく
const AppDrawer = createDrawerNavigator(
  {
    Root: {screen:RootBottomTabNavigator},
    Home: { screen: HomeScreen },
    Search: {screen:SearchScreen},
    Ranking: {screen: RankingScreen},
    MyPage: {screen: MyPageScreen},
  },
  {
    //サイドバーでドロワーを細かく描写できる
    contentComponent: (props) => <SideBar {...props}/>
  }
);

//Thumbnailはプロフィール画像、Textでユーザーネーム、listで画面遷移
const routes = ['Home','Search','Ranking','MyPage'];
class SideBar extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    const { navigation, screenProps } = this.props;
    return (
      <Container>
        <Content>
          <Thumbnail large source={{uri: screenProps.userData.photouri}} />
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
