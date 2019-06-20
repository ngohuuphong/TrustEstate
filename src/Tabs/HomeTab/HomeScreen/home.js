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
  Button
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import Octicons from "react-native-vector-icons/Octicons";

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
    title: "Tokyo",
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
  header: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.sizes.padding,
    paddingTop: theme.sizes.padding * 0.44,
    paddingBottom: theme.sizes.padding * 0.33,
    justifyContent: "space-between",
    alignItems: "center"
  },
  articles: {},
  destinations: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 30
  },
  destination: {
    width: width - theme.sizes.padding * 2,
    height: width * 0.6,
    marginHorizontal: theme.sizes.margin,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding * 0.66,
    borderRadius: theme.sizes.radius
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: theme.sizes.radius,
    paddingHorizontal: theme.sizes.padding,
    paddingVertical: theme.sizes.padding / 2,
    bottom: 20,
    left:
      (width - theme.sizes.padding * 4) / (Platform.OS === "ios" ? 3.2 : 3.6),
    backgroundColor: theme.colors.white,
    width: width - theme.sizes.padding * 4
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: theme.sizes.padding
  },
  recommendedList: {},
  recommendation: {
    width: (width - theme.sizes.padding * 2) / 2,
    marginHorizontal: 8,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.5
  },
  recommendation2: {
    width: width - theme.sizes.padding * 2,
    marginHorizontal: theme.sizes.margin,
    backgroundColor: theme.colors.white,
    overflow: "hidden",
    borderRadius: theme.sizes.radius,
    marginVertical: theme.sizes.margin * 0.25
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: theme.sizes.radius,
    borderTopLeftRadius: theme.sizes.radius
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.sizes.padding / 2,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  recommendationTemp: {
    fontSize: theme.sizes.font,
    color: theme.colors.white
  },
  recommendationImage: {
    width: (width - theme.sizes.padding * 2) / 2,
    height: (width - theme.sizes.padding * 2) / 2
  },
  recommendationImage2: {
    width: width - theme.sizes.padding * 2,
    height: (width - theme.sizes.padding * 2) / 3
  },
  avatar: {
    width: theme.sizes.padding,
    height: theme.sizes.padding,
    borderRadius: theme.sizes.padding / 2
  },
  rating: {
    fontSize: theme.sizes.font * 2,
    color: theme.colors.white,
    fontWeight: "bold"
  },
  rating2: {
    fontSize: theme.sizes.font * 1.5,
    color: theme.colors.white,
    fontWeight: "300"
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
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: theme.colors.gray,
    borderColor: "transparent"
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: theme.colors.active
  }
});

class HomePage extends Component {
  scrollX = new Animated.Value(0);

  static navigationOptions = ({ navigation }) => ({
    title: "Home",
    headerLeft: (
      <TouchableOpacity
        style={Styles.headerButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="bars" size={20} />
      </TouchableOpacity>
    )
  });

  renderDots() {
    const { destinations } = this.props;
    const dotPosition = Animated.divide(this.scrollX, width);
    return (
      <View
        style={[
          styles.flex,
          styles.row,
          { justifyContent: "center", alignItems: "center", marginTop: 10 }
        ]}
      >
        {destinations.map((item, index) => {
          const borderWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [0, 2.5, 0],
            extrapolate: "clamp"
          });
          return (
            <Animated.View
              key={`step-${item.id}`}
              style={[
                styles.dots,
                styles.activeDot,
                { borderWidth: borderWidth }
              ]}
            />
          );
        })}
      </View>
    );
  }

  renderBuildingTypes = () => {
    return (
      <View style={[styles.column, styles.destinations]}>
        <View style={[styles.flex, styles.row, styles.header]}>
          <View>
            <Text style={{ color: theme.colors.caption }}>Trust Estate</Text>
            <Text style={{ fontSize: theme.sizes.font * 1.5 }}>
              Building Type
            </Text>
          </View>
          <View />
        </View>
        <FlatList
          horizontal
          pagingEnabled
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          decelerationRate={0}
          scrollEventThrottle={16}
          snapToAlignment="center"
          style={{ overflow: "visible", height: 280 }}
          data={this.props.destinations}
          keyExtractor={(item, index) => `${item.id}`}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { x: this.scrollX } } }
          ])}
          renderItem={({ item }) => this.renderItemBuildingType(item)}
        />
        {this.renderDots()}
      </View>
    );
  };

  renderItemBuildingType = item => {
    const { navigation } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Article", { article: item })}
      >
        <ImageBackground
          style={[styles.flex, styles.destination, styles.shadow]}
          imageStyle={{ borderRadius: theme.sizes.radius }}
          source={{ uri: item.preview }}
        >
          <View style={[styles.row, { justifyContent: "space-between" }]}>
            <View
              style={{
                flex: 0,
                flexDirection: "column",
                justifyContent: "center"
              }}
            >
              <Text style={styles.rating}>400</Text>
              <Text style={styles.rating2}>houses for rent</Text>
            </View>
          </View>
        </ImageBackground>
        <View style={[styles.column, styles.destinationInfo, styles.shadow]}>
          <Text
            style={{
              fontSize: theme.sizes.font * 1.25,
              fontWeight: "500",
              paddingBottom: 8
            }}
          >
            {item.title}
          </Text>
          <View
            style={[
              styles.row,
              { justifyContent: "space-between", alignItems: "flex-end" }
            ]}
          >
            <Text style={{ color: theme.colors.caption }}>
              {item.description.split("").slice(0, 50)}...
            </Text>
            <Icon
              name="chevron-right"
              size={theme.sizes.font * 0.75}
              color={theme.colors.caption}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  renderCities = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Cities</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column, styles.recommendedList]}>
          <FlatList
            horizontal
            pagingEnabled
            scrollEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
            snapToAlignment="center"
            style={[styles.shadow, { overflow: "visible" }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) => this.renderItemCity(item, index)}
          />
        </View>
      </View>
    );
  };

  renderItemCity = (item, index) => {
    const { destinations, navigation } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation,
          styles.shadow,
          index === 0 ? { marginLeft: theme.sizes.margin } : null,
          isLastItem ? { marginRight: theme.sizes.margin / 2 } : null
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Article", { article: item })}
        >
          <View style={[styles.flex, styles.recommendationHeader]}>
            <Image
              style={[styles.recommendationImage]}
              source={{ uri: item.preview }}
            />
            <View
              style={[styles.flex, styles.row, styles.recommendationOptions]}
            >
              <Text style={styles.recommendationTemp}>400 houses for rent</Text>
            </View>
          </View>
          <View
            style={[
              styles.flex,
              styles.column,
              styles.shadow,
              {
                justifyContent: "space-evenly",
                padding: theme.sizes.padding / 2
              }
            ]}
          >
            <Text
              style={{
                fontSize: theme.sizes.font * 1.25,
                fontWeight: "500",
                paddingBottom: theme.sizes.padding / 4.5
              }}
            >
              {item.title} houses name #11211
            </Text>
            <Text style={{ color: theme.colors.caption }}>{item.location}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  renderHousesRecommended = () => {
    return (
      <View style={[styles.flex, styles.column, styles.recommended]}>
        <View style={[styles.row, styles.recommendedHeader]}>
          <Text style={{ fontSize: theme.sizes.font * 1.4 }}>Recommended</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <Text style={{ color: theme.colors.caption }}>More</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.column]}>
          <FlatList
            style={[styles.shadow, { overflow: "visible" }]}
            data={this.props.destinations}
            keyExtractor={(item, index) => `${item.id}`}
            renderItem={({ item, index }) =>
              this.renderItemRecommended(item, index)
            }
          />
        </View>
      </View>
    );
  };
  renderItemRecommended = (item, index) => {
    const { destinations, navigation } = this.props;
    const isLastItem = index === destinations.length - 1;
    return (
      <View
        style={[
          styles.flex,
          styles.column,
          styles.recommendation2,
          styles.shadow
        ]}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Article", { article: item })}
        >
          <View style={[styles.flex, styles.recommendationHeader]}>
            <Image
              style={[styles.recommendationImage2]}
              source={{ uri: item.preview }}
            />

            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                borderWidth: 1.5,
                borderColor: "white",
                position: "absolute",
                backgroundColor: "#4968C2",
                fontWeight: "200",
                justifyContent: "center",
                alignItems: "center",
                overflow: "visible",
                bottom: 10,
                left: 18
              }}
            >
              <Text
                style={{
                  fontSize: theme.sizes.font * 0.8,
                  color: "white",
                  fontWeight: "400"
                }}
              >
                Agent
              </Text>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
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
              <Text
                style={{
                  fontSize: theme.sizes.font * 1.25,
                  fontWeight: "500",
                  paddingBottom: theme.sizes.padding / 5
                }}
              >
                {item.title} houses for rent
              </Text>
              <Text style={{ color: theme.colors.caption }}>
                <Icon name="home" size={20} /> room 2ba 120 m2
              </Text>
            </View>
            <View
              style={{
                flex: 3,
                justifyContent: "flex-start",
                marginTop: theme.sizes.padding / 2.5
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  color: "#4968C2",
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
  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: theme.sizes.padding
        }}
      >
        {this.renderBuildingTypes()}
        {this.renderCities()}
        {this.renderHousesRecommended()}
      </ScrollView>
    );
  }
}

HomePage.defaultProps = {
  destinations: mocks
};

export default HomePage;
