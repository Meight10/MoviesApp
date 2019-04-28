import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList'
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {

    state = {
        suggestionList: [],
        loading: true,
    };

    async componentDidMount(): void {
        const movies = await API.getSuggestion(10);
        console.log(movies);
        this.setState({
            suggestionList: movies,
            loading: false,
        })
    }

    render() {
        const {suggestionList, loading} = this.state;
        return (
            <Home>
                <Header />
                <Text>buscador</Text>
                <Text>categorias</Text>
                {loading ?
                <View>
                    <ActivityIndicator size="large" color = "#ff050"/>
                </View>
                :
                <SuggestionList
                    list = {suggestionList}
                />}
            </Home>
        );
    }

}


