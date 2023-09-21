import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import Constants from "expo-constants";


export const registerForPushNotificationsAsync = async() => {
    let token;
    if (Device.isDevice) {
      const { status: existingStatus } = await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== 'granted') {
       // alert('Failed to get push token for push notification!');
       return null;;
      }
      token = (await Notifications.getDevicePushTokenAsync()).data;
     /* token = await Notifications.getExpoPushTokenAsync({
        projectId: Constants.expoConfig.extra.eas.projectId,
      });*/
      //console.log(token);
    } else {
      //console.log('Must use physical device for Push Notifications');
      return null;
    }
  
    return token;
  }