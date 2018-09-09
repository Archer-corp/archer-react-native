import React from 'react';
import { StyleSheet,StatusBar } from 'react-native'
import firebase from 'firebase';
import { Container,Text, Header, Left, Button, Icon, Body, Right, Title, ListItem, List } from 'native-base'

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
    }

    render() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Content>
                    <Text>Tutorial</Text>
                </Content>
            </Container>
        );
    }

}
export default (HomeScreen);