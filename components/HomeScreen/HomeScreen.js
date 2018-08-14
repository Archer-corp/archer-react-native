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

getCurrentRouteName(navigationState) {
  if (!navigationState) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route.routeName;
};

  render() {
    console.log();
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
