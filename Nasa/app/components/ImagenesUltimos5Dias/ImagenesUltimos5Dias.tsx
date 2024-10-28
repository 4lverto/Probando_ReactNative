import React, {FC} from "react";
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import { PostImage as PostImageTypes} from "../../types";
import PostImage from "../PostImage";

const ImagenesUltimos5Dias: FC<{ postImages?: PostImageTypes[]}> = ({postImages}) => {

    console.log(postImages);

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}> Últimos 5 Días </Text>

            <ScrollView style={styles.contenido}>
                {postImages?.map(postImage => (
                    <PostImage key={`post-image-${postImage.title}`} {...postImage} />
                ))}
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 8,
    },

    titulo: {
        color: '#fff',
        fontSize: 16,
        marginBottom: 18,
    },

    contenido: {
        paddingHorizontal: 24,
    }
});

export default ImagenesUltimos5Dias;