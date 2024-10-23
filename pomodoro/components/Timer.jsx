import { View, Text, StyleSheet } from "react-native";

export default function Timer({time}){

    {/*Calculamos el tiempo en minutos a partir del tiempo en segundos que teníamos y le damos el formato que queremos: 05:00 (si quedan 5 minutos) */}
    const tiempoFormateado = `${Math.floor(time/60).toString().padStart(2,"0")}:${(time % 60).toString().padStart(2,"0")}`;
    
    return(
        <View style={styles.container}>
            <Text style={styles.time}> {tiempoFormateado} </Text>
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