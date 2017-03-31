/**
 * Created by muratguney on 01/04/2017.
 */
import React,{PropTypes} from 'react'
import IconButton from '../IconButton'

export default class Badge extends React.Component {

    static propTypes = {
        iconName: PropTypes.string,
        style: PropTypes.object,
        badgeStyle: PropTypes.object,
        buttonStyle: PropTypes.object,
        badgeColor: PropTypes.string,
        label: PropTypes.string,
        iconSize: PropTypes.number,
        onClick: PropTypes.func,
    };

    render() {
        const {iconName, style, buttonStyle, badgeStyle, onClick, badgeColor, iconSize,label,...otherProps} = this.props;

        return (
            <div style={{position: "relative", width: 80, height: 80, ...style}} {...otherProps}>
                <IconButton iconName={iconName || "notifications"} iconSize={iconSize} onClick={onClick} style={{bottom:12,position:"absolute",left:12,...buttonStyle}}/>
                <div className="rmd-centered-item" style={{
                    backgroundColor: badgeColor || "rgb(0, 188, 212)",
                    position: "absolute",
                    width:24,
                    height:24,
                    fontSize:12,
                    color:"white",
                    borderRadius:"50%",
                    top: 12,
                    right: 12, ...badgeStyle
                }}>{label}</div>
            </div>
        )
    }
}