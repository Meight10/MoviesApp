import React from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    SafeAreaView
} from 'react-native';

function Header(props) {
    return(
        <View style = {styles.realContainer}>
            <SafeAreaView>
                <View style = {styles.container}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style = {styles.logo}
                    />
                    <View style = {styles.right}>
                        {props.children}
                    </View>
                </View>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 26,
        resizeMode: 'contain' //aunque la imagen no tenga el width y height perfecto, en este caso salia un poco cortado, acomoda la imagen para que salga completa con el espacio disponible
    },
    container: {
        padding: 10,
        flexDirection: 'row', //cambiamos de que los elementos esten en una columna, a una fila
    },
    right: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end'
    }
});

export default Header;