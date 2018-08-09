import React from 'react'
import { Container, Header, Left, Button, Icon, Body, Right, Title} from 'native-base'

export default class AppBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { navigation, screenProps } = this.props;
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={()=>this.props.navigation.openDrawer()}
            >
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>{this.props.title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='search' />
            </Button>
          </Right>
        </Header>
      </Container>
    )
  }
}
