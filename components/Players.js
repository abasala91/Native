import React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Text, Badge } from "@rneui/themed";

function Players({ players, round, xColor, oColor, xScore, oScore }) {
  return (
    <View style={styles.playersContainer}>
      <View style={styles.imageContainer}>
        <Avatar
          rounded
          source={require("../assets/male.png")}
          size={100}
        ></Avatar>

        <View style={styles.textContainer}>
          <Text h4>{players.player1}</Text>
          <Text h6>score: {xScore}</Text>
        </View>
        <View style={[styles.playerColor, { backgroundColor: xColor }]}></View>
      </View>
      <View>
        <Text>Round: {round}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Avatar rounded source={require("../assets/female.png")} size={100} />

        <View style={styles.textContainer}>
          <Text h4>{players.player2}</Text>
          <Text h6>score: {oScore}</Text>
        </View>
        <View style={[styles.playerColor, { backgroundColor: oColor }]}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignContent: "center",
  },
  playersContainer: {
    width: "100%",
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  textContainer: {
    alignItems: "center",
  },
  playerColor: { height: 3 },
});

export default Players;
