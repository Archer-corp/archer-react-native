import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
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

  render() {
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
