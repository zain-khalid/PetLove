import MainTheme from "../../constants/MainTheme";
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");
const IMAGE_WIDTH = width - (MainTheme.constants.spacing * 2)

const styles = StyleSheet.create({
    image:{
        height: 300,
        width: IMAGE_WIDTH,
        resizeMode: "cover",
        borderRadius: MainTheme.constants.radius,
    },
    detailContainer:{
        position: "absolute",
        flexDirection: "row",
        alignItems: "center",
        left: MainTheme.constants.spacing,
        right: MainTheme.constants.spacing,
        bottom: MainTheme.constants.spacing,
        padding: MainTheme.constants.spacing,
        borderRadius: MainTheme.constants.radius,
        backgroundColor: MainTheme.colors.white95,
    },
    name:{
        fontWeight: "bold",
        fontSize: MainTheme.fontSize.lg,
    },
    icon:{
        width: 50,
        height: 50,
        resizeMode: "contain",
        tintColor: MainTheme.colors.white
    },
    contentContainer:{
        flex: 1
    }
})

export default styles