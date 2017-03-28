import React, {Component} from 'react';
import './App.css';
import FABMenu from './FabMenu'
import Drawer from './Drawer'
import {RadioButton} from './RadioButton'
import {List, ListItem} from './List'
import "@material/list/dist/mdc.list.css";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false,radio:false}

    }

    radioBtnHandler(){
        this.setState({radio:!this.state.radio},()=>console.log(this.state.radio))
    }


    render() {
        return (
            <div>
                <Drawer open={this.state.open} headerStyle={{padding:0}} header={<span style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "green"
                }}>Title</span>}
                        onClose={() => this.setState({open: !this.state.open})}>
                    <div>
                    <RadioButton label="Clicked" setChecked={this.state.radio} isChecked={e=>console.log("isChecked",e)} onChange={e=>console.log("onchange",e)}/>
                    <button id="btn" onClick={this.radioBtnHandler.bind(this)}>radioChanger</button>
                    <List>
                        <ListItem dividerInset>Başlık</ListItem>
                        <ListItem dividerInset>İçerik</ListItem>
                        <ListItem dividerInset>Konu</ListItem>
                    </List>
                    </div>
                </Drawer>
                <button onClick={this.radioBtnHandler.bind(this)}>radioChanger</button>
                <button onClick={() => this.setState({open: !this.state.open})}>open</button>
                <FABMenu showAdd={1} showCopy={2} showDelete={3} showPeopleAdd={4} showSearch={5}/>
            </div>
        );
    }
}

export default App;
