import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList'
import CategoryList from './src/videos/containers/CategoryList';
import API from './utils/api';

type Props = {};
export default class App extends Component<Props> {

    state = {
        suggestionList: [],
        categoryList: [],
    }

    async componentDidMount() {
        const movies = await API.getSuggestion(10);
        const categories = await API.getMovies();
        console.log(movies);
        console.log(categories);
        this.setState({
            suggestionList: movies,
            categoryList: categories,
        })
        console.log("pruebaSuggestion2: "+this.state.suggestionList);
        console.log("prueba2: "+this.state.categoryList);
    }

    render() {
        const {suggestionList, loading} = this.state;
        return (
            <Home>
                <Header />
                <Text>buscador</Text>
                <Text>categorias</Text>
                {console.log("prueba: "+this.state.categoryList)}
                {console.log("pruebaSuggestion: "+this.state.categoryList)}
                <CategoryList
                    list = {this.state.categoryList}
                />
                <SuggestionList
                    list = {this.state.suggestionList}
                />
            </Home>
        );
    }

}


