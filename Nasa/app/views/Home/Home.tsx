import React, { useEffect, useState } from 'react';
import {View,StyleSheet}from 'react-native';
import { format,sub } from 'date-fns';

import fetchApi from '../../utils/fetch';
import Header from '../../components/Header';
import ImagenHoy from '../../components/ImagenHoy';
import { PostImage } from '../../types';

const Home = () => {


    const [imagenHoy, setImagenHoy] = useState<PostImage>();

    const [imagenesUltimos5Dias, setImagenesUltimos5Dias] = useState<PostImage[]>([]);

    /*La función useEffect sirve para que podamos ejecutar lo que sea que queramos ejecutar cuando cambien ciertas dependencias.
    Por ejemplo, querremos que se llame a la API cuando el componente se monte por primera vez */
    useEffect(() => {
        // Para evitar que useEffect sea asíncrono, crearemos la función cargarImagenHoy 
        const cargarImagenHoy = async () => {
            try{
                const respuestaImagenHoy = await fetchApi();
                // console.log(respuestaImagenHoy); // Comprobaremos que la llamada a la API funciona
                setImagenHoy(respuestaImagenHoy);
            }catch (error) {
                console.error(error);
                setImagenHoy({});
            }
        };

        // Para cargar el resto de imágenes (de los últimos 5 días)
        const cargarUltimasImagenes5Dias = async () => {
            try{
                const date = new Date();
                const fechaHoy = format(date,'yyyy-MM-dd');
                const fechaHace5Dias = format(sub(date,{days: 5}),'yyyy-MM-dd');
                
                const fechaHace5DiasResponse = await fetchApi(`&start_date=${fechaHace5Dias}&end_date=${fechaHoy}`);
                
                setImagenesUltimos5Dias(fechaHace5DiasResponse);
                
            }catch(error){
                console.error(error);
            }
        };

        // Llamamos a la función
        cargarImagenHoy().catch(null);
        cargarUltimasImagenes5Dias().catch(null);

    } , []);

    // Mostramos lo que obtenemos de la llamada a la API en una constante de estado local
    // (ya no hace falta porque sabemos que funciona)
    // console.log(imagenHoy);
    console.log(imagenesUltimos5Dias);
    
    // Colocamos nuestros componentes
    return (
        <View style={styles.container}>
            <Header />
            <ImagenHoy {...imagenHoy}/>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
    },
}); 

export default Home;