import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    StyleSheet,
} from 'react-native'

function Category(props) {
    return(
        <ImageBackground
            style={styles.wrapper}
            source={{
                uri: props.background_image
            }}
        >
            <Text style={styles.genre}>{props.genres[0]}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        width: 250,
        height: 100,
        borderRadius: 10,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genre: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold',
        textShadowColor: 'rgba(0,0,0, .75)', //seteamos un color a textShadow con un alpha (transparencia/opacidad) de 0.75
        textShadowOffset: {   //permite mover la sombra de manera vertical u horizontal
            width: 2, //valores positivos mueven tanto para la derecha y para abajo, valores negativos para izquierda y arriba
            height: 2
        },
        textShadowRadius: 0, //si es 0 se obtiene una sombra fija o dura, si se aumenta se difumina
        elevation: 0
    }
})

export default Category;