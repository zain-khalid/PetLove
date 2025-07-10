import { View } from "react-native"
import MainTheme from "../../constants/MainTheme";

const VerticalSpacing = ({height = MainTheme.constants.spacing}) => {
    return (
        <View style={{height: height}} />
    )
}

export default VerticalSpacing;