import React, { Component } from "react";
import { Button, Text, View } from "react-native";

class HomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FF8C5A"
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
export default HomeScreen;
