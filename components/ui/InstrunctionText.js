import { StyleSheet, Text } from "react-native";

const InstructionText = ({ children, style }) => {

    return (
        <Text style={[styles.text, style]}>{children}</Text>
    );
};

export default InstructionText;

const styles = StyleSheet.create({
    text: {
        fontSize: 24,
        color: '#F79F1F',
    },
});