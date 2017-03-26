/**
 * Created by Utku on 24/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/card/dist/mdc.card.css';
import '@material/elevation/dist/mdc.elevation.css';
import classNames from 'classnames';

export default class Card extends React.PureComponent{
    static propTypes={
        className : PropTypes.string,
        shadow : PropTypes.number,
    };
    render(){
        const {className,shadow,...rest} = this.props;
        const classes = classNames("mdc-card",{
            ["mdc-elevation--z"+shadow] : shadow
        },className)
        return(
            <div className={classes} {...rest}>
                {this.props.children}
            </div>
        )
    }
}