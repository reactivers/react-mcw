/**
 * Created by Utku on 25/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
    static propTypes = {
        iconName: PropTypes.string,
        iconSize: PropTypes.number,
        iconColor: PropTypes.string,
        style: PropTypes.object
    };

    render() {
        const {iconSize, iconColor, style, iconName,...rest} = this.props;
        let iconStyle = Object.assign({}, style, {color: iconColor, fontSize: iconSize});
        return (
            <i className="material-icons" style={iconStyle} {...rest}>
                {iconName}
            </i>
        )
    }
}