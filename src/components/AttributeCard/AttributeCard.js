import React from "react"
import { Image, Text, View } from "react-native";
import styles from "./styles";
import VerticalSpacing from "../VerticalSpacing/VerticalSpacing";
import MainTheme from "../../constants/MainTheme";

const AttributeCard = ({item, data}) => {
    return(
        <View style={[styles.container, {backgroundColor: item.color}]}>
            <Image source={item.icon} style={styles.icon} />
            <VerticalSpacing height={MainTheme.constants.spacing * 0.5} />
            <Text style={styles.title}>{item?.title}</Text>
            <VerticalSpacing height={MainTheme.constants.spacing * 0.5} />
            <Text style={styles.titleValue}>{data?.[item?.key]}</Text>
        </View>
    )
}

export default AttributeCard;