import React, {FC} from 'react';
import {View,Text,StyleSheet,Image,Button} from 'react-native';

import { PostImage } from '../../types';

// Definimos las propiedades que le pasaremos
const ImagenHoy: FC<PostImage> = ({date, title, url}) => {
    return(
        <View style={styles.container}>
            
            {/*Vamos obteniendo todos los elementos*/}
            
            <Image source={{uri: url}} style={styles.imagen} />

            <Text style={styles.title}> {title} </Text>

            <Text style={styles.date}> {date} </Text>
            
            <View style={styles.buttonnContainer}>
                <Button title="View"/>  
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2c449d',
        marginVertical: 16,
        marginHorizontal: 24,
        borderRadius: 32,
        padding: 16,
    },
    
    contenedorImagen: {
        
    }, 

    imagen: {
        width: '100%',
        height: 190,
        borderWidth: 2,
        borderColor: "#fff",
        borderRadius: 32,
    },

    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 12,
    },

    date: {
        color: "#fff",
        fontSize: 16,
    },

    buttonnContainer: {
        alignItems: 'flex-end',
    }
});

export default ImagenHoy;