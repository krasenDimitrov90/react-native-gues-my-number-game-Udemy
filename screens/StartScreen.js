import React from "react";
import { Alert, StyleSheet, TextInput, View } from "react-native";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstrunctionText";
import PrimaryButton from "../components/ui/PrimaryButton";

const StartScreen = ({ onPickNumber }) => {

    const [enteredNumber, setEnteredNumber] = React.useState('');

    const onInputChangeHandler = (enteredText) => {
        setEnteredNumber(enteredText);
    };

    const onResetHandler = () => {
        setEnteredNumber('');
    };

    const onConfirmHandler = () => {
        const number = parseInt(enteredNumber);

        if (isNaN(number) || number <= 0 || number > 99) {
            Alert.alert(
                "Invalid number",
                "Number must be between 1 and 99",
                [{ text: 'OK', style: 'destructive', onPress: onResetHandler }]
            );

            return;
        }
        onPickNumber(number);
    };

    return (

        <Card>
            <InstructionText>Enter a Number</InstructionText>
            <TextInput
                style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                value={enteredNumber}
                onChangeText={onInputChangeHandler}
            />
            <View style={styles.btnsContainer} >
                <View style={styles.btnContainer} >
                    <PrimaryButton onPress={onResetHandler} >Reset</PrimaryButton>
                </View>
                <View style={styles.btnContainer} >
                    <PrimaryButton onPress={onConfirmHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </Card>
    );
};

export default StartScreen;

const styles = StyleSheet.create({

    numberInput: {
        borderBottomWidth: 2,
        borderBottomColor: '#F79F1F',
        fontSize: 52,
        color: '#F79F1F',
        width: 80,
        textAlign: 'center',
    },
    btnsContainer: {
        flexDirection: 'row',
    },
    btnContainer: {
        flex: 1,
    },
});