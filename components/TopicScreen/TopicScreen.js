import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content, Card, CardItem, CheckBox, ListItem, } from 'native-base'

class TopicScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Text>Topicページ(準備中)</Text>
            </Container>
        );
    }
}

export default (TopicScreen);