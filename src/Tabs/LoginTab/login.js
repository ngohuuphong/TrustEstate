import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Icon,
  Button
} from "native-base";
import Fontawesome from "react-native-vector-icons/FontAwesome5";

import Styles from "../../../styles";
const { width, height } = Dimensions.get("window");

class LoginScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Login",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Fontawesome name="bars" size={20} />
      </TouchableOpacity>
    )
  });
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 40,
            color: "green"
          }}
        >
          <Item rounded style={{ borderRadius: 5 }}>
            <Icon style={{ color: "#b4b4b4" }} active name="mail" />
            <Input style={{ color: "#b4b4b4" }} placeholder="Email" />
          </Item>
          <Item rounded style={{ borderRadius: 5,marginTop: 10 }}>
            <Icon style={{ color: "#b4b4b4" }} active name="key" />
            <Input
              style={{ color: "#b4b4b4"}}
              secureTextEntry={true}
              placeholder="Password"
            />
          </Item>
          <View style={{}}>
                <View></View>
                <View></View>
          </View>
          <Button
            style={{
              width: width - 80,
              marginTop: 30,
              justifyContent: "center",
              borderRadius: 5
            }}
            success
          >
            <Text
              style={{
                color: "white",
                textTransform: "uppercase",
                fontWeight: "400",
                fontSize: 15
              }}
            >
              {" "}
              Login{" "}
            </Text>
          </Button>
        </View>
      </SafeAreaView>
    );
  }
}

export default LoginScreen;
