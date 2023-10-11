import React from "react";
import { Button } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

function Buttons({ onReset, navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="reset"
        titleStyle={{ color: "#113946" }}
        buttonStyle={{ width: 100, backgroundColor: "#D0BFFF" }}
        onPress={onReset}
      />
      <Button
        onPress={() => {
          navigation.goBack();
        }}
        titleStyle={{ color: "#113946" }}
        buttonStyle={{ width: 100, backgroundColor: "#D0BFFF" }}
        title="Exit"
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
export default Buttons;
