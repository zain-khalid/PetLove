import { StyleSheet } from "react-native";
import MainTheme from "../../../constants/MainTheme";

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: MainTheme.constants.spacing
    },
    mapView:{
        height: 300,
        borderRadius: MainTheme.constants.radius
    },
    headerContainer:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: MainTheme.constants.spacing,
    },
    logo:{
        width: 30,
        height: 30,
        resizeMode: "contain"
    },
    locationText:{
        fontWeight: "bold",
        fontSize: MainTheme.fontSize.sm
    }
})

export default styles