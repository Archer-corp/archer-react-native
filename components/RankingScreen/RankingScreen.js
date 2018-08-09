import React from 'react';
import firebase from 'firebase';
import { StyleSheet, Text, View } from 'react-native'
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer } from 'native-base';
import AppBar from '../Root/AppBar'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


class RankingScreen extends React.Component {

    render() {
        routeName = this.props.navigation.state.routeName;
        //console.log(this.props.navigation.state);
        return (
          <Container>
            <AppBar
              navigation={this.props.navigation}
              title='Ranking'
            />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {/*ランキング集計期間による場合分け*/}
              {routeName === 'Rise' && <Text>急上昇</Text>}
              {routeName === 'Day' && <Text>デイリー</Text>}
              {routeName === 'Week' && <Text>ウィークリー</Text>}
              {routeName === 'Total' && <Text>トータル</Text>}
              <Text>ランキングページ</Text>
            </View>
          </Container>
        );
    }
}

export default (RankingScreen);
