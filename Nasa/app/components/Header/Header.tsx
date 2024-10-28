import React from 'react';
import {View,Text,Image,StyleSheet} from 'react-native'

const Header = () => {
    return(
        
        <View style={styles.container}>

            <View style={styles.leftContainer}>
                <Text style={styles.titulo}> Explore </Text>
            </View>
            
            <View style={styles.rightContainer}>
                <Image source={require('../../assets/images/logoNasa.png')} style={styles.imagen}/>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    
    leftContainer: {
        flex: 1,
        alignItems: 'flex-start'
    },

    rightContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },

    titulo: {
        fontSize: 20,
        color: '#fff',
    },

    imagen: {
        width: 60,
        height: 60,
    },
});

export default Header;