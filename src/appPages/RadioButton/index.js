/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PureComponent, PropTypes} from 'react'
import '@material/radio/dist/mdc.radio.css'
import {MDCRadio} from '@material/radio/dist/mdc.radio'
import generateid from '../../utils/generateId'

class RadioButton extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        onChange: PropTypes.func,
        isChecked: PropTypes.func,
        isDisabled: PropTypes.func,
        setChecked: PropTypes.bool,
        setDisabled: PropTypes.bool,
        name: PropTypes.string,
    };

    componentWillMount() {
        this.generateId = generateid()
    }

    componentDidMount() {
        this.radio = new MDCRadio.attachTo(document.querySelector('#' + this.generateId));
        this.render();
        window.radio = this.radio
    }

    shouldComponentUpdate(){
        return true
    }

    render() {
        const {label, onChange, isChecked, isDisabled, setChecked, setDisabled, name, ...otherProps} = this.props;
        console.log(this.radio);
        if (this.radio) {
            if(isChecked)
                isChecked(this.radio.foundation_.isChecked());
            if(isDisabled)
                isDisabled(this.radio.foundation_.isDisabled());
            if (setChecked) {
                this.radio.foundation_.setChecked(setChecked);
            }
            if(setDisabled)
                this.radio.foundation_.setDisabled(setDisabled);
        }
        console.log(this.generateId);
        return (
            <div {...otherProps}>
                <div id={this.generateId} className="mdc-radio">
                    <input className="mdc-radio__native-control" type="radio" onChange={onChange}
                           id={this.generateId + "radio"} name={name}/>
                    <div className="mdc-radio__background">
                        <div className="mdc-radio__outer-circle"></div>
                        <div className="mdc-radio__inner-circle"></div>
                    </div>
                </div>
                <label id="radio-2-label" htmlFor={this.generateId + "radio"}>{label}</label>
            </div>
        )
    }
}

export {RadioButton}