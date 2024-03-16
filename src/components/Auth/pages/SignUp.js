import { StyleSheet, Text, View, StatusBar, TextInput } from "react-native";
import { Link } from "react-router-native";

const SignUp = () => {
  return (
    <>
      <StatusBar backgroundColor="#0E164D" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.first}>Create New Account </Text>
        <Text style={styles.second}>
          {" "}
          Kindly fill the form with your details{" "}
        </Text>

        {/* FORM */}
        <View>
          <TextInput
            style={styles.firstInput}
            placeholder="Username"
            placeholderTextColor={"#0E164D"}
          />

          <TextInput
            style={styles.secondInput}
            placeholder="Email"
            placeholderTextColor={"#0E164D"}
          />

          <TextInput
            style={styles.secondInput}
            placeholder="Password"
            placeholderTextColor={"#0E164D"}
          />

          <Text style={styles.show}> Show Password</Text>
          <Link to="/dashboard" style={styles.myLogin}>
            <View style={styles.myLogin}>
              <Text style={styles.myLoginText}> SignUp</Text>
            </View>
          </Link>

          <Link to="/LogIn" style={styles.myLink}>
            <Text style={styles.mySignUp}>
              {" "}
              Already have an account? Sign In{" "}
            </Text>
          </Link>
        </View>
      </View>
    </>
  );
};

export default SignUp;

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
  myLink: {
    backgroundColor: "none",
  },
});
