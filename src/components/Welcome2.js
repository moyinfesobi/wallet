import { StyleSheet, Text, View, StatusBar, ImageBackground } from 'react-native'
import MySwiper2 from '../assets/SVGs/Swiper2';
import { Link } from 'react-router-native';

const Welcome2 = () => {
    const myImg = require("../assets/splash-two-2.png");

  return (
    <>
          <StatusBar backgroundColor="#FDD590" barStyle="dark-content" />
          <ImageBackground source={myImg} style={styles.image} resizeMode="cover">
        <View style={styles.container}>
          <View style={styles.buttom}>
            <MySwiper2 />

            <Text style={styles.first}> Transfer Money With Ease</Text>
            <Text style={styles.second}>
              {" "}
              Making money is hard enough, we {"\n"}  make transfering it easy enough. 
            </Text>
            <Link style={styles.third} to="/login">
            <View>
              <Text style={styles.thirdText}> Start Banking </Text>
            </View>
            </Link>
          </View>
        </View>
      </ImageBackground>
    </>
  )
}

export default Welcome2

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
      color: "#1C265C",
      fontFamily: "poppins-bold",
  
      fontSize: 18,
      marginBottom: 5,
    },
    second: {
      color: "#283470",
      fontFamily: "poppins-regular",
      fontSize: 16,
      marginBottom: 10,
    },
    third: {
      backgroundColor: "#1C265C",
      width: 145,
      height: 50,
      borderRadius: 10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    thirdText: {
      color: "#FFFFFF",
      fontFamily: "poppins-medium",
      fontSize: 16,
    },
  
    buttom: {
      marginBottom: 40,
    },
  });