import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, TextInput, View, Alert} from 'react-native'
import { Container, Header, Left, Button, Icon, Body, Right, Title ,Form,Input,Content,Item} from 'native-base'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class SignupScreen extends React.Component {

    state = {
        username:'',
        email: '',
        password: '',
    };

    //サインアップ
    onClickedSignup = () => {
        console.log("アカウント登録ボタン");
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {//登録成功
                console.log("サインアップ成功,確認メール送信");
                firebase.auth().currentUser.sendEmailVerification()
                this.props.navigation.navigate('Home')
            }).catch(function (error) {//登録失敗
                console.error('Error(' + error.code + '): ' + error.message);
                Alert.alert('Error(' + error.code + '): ' + error.message);
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
                    <Button onPress={this.onClickedSignup.bind(this)}>
                        <Text>アカウント登録</Text>
                    </Button>
               </Body>
                </Content>
              
            </Container>
        );
    }
}

export default (SignupScreen);
