import { View } from "react-native"
import MainTheme from "../../constants/MainTheme";

const HorizantalSpacing = ({width = MainTheme.constants.spacing}) => {
    return (
        <View style={{width: width}} />
    )
}

export default HorizantalSpacing;