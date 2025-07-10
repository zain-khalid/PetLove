import { StyleSheet } from "react-native";
import MainTheme from "../../constants/MainTheme";

const styles = StyleSheet.create({
    icon:{
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    container:{
        flex: 1,
        alignItems: "center",
        padding: MainTheme.constants.spacing,
        borderRadius: MainTheme.constants.radius * 0.5
    },
    title:{
        fontSize: MainTheme.fontSize.xs
    },
    titleValue:{
        fontWeight: "700",
        fontSize: MainTheme.fontSize.xs,
    }
})

export default styles;