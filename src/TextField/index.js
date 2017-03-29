/**
 * Created by Utku on 25/03/2017.
 */
import React, {PropTypes} from 'react';
import '@material/textfield/dist/mdc.textfield.css'
import {MDCTextfield} from '@material/textfield/dist/mdc.textfield';
import generateId from '../utils/generateId';
import './TextField.css'
import classNames from 'classnames';
export default class TextField extends React.PureComponent {
    static propTypes = {
        label: PropTypes.string,
        error: PropTypes.string,
        floatingLabel: PropTypes.bool,
        helpText: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        onChange : PropTypes.func,
    }
    copmonentWillMount() {
        this.textFieldId = generateId();
    }
    componentDidMount() {
        MDCTextfield.attachTo(document.querySelector('.mdc-textfield'));
    }

    render() {
        const {label, error, floatingLabel, helpText, style, textfieldStyle,placeholder, ...rest} = this.props;
        const inputClass = classNames("mdc-textfield__input", {
            "placeholderClass": !!floatingLabel && placeholder,
        });
        const helpTextClass = classNames("mdc-textfield-helptext mdc-textfield-helptext--persistent", {
            "mdc-textfield-helptext--validation-msg": error
        });
        return (
            <div style={style}>
                <div className={"mdc-textfield"} style={style}>
                    <input className={inputClass} id={this.textFieldId}
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
