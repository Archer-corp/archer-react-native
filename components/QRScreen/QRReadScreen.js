import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Text, Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content, CheckBox, List, ListItem, Thumbnail, Card, CardItem, } from 'native-base'

class QRReadScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Container>
                <Content>
                    <Text>Read QR code mode</Text>
                </Content>
            </Container>
        );
    }
}

export default (QRReadScreen);
