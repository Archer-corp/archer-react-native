import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Button, Icon, Body, Right, Title} from 'native-base'
//import AppBar from './AppBar';
//import AppDrawer from './App'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class HomeScreen extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          title: 'please set title',
      };
  }
    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button
                  transparent
                  onPress={()=>this.props.navigation.openDrawer()}
                >
                  <Icon name='menu' />
                </Button>
              </Left>
              <Body>
                <Title>{this.state.title}</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='search' />
                </Button>
              </Right>
            </Header>
            <Body>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>ホーム</Text>
              <Button
                onPress={()=>this.props.navigation.navigate('MyPage')}
              >
                <Text>マイページへ</Text>
              </Button>
            </View>
            </Body>
          </Container>
        );
    }
}

export default (HomeScreen);
