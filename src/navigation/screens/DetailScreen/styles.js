import { StyleSheet, Dimensions } from "react-native";
import MainTheme from "../../../constants/MainTheme";

const { width } = Dimensions.get("screen");

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        backgroundColor: MainTheme.colors.white
    },
    wallImage:{
        width: width,
        resizeMode: "cover",
        height: width * 0.75,
        paddingHorizontal: MainTheme.constants.spacing
    },
    backIcon:{
        width: 50,
        height: 50,
        resizeMode: "contain",
        tintColor: MainTheme.colors.white
    },
    heartIcon:{
        width: 50,
        height: 50,
        resizeMode: "contain"
    },
    icon:{
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    container:{
        flex: 1,
        paddingHorizontal: MainTheme.constants.spacing
    },
    name:{
        fontWeight: "bold",
        fontSize: MainTheme.fontSize.lg,
        color: MainTheme.colors.secondary,
    },
    locationContainer:{
        flexDirection: "row",
        alignItems: "center"
    },
    location:{
        fontSize: MainTheme.fontSize.sm,
        color: MainTheme.colors.secondary
    },
    description:{
        fontSize: MainTheme.fontSize.sm,
        color: MainTheme.colors.secondary
    },
    generalContainer:{
        flexDirection: "row"
    },
    columnWrapperStyle:{ 
        gap: 12,
        justifyContent: "space-between",
    },
    bottomContainer:{
        paddingHorizontal: MainTheme.constants.spacing
    }
})

export default styles;