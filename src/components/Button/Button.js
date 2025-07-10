import React from "react";
import styles from "./styles";
import MainTheme from "../../constants/MainTheme";
import HorizantalSpacing from "../HorizantalSpacing/HorizantalSpacing";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

const Button = ({title, loading, backgroundColor = MainTheme.colors.deepBlue, color = MainTheme.colors.white, ...props}) => {
    return (
        <TouchableOpacity style={[styles.container, { backgroundColor: backgroundColor, shadowColor: backgroundColor, }]} {...props}>
            <Text style={[styles.title, { color: color }]}>{title}</Text>
            {
                loading ? 
                    <>
                        <HorizantalSpacing />
                        <ActivityIndicator size={"small"} color={MainTheme.colors.black} />
                    </>
                : null
            }
        </TouchableOpacity>
    )
}

export default Button;