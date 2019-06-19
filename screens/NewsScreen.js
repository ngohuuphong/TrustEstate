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
          backgroundColor: "#6A39D9"
        }}
      >
        <Text>Settings!</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
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
