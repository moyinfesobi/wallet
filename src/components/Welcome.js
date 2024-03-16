import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ImageBackground,
} from "react-native";
import { Link } from "react-router-native";
import MySwiper from "../assets/SVGs/Swiper";

const Welcome = () => {
  const myImg = require("../assets/splash-one2.png");
  return (
    <>
      <StatusBar backgroundColor="#0E164D" barStyle="light-content" />
      <ImageBackground source={myImg} style={styles.image} resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.buttom}>
            <MySwiper />
            <Text style={styles.first}> Transfer That Is Safe</Text>
            <Text style={styles.second}>
              {" "}
              You have nothing to be scared {"\n"} about, we got you covered.
            </Text>
            <Link to="/splash2" style={styles.third}>
              <View style={styles.third}>
                <Text style={styles.thirdText}> Start Banking </Text>
              </View>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 30,
  },
  image: {
    flex: 1,
  },

  first: {
    color: "white",
    fontFamily: "poppins-bold",

    fontSize: 18,
    marginBottom: 5,
  },
  second: {
    color: "white",
    fontFamily: "poppins-regular",
    fontSize: 16,
    marginBottom: 10,
  },
  third: {
    backgroundColor: "#FFFFFF",
    width: 145,
    height: 50,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  thirdText: {
    color: "#17288E",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },

  buttom: {
    marginBottom: 40,
  },
});
