import React from 'react';
import { View, StyleSheet, Slider} from 'react-native';

const ProgressBar = (props) => {
    return(
        <View style={styles.progress}>
            <Slider
                maximumValue = {props.duration}
                minimumValue = {0}
                onValueChange = {props.onChangeStarted}
                onSlidingComplete = {props.onChangeFinished}
                value = {props.progress}
                maximumTrackTintColor = "rgba(255, 255, 255, .40)"
                minimumTreackTintColor = '#98ca3f'
                thumbTintColor = 'white'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    progress: {
        width: '65%'
    }
});

export default ProgressBar;