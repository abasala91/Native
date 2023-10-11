import React from "react";

import {
  View,
  Pressable,
  Image,
  StyleSheet,
  Keyboard,
  ScrollView,
} from "react-native";
import * as Yup from "yup";
import { Input, Button } from "@rneui/themed";
import { Formik } from "formik";

const playerSchema = Yup.object().shape({
  player1: Yup.string().required("Required").min(4, "Too Short!"),
  player2: Yup.string().required("Required").min(4, "Too Short!"),
});

function HomeScreen({ navigation }) {
  return (
    <Pressable onPress={Keyboard.dismiss}>
      <ScrollView
        contentContainerStyle={styles.container}
        automaticallyAdjustKeyboardInsets={true}
      >
        <Image source={require("../assets/tic.jpg")} style={styles.item} />
        <Formik
          initialValues={{ player1: "", player2: "" }}
          onSubmit={(values) => {
            navigation.navigate("Game", { players: values });
          }}
          validationSchema={playerSchema}
        >
          {({ handleChange, handleBlur, handleSubmit, errors, touched }) => {
            return (
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Input
                  onChangeText={handleChange("player1")}
                  onBlur={handleBlur("player1")}
                  placeholder="Player1"
                  inputContainerStyle={{ width: "100%" }}
                  errorMessage={touched.player1 && errors.player1}
                />
                <Input
                  onChangeText={handleChange("player2")}
                  onBlur={handleBlur("player2")}
                  placeholder="Player2"
                  inputContainerStyle={{ width: "100%" }}
                  errorMessage={touched.player2 && errors.player2}
                />
                <Button
                  title="start game"
                  buttonStyle={{backgroundColor:"#D0BFFF"}}
                  titleStyle={{color:"#113946"}}
                  onPress={() => {
                    handleSubmit();
                  }}
                />
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    padding: 30,
  },
  item: {
    height: 200,
    resizeMode: "contain",
    width: 200,
  },
});

export default HomeScreen;
