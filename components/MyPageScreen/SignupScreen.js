import React from 'react';
import firebase from 'firebase';
import { StyleSheet,Alert} from 'react-native'
import { Container,Text,Header, Left, Button, Icon, Body, Right, Title, Form, Input, Content, Item, Toast } from 'native-base'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            email: '',
            password: '',
            confirmPassword: '',
            showToast: false
        };
    }


    //サインアップ
    onClickedSignup = () => {
        console.log("アカウント登録ボタン");

        if (this.state.username == '') {
            //Toast.show({ text: " ユーザー名を入力してください", buttonText: "OK", type: "warning" });
            Alert.alert('ユーザー名を入力してください。');
            return;
        }

        if (this.state.password != this.state.confirmPassword) {
            //Toast.show({ text: ' パスワードの確認と食い違っています', buttonText: 'OK', type: 'danger' });
            Alert.alert('パスワードが一致しません、もう一度お確かめください 。');
            return;
            this.setState({confirmPassword:''});
        }

        var navigation = this.props.navigation
        var username = this.state.username;

        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(function () {//登録成功
                console.log("サインアップ成功,確認メール送信");
                firebase.auth().currentUser.sendEmailVerification()//アカウント確認メール送信
                alert("確認メールを送信しました。");
                firebase.auth().currentUser.updateProfile({//ユーザー名を反映
                    displayName:username,
                    //photoURL: "https://example.com/jane-q-user/profile.jpg" //TODO photo(user icon)
                }).then(function () {//プロフィール更新成功
                    console.log('ユーザー名を'+username+'に更新。');
                }).catch(function (error) {//プロフィール更新失敗
                    console.warn('ユーザープロフィール更新失敗(' + username);
                    Alert.alert('ユーザープロフィール更新失敗(' + username);
                    });
                navigation.navigate('Home');

            }).catch(function (error) {//登録失敗
                console.warn('Error(' + error.code + '): ' + error.message);
                //Toast.show({ text:error.message, buttonText: "OK", type: "danger" });
                Alert.alert(error.message);
                return;
            });
    }

    render() {
        return (
            <Container>
              <Content contentContainerStyle={{flex:1, justifyContent: 'center' }}>
                <Form>
                  <Item>
                    <Input
                      placeholder="user name"
                      Value={this.state.username}
                      onChangeText={username => this.setState({ username })}
                    />
                  </Item>

                  <Item>
                    <Input
                      placeholder="email"
                      Value={this.state.email}
                      onChangeText={email => this.setState({ email })}
                    />
                  </Item>

                  <Item>
                    <Input
                      placeholder="password"
                      Value={this.state.password}
                      onChangeText={password => this.setState({ password })}
                      secureTextEntry={true}
                    />
                  </Item>
                  <Item>
                    <Input
                      placeholder="please confirm password"
                      Value={this.state.confirmPassword}
                      onChangeText={confirmPassword => this.setState({ confirmPassword })}
                      secureTextEntry={true}
                    />
                  </Item>
                </Form>

                <Text>{"\n"}</Text>
                <Button
                  style={{alignSelf:'center'}}
                  onPress={this.onClickedSignup.bind(this)}
                  bordered
                >
                  <Text>アカウント登録</Text>
                </Button>
              </Content>
            </Container>
        );
    }
}

export default (SignupScreen);
