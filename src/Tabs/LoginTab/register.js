import React, { Component } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    SafeAreaView,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Linking
} from "react-native";
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Button,
    CheckBox
} from "native-base";
import Fontawesome from "react-native-vector-icons/FontAwesome5";

import Styles from "../../../styles";
const { width, height } = Dimensions.get("window");

class RegisterScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: "Search",
        headerLeft: ( <
            TouchableOpacity style = { Styles.headerButton }
            onPress = {
                () => navigation.openDrawer() } >
            <
            Fontawesome name = "bars"
            size = { 20 }
            /> <
            /TouchableOpacity>
        )
    });
    render() {
        return ( <
            SafeAreaView style = {
                { flex: 1, flexDirection: "column", backgroundColor: "#fff" } } >
            <
            KeyboardAvoidingView keyboardVerticalOffset = {-500 }
            behavior = "padding"
            style = {
                { flex: 1, flexDirection: "column" } } >
            <
            TouchableWithoutFeedback style = {
                { flex: 1, flexDirection: "column" } }
            onPress = { Keyboard.dismiss } >
            <
            View style = {
                { flex: 1, flexDirection: "column" } } >
            <
            View style = {
                {
                    flex: 4,
                    justifyContent: "center",
                    marginHorizontal: 40
                }
            } >
            <
            View style = {
                {
                    flexDirection: "column",
                    justifyContent: "center",
                    alignContent: "center",
                    width: width - 40 * 2
                }
            } >
            <
            Image source = { require("./../../../images/logo.png") }
            resizeMode = "contain"
            style = {
                {
                    width: width * 0.5,
                    height: width * 0.5,
                    alignSelf: "center"
                }
            }
            /> <
            /View> <
            /View> <
            View style = {
                {
                    flex: 6,
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginHorizontal: 40,
                    color: "green"
                }
            } >
            <
            Item rounded style = {
                { borderRadius: 8, height: width * 0.1 } } >
            <
            Icon style = {
                { color: "#b4b4b4", fontSize: 14 } }
            active name = "md-person" /
            >
            <
            Input style = {
                { color: "#b4b4b4", fontSize: 14 } }
            placeholder = "Full Name" /
            >
            <
            /Item>  <
            Item rounded style = {
                { borderRadius: 8, height: width * 0.1, marginTop: 10 } } >
            <
            Icon style = {
                { color: "#b4b4b4", fontSize: 14 } }
            active name = "mail" /
            >
            <
            Input style = {
                { color: "#b4b4b4", fontSize: 14 } }
            placeholder = "Email" /
            >
            <
            /Item> <
            Item rounded style = {
                {
                    borderRadius: 8,
                    marginTop: 10,
                    height: width * 0.1
                }
            } >
            <
            Icon style = {
                { color: "#b4b4b4", fontSize: 14 } }
            active name = "key" /
            >
            <
            Input style = {
                { color: "#b4b4b4", fontSize: 14 } }
            secureTextEntry = { true }
            placeholder = "Password" /
            >
            <
            /Item> <
            Button style = {
                {
                    width: width - 80,
                    marginTop: 30,
                    justifyContent: "center",
                    borderRadius: 8,
                    backgroundColor: "#00BEF2"
                }
            } >
            <
            Text style = {
                {
                    color: "white",
                    textTransform: "uppercase",
                    fontWeight: "500",
                    fontSize: 15
                }
            } >
            Register <
            /Text> <
            /Button> <
            View style = {
                {
                    flex: 0,
                    flexDirection: "row",
                    width: width - 40 * 2,
                    justifyContent: "center",
                    marginTop: 20
                }
            } >
            <
            Text style = {
                { lineHeight: 14 } } > Have an account ? < /Text> <
            TouchableOpacity onPress = {
                () => this.props.navigation.navigate('Login') } >
            <
            Text style = {
                {
                    fontWeight: "bold",
                    color: "#00BEF2",
                    fontSize: 12,
                    lineHeight: 14
                }
            } >
            SIGN IN <
            /Text> <
            /TouchableOpacity> <
            /View> <
            /View> <
            /View> <
            /TouchableWithoutFeedback> <
            /KeyboardAvoidingView> <
            /SafeAreaView>
        );
    }
}

export default RegisterScreen;