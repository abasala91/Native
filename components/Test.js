import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const deviceWidth = Dimensions.get("window").width * 0.9;
function Test() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={{ flexDirection: "row",flex:1/3 }}>
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
        </View>
        <View style={{ flexDirection: "row",flex:1/3 }}>
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
        </View>
        <View style={{ flexDirection: "row",flex:1/3 }}>
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
          <View
            style={{
              backgroundColor: "white",
              flex: 1 / 3,
              margin: 1,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: deviceWidth,
    height: deviceWidth,
    alignSelf: "center",
    backgroundColor: "blue",
   
  },
});

export default Test;
