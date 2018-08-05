import React from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import { Button, StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
//import { CheckFirebaseAuth } from './App'

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
    this.state={loggedIn: null,
                userData: {
                  name: '',
                  email: '',
               },}
  }

  componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyBTpZFQpi2F3bUCWTg-eBM3sSsp_q_ACZY",
        authDomain: "user-5ee06.firebaseapp.com",
        databaseURL: "https://user-5ee06.firebaseio.com",
        projectId: "user-5ee06",
        storageBucket: "user-5ee06.appspot.com",
        messagingSenderId: "135933983009"
      });

      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.setState({ loggedIn: true });
              /*user.updateProfile({
                displayName: 'Jack the Ripper',
              })*/
              let userData = Object.assign({}, this.state.userData);
              userData.name = user.displayName;
              this.setState({userData});
              console.log("logged in");
          } else {
              this.setState({ loggedIn: false });
              const nullData={};
              this.setState({nullData});
              console.log("not logged in");
          }
      })
      //const user = firebase.auth().currentUser;
      console.log('a');
  }

  displayForm(){
    if (this.state.loggedIn) {
      return (
        <Button
          title= "LogOut"
          onPress={this.onClickedSignout.bind(this)}
        />
      );
    } else {
      return (
        <Button
          title= "Log in or Sign up"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      );
    }
  }

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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>{this.state.userData.name}のページ</Text>
        <Button
          title="ホームへ"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Text>{"\n"}</Text>
        {this.displayForm()}
      </View>
    );
  }
}

export default (MyPageScreen);
export var flagupdate;
