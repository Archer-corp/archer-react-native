import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator,createStackNavigator} from 'react-navigation';
import LoginScreen from './LoginScreen';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class HomeScreen extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>ホーム</Text>
                <Button
                    title="マイページへ"
                    onPress={() => this.props.navigation.navigate('MyPage')}
                />

            </View>
            
        );
    }
}

export default (HomeScreen);