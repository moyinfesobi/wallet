import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NativeRouter, Route, Routes } from "react-router-native";

import { useFonts } from "expo-font";

import Welcome from "./src/components/Welcome";
import Welcome2 from "./src/components/Welcome2";
import LogIn from "./src/components/Auth/pages/LogIn";
import SignUp from "./src/components/Auth/pages/SignUp";
import Dashboard from "./src/components/Auth/pages/Dashboard";

export default function App() {
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

    // Add more fonts if necessary
  });

  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/" Component={Welcome} />
        <Route exact path="/splash2" Component={Welcome2} />
        <Route exact path="/login" Component={LogIn} />
        <Route exact path="/signup" Component={SignUp} />
        <Route exact path="/dashboard" Component={Dashboard} />
      </Routes>
    </NativeRouter>
  );
}
