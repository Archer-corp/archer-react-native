import React from 'react';
import { StyleSheet,StatusBar } from 'react-native'
import firebase from 'firebase';
import { Container, Content,Text,Header, Left, Button, Icon, Body, Right, Title,ListItem,List    } from 'native-base'
//import SearchScreen from '../SearchScreen/SearchScreen'

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

    onClickedTutorial() {
        console.log('go tutorial');
        var navigation = this.props.navigation
        navigation.navigate('Tutorial')
    }

    render() {

        //TODO
        return (
            <Container>
                <Content>
                    <StatusBar hidden={true} />
                    <Text>Go Tutorial</Text>
                    <Button
                        bordered
                        onPress={this.onClickedTutorial.bind(this)}
                    >
                        <Text>Go Tutorial</Text>
                    </Button>
                </Content>
            </Container>
        );
  }

}
export default (HomeScreen);
