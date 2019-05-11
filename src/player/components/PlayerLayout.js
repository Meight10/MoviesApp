import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

function PlayerLayout(props) {
    return(
        <View style={styles.container}>
            {
                //se coloca un container global porque se va a agregar el video tal cual además de otros elementos como el loader, controles, etc
             }
            <View style={styles.video}>
                {props.video}
            </View>
            <View style={styles.overlay}>
               {
                   props.loading && //es una forma de hacer un condicional si esta cargando muestra el loader
                   props.loader
               }
            </View>
            {props.controls}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: '56.25%', //con esto sacamos un formato 16:9
    },
    video: {
        position: 'absolute', //nos traermos los mismos estilos del video
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'black'
    },
    overlay: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default PlayerLayout;