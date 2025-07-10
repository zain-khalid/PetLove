import { Platform } from "react-native"
import { checkMultiple, PERMISSIONS, requestMultiple, RESULTS } from "react-native-permissions"

export const handlePermission = async (handleCallBack) => {
    let permissionsList = [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
    if(Platform.OS == "android"){
        permissionsList = [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
    }
    await checkMultiple(permissionsList)
    .then((result)=>{
        if(Platform.OS == "ios" && result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] != RESULTS.GRANTED){
            handlePermissionRequest(handleCallBack);
        } else if(Platform.OS == "android" && result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] != RESULTS.GRANTED){
            handlePermissionRequest(handleCallBack);
        } else if (result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == RESULTS.GRANTED || result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] == RESULTS.GRANTED) {
            handleCallBack()
        }
    })
    .catch((error)=>{
        console.log(JSON.stringify(error))
    })
}

const handlePermissionRequest = async (handleCallBack) => {
    let permissionsList = [PERMISSIONS.IOS.LOCATION_WHEN_IN_USE]
    if(Platform.OS == "android"){
        permissionsList = [PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION]
    }
    await requestMultiple(permissionsList)
    .then( async (result)=>{
        if(result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == RESULTS.BLOCKED || result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] == RESULTS.BLOCKED) {
            await openSettings("application")
        } else if (result[PERMISSIONS.IOS.LOCATION_WHEN_IN_USE] == RESULTS.GRANTED || result[PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION] == RESULTS.GRANTED) {
            handleCallBack()
        }
    })
    .catch((error)=>{
        console.log(JSON.stringify(error))
    })
}