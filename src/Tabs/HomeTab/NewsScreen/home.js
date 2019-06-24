import React, { Component } from "react";
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Button,
  CheckBox
} from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Styles from "../../../../styles";

import * as theme from "./../../../../theme";

const { width, height } = Dimensions.get("window");

class SearchHome extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Detail",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    )
  });
  renderDetail = () => {
    return (
      <View style={[styles.flex, styles.column]}>
        <Image
          style={[styles.recommendationImage2]}
          source={{
            uri:
              "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80"
          }}
        />
        <View style={[styles.flex, styles.row, { margin: theme.sizes.margin }]}>
          <View style={[styles.column, { flex: 6 }]}>
            <Text
              style={{
                color: "#C8383B",
                fontSize: theme.sizes.font * 2.5,
                fontWeight: "bold"
              }}
            >
              $4,999
            </Text>
            <View
              style={[
                styles.flex,
                styles.row,
                { justifyContent: "flex-start", alignItems: "flex-start" }
              ]}
            >
              <Text
                style={{
                  color: "#929292",
                  fontSize: theme.sizes.font * 1.2,
                  fontWeight: "200",
                  paddingBottom: theme.sizes.padding / 5
                }}
              >
                1,200 sq.ft
              </Text>
              <Entypo
                name="dot-single"
                size={20}
                style={{ color: theme.colors.caption }}
              />
              <Text
                style={{
                  color: "#3A3A3A",
                  fontSize: theme.sizes.font * 1.2,
                  fontWeight: "400",
                  paddingBottom: theme.sizes.padding / 5
                }}
              >
                3 Beds{" "}
              </Text>
              <Entypo
                name="dot-single"
                size={20}
                style={{ color: theme.colors.caption }}
              />
              <Text
                style={{
                  color: "#3A3A3A",
                  fontSize: theme.sizes.font * 1.2,
                  fontWeight: "400",
                  paddingBottom: theme.sizes.padding / 5
                }}
              >
                1 Bath
              </Text>
            </View>
          </View>
          <View
            style={{
              flex: 4,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-end"
            }}
          >
            <Entypo
              name="heart-outlined"
              size={24}
              style={{ color: "#3A3A3A", alignSelf: "center" }}
            />
          </View>
        </View>
        <View
          style={[
            styles.row,
            { marginHorizontal: theme.sizes.margin, flexWrap: "wrap" }
          ]}
        >
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              height: width * 0.06,
              backgroundColor: "#929292",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: theme.sizes.padding / 2
              }}
            >
              Parking Lot
            </Text>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              height: width * 0.06,
              backgroundColor: "#929292",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: theme.sizes.padding / 2
              }}
            >
              Garden
            </Text>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              height: width * 0.06,
              backgroundColor: "#929292",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: theme.sizes.padding / 2
              }}
            >
              Television
            </Text>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              height: width * 0.06,
              backgroundColor: "#929292",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: theme.sizes.padding / 2
              }}
            >
              Individual Bathroom
            </Text>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              height: width * 0.06,
              backgroundColor: "#929292",
              marginRight: 10,
              marginBottom: 5
            }}
          >
            <Text
              style={{
                color: "white",
                paddingHorizontal: theme.sizes.padding / 2
              }}
            >
              Individual Toilet
            </Text>
          </Item>
        </View>
        <View
          style={[
            styles.flex,
            {
              marginHorizontal: theme.sizes.margin,
              marginTop: theme.sizes.margin,
              borderColor: "#D7D7D7",
              borderTopWidth: 1
            }
          ]}
        />
        <View
          style={[styles.flex, styles.column, { margin: theme.sizes.margin }]}
        >
          <View style={[styles.flex, styles.row]}>
            <MaterialIcons
              style={{ color: "#C8383B" }}
              name="info-outline"
              size={23}
            />
            <Text style={{ color: "#7F7F7F", marginLeft: 10 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              neque enim voluptas laudantium saepe voluptatem at.
            </Text>
          </View>
          <View style={[styles.flex, styles.row]}>
            <MaterialIcons
              style={{ color: "#C8383B" }}
              name="people-outline"
              size={23}
            />
            <Text style={{ color: "#7F7F7F", marginLeft: 10 }}>
              Lorem ipsum, dolor sit amet.
            </Text>
          </View>
          <View style={[styles.flex, styles.row]}>
            <MaterialIcons
              style={{ color: "#C8383B" }}
              name="card-giftcard"
              size={23}
            />
            <Text style={{ color: "#7F7F7F", marginLeft: 10 }}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
              neque enim voluptas laudantium saepe voluptatem at.
            </Text>
          </View>
        </View>
        <View style={[styles.flex]}>
            <Button style={{backgroundColor: "#DC2F33", width: width/2 -(theme.sizes.margin*2), alignSelf: "center",borderRadius:theme.sizes.radius,justifyContent:"center"}}>
                <Text style={{color: "white",alignSelf: "center",fontSize:  theme.sizes.font*1.2,fontWeight: "bold"}}>Inquiry Form</Text>
            </Button>
        </View>
      </View>
    );
  };

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, flexDirection: "column", backgroundColor: "#fff" }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: theme.sizes.padding
          }}
        >
          {this.renderDetail()}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 0
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    padding: theme.sizes.padding,
    color: "#373737"
  },
  recommendation2: {
    width: width - theme.sizes.padding * 2,
    marginHorizontal: theme.sizes.margin,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.25
  },
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 5
  },
  recommendationImage2: {
    width: width,
    height: width / 1.5
  }
});

export default SearchHome;
