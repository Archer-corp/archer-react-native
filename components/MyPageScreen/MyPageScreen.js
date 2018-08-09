import React from 'react';
import firebase from 'firebase';
import LoginScreen from './LoginScreen';
import { Button, StyleSheet, Text, View, Alert } from 'react-native'
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

    componentWillMount() {
        console.log('MyPageScreen:componentWillMount');
        //console.log(this.props)
  }

  displayForm(){
    if (this.props.screenProps.loggedIn) {
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
        <Text>{this.props.screenProps.userData.name}のページ</Text>
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
