import React from 'react';
import { StyleSheet,StatusBar } from 'react-native'
import firebase from 'firebase';
import { Container,Content,Text, Header, Left, Button, Icon, Body, Right, Title, ListItem, List} from 'native-base'
import MyPageScreen from '../MyPageScreen/MyPageScreen'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

class TutorialScreen extends React.Component {

    constructor(props) {
        super(props);
    }


    render() {//現在のタブで振り分け
        const { routeName } = this.props.navigation.state;
        if (routeName === 'tHome') {
            return this.homeTab();
        } else if (routeName === 'tTopic') {
            return this.topicTab();
        } else if (routeName === 'tSearch') {
            return this.searchTab();
        } else if (routeName === 'tRanking') {
            return this.rankingTab();
        } else if (routeName === 'tMyPage') {
            return this.myPageTab();
        } else if (routeName === 'Terms') {
            return this.termsTab();
        } 




     }


    homeTab() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Content padder>
                    <Text>Homeの説明</Text>
                </Content>
            </Container>
        );
    }

    topicTab() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Content padder>
                    <Text>Topicの説明</Text>
                </Content>
            </Container>
        );
    }

    searchTab() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Content padder>
                    <Text>Searchの説明</Text>
                </Content>
            </Container>
        );
    }

    rankingTab() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Content padder>
                    <Text>Rankingの説明</Text>
                </Content>
            </Container>
        );
    }

    myPageTab() {
        return (
            <Container>
                <MyPageScreen screenProps={this.state}/>
                </Container>
        );
    }

    termsTab() {
        return (
            <Container>
                <StatusBar hidden={true} />
                <Body>
                    <Text>利用規約</Text>
                    <Button
                        style={{ alignSelf: 'center' }}
                        onPress={this.onClickedAgree.bind(this)}
                        bordered>
                        <Text>同意して始める</Text>
                    </Button>
                </Body>
            </Container>
        );
    }

    onClickedAgree() {//利用規約に同意＆チュートリアル終了
        console.log("利用規約に同意されました");
        this.props.navigation.navigate('RootBottomTab');
    }

}
export default (TutorialScreen);