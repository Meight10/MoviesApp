import React, {Component} from 'react';
import {
    FlatList,
    Text
} from 'react-native';
import Layout from '../components/SuggestionListLayout';
import Empty from '../components/Empty';
import Separator from '../components/VerticalSeparator';

class SuggestionList extends Component {

    renderEmpty = () => <Empty text="No hay sugerencias"/>
    itemSeparator = () => <Separator />
    render(){
        const list = [
            {
                title: 'Avengers',
                key: '1'
            },
            {
                title: 'Pokemon',
                key: '2'
            }
        ]
        return (
            <Layout
                title="Recomendado para ti"
            >
                <FlatList
                    data = {list} //se le pasa un arreglo o una lista
                    ListEmptyComponent={this.renderEmpty()}
                    ItemSeparatorComponent={this.itemSeparator}
                    renderItem={({ item }) => <Text>{item.title}</Text>} //esta prop se ocupa para renderizar cada elemento, recibe una función
                    //y esta función puede renderizar un componente
                />
            </Layout>
        )
    }
}

export default SuggestionList;