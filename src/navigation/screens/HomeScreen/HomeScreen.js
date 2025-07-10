import styles from "./styles"
import MapView, { Marker } from "react-native-maps"
import petsList from "../../../constants/pets.json"
import MainTheme from "../../../constants/MainTheme"
import ScreenName from "../../../constants/ScreenName"
import React, { useEffect, useRef, useState } from "react"
import Geolocation from "@react-native-community/geolocation"
import { FlatList, ScrollView, View, Text, Image } from "react-native"
import { CardView, VerticalSpacing } from "../../../components"
import { handlePermission } from "../../../helper/generalHelper"
import { useSafeAreaInsets } from "react-native-safe-area-context"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { PAW } from "../../../assets/images"

const HomeScreen = () => {

    const mapRef = useRef();

    const isFocused = useIsFocused();
    
    const { navigate } = useNavigation()

    const { top, bottom } = useSafeAreaInsets()
    
    const [userPosition, setUserPosition] = useState(null)
    const [isLocationEnable, setIsLocationEnable] = useState(false);

    const handleDetailNavigation = (item) => {
        navigate(ScreenName.detail_screen, {item})
    }

    const setUserLocation = () => {
        setIsLocationEnable(true);
    }

    useEffect(()=>{
        if(isLocationEnable) {
            const watchId = Geolocation.watchPosition( async (position) => {
                setUserPosition({...position?.coords, latitudeDelta: 0.01, longitudeDelta: 0.01,})
            },
            (error) => {
                console.error(error);
            },{
                maximumAge: 0,
                timeout: 20000,
                distanceFilter: 5,
                enableHighAccuracy: true,
                useSignificantChanges: false
            }
        );

        // Clean up the watcher on component unmount
        if(!isFocused){
            Geolocation.clearWatch(watchId);
        }
        
        return () => {
            Geolocation.clearWatch(watchId);
        };
        }
    },[isLocationEnable, isFocused])

    useEffect(()=>{
        if(!!userPosition){
            mapRef.current?.animateToRegion(userPosition)
        }
    },[userPosition])

    useEffect(()=>{
        handlePermission(setUserLocation)
    },[])

    return (
        <ScrollView style={[styles.container, {paddingTop: top || MainTheme.constants.spacing}]} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: bottom + MainTheme.constants.spacing }}>
            <View style={styles.headerContainer}>
                <Text style={styles.locationText}>Location: {userPosition?.latitude}, {userPosition?.longitude}</Text>
                <Image source={PAW} style={styles.logo} />
            </View>
            <VerticalSpacing />
            <MapView
                ref={mapRef}
                zoomEnabled={false}
                scrollEnabled={false}
                style={styles.mapView}
                showsUserLocation={true}
            >
                {
                    !!userPosition ?
                        <Marker coordinate={userPosition} />
                    : null
                }
            </MapView>
            <VerticalSpacing />
            <FlatList
                data={petsList}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                ItemSeparatorComponent={VerticalSpacing}
                keyExtractor={(item, index)=>index.toString()}
                renderItem={(props) => <CardView {...props} handleNavigation={handleDetailNavigation} />}
            />
        </ScrollView>
    )
}

export default HomeScreen