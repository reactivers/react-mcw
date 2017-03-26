/**
 * Created by Utku on 25/03/2017.
 */
import React, {PropTypes} from 'react';
import '@material/fab/dist/mdc.fab.css';
import classNames from 'classnames';

export default class FAB extends React.PureComponent {
    static propTypes = {
        buttonColor: PropTypes.string,
        buttonSize: PropTypes.number,
        mini: PropTypes.bool,
        icon: PropTypes.object
    };

    render() {
        const {style, className, buttonColor, buttonSize, mini, icon, ...rest}=this.props;
        let buttonStyle = Object.assign({}, style, {
            backgroundColor: buttonColor,
            width: buttonSize,
            height: buttonSize
        });
        const classes = classNames("mdc-fab", "material-icons", {
            "mdc-fab--mini": mini
        }, className)
        return (
            <button className={classes} style={buttonStyle} {...rest}>
                {buttonSize ? React.cloneElement(icon, { iconSize : (buttonSize*44/100)}) : icon }
            </button>
        )
    }
}