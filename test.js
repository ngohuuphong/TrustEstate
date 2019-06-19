import React from "react";
import { Button, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";
import NewsScreen from "./screens/NewsScreen";
import ListScreen from "./screens/ListScreen";
import AboutScreen from "./screens/AboutScreen";
import Settings from './Settings'; //Tab Nav
import Profile from './Profile'; //Stack Nav
const HomeStack = createStackNavigator({
    Home: { screen: HomeScreen },
    Detail: { screen: DetailScreen }
});
const NewsStack = createStackNavigator({
    News: { screen: NewsScreen },
    Detail: { screen: DetailScreen }
});
const ListStack = createStackNavigator({
    List: { screen: ListScreen },
    Detail: { screen: DetailScreen }
});

export default createAppContainer(
    createBottomTabNavigator({
        Home: { screen: HomeScreen },
        News: { screen: NewsStack },
        List: { screen: ListStack },
        About: { screen: AboutScreen }
    }, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                    iconName = `ios-home${focused ? "" : ""}`;
                } else if (routeName === "News") {
                    iconName = `ios-paper${focused ? "" : ""}`;
                } else if (routeName === "List") {
                    iconName = `ios-list-box${focused ? "" : ""}`;
                } else if (routeName === "About") {
                    iconName = `ios-information-circle${focused ? "" : ""}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Ionicons name = { iconName }
                size = { 25 }
                color = { tintColor }
                />;
            }
        }),
        tabBarOptions: {
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
        }
    })
);