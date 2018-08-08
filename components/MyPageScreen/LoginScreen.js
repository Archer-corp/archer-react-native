import React from 'react';
import firebase from 'firebase';
import { Button, StyleSheet, Text, TextInput, Alert,  View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    height: 30,
    borderWidth: 1,
    borderColor: '#333'
  }
});

class LoginScreen extends React.Component {

  state={ email: '', password: '' }

  onClickedSignin(){
    console.log('Signin');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function () {
        console.log('success');
      }).catch(function(error) {
        console.error('Error(' + error.code + '): ' + error.message);
    });
    this.props.navigation.navigate('MyPage')
  }

  render() {
    return (
      <View>
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
            title="ログイン！"
            onPress={this.onClickedSignin.bind(this)}
          />
      </View>
    );
  }
}

export default (LoginScreen);
