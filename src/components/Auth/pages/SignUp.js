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
  initialSignupValues,
  SignupSchema,
} from "../../../validation/signup-schema";
import { Formik, ErrorMessage } from "formik";
import Toast from "react-native-toast-message";
import { signup } from "../../../app/modules/services/authCRUD";

const SignUp = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [passwordType, setPassordType] = useState(true);

  const togglePassword = () => {
    setPassordType(!passwordType);
  };

  const handSignUpSubmit = async (values) => {
    try {
      setLoading(true);
      const { username, password, email } = values;
      await signup(username, password, email);
      setLoading(false);
      Toast.show({
        type: "success",
        text1: "SignUp Successful",
      });
      navigation.navigate("dashboard", { username });
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
        <Text style={styles.first}>Create New Account </Text>
        <Text style={styles.second}>
          {" "}
          Kindly fill the form with your details{" "}
        </Text>

        {/* FORM */}
        <Formik
          initialValues={initialSignupValues}
          validationSchema={SignupSchema}
          onSubmit={handSignUpSubmit}
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
                  name={"email"}
                  onChangeText={handleChange("email")}
                  placeholder="Email"
                  placeholderTextColor={"#0E164D"}
                />
                <ErrorMessage name={"email"}>
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
                  secureTextEntry={passwordType}
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

              <Pressable onPress={togglePassword}>
                <Text style={styles.show}>
                  {passwordType ? "Show" : "Hide"} Password
                </Text>
              </Pressable>
              <Pressable style={styles.myLogin} onPress={handleSubmit}>
                {loading ? (
                  <ActivityIndicator color={"#FFFFFF"} />
                ) : (
                  <Text style={styles.myLoginText}> Sign Up</Text>
                )}
              </Pressable>

              <Pressable
                style={styles.myLink}
                onPress={() => navigation.navigate("login")}
              >
                <Text style={styles.mySignUp}>
                  {" "}
                  Already have an account? Sign In{" "}
                </Text>
              </Pressable>
            </View>
          )}
        </Formik>
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
