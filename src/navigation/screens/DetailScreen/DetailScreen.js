import React from "react"
import styles from "./styles"
import MainTheme from "../../../constants/MainTheme"
import ScreenName from "../../../constants/ScreenName"
import { useNavigation } from "@react-navigation/native"
import { attributeSection } from "../../../constants/helperData"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { ARROW_LEFT_ICON, HEART_ICON, LOCATION_PIN_ICON } from "../../../assets/icons"
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native"
import { AttributeCard, Button, HorizantalSpacing, PetDetailTable, VerticalSpacing } from "../../../components"

const DetailScreen = ({route}) => {

    const { item } = route?.params;

    const details = [
        { label: 'Age', value: item.age },
        { label: 'Type', value: item.type },
    ];

    const { top, bottom } = useSafeAreaInsets();

    const { navigate, goBack } = useNavigation();

    const handleAdoptMe = () => {
        navigate(ScreenName.mock_payment_screen, {item})
    }
    
    return (
        <View style={styles.wrapper}>
            <ImageBackground source={{uri: item.image}} style={[styles.wallImage, { paddingTop: top }]} >
                <TouchableOpacity onPress={goBack}>
                    <Image source={ARROW_LEFT_ICON} style={styles.backIcon} />
                </TouchableOpacity>
            </ImageBackground>
            <VerticalSpacing />
            <View style={styles.container}>
                <View style={styles.generalContainer}>
                    <View style={{flex: 1}}>
                        <Text style={styles.name}>{item?.name}</Text>
                        <VerticalSpacing height={MainTheme.constants.spacing * 0.25} />
                        <View style={styles.locationContainer}>
                            <Image source={LOCATION_PIN_ICON} style={styles.icon} />
                            <HorizantalSpacing width={MainTheme.constants.spacing * 0.5} />
                            <Text style={styles.location}>{item?.location}</Text>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <Image source={HEART_ICON} style={styles.heartIcon} />
                    </TouchableOpacity>
                </View>
                <VerticalSpacing />
                <Text style={styles.description}>{item?.description}</Text>
                <VerticalSpacing />
                <PetDetailTable details={details} />
                <VerticalSpacing />
                <FlatList
                  horizontal={false}
                  scrollEnabled={false}
                  data={attributeSection}
                  numColumns={attributeSection.length}
                  keyExtractor={(_, index) => index.toString()}
                  columnWrapperStyle={styles.columnWrapperStyle}
                  renderItem={(props) => <AttributeCard {...props} data={item} />}
                />
            </View>
            <View style={[styles.bottomContainer, {paddingBottom: bottom || MainTheme.constants.spacing}]}>
                <Button title={"Adopt Me"} color={MainTheme.colors.white} onPress={handleAdoptMe} />
            </View>
        </View>
    )
}

export default DetailScreen