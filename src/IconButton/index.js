/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PropTypes} from 'react';
import Button from '../Button'

export default class IconButton extends React.Component {
    static propTypes = {
        iconName: PropTypes.string,
        iconSize: PropTypes.number,
        iconColor: PropTypes.string,
        iconClassName: PropTypes.string,
        style: PropTypes.object,
        onClick: PropTypes.func,
    };

    render() {
        const {iconSize, iconColor, mini,onClick, style, iconClassName,iconName, ...rest} = this.props;
        let iconStyle = Object.assign({}, {color: iconColor, fontSize: iconSize});
        const iconButtonStyle = {
            borderRadius: mini ? 30 :36,
            width:  mini ? 30 :36,
            height:  mini ? 30 :36,
            minWidth: 24,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        return (
            <Button style={{...iconButtonStyle, ...style}} className={iconClassName} onClick={onClick}>
                <i className="material-icons" style={iconStyle} {...rest}>
                    {iconName}
                </i>
            </Button>
        )
    }
}