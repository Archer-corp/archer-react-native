import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer } from 'native-base';
import LoginScreen from './LoginScreen';
import AppBar from './AppBar';

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
                <AppBar navigation={this.props.navigation}/>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ホーム</Text>
                <Button
                    title="マイページへ"
                    onPress={() => this.props.navigation.navigate('MyPage')}
                />

                </View>
                </Container>
            
        );
    }
}

export default (HomeScreen);