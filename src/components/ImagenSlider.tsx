import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Dimensions, Image } from "react-native";
import LinearGradient from 'react-native-linear-gradient';
import { getColors } from 'react-native-image-colors';
import { Text } from 'react-native';

interface Props {
    src: String;
    alt?: string;
    loading: boolean;
}

const dimensiones = Dimensions.get("window");

export const ImagenSlider = ({ src, alt = "Imagen", loading }: Props) => {

    const [color, setColor] = useState<{ primario: string, secundario: string }>({ primario: "#e1e1e1", secundario: "#e1e1e1" });

    useEffect(() => {
        const getColor = async () => {
            const resp: any = await getColors(src.toString(), {});
            setColor({
                primario: resp.dominant,
                secundario: resp.average
            });
        }
        getColor();
    }, []);


    return (
        <LinearGradient  colors={[color.primario, color.secundario]} style={{ ...styles.gradient, backgroundColor: src.toString() }}>
            <Image style={styles.imagen} resizeMode='contain'
                source={{ uri: src.toString() }} />
        </LinearGradient>
    )
}


const styles = StyleSheet.create({
    contenedor: {
        //height: dimensiones.height,
        //width: dimensiones.width,
        //display: "flex",
        //alignItems: "center",
        //justifyContent: "center"
    },
    gradient: {
        flex: 1,
        width: dimensiones.width * 0.92,
        borderRadius: 12
    },
    imagen: {
        flex: 1,
        padding: 0,
        position: "relative",
        borderRadius: 0
    }
});


//<LinearGradient colors={[color.primario, color.secundario} style={styles.gradient}>
// <Image style={styles.imagen} resizeMode='contain'
//source={{ uri: src.toString() }} />