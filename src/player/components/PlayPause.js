import React from 'react';
import {
    TouchableHighlight, //mientras mantengamos presionado, hace un highlight de un tipo de color
    TouchableOpacity, //cuando se pulsa, ocurre como un destello
    TouchableWithoutFeedback, //no sombre ni hace nada
    Text,
    StyleSheet
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const PlayPause = (props) => {
    return(
        <TouchableHighlight
            onPress={props.onPress}
            style = {styles.container}
            hitSlop = {{ //permite crear un "aura" de selección en el botón, para que baste con darle cerca de donde esta este para poder activarlo
                left: 10, //definimos cuanto alcance a la izq, derecha, arria y abajo le vamoss a dar
                top: 10,
                bottom: 10,
                right: 10
            }}
        >
            {
                props.paused ?
                    <Icon name="play-arrow" size={20} color="#98ca3f"/>
                    :
                    <Icon name="pause" size={20} color="#98ca3f"/>
            }
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginVertical: 5,
    }
})

export default PlayPause;

