import {View,Text,TouchableOpacity,StyleSheet} from "react-native";

const optiones = ["Pomodoro","Short Break","Long Break"];

export default function Header({setCurrentTime, currentTime , setTime}){
    
    {/* En función del índice que se le pase a esta función*/}
    function manejadorOpcion(indice_item){
        
        let newTime;

        if (indice_item === 0) {
            newTime = 25;
        } else if (indice_item === 1) {
            newTime = 5;
        } else {
            newTime = 15;
        }

        setCurrentTime(indice_item);
        setTime(newTime * 60);
    }
    
    return(
        <View style={{flexDirection: 'row'}}>
            
            {/* Recorremos los 3 elementos que hay en el array de "opciones" usando un índice.
                Le deberemos decir a TouchableOpacity que la key de cada elemento será dicho índice.
                Por otro lado, usaremos 'onPress' para indicar que al presionar sobre alguno de los
                elementos sobre los que se está iterando, se llame a la función que definimos arriba.
                De esta forma, si presionamos al elemento con índice==1 (que corresponde con un Short Break) 
                se llamará a la función del manejadorOpcion, donde se establecerá el tiempo a, en este caso,
                5 * 60, es decir, 300.
            */}
            
            {optiones.map((item,indice_item) => (
                <TouchableOpacity 
                    key={indice_item} 
                    onPress={ () => manejadorOpcion(indice_item) }
                    style={[styles.estilosItem , currentTime!==indice_item && {borderColor: "transparent"}]} >
                    
                    <Text style={{fontWeight: "bold"}}>{item}</Text>

                </TouchableOpacity>
            ))}

        </View>
    )
}

const styles = StyleSheet.create({
    
    estilosItem: {
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor: "white",
        marginVertical: 20,
    }
}) 