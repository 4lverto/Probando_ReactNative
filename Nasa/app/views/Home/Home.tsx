import React, { useEffect, useState } from 'react';
import {View,StyleSheet}from 'react-native';

import fetchApi from '../../utils/fetch';
import Header from '../../components/Header';
import ImagenHoy from '../../components/ImagenHoy';
import { PostImage } from '@/app/types';

const Home = () => {


    const [imagenHoy, setImagenHoy] = useState<PostImage>();

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

        // Llamamos a la función
        cargarImagenHoy().catch(null);

    } , []);

    // Mostramos lo que obtenemos de la llamada a la API en una constante de estado local
    console.log(imagenHoy);
    
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