import React from 'react';
//import firebase from 'firebase';
import { Button, StyleSheet, Text, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, BottomTabBar, StackNavigator ,TabNavigator,createStackNavigator,createMaterialTopTabNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import MyPageScreen, { flagupdate } from './MyPageScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import RankingScreen from './RankingScreen';


/*export var CheckFirebaseAuth = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBTpZFQpi2F3bUCWTg-eBM3sSsp_q_ACZY",
    authDomain: "user-5ee06.firebaseapp.com",
    databaseURL: "https://user-5ee06.firebaseio.com",
    projectId: "user-5ee06",
    storageBucket: "user-5ee06.appspot.com",
    messagingSenderId: "135933983009"
  });
  //var user = firebase.auth().currentUser;
  console.log(firebase.auth().currentUser)
  if (user) {
    return true;
  } else {
    return false;
  }
}*/

//GLOBAL
//state = { loggedIn: null };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const check = () => {console.log('renderApp')}

const AccountTabNavigator = createMaterialTopTabNavigator(
    {
        Login: {screen: LoginScreen,},
        Signup: {screen: SignupScreen,},
    }
);

const RankingTabNavigator = createMaterialTopTabNavigator(
    {
        Rise: { screen:RankingScreen , },
        Day: { screen: RankingScreen ,},
        Week: { screen: RankingScreen,},
        Total: { screen: RankingScreen ,},
    }
);

const MyPageStuckNavigator = createStackNavigator(
    {
        MyPage: {
            screen: MyPageScreen,
        },
        Login: {
            screen: AccountTabNavigator,
        }
    },
    /*{
      initialRouteName: 'MyPage',
      initialRouteParams: { //Launch 初始化参数
          str: ()=>{'hello'},
          checkauth: (flag)? true : false
      },
    },
    {
      transitionConfig: ()=> {
        return {transitionProps;
      }
    }*/
);

const RootBottomTabNavigator = createBottomTabNavigator (
    {
        Home: {
            screen:HomeScreen,
        },
        Ranking: {
            screen:RankingTabNavigator,
        },
        MyPage: {
            screen: MyPageStuckNavigator,
        },
    },
    {
        //initialRouteName: 'Home',
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home${focused ? '' : '-outline'}`;
                } else if (routeName === 'MyPage') {
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                } else if (routeName === 'Ranking') {
                    iconName = `ios-star${focused ? '' : '-outline'}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
        },
    }
);

class App extends React.Component {

  /*componentWillMount() {
      firebase.initializeApp({
        apiKey: "AIzaSyBTpZFQpi2F3bUCWTg-eBM3sSsp_q_ACZY",
        authDomain: "user-5ee06.firebaseapp.com",
        databaseURL: "https://user-5ee06.firebaseio.com",
        projectId: "user-5ee06",
        storageBucket: "user-5ee06.appspot.com",
        messagingSenderId: "135933983009"
      });

      firebase.auth().onAuthStateChanged((user) => {
          if (user) {
              this.setState({ loggedIn: true });
              console.log("logged in");
          } else {
              this.setState({ loggedIn: false });
              console.log("not logged in");
          }
      })
      //console.log(firebase.auth().currentUser);
  }*/

    render() {
        //console.log('renderApp')
        check();
        return <RootBottomTabNavigator/>;
    }
}

export default (App);
