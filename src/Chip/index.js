/**
 * Created by muratguney on 01/04/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../IconButton';
import '../index.scss'


export default class Chip extends React.Component {

    static propTypes = {
        avatar: PropTypes.any,
        onCancel: PropTypes.func,
        style: PropTypes.object,
        avatarStyle: PropTypes.object,
        cancelButtonStyle: PropTypes.object,
        avatarColor : PropTypes.string,
        chipColor : PropTypes.string,
    };


    render() {
        const {avatar, onCancel, style, avatarStyle, avatarColor, cancelButtonStyle, children, chipColor, ...otherProps} = this.props;
        let chipStyle = style;
        let avStyle = avatarStyle;
        if (chipColor) {
            chipStyle = {backgroundColor: chipColor, ...chipStyle}
        }
        if (avatarColor) {
            avStyle = {backgroundColor: avatarColor, ...avStyle}
        }

        return (
            <div style={chipStyle} className="rmd-chip" {...otherProps}>
                {avatar && <div style={avStyle} className="rmd-chip-contact">{avatar}</div>}
                <span className="rmd-chip-text">{children}</span>

                {onCancel &&
                <IconButton iconName="cancel"
                            mini
                            onClick={onCancel}
                            iconColor="gray"
                            style={cancelButtonStyle}
                            iconClassName="rmd-chip-action"/>
                }
            </div>
        )
    }
}