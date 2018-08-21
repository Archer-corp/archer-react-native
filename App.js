import React from 'react';
import firebase from 'firebase';
import {StyleSheet, Text, View, Alert } from 'react-native'
import AppDrawer from './components/Root/Drawer'
import { Container, Header, Left, Button, Icon, Body, Right, Title, Form, Input, Content } from 'native-base'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //NativeBaseに使ってるらしい
            loading: true,
            //Firebaseのログイン状態のデータ
            loggedIn: null,
            //ログイン時のユーザーデータ保持
            userData: {
                name: '',
                photouri: 'https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif'
        }
    };
  }

  async componentWillMount() {
    //NativeBaseの初期化処理
      await Expo.Font.loadAsync({//fontロード
        'Roboto': require('native-base/Fonts/Roboto.ttf'),
        'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });

    //Firebaseの初期化処理
    await firebase.initializeApp({
        apiKey: "AIzaSyBK8ri7rFLGHWz10l9BH6xYG82PjweYECk",
        authDomain: "archer-corp.firebaseapp.com",
        databaseURL: "https://archer-corp.firebaseio.com",
        projectId: "archer-corp",
        storageBucket: "archer-corp.appspot.com",
        messagingSenderId: "208210760399"
    });

    //Firebaseのログイン状態を確認しstate.userDataの更新
    await firebase.auth().onAuthStateChanged((user) => {
      if (user) {
          this.setState({ loggedIn: true });
          //コメントアウトされたコマンドでFirebase上のユーザーデータを更新できる
          /*
          user.updateProfile({
            displayName: 'Jack the Ripper',
            photoURL: 'https://karakuri.link/wp-content/uploads/2015/11/04.jpg'
          })*/
          let userData = Object.assign({}, this.state.userData);
          userData.name = user.displayName;
          userData.photouri = user.photoURL;
          this.setState({userData});
          console.log("logged in (" + userData.name);

          if (firebase.auth().currentUser.emailVerified) {//メール認証済み
              console.log("メール認証済み");
          } else {//メール認証されていない
              console.log("メール認証されていない");
              Alert.alert("メール認証をしてください。");
              firebase.auth().currentUser.sendEmailVerification();
          }

      } else {
          this.setState({ loggedIn: false });
          let userData = Object.assign({}, this.state.userData);
          userData.name='';
          userData.photouri='https://upload.wikimedia.org/wikipedia/en/e/ee/Unknown-person.gif';
          this.setState({userData});
          console.log("not logged in");
          Alert.alert("No Users Found", "Oops, Looks like you are not signed in");
      }
    })
  }

  render() {
    if (this.state.loading) {
      return <Expo.AppLoading />;
    }
    console.log('renderApp')
    //screenPropsでreact-navigtionのコンポーネントにAppコンポーネントのstateを渡す
      return (
      <Container>
        <AppDrawer screenProps = {this.state}/>
      </Container>
    );
  }
}

export default (App);
