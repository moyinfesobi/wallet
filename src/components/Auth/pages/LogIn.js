import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  Pressable,
  ActivityIndicator,
} from "react-native";
import {
  initialLoginValues,
  LoginSchema,
} from "../../../validation/login-schema.js";
import { Formik, ErrorMessage } from "formik";
import Toast from "react-native-toast-message";
import { login } from "../../../app/modules/services/authCRUD.js";

const LogIn = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  // const [auth, setAuth] = useRecoilState(authState);

  const handleLogiSubmit = async (values) => {
    try {
      setLoading(true);
      const { username, password } = values;
      await login(username, password);
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "Login Successful",
      });
      navigation.navigate("dashboard", {username});
    } catch (e) {
      if (!e.message.includes("Network")) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: e.response,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: "Network Error",
        });
      }
      setLoading(false);
    }
  };
  return (
    <>
      <StatusBar backgroundColor="#0E164D" barStyle="light-content" />
      <View style={styles.container}>
        <Text style={styles.first}>Welcome Back!</Text>
        <Text style={styles.second}> Sign in to your account </Text>

        {/* FORM */}
        <Formik
          initialValues={initialLoginValues}
          validationSchema={LoginSchema}
          onSubmit={handleLogiSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit }) => (
            <View>
              <View>
                <TextInput
                  style={styles.firstInput}
                  name={"username"}
                  onChangeText={handleChange("username")}
                  placeholder="Username"
                  placeholderTextColor={"#0E164D"}
                />
                <ErrorMessage name={"username"}>
                  {(msg) => (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        marginBottom: 10,
                        marginTop: 5,
                      }}
                    >
                      {msg}
                    </Text>
                  )}
                </ErrorMessage>
              </View>

              <View>
                <TextInput
                  style={styles.secondInput}
                  autoComplete={"off"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="Password"
                  placeholderTextColor={"#0E164D"}
                  secureTextEntry
                />
                <ErrorMessage name={"password"} style={{ alignSelf: "start" }}>
                  {(msg) => (
                    <Text
                      style={{
                        fontSize: 10,
                        color: "red",
                        marginTop: 5,
                      }}
                    >
                      {msg}
                    </Text>
                  )}
                </ErrorMessage>
              </View>

              <Text style={styles.show}> Show Password</Text>
              <Pressable style={styles.myLogin} onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator color={"#FFFFFF"} />
                ) : (
                  <Text style={styles.myLoginText}> Log In</Text>
                )}
              </Pressable>

              <Pressable onPress={() => navigation.navigate("signup")}>
                <Text style={styles.mySignUp}>
                  Don’t have an account? Sign Up
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
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
