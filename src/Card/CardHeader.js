/**
 * Created by Utku on 24/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/card/dist/mdc.card.css';
import classNames from 'classnames';
export default class CardHeader extends React.PureComponent{
    static propTypes={
        className : PropTypes.string,
        title : PropTypes.string,
        style : PropTypes.object,
        subtitle : PropTypes.string,
    };
    render(){
        const {className, style,...rest} = this.props;
        const classes = classNames("mdc-card__primary", className)
        return(
                <section className={classes} style={style} {...rest}>
                    {this.props.title ? <h1 className="mdc-card__title mdc-card__title--large">
                            {this.props.title}
                    </h1> : this.props.children}
                    {this.props.subtitle &&<h2 className="mdc-card__subtitle">
                            { this.props.subtitle }
                    </h2>}
                </section>
        )
    }
}