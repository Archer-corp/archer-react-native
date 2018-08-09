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
);
export default MyPageStuckNavigator;
