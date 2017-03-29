import React, {Component} from 'react';
import './App.css';
import Content from './Documentation'


class App extends Component {


    render() {
        return (
            <div style={{height:"100%"}}>
                <Content/>
            </div>
        )
    }
}

export default App;