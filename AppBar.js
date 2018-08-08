import React from 'react';
import firebase from 'firebase';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer } from 'native-base';
import { createNavigator } from 'react-navigation';
import { StyleSheet, Text, View } from 'react-native'

export class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'please set title',
            navigation:null,
        };
    }
 

    render() {
        if (this.state.navigation == null) return(<View/>);
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.navigation.state}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default (AppBar);