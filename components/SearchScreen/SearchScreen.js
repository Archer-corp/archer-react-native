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
            isChk:[],
        };
    }

    
    check = (index) => {//渡された番号のチェックボックスのオンオフ
        if (index >= checkBoxIndex.max) return;
        var isChkCopy = this.state.isChk.slice();
        isChkCopy[index] = !isChkCopy[index];
        //console.log("switchCheckBox No."+index+"→"+!isChkCopy[index]);
        this.setState({isChk:isChkCopy});
    }

    render() {
        return (
            <Container>
                <Content>

                    <Card>{/*ジャンル指定カード*/}
                        <CardItem header>
                            <Text>ジャンル</Text>
                        </CardItem>
                        <CardItem>
                            <Content>
                                <ListItem onPress={() => this.check(checkBoxIndex.jpop)}>
                                    <CheckBox  checked={this.state.isChk[checkBoxIndex.jpop]} />
                                    <Body>
                                        <Text>　J-pop</Text>
                                    </Body>
                                </ListItem>

                                <ListItem onPress={() => this.check(checkBoxIndex.jazz)}>
                                    <CheckBox checked={this.state.isChk[checkBoxIndex.jazz]}/>
                                    <Body>
                                        <Text>　jazz</Text>
                                    </Body>
                                </ListItem >

                                <ListItem onPress={() => this.check(checkBoxIndex.rock)}>
                                    <CheckBox checked={this.state.isChk[checkBoxIndex.rock]}/>
                                    <Body>
                                        <Text>　rock</Text>
                                    </Body>
                                </ListItem>
                                <ListItem onPress={() => this.check(checkBoxIndex.rock)}>
                                    <CheckBox checked={this.state.isChk[checkBoxIndex.rock]} />
                                    <Body>
                                        <Text>　rock</Text>
                                    </Body>
                                </ListItem>
                                <ListItem onPress={() => this.check(checkBoxIndex.rock)}>
                                    <CheckBox checked={this.state.isChk[checkBoxIndex.rock]} />
                                    <Body>
                                        <Text>　rock</Text>
                                    </Body>
                                </ListItem>
                                </Content>
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
