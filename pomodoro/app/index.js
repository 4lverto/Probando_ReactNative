// Imports de Funcionalidades / Bibliotecas
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useEffect, useState } from 'react'; // Sirve para declarar variables
import { Audio } from "expo-av";

// Imports de componentes
import Header from "../components/Header"
import Timer from "../components/Timer"

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

export default function App() {

  const [isWorking, setIsWorking] = useState(false); // Lo único que hace es saber si el usuario está en alguno de los menús
  const [time, setTime] = useState(25 * 60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  {
    /* Accedemos a los ciclos de vida de componentes  
    {función callback}  [array de dependencias que representa un efecto que se activará si el contenido del array cambia] */ 
  }
  useEffect(() => {
    let intervalo = null;

    if(isActive){
      // Run timer -> setInterval toma una función y cada cuanto tiempo (ms) queremos usarla
      intervalo=setInterval(() => {
        setTime(time-1);
      },1000)
    }else{
      // Limpiar el intervalo -> 
      clearInterval(intervalo); // Esto hará que cuando el reloj no esté activo lo quitaremos del fondo.
    }
    
    if(time === 0){
      setIsActive(false);
      setIsWorking((prev) => !prev); // React tiene un problemilla con la actualización de los componentes.
      setTime(isWorking ? 300 : 1500);
      escucharSonido();
    }

    return() => clearInterval(intervalo);
    // Si no usamos el array de dependencias de useEffect, este useEffect tan solo se ejecuta una vez cuando el componente se monta.
    // Poniendo isActive lo que pasará será que cuando cambie isActive se ejecutará
    // Si añadimos "time", también se interpretará que cada vez que "time" cambie también se ejecute. Sin embargo, sólo con esto no basta,
    // por lo que añadimos el return => clearInterval(intervalo) para que no se vuelva loco y no se hagan varios intervalos..
  }, [isActive,time])

  function manejarStartStop(){
    escucharSonido();
    setIsActive(!isActive);
  }

  async function escucharSonido(){

    const { sound } = await Audio.Sound.createAsync( require("../assets/audios/orb.mp3") );
    
    await sound.playAsync();
  }


  return (
    <View style={[styles.container, {flex:1},{backgroundColor: colors[currentTime] }, {paddingHorizontal: 15}, ]}>
        <Text style={styles.text}> Pomodoro </Text>
        {/* Abstraemos toda la lógica de nuestro Header con esto: */}
        <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
        {/* Abstraemos la lógica correspondiente a la gestión del Timer*/}
        <Timer time={time}> </Timer>

        {/* Botones para empezar y parar el timer */}
        <TouchableOpacity onPress={manejarStartStop} style={styles.boton}>
          <Text style={{color: "white" , fontWeight: "bold" }}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1
  },

  text: {
    padding: 15,
    textDecorationLine: "underline",
    textAlign: "center",
    fontSize: 50,
    fontWeight: "bold"
},

  boton: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  }

});
