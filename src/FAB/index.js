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
        style: PropTypes.object,
        mini: PropTypes.bool,
        icon: PropTypes.string,
        onClick: PropTypes.func,
    };

    render() {
        const {style, className, buttonColor, onClick, buttonSize, mini, icon, ...rest} = this.props;
        let buttonStyle = Object.assign({}, style, {
            backgroundColor: buttonColor,
            width: buttonSize,
            height: buttonSize
        });
        const classes = classNames("mdc-fab", "material-icons", {
            "mdc-fab--mini": mini
        }, className)
        return (
            <button className={classes} style={buttonStyle} onClick={onClick} {...rest}>
                {buttonSize ? React.cloneElement(icon, {iconSize: (buttonSize * 44 / 100)}) : icon }
            </button>
        )
    }
}