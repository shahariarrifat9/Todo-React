import {
  View,
  Text,
  Button,
  SafeAreaView,
  Modal,
  ImageBackground,
  ActivityIndicator,
  FlatList,
} from "react-native";
import AppStyles from "../styles/AppStyles";
import InlineTextButton from "../components/InlineTextButton";
import { auth, db } from "../firebase";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signOut, sendEmailVerification } from "firebase/auth";
import AddList from "../components/addList";
import React from "react";
import { async } from "@firebase/util";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import { Button } from '@rneui/themed';

export default function TodoList({ navigation }) {
  let [modalView, setModalView] = React.useState(false);
  let [isLoading, setLoading] = React.useState(true);
  let [toDos, settoDos] = React.useState(true);
  let [isRefreshing, setIsRefreshing] = React.useState(false);

  let loadList = async () => {
    const q = query(
      collection(db, "todos"),
      where("userId", "==", auth.currentUser.uid)
    );

    const querySnapshot = await getDocs(q);
    let toDos = [];
    querySnapshot.forEach((doc) => {
      let toDo = doc.data();
      toDo.id = doc.id;
      toDos.push(toDo);
    });
    // console.log(toDos);
    settoDos(toDos);
    setLoading(false);
    setIsRefreshing(false);
  };
  if (isLoading) {
    loadList();
  }

  let LogOut = () => {
    signOut(auth).then(() => {
      navigation.popToTop();
    });
  };

  let checkTodoItems = (item, isChecked) => {};

  let deleteTodo = async (toDoId) => {
    await deleteDoc(doc(db, "todos", toDoId));
    let updatedTodo = [...toDos].filter((item) => item.id != toDoId);
    settoDos(updatedTodo);
  };

  let renderTodoItem = ({ item }) => {
    return (
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.rightMargin,
          AppStyles.leftMargin,
        ]}
      >
        <View style={AppStyles.fillSpace}>
          <BouncyCheckbox
            isChecked={item.completed}
            size={25}
            fillColor="#258ea6"
            unfillColor="#FFFFFF"
            text={item.text}
            iconStyle={{ borderColor: "#258ea6" }}
            onPress={(isChecked) => {
              checkTodoItems(item, isChecked);
            }}
          />
        </View>
        <InlineTextButton
          text="Delete"
          color="#F81E1E"
          onPress={() => deleteTodo(item.id)}
        />
      </View>
    );
  };

  let showTodoList = () => {
    return (
      <FlatList
        // style={AppStyles.stretch}
        refreshing={isRefreshing}
        onRefresh={() => {
          loadList();
          setIsRefreshing(true);
        }}
        data={toDos}
        renderItem={renderTodoItem}
        keyExtractor={(item) => item.id}
      />
    );
  };

  let showContent = () => {
    return (
      <View >
        {isLoading ? <ActivityIndicator size="large" /> : showTodoList()}
        <View style={AppStyles.buttonPaddTodo}>
          <View style={[AppStyles.padbottom, AppStyles.buttonPadd1]}>
            <Button
              title="Add What To-Do"
              onPress={() => setModalView(true)}
              color="#28CB2E"
            />
          </View>
          <View style={AppStyles.padbottom}>
            <Button title="LogOut" onPress={LogOut} color='#E23D5B'/>
          </View>

          
        </View>
      </View>
    );
  };

  let showSendVerificationEmail = () => {
    return (
      <View >
        <Text style={AppStyles.alertTodo}>Please verify email to use the App</Text>
        <View style={[AppStyles.buttonPadd1]}>
        <Button
          title="Send Verification Email"
          onPress={() => sendEmailVerification(auth.currentUser)}
          color="#0EC247"
        />
        </View>
        <View style={[AppStyles.padbottom, AppStyles.buttonPaddTodo]}>
            <Button title="LogOut" onPress={LogOut} color='#E23D5B'/>
          </View>
        
      </View>
    );
  };

  let addTodo = async (todo) => {
    let toDoToSave = {
      text: todo,
      completed: false,
      userId: auth.currentUser.uid,
    };
    const docRef = await addDoc(collection(db, "todos"), toDoToSave);

    toDoToSave.id = docRef.id;

    let updatedToDos = [...toDos];
    updatedToDos.push(toDoToSave);

    settoDos(updatedToDos);
  };
  return (
    <SafeAreaView >
      <View
        style={[
          AppStyles.rowContainer,
          AppStyles.alignRight,
          AppStyles.rightMargin,
          AppStyles.todopadd,
          AppStyles.topMargin,
        ]}
      ></View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalView}
        onRequestClose={() => setModalView(false)}
      >
        <AddList onClose={() => setModalView(false)} addTodo={addTodo} />
      </Modal>
      <Text style={AppStyles.todoheader}>TodoList</Text>
      {auth.currentUser.emailVerified
        ? showContent()
        : showSendVerificationEmail()}
    </SafeAreaView>
  );
}
