import { View, Text, StyleSheet } from "react-native";

export default function Timer({time}){
    return(
        <View style={styles.container}>
            <Text style={styles.time}> {time} </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: .3,
        justifyContent: "center",
        backgroundColor: "white",
        padding: 15,
        borderRadius: 15,
    },

    time: {
        fontSize: 80,
        fontWeight: "bold",
        textAlign: "center",
        color: "#333333"
    }
})