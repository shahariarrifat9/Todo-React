import { Button, Modal, View, Text, TextInput, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import AppStyles from "../styles/AppStyles";

export default function AddList(props) {
    let [todo, setTodo] = React.useState("");
  const backgroundimage = require("../assets/bg2.jpg");

  return (
    <ImageBackground style={AppStyles.imageContainer} source={backgroundimage}>
    <View style={AppStyles.addTocontainer}>
      <Text style={AppStyles.addHeader}>Add To-Do</Text>
      <TextInput
        style={[
          AppStyles.textinputTodo,
          AppStyles.darkTextInput,
          AppStyles.input
          
        ]}
        id='input1'
        placeholderTextColor= '#53595A'
        placeholder="Add Your List"
        value={todo}
        onChangeText={setTodo}
      />
      <View style={[AppStyles.buttonContainer]}>
        <View style={AppStyles.buttonPadd}>
          <Button title="Cancel" onPress={props.onClose} color= '#E23D5B'/>
        </View>
        <View style={AppStyles.buttonPadd}>
          <Button title="Ok" onPress={() => {
            props.addTodo(todo);
            setTodo("");
            props.onClose();
        }}/>
        </View>
        
        
      </View>
    </View>
    </ImageBackground>
  );
}
