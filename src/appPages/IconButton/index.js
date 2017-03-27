/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PropTypes} from 'react';
import Button from '../Button'

export default class Icon extends React.Component {
    static propTypes = {
        iconName: PropTypes.string,
        iconSize: PropTypes.number,
        iconColor: PropTypes.string,
        buttonStyle: PropTypes.object
    };

    render() {
        const {iconSize, iconColor, style, iconName, buttonStyle, ...rest} = this.props;
        let iconStyle = Object.assign({}, style, {color: iconColor, fontSize: iconSize});
        const iconButtonStyle = {
            borderRadius: 36,
            width: 36,
            height: 36,
            minWidth: 24,
            padding: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        }
        return (

            <Button style={{...iconButtonStyle, ...buttonStyle}}>
                <i className="material-icons" style={iconStyle} {...rest}>
                    {iconName}
                </i>
            </Button>
        )
    }
}