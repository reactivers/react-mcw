/**
 * Created by Utku on 25/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/textfield/dist/mdc.textfield.css'
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield';
import generateId from '../utils/generateId';
import '../index.scss'
import Icon from '../Icon';
import classNames from 'classnames';

export default class TextField extends React.PureComponent {
    constructor(props){
        super(props);
        this.state = {
            inputFieldWidth : null,
        }
    }
    static propTypes = {
        label: PropTypes.string,
        error: PropTypes.string,
        floatingLabel: PropTypes.bool,
        helpText: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        onChange : PropTypes.func,
        rightIcon : PropTypes.string,
        rightIconClick : PropTypes.func,
    }
    componentWillMount() {
        this.textFieldId = generateId("inputField");
    }
    componentDidMount() {
        MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
        this.setState({inputFieldWidth : document.getElementById(this.textFieldId).clientWidth});
    }

    render() {
        const {label, error, floatingLabel, helpText, style, textfieldStyle,placeholder,rightIcon,rightIconClick, ...rest} = this.props;
        const inputClass = classNames("mdc-textfield__input", {
            "placeholderClass": !!floatingLabel && placeholder,
        });
        const helpTextClass = classNames("mdc-textfield-helptext mdc-textfield-helptext--persistent", {
            "mdc-textfield-helptext--validation-msg": error
        });
        return (
            <div style={style}>
                <div className={"mdc-textfield"} style={style} id={this.textFieldId}>
                    {rightIcon && this.state.inputFieldWidth && <Icon iconName={rightIcon} onClick={rightIconClick || this.props.onClick} iconColor={"grey"} style={{cursor: rightIconClick ? 'pointer' : 'default',position:"absolute",left : this.state.inputFieldWidth-25}} />}
                    <input className={inputClass}
                           {...rest} style={textfieldStyle}
                           placeholder={!floatingLabel ? label : placeholder}/>
                    { !!floatingLabel &&
                    <label htmlFor={this.textFieldId} className="mdc-textfield__label">{label}</label>}
                </div>
                { (helpText || error) && <p className={helpTextClass} id={this.textFieldId}>
                    {!error ? helpText : error}
                </p>}
            </div>
        )
    }
}
