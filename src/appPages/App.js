import React, {Component} from 'react';
import './App.css';
import FABMenu from './FabMenu'
import {Menu,MenuItem} from './Menu'
import "@material/list/dist/mdc.list.css";

const data = [
    {val: "1", dsc: "Bir"},
    {val: "2", dsc: "İki"},
    {val: "3", dsc: "Üç"},
    {val: "4", dsc: "Dört"},
    {val: "5", dsc: "Beş"},
];

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false}

    }

    render() {
        return (
            <div>
                <Menu open={this.state.open} style={{minWidth:200}} bottomToRight onClose={() => this.setState({open: false})}
                      target={<button onClick={() => this.setState({open: !this.state.open})}>open</button>}>
                    <MenuItem style={{minWidth:200}}>1</MenuItem>
                    <MenuItem style={{minWidth:200}}>2</MenuItem>
                    <MenuItem style={{minWidth:200}}>3</MenuItem>
                    <MenuItem style={{minWidth:200}}>4</MenuItem>
                </Menu>
                <FABMenu showAdd={1} showCopy={2} showDelete={3} showPeopleAdd={4} showSearch={5}/>
            </div>
        );
    }
}

export default App;
