import React from 'react';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import NewsScreen from './NewsScreen';
import ProfileScreen from './ProfileScreen';

const HomeTab = createBottomTabNavigator({
    HomeScreen: {
        screen: HomeScreen,
        navigationOptions: {
            title: "Home",
            tabBarIcon: ({ tintColor }) => ( <
                Icon name = "home"
                size = { 17 }
                color = { tintColor }
                />
            )
        }
    },
    SearchScreen: {
        screen: SearchScreen,
        navigationOptions: {
            title: "Search",
            tabBarIcon: ({ tintColor }) => ( <
                Icon name = "search"
                size = { 17 }
                color = { tintColor }
                />
            )
        }
    },
    NewsScreen: {
        screen: NewsScreen,
        navigationOptions: {
            title: "News",
            tabBarIcon: ({ tintColor }) => ( <
                Icon name = "newspaper"
                size = { 17 }
                color = { tintColor }
                />
            )
        }
    },
    ProfileScreen: {
        screen: ProfileScreen,
        navigationOptions: {
            title: "Profile",
            tabBarIcon: ({ tintColor }) => ( <
                Icon name = "user-circle"
                size = { 17 }
                color = { tintColor }
                />
            )
        }
    }
});

//Issue: the tab navigator needs to be wrapped inside a stack navigator
export default createStackNavigator({ HomeTab }, { headerMode: "none" });