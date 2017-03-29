/**
 * Created by Utku on 28/03/2017.
 */
import React, {PropTypes} from 'react';
import '@material/menu/dist/mdc.menu.css'
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import classNames from 'classnames';
import './AutoComplete.css';
import TextField from '../TextField/index';
const dataC = [
    {text: "Ankara", value: "Ankara"},
    {text: "Adana", value: "Adana"},
    {text: "Bolu", value: "Bolu"},
    {text: "İstanbul", value: "İstanbul"},
    {text: "İzmir", value: "İzmir"},
    {text: "Çorum", value: "Çorum"},
    {text: "Denizli", value: "Denizli"},
]
const dataSourceConfig = {text: 'text', val: "value"}
export default class AutoComplete extends React.PureComponent {
    static propTypes = {
        target: PropTypes.node,
        label: PropTypes.string,
        error: PropTypes.string,
        floatingLabel: PropTypes.bool,
        helpText: PropTypes.string,
        placeholder: PropTypes.string,
        disabled: PropTypes.bool,
        onChange: PropTypes.func,
        getSelected : PropTypes.func,
    };
    state = {
        hasVal: ""
    };

    setSelected(itemIndex) {
        console.log(itemIndex,",",dataC[4])
        if(this.props.getSelected){
            this.props.getSelected(dataC[itemIndex.index])
        }
    };

    tempClose;
    xx;

    componentDidMount() {
        this.menu = new MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
        this.menu.foundation_.adapter_.notifySelected = (e) => this.setSelected(e);
        this.menu.foundation_.focusOnOpen_ = () => null;
        this.tempClose = this.menu.foundation_;
    };

    render() {
        const {label,error,floatingLabel,helpText,placeholder,disabled,onChange,getSelected,className,style, ...rest} = this.props;

        if (this.state.hasVal != "" && !this.menu.foundation_.isOpen()) {
            this.menu.show();
        }
        return (
            <div className={className} style={style}>
                <TextField value={this.state.hasVal}
                           disabled={disabled}
                           placeholder={placeholder}
                           helpText={helpText}
                           error={error}
                           onChange={ (e) => {
                               this.setState({hasVal: e.target.value})
                           }} floatingLabel={floatingLabel}
                           label={label}/>
                <div className="mdc-simple-menu" tabIndex="-1">
                    <ul className="mdc-simple-menu__items mdc-list deleleteMargin" role="menu" aria-hidden="true">
                        {dataC.map((text, index) => {
                            return (
                                <li key={index} onClick={ () => this.setState({hasVal: text[dataSourceConfig.text]})}
                                    className="hoverableMenuItem mdc-list-item" role="menuitem" tabIndex="0">
                                    {text[dataSourceConfig.text]}
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}