/**
 * Created by Utku on 24/03/2017.
 */
import React,{PropTypes} from 'react';
import classNames from 'classnames';
import '@material/card/dist/mdc.card.css';

export default class CardBody extends React.PureComponent{
    static propTypes={
        className : PropTypes.string,
    };
    render(){
        const {className,...rest} = this.props;
        const classes = classNames("mdc-card__supporting-text",className)
        return(
                <section className={classes} {...rest}>
                    {this.props.children}
                </section>
        )
    }
}