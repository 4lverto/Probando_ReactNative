import Header from '@/app/components/Header/Header';
import React from 'react';
import {View,StyleSheet}from 'react-native';

const Home = () => {
    return (
        <View style={styles.container}>
            <Header />
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