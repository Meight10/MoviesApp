import React, {Component} from 'react';

class Home extends Component {
    render(){ //todos los componentes en react deben llevar un método principal para mostrar su contenido
        return this.props.children //va a retornar los hijos con los uqe se compongan Home.js
    }
}export default Home;