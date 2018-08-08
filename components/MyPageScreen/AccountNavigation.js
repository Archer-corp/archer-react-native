import {createMaterialTopTabNavigator} from 'react-navigation'
import LoginScreen from './LoginScreen'
import SignupScreen from './SignupScreen'

const AccountTabNavigator = createMaterialTopTabNavigator(
    {
        Login: {screen: LoginScreen,},
        Signup: {screen: SignupScreen,},
    }
);
export default AccountTabNavigator;
