import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class AboutScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0367A6"
        }}
      >
        <Text>Home!</Text>
        <Button
          title="Go to Settings"
          onPress={() => this.props.navigation.navigate("Settings")}
        />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Detail")}
        />
      </View>
    );
  }
}
export default AboutScreen;
