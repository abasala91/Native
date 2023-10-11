import React from "react";
import {
  Dimensions,
  View,
  FlatList,
  Pressable,
  StyleSheet,
} from "react-native";
import { Text } from "@rneui/themed";
const deviceWidth = Dimensions.get("window").width * 0.9;
function Board({ data, onSelect }) {
  return (
    <View style={styles.container}>
      <FlatList
        scrollEnabled={false}
        numColumns={3}
        data={data}
        renderItem={({ item }) => {
          return (
            <Pressable onPress={() => onSelect(item)}>
              <View style={styles.listItem}>
                <Text
                  style={{ color: item.value === "X" ? "tomato" : "#5CD2E6" }}
                  h1
                >
                  {item.value}
                </Text>
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceWidth,
  },
  listItem: {
    width: deviceWidth / 3,
    height: deviceWidth / 3,
    backgroundColor: "#D0BFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#BEADFA",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Board;
