import React, {Component} from 'react';
import './App.css';
import DatePicker from './DatePicker/DatePicker';


class App extends Component {

    render() {
        return (
            <div style={{display : "flex",justifyContent : "center",alignItems : "center",marginTop : "30px"}}>
            <DatePicker/>
            </div>
        );
    }
}

export default App;