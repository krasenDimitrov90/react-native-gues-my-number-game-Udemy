import React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import NumberContainer from "../components/game/NumberContainer";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstrunctionText";
import PrimaryButton from "../components/ui/PrimaryButton";
import Tilte from "../components/ui/Title";

function generateRandomBetween(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;

    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let maxBoundary = 100;
let minBoundary = 1;

const GameScreen = ({ userNumber, onGameOver }) => {

    React.useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
        console.log('In EFFECT');
    }, []);

    console.log({ minBoundary, maxBoundary });

    const initialGues = generateRandomBetween(minBoundary, maxBoundary, userNumber);
    const [guessedNumber, setGuessedNumber] = React.useState(initialGues);

    React.useEffect(() => {
        if (guessedNumber === userNumber) {
            onGameOver();
        }
    }, [guessedNumber, userNumber, onGameOver]);

    const nextGuesHandler = (direction) => {

        if ((direction === 'lower' && guessedNumber < userNumber) ||
            (direction === 'greater' && guessedNumber > userNumber)) {
            Alert.alert(
                "Shhh don't lie",
                "Shhh don't lie",
                [{ text: 'Sorry', style: 'cancel' }]
            );
            return;
        }

        if (direction === 'lower') {
            maxBoundary = guessedNumber;
        } else if (direction === 'greater') {
            minBoundary = guessedNumber + 1;
        }

        const newRndmNumber = generateRandomBetween(minBoundary, maxBoundary, guessedNumber);
        setGuessedNumber(newRndmNumber);
    };

    return (
        <View style={styles.screen}>
            <Tilte>Oponent's gues</Tilte>
            <NumberContainer>{guessedNumber}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
                <View style={styles.btnsContainer}>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuesHandler.bind(null, 'greater')} >+</PrimaryButton>
                    </View>
                    <View style={styles.btnContainer}>
                        <PrimaryButton onPress={nextGuesHandler.bind(null, 'lower')} >-</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
};

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: 42,
        paddingHorizontal: 20,
    },
    instructionText: {
        marginBottom: 8,
    },
    btnsContainer: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
    },
});