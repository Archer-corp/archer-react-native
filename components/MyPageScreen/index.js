import {createStackNavigator} from 'react-navigation'
import MyPageScreen from './MyPageScreen'
import AccountTabNavigator from './AccountNavigation'

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
export default MyPageStuckNavigator;
