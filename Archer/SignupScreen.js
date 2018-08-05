import React from 'react';
import firebase from 'firebase';
import { Button, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class SignupScreen extends React.Component {

    //TODO
    state = {
        email: 'test1@gmail.com',
        password: 'PassWord1',
        confirmPassword: '',
    };

    onClickedSignup = () => {
        console.log("SIGN UP!");
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {
                console.log("サインイン成功");
            }).catch(function (error) {
                console.error('Error(' + error.code + '): ' + error.message);
            });
        //this.props.history.push("/");
        this.props.navigation.navigate('Home')
    
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>登録ページ</Text>
                <Button
                    title="アカウント作成！"
                    onPress={this.onClickedSignup}
                />
            </View>
        );
    }
}

export default (SignupScreen);