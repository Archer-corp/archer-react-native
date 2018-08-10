import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Button, Icon, Body, Right, Title ,Input,Form,Item,Content} from 'native-base'
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

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
    }

    componentWillMount(){
      this.props.screenProps.getPage('search')
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                  <Item>
                      <Icon name="ios-search" />
                      <Input placeholder="search" />
                  </Item>
                </Header>


                <Body>



                </Body>

            </Container>
        );
    }
}

export default (SearchScreen);
