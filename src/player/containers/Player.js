import React, {Component} from 'react';
import Video from "react-native-video";
import {ActivityIndicator, StyleSheet, Text} from 'react-native';
import Layout from '../components/PlayerLayout';
import ControlLayout from "../components/ControlLayout";
import PlayPause from "../components/PlayPause";
import ProgressBar from "../components/ProgressBar";
import TimeLeft from "../components/TimeLeft";
import FullScreen from "../components/FullScreen";

class Player extends Component {

    state = {
        loading: true,
        paused: false,
        progress: 0,
        currentTime: '0:00',
        duration: 0,
        changeActivate: false,
        fullscreen: false,
    };

    onBuffer = ({ isBuffering }) => { //heredamos este parametro que es un boolean (true: esta cargando, false: no esta cargando)
        this.setState({
            loading: isBuffering
        })
    };

    playPause = () => {
        this.setState({
            paused: !this.state.paused
        })
    };
    setTime = payload => {
        let currentTime = timeReadable(payload.currentTime);
        this.setState({
            currentTime,
            progress: (payload.currentTime / payload.seekableDuration),
            duration: payload.seekableDuration,
        })
    };
    changeSliderStarted = (value) => {
        this.setState({
            progress: value,
            currentTime: timeReadable(this.state.duration * value),
            changeActivate: true
        })
    };

    changeSliderFinished = (value) => {
        this.setState({
            changeActivate: false,
        });
        this.player.seek(this.state.duration * value)
    };
    setFullScreenPromise = () => {
        return new Promise((resolve, reject) => {
            resolve(
                this.setState({
                    fullscreen: !this.state.fullscreen
                })
            )
        }).catch(error => console.error(error))
    };
    fullScreen = event => {
        this.setFullScreenPromise()
            .then(() => {
                if(this.state.fullscreen)
                    this.player.presentFullscreenPlayer();
                else
                    this.player.dismissFullscreenPlayer();
            })
    };

    render(){
        return(
            <Layout
                loading = {this.state.loading}
                video={
                    <Video
                        ref = {(ref) => {
                            this.player = ref
                        }}
                        source={{ uri: 'https://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4' }}
                        style={styles.video}
                        resizeMode="contain"
                        onBuffer={this.onBuffer} //es un atributo que permite saber si se esta cargando o no
                        paused = {this.state.paused}
                        onProgress={this.setTime}
                    />
                }
                loader = {
                    <ActivityIndicator color="red"/> //mandamos el circulito que gira
                }
                controls = {
                    <ControlLayout>
                        <PlayPause
                            onPress={this.playPause}
                            paused = {
                                this.state.paused //paused es la prop que tiene PlayPause en donde hacemos un if y dependiendo si es true o false, cambia la palabra "play" a "pause"
                            }
                        />
                        <ProgressBar
                            progress = {this.state.progress}
                            onChangeStarted = {this.changeSliderStarted}
                            onChangeFinished = {this.changeSliderFinished}
                        />
                        <TimeLeft
                            currentTime = {this.state.currentTime}
                            duration = {this.state.duration}
                        />
                        <FullScreen
                            onPress = {this.fullScreen}
                        />
                    </ControlLayout>
                }
            />
        )
    }
}

const styles = StyleSheet.create({
    video: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    }
});

function timeReadable(time) {
    let duration = time / 60;
    let mins = Math.floor(duration);
    let seconds = duration % 1;
    seconds = (seconds * 60) / 1000;
    return (mins + seconds * 10).toFixed(2);
}

export default Player;