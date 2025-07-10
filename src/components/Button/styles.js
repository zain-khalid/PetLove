import { StyleSheet } from "react-native";
import MainTheme from "../../constants/MainTheme";

const styles = StyleSheet.create({
    container:{
        elevation: 7,
        shadowRadius: 5,
        shadowOpacity: 0.43,
        flexDirection: "row",
        justifyContent: "center",
        padding: MainTheme.constants.spacing,
        shadowOffset: { width: 0, height: 0 },
        borderRadius: MainTheme.constants.radius,
    },
    title:{
        fontWeight: "700",
        textAlign: "center",
        fontSize: MainTheme.fontSize.md,
    }
})

export default styles;