import React from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class MyPageScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>マイページ</Text>
                <Button
                    title="ホームへ"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
                <Text>{"\n"}</Text>
                <Button
                    title="Log in or Sign up"
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

export default (MyPageScreen);