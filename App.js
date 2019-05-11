import React, {Component} from 'react';
import {Text, View, ActivityIndicator} from 'react-native';

import Home from './src/screens/containers/Home';
import Header from './src/sections/components/Header';
import SuggestionList from './src/videos/containers/SuggestionList'
import CategoryList from './src/videos/containers/CategoryList';
import API from './utils/api';
import Player from './src/player/containers/Player'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './Store';

type Props = {};
export default class App extends Component<Props> {

    state = {
        // suggestionList: [],
        // categoryList: [],
    }

    async componentDidMount() {
        const categoryList = await API.getMovies();
        store.dispatch({ //despachamos las acciones, aqui decidimos como se van a llamar los metodos que tenga el reducer (las acciones), aunque yo lo veo como un key
            type: 'SET_CATEGORY_LIST',
            payload: { //enviamos los datos de la accion
                categoryList
            }
        });

        const movieList = await API.getSuggestion(10);
        store.dispatch({ //despachamos las acciones, aqui decidimos como se van a llamar los metodos que tenga el reducer (las acciones), aunque yo lo veo como un key
            type: 'SET_SUGGESTION_LIST', //type: nombre de la accion
            payload: { //enviamos los datos de la accion
                movieList
            }
        })
        // console.log(movieList);
        // console.log(categoryList);
        // this.setState({
        //     suggestionList: movieList,
        //     categoryList: categoryList,
        // })
        // console.log("pruebaSuggestion2: "+this.state.suggestionList);
        // console.log("prueba2: "+this.state.categoryList);
    }

    render() {
        const {suggestionList, loading} = this.state;
        return (
            <Provider
                store = {store}
            >
                {
                    //Provider es un componente que nos srive para proveer a la app de nuestros datos, por eso envolvemos todo con provider
                }
                <PersistGate
                    loading = {<Text>cargando...</Text>}
                    persistor = {persistor}
                >
                    <Home>
                        <Header />
                        <Player/>
                        <Text>buscador</Text>
                        {console.log("prueba: "+this.state.categoryList)}
                        {console.log("pruebaSuggestion: "+this.state.categoryList)}
                        <CategoryList/>
                        <SuggestionList/>
                    </Home>
                </PersistGate>
            </Provider>
        );
    }

}


