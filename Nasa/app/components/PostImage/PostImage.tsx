import React, {FC} from "react";
import {View, Text,Button,StyleSheet} from 'react-native';

import { PostImage as PostImageTypes} from "../../types";

const PostImage: FC<PostImageTypes> = ({title, date}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>{title}</Text>
            <Text style={styles.fecha}>{date}</Text>

            <View style={styles.contendorBoton}>
                <Button title='View'/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(18,39,113,255)',
        borderRadius: 20,
        marginBottom: 12,
        padding: 16,
    },

    titulo: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
    },

    fecha: {
        color: '#fff',
    },

    contendorBoton: {
        alignItems: 'flex-end',
    },
});

export default PostImage;