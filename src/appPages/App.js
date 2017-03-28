import React, {Component} from 'react';
import './App.css';
import FABMenu from './FabMenu'
import {Tabs, Tab} from './Tab'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            radio: false,
            tabIndex: 1,
        }

    }

    render() {
        return (
            <div className="rmd-centered-item" style={{width: "100%", height: "100%"}}>
                <div>
                    <Tabs>
                        <Tab label="Tab 3">
                        </Tab>
                        <Tab label="Tab 3">
                        </Tab>
                    </Tabs>
                </div>
                <FABMenu showAdd={1} showCopy={2} showDelete={3} showPeopleAdd={4} showSearch={5}/>
            </div>
        );
    }
}

export default App;
