/**
 * Created by Utku on 24/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/card/dist/mdc.card.css';
import classNames from 'classnames';
export default class CardHeader extends React.PureComponent{
    static propTypes={
        className : PropTypes.string,
        title : PropTypes.string,
        subtitle : PropTypes.string,
    };
    render(){
        const {className, ...rest} = this.props;
        const classes = classNames("mdc-card__actions", className)
        return(
                <section className={classes} {...rest}>
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