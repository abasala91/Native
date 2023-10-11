import React, { useState } from "react";
import { StyleSheet } from "react-native";
import Board from "./Board";
import Buttons from "./Buttons";
import Players from "./Players";
import { SafeAreaView } from "react-native-safe-area-context";

import Winner from "./Winner";

function Game({ route, navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const [winner, setWinner] = useState("");
  const { players } = route.params;

  let initialValues = [
    { index: 1, value: "" },
    { index: 2, value: "" },
    { index: 3, value: "" },
    { index: 4, value: "" },
    { index: 5, value: "" },
    { index: 6, value: "" },
    { index: 7, value: "" },
    { index: 8, value: "" },
    { index: 9, value: "" },
  ];

  ////////STATES//////////////////////////////////////
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState("");
  const [result, setResult] = useState(initialValues);
  const [xScore, setxScore] = useState(0);
  const [oScore, setoScore] = useState(0);
  const [xColor, setxColor] = useState("#6A9C89");
  const [oColor, setoColor] = useState("");

  ////////HANDELERS/////////////////////////////////////

  const handleReset = () => {
    setResult(initialValues);
    setSelected("");
  };
  const handleSelection = (item) => {
    if (
      (round === 0 && selected === "") ||
      (round % 2 === 0 && selected === "") ||
      selected === "O"
    ) {
      setSelected("X");
      let resultObj = [...result];
      let objIndex = resultObj.findIndex((el) => el.index === item.index);
      if (resultObj[objIndex].value !== "") return;
      resultObj[objIndex].value = "X";
      setResult(resultObj);
      handlePlayerColor("X");
    } else if (
      (round === 1 && selected === "") ||
      (round % 2 !== 0 && selected === "") ||
      selected === "X"
    ) {
      setSelected("O");
      let resultObj = [...result];
      let objIndex = resultObj.findIndex((el) => el.index === item.index);
      if (resultObj[objIndex].value !== "") return;
      resultObj[objIndex].value = "O";
      setResult(resultObj);
      handlePlayerColor("O");
    }

    whoWin();
  };

  const checkWin = (combinations, player) => {
    return combinations.some((combination) => {
      return combination.every((index) => result[index].value === player);
    });
  };
  const whoWin = () => {
    const winningCombinations = [
      [0, 1, 2],
      [0, 3, 6],
      [2, 5, 8],
      [6, 7, 8],
      [0, 4, 8],
      [1, 4, 7],
      [3, 4, 5],
      [2, 4, 6],
    ];

    if (checkWin(winningCombinations, "X")) {
      setIsVisible(true);
      setWinner(players.player1);
      handleReset();
      incrementPlayerScore("X");
      setRound(round + 1);
    } else if (checkWin(winningCombinations, "O")) {
      setIsVisible(true);
      setWinner(players.player2);
      handleReset();
      incrementPlayerScore("O");
      setRound(round + 1);
    } else if (result.every((cell) => cell.value !== "")) {
      setIsVisible(true);
      setWinner("Draw");
      handleReset();
      setRound(round + 1);
    }
  };

  const incrementPlayerScore = (val) => {
    val === "X" ? setxScore(xScore + 1) : setoScore(oScore + 1);
  };

  const handlePlayerColor = (val) => {
    if (val === "X") {
      setoColor("#64CCC5");
      setxColor(null);
    } else {
      setoColor(null);
      setxColor("#64CCC5");
    }
  };
  ///////////////////////////////////
  const closeModalHandler = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Players
        round={round}
        players={players}
        xColor={xColor}
        oColor={oColor}
        xScore={xScore}
        oScore={oScore}
      />
      <Board data={result} onSelect={handleSelection} />
      <Buttons navigation={navigation} onReset={handleReset} />
      <Winner
        isVisible={isVisible}
        winner={winner}
        closeModal={closeModalHandler}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

export default Game;
