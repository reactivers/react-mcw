import React, {Component} from 'react';
import './App.css';
import {List,ListItem} from './List'
import "@material/list/dist/mdc.list.css";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {open: false}

    }

    render() {
        return (
            <div>
                <List twoLine avatar>
                    <li className="mdc-list-item">
                        Janet Perkins
                        <a href="#" className="mdc-list-item__end-detail material-icons"
                           aria-label="Remove from favorites" title="Remove from favorites">
                            favorite
                        </a>
                    </li>
                    <ListItem iconName="mode_edit" dividerOutset>
                        Deneme 1
                    </ListItem>
                    <ListItem actionIconName="add" dividerOutset>
                        Deneme 2
                    </ListItem>
                    <ListItem dividerOutset subText={<span>denemeee</span>}>
                        Deneme 3
                    </ListItem>
                    <ListItem dividerInset avatar={<i className="material-icons">mode_edit</i>}>
                        Deneme 4
                    </ListItem>
                    <ListItem dividerInset>
                        Deneme 5
                    </ListItem>
                </List>
            </div>
        );
    }
}

export default App;
