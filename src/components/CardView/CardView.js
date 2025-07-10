import React from "react";
import styles from "./styles";
import { HorizantalSpacing } from "..";
import { ARROW_RIGHT_ICON } from "../../assets/icons";
import { Image, Text, TouchableOpacity, View } from "react-native";

const CardView = ({item, handleNavigation}) => {

    const onPress = () => {
        handleNavigation(item)
    }

    return (
        <View>
            <Image source={{uri: item?.image}} style={styles.image} />
            <View style={styles.detailContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.name}>{item?.name}</Text>
                    <Text style={styles.description} numberOfLines={2} >{item?.description}</Text>
                </View>
                <HorizantalSpacing />
                <TouchableOpacity onPress={onPress}>
                    <Image source={ARROW_RIGHT_ICON} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CardView;