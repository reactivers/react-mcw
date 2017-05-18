/**
 * Created by Utku on 24/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/switch/dist/mdc.switch.css';
import classNames from 'classnames';
import generateId from '../utils/generateId';

export default class Switch extends React.Component {
    static propTypes = {
        checked: PropTypes.bool,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        label : PropTypes.string,
        style : PropTypes.object,
    };

    componentWillMount() {
        this.switchId = generateId();
    }

    render() {
        const {className,label,style,...rest} = this.props;
        const classes = classNames("mdc-switch-label",className);
        return (
            <label htmlFor={this.switchId} className={classes} style={style}>
                <div className="mdc-switch">
                    <input type="checkbox" {...rest} id={this.switchId} className="mdc-switch__native-control"/>
                    <div className="mdc-switch__background">
                        <div className="mdc-switch__knob"></div>
                    </div>
                </div>
                {label}
            </label>
        )
    }
}