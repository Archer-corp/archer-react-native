'use strict';
import React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import firebase from 'firebase';
import { createBottomTabNavigator} from 'react-navigation';
import { Container, Text, Header, Body, Input, Content } from 'native-base';
//import QRCodeScanner from 'react-native-qrcode-scanner';

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
