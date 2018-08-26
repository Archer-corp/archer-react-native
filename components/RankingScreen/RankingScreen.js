import React, { Component } from "react";
import { View, Text } from "react-native";
import { Container, List, ListItem } from "native-base";

class RankingScreen extends Component {
    ranking = () => {
        //仮の連想配列を作成。この連想配列については、アーティスト情報(?)のようなところから引っ張ってくる形になると思います。
        //pointについてはもっといい名前があると思うので,変更してください
        //下の連想配列は一例です。
        const riseArtist = [
            { name: "art1", point: 30 },
            { name: "art2", point: 10 },
            { name: "art3", point: 40 }
        ],
            dayArtist = [
                { name: "art1", point: 70 },
                { name: "art2", point: 90 },
                { name: "art3", point: 50 }
            ],
            weekArtist = [
                { name: "art1", point: 400 },
                { name: "art2", point: 200 },
                { name: "art3", point: 550 }
            ],
            totalArtist = [
                { name: "art1", point: 1900 },
                { name: "art2", point: 2000 },
                { name: "art3", point: 1200 }
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
                return i + 1 + "位" + "\n" + e.name + "\n" + e.point + "ポイント"; //ポイントであってるのかわからないので確認お願いします。
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
                        <ListItem style={{ padding: 0, margin: 0 }}>
                            <Text style={{ padding: 0, margin: 0 }}>{data}</Text>
                        </ListItem>
                    );
                }}
            />
        );
    };

    render() {
        routeName = this.props.navigation.state.routeName;
        return (
            <Container>
                <View>
                    {/*ランキング集計期間による場合分け*/}
                    {routeName === "Rise" && this.rankingList(0)}
                    {routeName === "Day" && this.rankingList(1)}
                    {routeName === "Week" && this.rankingList(2)}
                    {routeName === "Total" && this.rankingList(3)}
                </View>
            </Container>
        );
    }
}

export default RankingScreen;
