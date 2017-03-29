/**
 * Created by Utku on 24/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/button/dist/mdc.button.css';
import classNames from 'classnames';
import generateId from './utils/generateId';
export default class Button extends React.PureComponent{

    static propTypes={
        className : PropTypes.string,
        primary : PropTypes.bool,
        accent : PropTypes.bool,
        textColor : PropTypes.string,
        buttonColor : PropTypes.string,
        style : PropTypes.object,
        raised : PropTypes.bool,
        onClick : PropTypes.func,
        disabled :PropTypes.bool,
        dense :PropTypes.bool,
        compact : PropTypes.bool,
    };

    componentWillMount(){
        this.buttonId = generateId();
    };

    render(){
        const{className,dense,compact,style,textColor,buttonColor,raised,primary,accent,...rest} = this.props;
        const classes = classNames("mdc-button",{
            "mdc-button--accent" : accent,
            "mdc-button--primary" : primary,
            "mdc-button--raised" : raised,
            "mdc-button--dense" : dense,
            "mdc-button--compact" : compact,
        },className)
        let buttonStyle = Object.assign({},style,{backgroundColor : buttonColor,color:textColor});
        return(
            <button className={classes} key={this.props.key || this.buttonId} style={buttonStyle} {...rest}>
                {this.props.children}
            </button>
        )
    }
}