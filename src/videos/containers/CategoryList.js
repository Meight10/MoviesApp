import React, {Component} from 'react';
import Empty from "../components/Empty";
import Separator from "../../sections/components/HorizontalSeparator";
import Category from "../components/Category";
import Layout from "../components/CategoryListLayout";
import {FlatList} from "react-native";
import { connect } from 'react-redux';

class CategoryList extends Component {

    keyExtractor = item => item.id.toString();
    renderEmpty = () => <Empty text="No hay sugerencias"/>;
    itemSeparator = () => <Separator />;

    renderItem = ({item}) =>{

        console.log("CATEGORIES: " + {...item});

        return(
            <Category {...item}/>
        )
    };

    render(){
        return (

            <Layout
                title="Categorias"
            >
                <FlatList
                    horizontal
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

function mapStateToProps(state) {
    return{
        list: state.categoryList
    }
}

export default connect(mapStateToProps) (CategoryList); //a connect se le pasan dos cosas: el componente que se va a conectar y una funcion para extraer datos desde nuestro estado