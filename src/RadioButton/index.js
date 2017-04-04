/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PureComponent, PropTypes} from 'react'
import '@material/radio/dist/mdc.radio.css'
import {MDCRadio} from '@material/radio/dist/mdc.radio'
import generateid from '../utils/generateId'

class RadioButton extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        onChange: PropTypes.func,
        isChecked: PropTypes.func,
        isDisabled: PropTypes.func,
        setChecked: PropTypes.bool,
        setDisabled: PropTypes.bool,
        name: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
    };

    componentWillMount() {
        this.generateId = generateid()
    }

    componentDidMount() {
        this.radio = new MDCRadio(document.querySelector('#' + this.generateId));
        this.radioOptions(this.props)
        window.radio = this.radio
    }

    radioOptions(nextProps){
        if(nextProps.isDisabled)
            nextProps.isDisabled(this.radio.foundation_.isDisabled());

        if (nextProps.setChecked !== undefined) {
            this.radio.foundation_.setChecked(nextProps.setChecked);
        }

        if(nextProps.setDisabled)
            this.radio.foundation_.setDisabled(nextProps.setDisabled);

        if(nextProps.isChecked)
            nextProps.isChecked(this.radio.foundation_.isChecked());

        if(nextProps.onChange)
            nextProps.onChange(this.radio.foundation_.isChecked())
    }

    componentWillReceiveProps(nextProps,nextState){
        this.radioOptions(nextProps)

    }

    render() {
        const {label, onChange, isChecked, isDisabled, setChecked, setDisabled, value,  style, className,name, ...otherProps} = this.props;

        return (
            <div className={"mdc-form-field" + className} style={{display:"flex",alignItems:"center",...style}} {...otherProps}>
                <div id={this.generateId} className="mdc-radio">
                    <input className="mdc-radio__native-control"  type="radio" onChange={onChange}
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