import React from "react";
import AppScreen from "./components/AppScreen";
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
    return <AppScreen />;
  }
}

export default App;
