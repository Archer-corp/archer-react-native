import React from 'react';
import firebase from 'firebase';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

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
        email: '',
        password: '',
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
            <View>
                <Text>登録ページ</Text>
                <TextInput
                  placeholder="user@gmail.com"
                  Value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
                <TextInput
                    placeholder="password"
                    Value={this.state.email}
                    onChangeText={password => this.setState({ password })}
                  />
                  <Button
                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    title="アカウント作成！"
                    onPress={this.onClickedSignup.bind(this)}
                  />
            </View>
        );
    }
}

export default (SignupScreen);
