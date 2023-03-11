import { StyleSheet, Text, View, Pressable } from "react-native"

const PrimaryButton = ({ children, onPress }) => {

    return (
        <View style={styles.outerBtnContainer}>
            <Pressable
                style={styles.innerBtnContainer}
                android_ripple={{ color: "#a14a8d" }}
                onPress={onPress}
            >
                <Text>{children}</Text>
            </Pressable>
        </View>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    outerBtnContainer: {
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 26,
        overflow: 'hidden',
    },
    innerBtnContainer: {
        paddingVertical: 8,
        paddingHorizontal: 20,
        backgroundColor: "#833471",
        alignItems: 'center',
    },
});