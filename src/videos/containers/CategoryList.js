import React, {Component} from 'react';
import Empty from "../components/Empty";
import Separator from "../components/VerticalSeparator";
import Suggestion from "../components/Suggestion";
import Layout from "../components/SuggestionListLayout";
import {FlatList} from "react-native";


class CategoryList extends Component {

    keyExtractor = item => item.id.toString();
    renderEmpty = () => <Empty text="No hay sugerencias"/>;
    itemSeparator = () => <Separator />;

    renderItem = ({item}) =>{

        console.log("CATEGORIES: " + {...item});

        /*return(
            <Suggestion {...item}/>
        )*/
    };



    render(){
        return (

            <Layout
                title="Categorias"
            >
                <FlatList
                    keyExtractor={this.keyExtractor}
                    data = {
                        this.props.list

                    } //se le pasa un arreglo o una lista
                    ListEmptyComponent={this.renderEmpty()} //llama a este método cuando la lista esta vacia
                    ItemSeparatorComponent={this.itemSeparator} //llama al método que retornanra el componenete que tiene el separador
                    renderItem={this.renderItem} //esta prop se ocupa para renderizar cada elemento, recibe una función
                    //y esta función puede renderizar un componente
                />
            </Layout>
        )
    }
}

export default CategoryList;