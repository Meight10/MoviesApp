import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';
import Suggestion from '../components/Suggestion';
import { connect } from 'react-redux';

class SuggestionList extends Component {

    keyExtractor = item => item.id.toString();
    renderEmpty = () => <Empty text="No hay sugerencias"/>;
    itemSeparator = () => <Separator />;
    renderItem = ({item}) => {
        console.log("SUGGESTIONS: " + {...item});
        console.log("TITLE_SUGGESTION: " + item.title);
        return(
            <Suggestion {...item}/>
        )
    };

    render(){
        return (
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data = {this.props.list} //se le pasa un arreglo o una lista
                    ListEmptyComponent={this.renderEmpty()}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={this.renderItem} //esta prop se ocupa para renderizar cada elemento, recibe una función
                    //y esta función puede renderizar un componente
                />
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return{
        list: state.movieList
    }
}

export default connect(mapStateToProps) (SuggestionList);