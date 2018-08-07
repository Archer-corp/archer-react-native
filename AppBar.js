import React from 'react';
import firebase from 'firebase';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Footer } from 'native-base';

class AppBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'please set title',
        };
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.state.title}</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                    </Right>
                </Header>
            </Container>
        );
    }
}

export default (AppBar);