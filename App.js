import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import GameOver from './screens/GameOver';

export default function App() {

  const [pickedNumber, setPickedNumber] = React.useState(null);
  const [gameIsOver, setGameIsOver] = React.useState(true);

  const pickedNemberHandler = (pickedNember) => {
    setPickedNumber(pickedNember);
    setGameIsOver(false);
  };

  const resetGame = () => {
    setPickedNumber(null);
  };

  const gameOverHandler = () => setGameIsOver(true);

  let screen = <StartScreen onPickNumber={pickedNemberHandler} />

  if (pickedNumber) {
    screen = <GameScreen userNumber={pickedNumber} onGameOver={gameOverHandler} />
  }

  if (gameIsOver && pickedNumber) {
    screen = <GameOver onResetGame={resetGame} />
  }

  return (
    <SafeAreaView style={styles.rootScreen}>
      {screen}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#e74c3c',
  },
});
