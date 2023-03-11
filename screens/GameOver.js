import { Image, StyleSheet, Text, View } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import Tilte from "../components/ui/Title";


const GameOver = ({ onResetGame }) => {

    return (
        <View style={styles.rootContainer}>
            <Tilte>Game Over</Tilte>
            <View style={styles.imgContainer}>
                <Image style={styles.image} source={require('../assets/images/success.png')} />
            </View>
            <Text style={styles.textSummary}>
                Your phone needed <Text style={styles.textHighligh} >X</Text> rounds to gues the number <Text style={styles.textHighligh}>Y</Text>.
            </Text>
            <PrimaryButton onPress={onResetGame} >Start new game</PrimaryButton>
        </View>
    );
};

export default GameOver;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderColor: '#a50ba5',
        borderWidth: 2,
        overflow: 'hidden',
        margin: 36,
    },
    image: {
        width: '100%',
        height: '100%',
    },
    textSummary: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 24,
    },
    textHighligh: {

    },
});