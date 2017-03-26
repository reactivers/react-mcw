/**
 * Created by Utku on 26/03/2017.
 */
import React from 'react';
import generateId from "../../utils/generateId";
import '@material/icon-toggle/dist/mdc.icon-toggle.css'
import {MDCIconToggle} from "@material/icon-toggle/dist/mdc.iconToggle";

export default class IconToggle extends React.PureComponent{
    componentWillMount(){
        this.iconToggleId = generateId();
    }
    componentDidMount(){
        MDCIconToggle.attachTo(document.querySelector(".mdc-icon-toggle"))
    }
    render(){
        return(
            <span>
            <i id={this.iconToggleId} className="mdc-icon-toggle material-icons" role="button"
               data-toggle-on='{"label": "Remove from favorites", "content": "favorite"}'
               data-toggle-off='{"label": "Add to favorites", "content": "favorite_border"}'>
                favorite_border
            </i>
                <span>asd</span>
            </span>
        )
    }
}