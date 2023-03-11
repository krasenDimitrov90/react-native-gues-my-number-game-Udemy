import { StyleSheet, Text, View } from 'react-native';

const Tilte = ({ children }) => {

    return (
            <Text style={styles.titleContainer} >{children}</Text>
    );
};


export default Tilte;


const styles = StyleSheet.create({
    titleContainer: {
        padding: 12,
        borderWidth: 2,
        borderColor: '#ddb52f',
        textAlign: 'center',
        fontSize: 24,
        color: '#ddb52f',
        fontWeight: 'bold',
    },
});