import React from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import { StyleSheet, Text, View, Alert } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title} from 'native-base'
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

  componentWillMount(){
    //ページ名を取得
    this.props.screenProps.getPage('MyPage')
  }

  //ログイン状態に応じてボタンの切り替え
  displayForm(){
    if (this.props.screenProps.loggedIn) {
      return (
        <Button
          onPress={this.onClickedSignout.bind(this)}
        >
          <Text>LOGOUT</Text>
        </Button>
      );
    } else {
      return (
        <Button
          onPress={() => this.props.navigation.navigate('Login')}
        >
          <Text>Log in or Sign up</Text>
        </Button>
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
        <Body>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{this.props.screenProps.userData.name}のページ</Text>
            <Button
              onPress={() => this.props.navigation.navigate('Home')}
            >
              <Text>ホームへ</Text>
            </Button>
            <Text>{"\n"}</Text>
            {this.displayForm()}
          </View>
        </Body>
      </Container>
    );
  }
}

export default (MyPageScreen);
