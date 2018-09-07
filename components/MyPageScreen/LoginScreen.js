import React from 'react';
import firebase from 'firebase';
import { StyleSheet,Alert,  View } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Form, Input, Content, Text, Item, Toast } from 'native-base'
import Expo from 'expo'

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

  constructor(props) {
    super(props);
      this.state = {
        email: '',
        password: '',
      };
  }

  //ログイン
  onClickedSignin(){
    console.log('Signin');
    var navigation = this.props.navigation
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function () {//ログイン成功
        console.log('ログイン成功');
        navigation.navigate('Home');
      }).catch(function(error) {//ログイン失敗
        console.warn(error.message);
        Alert.alert(error.message);
      });
  }

  async onClickedGoogleSignin(){
    const result = await Expo.Google.logInAsync({
      androidClientId: '208210760399-8no580p6f885vs17i3pveqtor91hbuu4.apps.googleusercontent.com',
      iosClientId: '208210760399-cbkg3m13177vf92lvj29noi0f97d05bt.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });

    if (result.type === 'success') {
      const { idToken, accessToken } = result;
      const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
      firebase
        .auth()
        .signInAndRetrieveDataWithCredential(credential)
        .then(res => {
          this.props.navigation.navigate('Home')
        })
        .catch(error => {
          console.log("firebase cred err:", error);
        });
    } else {
      return {cancelled: true};
    }
  }


  render() {
    return (
        <Container>
          <Content contentContainerStyle={{flex:1, justifyContent: 'center'}}>
            <Form>
              <Item>
                <Input
                  placeholder="email"
                  Value={this.state.email}
                  onChangeText={email => this.setState({ email })}
                />
              </Item>
              <Item last>
                <Input
                  placeholder="password"
                  Value={this.state.password}
                  onChangeText={password => this.setState({ password })}
                  secureTextEntry={true}
                />
              </Item>
            </Form>

            <Text>{"\n"}</Text>
            <Button
              style={{alignSelf:'center'}}
              onPress={this.onClickedSignin.bind(this)}
              bordered>
              <Text>ログイン</Text>
            </Button>
            <Button
              style={{alignSelf:'center'}}
              onPress={this.onClickedGoogleSignin.bind(this)}
              bordered>
              <Text>googleログイン</Text>
            </Button>

          </Content>
        </Container>
    );
  }
}

export default (LoginScreen);
