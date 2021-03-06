import React, { Component } from "react";
import {
  Modal,
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
  TouchableHighlight,
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
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Styles from "../../../../styles";
import * as theme from "./../../../../theme";
const { width, height } = Dimensions.get("window");
const mocks = [
  {
    id: 1,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Tokyo",
    temperature: 34,
    title: "1,200 sq.ft",
    description:
      "Santorini is one of the Cyclades islands in the Aegean Sea. It was devastated by a volcanic eruption in the 16th century BC, forever shaping its rugged landscape. The whitewashed, cubiform houses of its 2 principal towns, Fira and Oia, cling to cliffs above an underwater caldera (crater). They overlook the sea, small islands to the west and beaches made up of black, red and white lava pebbles.",
    rating: 4.3,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: false,
    location: "Hirosima",
    temperature: 34,
    title: "Hirosima",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 4.6,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    saved: true,
    location: "Osaka",
    temperature: 34,
    title: "Osaka",
    description: "Santorini - Description",
    rating: 3.2,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507501336603-6e31db2be093?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    user: {
      name: "Lelia Chavez",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    location: "Nagasaki",
    temperature: 34,
    title: "Nagasaki",
    description: "This attractive small town, 80 kilometers from Athens",
    rating: 5,
    reviews: 3212,
    preview:
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1458906931852-47d88574a008?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1446903572544-8888a0e60687?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

class SearchHome extends Component {
  state = {
    modalVisible: false,
    active: "Sort By"
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Search",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    )
  });
  renderSearchBar = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={{
            marginHorizontal: theme.sizes.margin,
            marginTop: theme.sizes.margin
          }}
        >
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#EFEFEF",
              height: width * 0.1,
              backgroundColor: "#F8F8F8"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Ionicons
                style={{ color: "#B0AEAF", fontSize: 23, marginLeft: 10 }}
                active
                name="ios-arrow-back"
              />
            </TouchableOpacity>
            <Input style={{ fontSize: 14 }} value="Tokyo" />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Ionicons
                style={{ color: "#B0AEAF", fontSize: 23, marginRight: 10 }}
                active
                name="ios-search"
              />
            </TouchableOpacity>
          </Item>
        </View>
      </View>
    );
  };
  rendertags = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View
          style={{
            marginHorizontal: theme.sizes.margin,
            marginTop: theme.sizes.margin,
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#7777B2",
              height: width * 0.07,
              backgroundColor: "#7777B2"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: theme.sizes.padding / 1.5
                }}
              >
                Tokyo
              </Text>
            </TouchableOpacity>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#47B97E",
              height: width * 0.07,
              backgroundColor: "#47B97E"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: theme.sizes.padding / 1.5
                }}
              >
                Kobe
              </Text>
            </TouchableOpacity>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#6191D5",
              height: width * 0.07,
              backgroundColor: "#6191D5"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: theme.sizes.padding / 1.5
                }}
              >
                Osaka
              </Text>
            </TouchableOpacity>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#FF8C64",
              height: width * 0.07,
              backgroundColor: "#FF8C64"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: theme.sizes.padding / 1.5
                }}
              >
                Hirosima
              </Text>
            </TouchableOpacity>
          </Item>
          <Item
            rounded
            style={{
              borderRadius: theme.sizes.radius,
              borderColor: "#8CEEEE",
              height: width * 0.07,
              backgroundColor: "#8CEEEE"
            }}
          >
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Login")}
            >
              <Text
                style={{
                  color: "white",
                  paddingHorizontal: theme.sizes.padding / 1.5
                }}
              >
                Kanto
              </Text>
            </TouchableOpacity>
          </Item>
        </View>
      </View>
    );
  };
  renderResults = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.5,
              color: "#373737",
              fontWeight: "bold"
            }}
          >
            32 Results Found
          </Text>
          <TouchableHighlight
            onPress={() => {
              this.setModalVisible(true);
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Text style={{ color: "#ADAAAB" }}>Filter </Text>
              <MaterialCommunityIcons
                style={{ color: "#ADAAAB", fontWeight: "400" }}
                name="filter"
                size={20}
              />
            </View>
          </TouchableHighlight>
        </View>
        <View style={[styles.column]}>
          <FlatList
            style={[styles.shadow, { overflow: "visible" }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderItemResult(item, index)}
          />
        </View>
      </View>
    );
  };
  renderItemResult = (item, index) => {
    const { destinations, navigation } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          {
            width: width - theme.sizes.padding * 2,
            marginHorizontal: theme.sizes.margin,
            backgroundColor: theme.colors.white,
            overflow: "hidden",
            marginVertical: theme.sizes.margin * 0.25
          }
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() =>
            navigation.navigate("PropertyDetail", { article: item })
          }
        >
          <View style={[styles.flex]}>
            <Image
              style={[styles.recommendationImage2]}
              source={{ uri: item.preview }}
            />
          </View>
          <View style={[styles.flex, styles.row]}>
            <View
              style={[
                styles.flex,
                styles.column,
                styles.shadow,
                {
                  justifyContent: "space-evenly",
                  padding: theme.sizes.padding / 2,
                  flex: 7
                }
              ]}
            >
              <View style={[styles.flex, styles.row]}>
                <Text
                  style={{
                    flex: 3,
                    color: "#929292",
                    fontSize: theme.sizes.font,
                    fontWeight: "200",
                    paddingBottom: theme.sizes.padding / 5
                  }}
                >
                  {item.title}
                </Text>
                <View style={{ flex: 6, flexDirection: "row" }}>
                  <Entypo
                    name="dot-single"
                    size={20}
                    style={{ color: theme.colors.caption }}
                  />
                  <Text
                    style={{
                      color: "#3A3A3A",
                      fontSize: theme.sizes.font,
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
                      fontSize: theme.sizes.font,
                      fontWeight: "400",
                      paddingBottom: theme.sizes.padding / 5
                    }}
                  >
                    1 Bath
                  </Text>
                </View>
              </View>
              <Text style={{ color: theme.colors.caption }}>
                <SimpleLineIcons
                  name="location-pin"
                  size={15}
                  style={{ color: "#D03333" }}
                />{" "}
                Tokyo
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                marginTop: theme.sizes.padding / 2.5
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  color: "#D03333",
                  alignSelf: "flex-end",
                  paddingRight: theme.sizes.padding / 2,
                  fontSize: theme.sizes.font * 1.5
                }}
              >
                $1250
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  renderModalFilter = () => {
    const tabs = ["Sort By", "Advance", "Condition"];
    const { active } = this.state;
    let renderTabView = this.renderSortTab();
    if(active == "Sort by"){
        renderTabView = this.renderSortTab();
    } else if(active == "Advance"){
        renderTabView = this.renderAdvanceTab();
    }else if (active == "Condition"){
        renderTabView = this.renderConditionTab();
    }
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "flex-end"
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "black",
              opacity: 0.5,
              zIndex: 1,
              position: "absolute",
              width,
              height
            }}
          />
          <View
            style={{
              width,
              height: width,
              backgroundColor: "white",
              opacity: 1,
              zIndex: 2,
              borderTopRightRadius: theme.sizes.radius + 2,
              borderTopLeftRadius: theme.sizes.radius + 2,
              flexDirection: "column",
              justifyContent: "flex-start",
              padding: theme.sizes.padding
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                alignContent: "center"
              }}
            >
              <Text
                style={{
                  color: "#DC2F33",
                  alignSelf: "center",
                  fontSize: theme.sizes.font * 1.2
                }}
              >
                Filter
              </Text>
              <View
                style={{
                  width: 40,
                  height: 30,
                  backgroundColor: "#DC2F33",
                  borderRadius: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "flex-end",
                  marginLeft: 10
                }}
              >
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                >
                  <MaterialCommunityIcons
                    style={{
                      color: "white",
                      fontWeight: "400",
                      alignSelf: "center"
                    }}
                    name="filter"
                    size={20}
                  />
                </TouchableHighlight>
              </View>
            </View>
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{
                paddingBottom: theme.sizes.padding
              }}
            >
              <View style={[styles.column, styles.flex]}>
                <View style={[styles.row, styles.flex, styles.tabs]}>
                  {tabs.map(tab => this.renderTab(tab))}
                </View>
                {renderTabView}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    );
  };
  renderTab(tab) {
    const { active } = this.state;
    const isActive = active === tab;

    return (
      <TouchableOpacity
        key={`tab-${tab}`}
        onPress={() => this.handleTab(tab)}
        style={[styles.tab, isActive ? styles.active : null]}
      >
        <Text
          size={16}
          medium
          gray={!isActive}
          secondary={isActive}
          style={[
            isActive ? styles.activeTitle : null,
            { fontSize: theme.sizes.font * 1.1 }
          ]}
        >
          {tab}
        </Text>
      </TouchableOpacity>
    );
  }
  handleTab = tab => {
    this.setState({ active: tab });
  };
  renderSortTab = () => {
    return (
      <View
        style={[
          styles.row,
          { flex: 1, backgroundColor: "blue", width: width, height: width }
        ]}
      >
        <Text>Sort By Tab</Text>
      </View>
    );
  };
  renderAdvanceTab = () => {
    return (
      <View style={[styles.row, styles.flex]}>
        <Text>Advance Tab</Text>
      </View>
    );
  };
  renderConditionTab = () => {
    return (
      <View style={[styles.row, styles.flex]}>
        <Text>Condition Tab</Text>
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
          {this.renderSearchBar()}
          {this.rendertags()}
          {this.renderResults()}
        </ScrollView>
        {this.renderModalFilter()}
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
    width: width - theme.sizes.padding * 2,
    height: (width - theme.sizes.padding * 2) / 2.3,
    borderRadius: theme.sizes.radius
  },
  tabs: {
    borderBottomColor: "#D7D7D7",
    borderBottomWidth: 1,
    margin: theme.sizes.margin
  },
  tab: {
    paddingRight: theme.sizes.padding * 2,
    paddingBottom: theme.sizes.padding / 1.5
  },
  active: {
    borderBottomColor: "#DC2F33",
    borderBottomWidth: 3
  },
  activeTitle: {
    color: "#3A3A3A",
    fontWeight: "bold"
  }
});

SearchHome.defaultProps = {
  destinations: mocks
};
export default SearchHome;
