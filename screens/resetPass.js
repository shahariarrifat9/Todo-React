import { Text, View, TextInput, ImageBackground, Button } from "react-native";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/InlineTextButton";
import React from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ResetPassword({ navigation }) {
  const backgroundimage = require("../assets/art.jpg");

  let [email, setEmail] = React.useState("");
  let [errMessage, setErrMessage] = React.useState("");

  let resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        navigation.popToTop();
      })
      .catch((error) => {
        setErrMessage(error.message);
      });
  };
  return (
    <ImageBackground style={AppStyles.imageContainer} source={backgroundimage}>
      <View style={AppStyles.bgcover}>
        <Text style={[AppStyles.lightText, AppStyles.header]}>
          Reset Password
        </Text>
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

        <View
          style={[
            AppStyles.rowContainer,
            AppStyles.topMargin,
            AppStyles.bottomMargin,
          ]}
        >
          <Text style={AppStyles.lightText}>Don't have an account? </Text>
          <InlineTextButton
            text="SignUp"
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
        <View style={AppStyles.buttonSL}>
          <Button title="Reset Password" onPress={resetPassword} color="#E74E8C" />
        </View>

        
      </View>
    </ImageBackground>
  );
}
