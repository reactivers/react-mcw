/**
 * Created by Utku on 24/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/card/dist/mdc.card.css';
import classNames from 'classnames';
export default class CardActions extends React.PureComponent {
    static propTypes={
        className : PropTypes.string,
        style : PropTypes.object,
    };
    render() {
        const {className, style,...rest} = this.props;
        const classes = classNames("mdc-card__actions", className)
        return (
            <section className={classes} style={style} {...rest}>
                {this.props.children}
            </section>
        )
    }
}