import React from 'react';
import { StyleSheet} from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator } from 'react-navigation';
import { Container, Text, Header, Body,Content} from 'native-base'
import QRCode from 'react-native-qrcode';

class QRShowScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myQRText: 'http://facebook.github.io/react-native/',
        };
    }

    render() {
        return (
            <Container>
                <Body>
                    <Text>Show own QR code mode</Text>
                    <QRCode
                        value={this.state.text}
                        size={200}
                        bgColor='purple'
                        fgColor='white' />
                </Body>
            </Container>
        );
    }
}

export default (QRShowScreen);