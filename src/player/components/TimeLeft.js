import React from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';

const TimeLeft = (props) => {
    return(
        <View>
            <Text style = {styles.time}>
                {props.currentTime} / {timeReadable(props.duration)}
            </Text>
        </View>
    )
};

const timeReadable = (time) => {
    let timeInMins = time / 60;
    let mins = Math.floor(timeInMins);
    let seconds =  timeInMins % 1;
    seconds = (seconds * 60) / 1000;
    let timeReadable = (mins + seconds * 10).toFixed(2).toString().replace('.', ':');
    return timeReadable;
};

const styles = StyleSheet.create({
    time: {
        color: 'white',
        fontSize: 11,
    }
})

export default TimeLeft;