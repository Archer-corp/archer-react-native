import React from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Form, Input, Content } from 'native-base'
//import {} from 'react-navigation';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class MyPageScreen extends React.Component {
  constructor(props){
      super(props);
      
  }

  //ログイン状態に応じてボタンの切り替え
    displayForm() {
        var user = firebase.auth().currentUser; 
    if (this.props.screenProps.loggedIn) {//ログイン中
        return (
            <Container style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>「{user.displayName}」としてログインしています。</Text>
                <Text>{"\n"}</Text>
                <Body>
                <Button onPress={this.onClickedSignout.bind(this)}>
                    <Text>LOG OUT</Text>
                    </Button>
                </Body>
            </Container>
      );
    } else {//ログインしていない
        return (
            <Container >
                <Body>
                    <Text>ログインまたはアカウントを作成すると様々な機能をご利用いただけます</Text>
                    <Text>{"\n"}</Text>
                </Body>
                <Body>
                    <Button onPress={() => this.props.navigation.push('Login')} style={{ width: '90%' }}>
                    <Text style={{}}>   進む   </Text>
                    </Button>
                </Body>              
            </Container>
      );
    }
  }

  //サインアウト
  onClickedSignout(){
    console.log('Signout');
    firebase.auth().signOut().then(function() {
      console.log('success');
    }).catch(function(error) {
      console.error('Error(' + error.code + '): ' + error.message);
    });
    this.props.navigation.navigate('Home')
  }

  render() {
    console.log('renderMyPage');
    return (
        <Container>
            {this.displayForm()}
        </Container>
    );
  }
}

export default (MyPageScreen);
