/**
 * Created by muratguney on 01/04/2017.
 */
import React,{PropTypes} from 'react';
import IconButton from '../IconButton';
import WaveEffect from '../WaveEffect';
import classnames from 'classnames'
import './main.css'


export default class Chip extends React.Component {

    static propTypes = {
      avatar:PropTypes.any,
      onCancel:PropTypes.func,
      style:PropTypes.object,
      avatarStyle:PropTypes.object,
      cancelButtonStyle:PropTypes.object,
      waveEffect:PropTypes.boolean,
    };


    render() {
        const {avatar,onCancel,style,avatarStyle,cancelButtonStyle,children,waveEffect,...otherProps} = this.props;
        return (
            <div style={style} className={classnames("rmd-chip",{"wave-effect":waveEffect})} {...otherProps}>
                {avatar && <div style={avatarStyle} className={classnames("rmd-chip-contact",{"wave-effect":waveEffect})}>{avatar}</div>}
                <span className={classnames("rmd-chip-text",{"wave-effect":waveEffect})}>{children}</span>
                {onCancel &&
                <IconButton iconName="cancel"
                            mini
                            onClick={onCancel}
                            iconColor="gray"
                            style={cancelButtonStyle}
                            iconClassName={classnames("rmd-chip-action",{"wave-effect":waveEffect})}/>
                }
                <WaveEffect/>
            </div>
        )
    }
}