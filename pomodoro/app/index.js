// Imports de Funcionalidades / Bibliotecas
import { StyleSheet, Platform, View, Text, Button } from 'react-native';
import { useState } from 'react'; // Sirve para declarar variables

// Imports de componentes
import Header from "../components/Header"
import Timer from "../components/Timer"

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

export default function App() {

  const [isWorkin, setIsWork] = useState(false);
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");

  return (
    <View style={[styles.container, {flex:1},{backgroundColor: colors[currentTime] }, {paddingHorizontal: 15}, ]}>
        <Text style={styles.text}> Pomodoro </Text>
        {/* Abstraemos toda la lógica de nuestro Header con esto: */}
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
        {/* */}
        <Timer time={time}> </Timer>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  text: {
    fontSize: 32,
    fontWeight: "bold"
}

});
