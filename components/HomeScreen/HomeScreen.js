import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { Container, Header, Left, Button, Icon, Body, Right, Title,ListItem,List    } from 'native-base'
import SearchScreen from '../SearchScreen/SearchScreen'

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

        var items = [
            'Simon Mignolet',
            'Nathaniel Clyne',
            'Dejan Lovren',
            'Mama Sakho',
            'Emre Can'
        ];

        return (
            <Container>
                <StatusBar hidden={true} />
            </Container>
        );

        return (
            <Container>
                <StatusBar hidden={true} />
                <Content>
                    <List dataArray={items}
                        renderRow={(item) =>
                            <ListItem>
                                <Text>{item}</Text>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
  }

}
export default (HomeScreen);
