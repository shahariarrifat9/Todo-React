import { StyleSheet } from "react-native";

export default StyleSheet.create({
  imageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },

  addTocontainer: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
    borderRadius: 10,
    width: "auto",
    borderColor: "black",
    // borderWidth:10
  },
  todopadd: {
    padding: 20,
  },

  buttonPadd: {
    paddingRight: 5,
    width: "40%",
    height: 100,
  },

  buttonPaddTodo: {
    padding: 5,
    width: "40%",
    alignSelf: "center",
    justifyContent: "center",
  },

  alertTodo: {
    // padding: 5,
    alignSelf: "center",
    justifyContent: "center",
    color:'#ff0000'
  },

  buttonPadd1: {
    padding: 5,
    width: 270,
    height: 70,
    alignSelf: "center",
    justifyContent: "center",
  },

  padbottom: {
    paddingBottom: 10,
  },

  buttonSL: {
    width: '100%',
  },

  // noPadding:{
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   backgroundColor:'red'
  // },

  rowContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },

  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    marginVertical: 4,
  },

  stretch: {
    alignSelf: "stretch",
    backgroundColor: "#0C1323",
  },

  btnStyle: {
    marginHorizontal: 50,
    height: 50,
    width: 200,
    marginVertical: 10,
    borderRadius: 20,
  },

  fillSpace: {
    flex: 1,
  },

  alignRight: {
    justifyContent: "flex-end",
  },

  topMargin: {
    marginTop: 16,
  },

  bottomMargin: {
    marginBottom: 16,
  },

  rightMargin: {
    marginRight: 16,
  },

  leftMargin: {
    marginLeft: 16,
  },

  bgcover: {
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    margin: 20,
    padding: 20,
    opacity: 0.75,
    borderRadius: 10,
  },

  lightText: {
    color: "#fff",
    fontWeight: "bold",
  },

  errorMessage: {
    color: "#ff0000",
    fontWeight:'bold'
  },

  header: {
    fontSize: 25,
    alignSelf: "center",
  },

  addHeader: {
    fontSize: 35,
    marginTop:15,
    padding:10,
    alignSelf: "center",
    fontWeight: "bold",
  },

  todoheader: {
    fontSize: 40,
    alignSelf: "center",
    fontWeight: "bold",
  },

  textinput: {
    alignSelf: "stretch",
    padding: 8,
    borderBottomWidth: 2,
    marginVertical: 8,
  },

  alertMsg:{
    alignSelf: "stretch",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    height: 60,
    margin: 12,
    borderWidth: 3,
    paddingLeft: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
  },

  textinputTodo: {
    // alignSelf: "stretch",
    backgroundColor: "#fff",
    width: 300,
    padding: 8,
    marginVertical: 8,
    fontWeight: "bold",
  },

  lightTextInput: {
    borderBottomColor: "#fff",
    opacity: 1,
  },

  darkTextInput: {
    borderBottomColor: "#000",
    opacity: 1,
  },

  inLineTextButton: {
    color: "#87f1ff",
  },

  pressedInlineTextButton: {
    color: "#87f1ff",
    opacity: 0.6,
  },
});
