import React from 'react';
import { StyleSheet, StatusBar,Image } from 'react-native'
import firebase from 'firebase';
import { createBottomTabNavigator, BottomTabBar, StackNavigator, TabNavigator, createStackNavigator } from 'react-navigation';
import { Container,Text, Header, Left, Button, Icon, Body, Right, Title, Input, Form, Item, Content,CheckBox, List, ListItem, Thumbnail, Card, CardItem,} from 'native-base'

class TopicScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    topic = () => {
        //仮の連想配列de一例です。
        const topicData= [
            { name: "art1", date: 30, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art2", date: 10, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art3", date: 110, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art4", date: 120, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
        ]

        const topicArray = [topicData]; //情報引っ張って来て、この配列に入れればok。

        return topicArray.map((element, index) => {
            topicArray[index].sort((i, j) => {
                // 日付順にソート
                // 逆順にするなら条件式の不等号をそれぞれ逆にしてください。
                if (i.date > j.date) {
                    return -1;
                }
                if (i.date < j.date) {
                    return 1;
                }   
                return 0;
            });
            return topicArray[index].map((e, i) => {
                return (
                    <ListItem style={{width:'100%'}}>

                        <Card style={{width: '95%' }}>
                            <CardItem cardBody style={{width: '100%' }}>
                                <Image source={{ uri: e.thumbnail }} style={{ height: 200,flex: 1 }}/>
                            </CardItem>
                        </Card>

                    </ListItem>

                );
            });
        });
    };
    //ランキング集計期間の種類を増やしても追加されます。
    //style={{ padding: 0, margin: 0 }}についてはどちらでも構わないです。
    topicList = i => {
        return (
            <List
                dataArray={this.topic()[i]}
                renderRow={data => {
                    return (
                        <Content style={{ padding: 0, margin: 0 }}>
                            {data}
                        </Content>
                    );
                }}
            />
        );
    };

    render() {
      //  routeName = this.props.navigation.state.routeName;
        return (
            <Container>
                <Content>
                    {this.topicList(0)}
                </Content>
            </Container>
        );
    }
}

export default (TopicScreen);