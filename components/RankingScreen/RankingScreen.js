import React, { Component } from "react";
import {} from "react-native";
import {Text, Container, Header, Content, List, ListItem, Thumbnail, Left, Body, Right, Button} from "native-base";

class RankingScreen extends Component {
    ranking = () => {
        //仮の連想配列を作成。この連想配列については、アーティスト情報(?)のようなところから引っ張ってくる形になると思います。
        //pointについてはもっといい名前があると思うので,変更してください
        //下の連想配列は一例です。
        const riseArtist = [
            { name: "art1", point: 30, thumbnail:'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art2", point: 10, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art3", point: 110, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art4", point: 120, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art5", point: 130, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art6", point: 140, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art7", point: 150, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art8", point: 160, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
            { name: "art9",point: 40, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  }
            ],
            dayArtist = [
                { name: "art1", point: 70, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
                { name: "art2", point: 90, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' },
                { name: "art3",  point: 50, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  }
            ],
            weekArtist = [
                { name: "art1",  point: 400, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  },
                { name: "art2", point: 200, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  },
                { name: "art3", point: 550, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  }
            ],
            totalArtist = [
                { name: "art1",  point: 1900, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  },
                { name: "art2", point: 2000, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg'  },
                { name: "art3",  point: 1200, thumbnail: 'http://idolrenaissance.com/images/home/member/marin.jpg' }
            ];
        //ここまで一例です。

        const artistArray = [riseArtist, dayArtist, weekArtist, totalArtist]; //アーティスト情報みたいなのから引っ張って来て、この配列に入れれば自動でランキングにできます。

        return artistArray.map((element, index) => {
            artistArray[index].sort((i, j) => {
                // pointの高い順にソート
                // 低い順にするなら条件式の不等号をそれぞれ逆にしてください。
                if (i.point > j.point) {
                    return -1;
                }
                if (i.point < j.point) {
                    return 1;
                }
                return 0;
            });
            return artistArray[index].map((e, i) => {
                return (
                    <ListItem thumbnail style={{ padding: 0, margin: 0 }}>
                        <Left>
                            <Thumbnail rounded source={{ uri: e.thumbnail }} />
                        </Left>
                        <Body>
                            <Text style={{ padding: 0, margin: 0 }}> {(i + 1) + "位   " + e.name + "\n" + e.point + "like"}</Text>
                        </Body>
                        <Right>
                            <Button bordered >
                                <Text>フォロー</Text>
                            </Button>
                        </Right>
                    </ListItem>
             
                );
            });
        });
    };
    //ランキング集計期間の種類を増やしても追加されます。
    //style={{ padding: 0, margin: 0 }}についてはどちらでも構わないです。
    rankingList = i => {
        return (
            <List
                dataArray={this.ranking()[i]}
                renderRow={data => {
                    return (
                        <Content>                           
                                {data}                            
                        </Content>
                    );
                }}
            />
        );
    };

    render() {
        routeName = this.props.navigation.state.routeName;
        return (
            <Container>
                <Content>
                    {/*ランキング集計期間による場合分け*/}
                    {routeName === "Rise" && this.rankingList(0)}
                    {routeName === "Day" && this.rankingList(1)}
                    {routeName === "Week" && this.rankingList(2)}
                    {routeName === "Total" && this.rankingList(3)}
                </Content>
            </Container>
        );
    }
}

export default RankingScreen;