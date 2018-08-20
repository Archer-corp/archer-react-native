import React from 'react';
import firebase from 'firebase';
import { StyleSheet,Alert,  View } from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Form, Input, Content, Text ,Item} from 'native-base'

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

  //サインイン
  onClickedSignin(){
    console.log('Signin');
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function () {
          console.log('サインイン成功');
          this.props.navigation.navigate('MyPage')
      }).catch(function(error) {
          console.error('Error(' + error.code + '): ' + error.message);

    });
    
  }

  render() {
    return (
        <Container>
            <Content>
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
                        />
                    </Item>
                </Form>

                <Body>
                    <Text>{"\n"}</Text>
                <Button onPress={this.onClickedSignin.bind(this)}>
                    <Text>ログイン</Text>
                </Button>
                </Body>

            </Content>
      </Container>
    );
  }
}

export default (LoginScreen);
