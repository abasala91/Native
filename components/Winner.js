import React from "react";
import { Alert, Modal, StyleSheet, Pressable, View, Image } from "react-native";
import { Text } from "@rneui/themed";
const Winner = ({ isVisible, winner, closeModal }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        closeModal();
      }}
    >
      <View style={styles.modalView}>
        <View style={styles.modaBox}>
          {winner === "Draw" ? (
            <View>
              <Image
                resizeMode="contain"
                style={{ height: 100, width: 100,marginBottom:5 }}
                source={require("../assets/draw.png")}
              />
            </View>
          ) : (
            <View>
              <Image
                resizeMode="contain"
                style={{ height: 100, width: 100 }}
                source={require("../assets/win.png")}
              />
              <Text h2>{winner}</Text>
            </View>
          )}

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={closeModal}
          >
            <Text h5>OK</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modaBox: {
    margin: 20,
    backgroundColor: "#F5E8B7",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-evenly",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#D0BFFF",
  },
});

export default Winner;
