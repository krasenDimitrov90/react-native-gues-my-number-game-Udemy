import { StyleSheet, Text, View } from "react-native";


const NumberContainer = ({ children }) => {

    return (
        <View style={styles.numberContainer}>
            <Text style={styles.numberText} >{children}</Text>
        </View>
    );
};

export default NumberContainer;


const styles = StyleSheet.create({
    numberContainer: {
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 30,
        margin: 20,
        borderRadius: 8,
    },
    numberText: {
        color: '#ddb52f',
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});