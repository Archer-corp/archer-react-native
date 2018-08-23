import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container, Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content, Card, CardItem, CheckBox, ListItem, } from 'native-base'
//import { isContext } from 'vm';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

//チェックボックスを管理するための列挙型
const checkBoxIndex = {
    jpop: 0,
    jazz: 1,
    rock: 2,
    max: 3,
};

class SearchScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
           // isChk:[],
        };

        /*
        console.log("a1");
        //this.state.isChk = new Array[checkBoxIndex.max];
        var isChkInit =[];
        for (var i = 0; i < checkBoxIndex.max; i++) {
            isChkInit[i] = true;
        }
        console.log("a2");
        this.setState({ isChk: isChkInit });
        console.log("a3");
        */
    }

    
    check(index) {//渡された番号のチェックボックスのオンオフ
        var isChkCopy = this.state.isChk.slice();
        isChkCopy[index] = !isChkCopy[index];
        console.log("check:"+index+"→"+!isChkCopy[index]);
        this.setState({isChk:isChkCopy});
    }

    render() {
        return (
            <Container>
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>ジャンル</Text>
                        </CardItem>
                        <CardItem>
                            <Content>
                                <ListItem>
                                    <CheckBox />
                                <Body>
                                    <Text>J-pop</Text>
                                </Body>
                                </ListItem>
                            <ListItem>
                                <CheckBox/>
                                <Body>
                                    <Text>Discussion with Client</Text>
                                </Body>
                            </ListItem>
                            <ListItem>
                                <CheckBox/>
                                <Body>
                                    <Text>Finish list Screen</Text>
                                </Body>
                                </ListItem>
                                </Content>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text>
                                //Your text here
                                </Text>
                                <Text>
                                //Your text here
                                </Text>
                                <Text>
                                //Your text here
                                </Text>
                                <Text>
                                //Your text here
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
                <Body>



                </Body>

            </Container>
        );
    }
}

export default (SearchScreen);
