import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./components/HomeScreen";
import Game from "./components/Game";
import Test from "./components/Test";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Winner from "./components/Winner";
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: "Tic Tac Toe", animation: "simple_push" }}
          />
          <Stack.Screen
            name="Game"
            component={Game}
            options={{
              title: "Game",
              animation: "simple_push",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
