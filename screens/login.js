import { Text, View, TextInput, ImageBackground, Button } from "react-native";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/InlineTextButton";
import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login({ navigation }) {
  const backgroundimage = require("../assets/art.jpg");

  if (auth.currentUser) {
    navigation.navigate("TodoList");
  } else {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigation.navigate("TodoList");
      }
    });
  }
  let [email, setEmail] = React.useState("");
  let [password, setPassword] = React.useState("");
  let [errMessage, setErrMessage] = React.useState("");

  let login = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          navigation.navigate("TodoList", { user: userCredential.user });
        })
        .catch((error) => {
          setErrMessage(error.message);
        });
    } else {
      setErrMessage("Please enter an email and password");
    }
  };
  return (
    <ImageBackground style={AppStyles.imageContainer} source={backgroundimage}>
      <View style={AppStyles.bgcover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>Login</Text>
        <Text style={AppStyles.errorMessage}>{errMessage}</Text>
        <TextInput
          style={[
            AppStyles.textinput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Email"
          placeholderTextColor="#bebebe"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={[
            AppStyles.textinput,
            AppStyles.lightTextInput,
            AppStyles.lightText,
          ]}
          placeholder="Password"
          placeholderTextColor="#bebebe"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
        <View style={[AppStyles.rowContainer, AppStyles.topMargin]}>
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="SignUp"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
        <View style={[AppStyles.rowContainer, AppStyles.bottomMargin]}>
          <Text style={AppStyles.lightText}>Forgot Password? </Text>
          <InlineTextButton
            text="Change"
            onPress={() => navigation.navigate("ResetPassword")}
          />
        </View>

        <View style={AppStyles.buttonSL}>
          <Button title="Login" onPress={login} color="#E74E8C" />
        </View>
        
      </View>
    </ImageBackground>
  );
}
