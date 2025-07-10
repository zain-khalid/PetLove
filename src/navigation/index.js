import defaultOptions from "./styles";
import ScreenName from "../constants/ScreenName";
import { DetailScreen, HomeScreen } from "./screens";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MockPaymentScreen from "./screens/MockPaymentScreen/MockPaymentScreen";

const Navigation = createNativeStackNavigator({
  initialRouteName: ScreenName.home_screen,
  screens: {
    [ScreenName.home_screen]: {
        screen: HomeScreen,
        ...defaultOptions
    },
    [ScreenName.detail_screen]: {
        screen: DetailScreen,
        ...defaultOptions
    },
    [ScreenName.mock_payment_screen]: {
        screen: MockPaymentScreen,
        ...defaultOptions
    },
  },
});

export default createStaticNavigation(Navigation);