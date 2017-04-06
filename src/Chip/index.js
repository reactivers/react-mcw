/**
 * Created by muratguney on 01/04/2017.
 */
import React,{PropTypes} from 'react';
import IconButton from '../IconButton';
import '../index.scss'


export default class Chip extends React.Component {

    static propTypes = {
      avatar:PropTypes.any,
      onCancel:PropTypes.func,
      style:PropTypes.object,
      avatarStyle:PropTypes.object,
      cancelButtonStyle:PropTypes.object,
    };


    render() {
        const {avatar,onCancel,style,avatarStyle,cancelButtonStyle,children,...otherProps} = this.props;
        return (
            <div style={style} className="rmd-chip" {...otherProps}>
                {avatar && <div style={avatarStyle} className="rmd-chip-contact">{avatar}</div>}
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