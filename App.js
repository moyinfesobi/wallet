import { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SplashScreen } from 'expo-splash-screen';

import { useFonts } from "expo-font";

import Welcome from "./src/components/Welcome";
import Welcome2 from "./src/components/Welcome2";
import LogIn from "./src/components/Auth/pages/LogIn";
import SignUp from "./src/components/Auth/pages/SignUp";
import Dashboard from "./src/components/Auth/pages/Dashboard";
import AppLoading from 'expo-app-loading';
import ToastProvider from "react-native-toast-message";
import { RecoilRoot } from "recoil";

 
const { Navigator, Screen } = createNativeStackNavigator();

export default function App() {
  const [isAppReady, setAppReady] = useState(false);
  const [fontsLoaded] = useFonts({
    "poppins-black": require("./assets/fonts/Poppins-Black.ttf"),
    "poppins-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "poppins-extrabold": require("./assets/fonts/Poppins-ExtraBold.ttf"),
    "poppins-extralight": require("./assets/fonts/Poppins-ExtraLight.ttf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.ttf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "poppins-semibold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "poppins-thin": require("./assets/fonts/Poppins-Thin.ttf"),
  });


  if (!fontsLoaded) {
    return <AppLoading />;
  };

  


  return (
    <>
    
      <NavigationContainer>
        <Navigator>
          <>
            <Screen
              name={"welcome"}
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name={"signup"}
              component={SignUp}
              options={{
                headerShown: false,
              }}
            />
            <Screen
              name={"login"}
              component={LogIn}
              options={{
                headerShown: false,
              }}
            />
            
            <Screen
              name={"dashboard"}
              component={Dashboard}
              options={{
                headerShown: false,
              }}
            />
          </>
        </Navigator>
      </NavigationContainer>
      <ToastProvider />
      <RecoilRoot />
    </>
  );
}
