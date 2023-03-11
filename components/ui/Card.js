const { View, StyleSheet } = require("react-native")

const Card = ({ children }) => {

    return (
        <View style={styles.inputContainer} >{children}</View>
    );
};

export default Card;

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: '#6F1E51',
        padding: 20,
        marginTop: 100,
        marginHorizontal: 30,
        borderRadius: 8,
        alignItems: 'center',
    },
});