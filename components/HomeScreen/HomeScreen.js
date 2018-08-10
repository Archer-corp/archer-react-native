import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Button, Icon, Body, Right, Title} from 'native-base'
import SearchScreen from '../SearchScreen/SearchScreen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount(){
    //ページ名を取得
    this.props.screenProps.getPage('Home')
  }

  render() {
    console.log(this.props.screenProps)
      return (
        <Container>
          <StatusBar hidden={true} />
          <Body>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>ホーム</Text>
            <Button
              onPress={()=>this.props.navigation.navigate('MyPage')}
            >
              <Text>マイページへ</Text>
            </Button>
          </View>
          </Body>
        </Container>
      );
  }

}
export default (HomeScreen);
