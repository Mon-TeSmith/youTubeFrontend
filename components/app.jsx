import React,{Component} from 'react';
import './App.css'
import Titlebar from './Titlebar/titlebar'


class App extends Component {
    constructor(props){

    }

    render(){
        return(
            <div className= "body">
                <Titlebar/>
            </div>
        )
    }

}

export default App;