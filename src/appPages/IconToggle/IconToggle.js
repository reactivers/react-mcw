/**
 * Created by Utku on 26/03/2017.
 */
import React,{PropTypes} from 'react';
import generateId from "../../utils/generateId";
import '@material/icon-toggle/dist/mdc.icon-toggle.css'
import {MDCIconToggle} from "@material/icon-toggle/dist/mdc.iconToggle";
import classNames from 'classnames';

export default class IconToggle extends React.PureComponent{
    static propTypes = {
        iconColor : PropTypes.string,
        textColor : PropTypes.string,
        toggleOnIcon : PropTypes.string.isRequired,
        toggleOffIcon : PropTypes.string.isRequired,
        toggleText : PropTypes.string,
        disabled : PropTypes.bool,
        onStatusChange : PropTypes.func,
        primary : PropTypes.bool,
        accent : PropTypes.bool,
    }

    componentWillMount(){
        this.iconToggleId = generateId();
    }
    componentDidMount(){
        const iconToggle = document.querySelector('.mdc-icon-toggle');
        iconToggle.addEventListener('MDCIconToggle:change', ({detail}) => {
            this.props.onStatusChange(detail.isOn);
        });
        MDCIconToggle.attachTo(iconToggle)

    }
    render(){
        const{primary,accent,iconColor,textColor,toggleOnIcon,toggleOffIcon,toggleText,disabled} = this.props;
        const rootClasses = classNames({
            "mdc-icon-toggle--primary" : primary,
            "mdc-icon-toggle--accent" : accent,
        });
        const iconClasses = classNames("mdc-icon-toggle","material-icons",{
            "mdc-icon-toggle--primary" : primary,
            "mdc-icon-toggle--accent" : accent,
        })
        return(
            <div className={rootClasses} style={{display : 'inline-block',textAlign:'center',color: !(primary || accent) && !disabled && (textColor  || "rgba(0, 0, 0, 0.54)")}}>
            <i id={this.iconToggleId} className={iconClasses} style={{color : !(primary || accent) && !disabled && iconColor}} role="button" aria-disabled={disabled}
               data-toggle-on={`{"content": "${toggleOnIcon}" }`}
               data-toggle-off={`{"content": "${toggleOffIcon}" }`}>
            </i>
                {toggleText}
            </div>
        )
    }
}