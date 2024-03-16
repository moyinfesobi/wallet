import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { Link } from "react-router-native";

const LogIn = () => {
  return (
    <>
      <StatusBar backgroundColor="#0E164D" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.first}>Welcome Back!</Text>
        <Text style={styles.second}> Sign in to your account </Text>

        {/* FORM */}
        <View>
          <TextInput
            style={styles.firstInput}
            placeholder="Email"
            placeholderTextColor={"#0E164D"}
          />

          <TextInput
            style={styles.secondInput}
            placeholder="Password"
            placeholderTextColor={"#0E164D"}
          />

          <Text style={styles.show}> Show Password</Text>
          <Link to="/SignUp" style={styles.myLogin}>
            <View>
              <Text style={styles.myLoginText}> Log In</Text>
            </View>
          </Link>
          
          <Text style={styles.mySignUp}>
              Don’t have an account? Sign Up
            </Text>
        
          
          
          
         
        </View>
      </View>
    </>
  );
};

export default LogIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0E164D",
    paddingTop: 40,
  },
  first: {
    color: "#FFFFFF",
    fontFamily: "poppins-bold",
    fontSize: 18,
  },
  second: {
    color: "#FFFFFF",
    fontFamily: "poppins-medium",
    fontSize: 16,
  },
  firstInput: {
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 323,
    borderRadius: 10,
    marginTop: 40,
    paddingLeft: 5,
    color: "#0E164D",
  },
  secondInput: {
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 323,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 5,
    color: "#0E164D",
  },
  show: {
    textAlign: "right",
    color: "#FFFFFF",
    fontFamily: "poppins-light",
    fontSize: 14,
    marginTop: 10,
  },
  myLogin: {
    height: 50,
    width: 323,
    backgroundColor: "#17288E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 40,
    marginBottom: 30,
  },
  myLoginText: {
    color: "#FFFFFF",
    fontFamily: "poppins-semibold",
    fontSize: 15,
  },
  mySignUp: {
    color: "#FFFFFF",
    fontSize: 15,
    fontFamily: "poppins-regular",
    textAlign: "center",
  },
});
