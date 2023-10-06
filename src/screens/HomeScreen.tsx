import React from 'react';
import { StyleSheet, View } from "react-native";
import { FlatList, Image } from 'react-native';
import { usuarioData } from '../mock/Usuario';
import { SliderImagenes } from '../components/SliderImagenes';
import Swiper from 'react-native-deck-swiper';
import { Button } from '@rneui/themed';

interface Props {
    navigation: any;
}

const renderItem = (item: any) => {
    return (
        <Image style={{ width: 300, height: 400 }} source={{ uri: "https://www.xtrafondos.com/wallpapers/vertical/perro-corriendo-en-la-playa-10624.jpg" }} />
    )
}
export const HomeScreen = ({ navigation }: Props) => {
    return (
        <View style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <FlatList
            data={[1,2,3,4,5,6,7,8,9,10]}
            renderItem={ (data) => <SliderImagenes key={data.item} lista={usuarioData.imagenes}/> }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5FCFF"
    },
    card: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: "#E8E8E8",
        justifyContent: "center",
        backgroundColor: "white"
    },
    text: {
        textAlign: "center",
        fontSize: 50,
        backgroundColor: "transparent"
    }
});