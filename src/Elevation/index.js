/**
 * Created by muratguney on 27/03/2017.
 */
import React,{PureComponent} from 'react'
import PropTypes from 'prop-types';
import '@material/elevation/dist/mdc.elevation.css'

export default class Elevation extends PureComponent {

    static propTypes = {
        zIndex:PropTypes.number,
        className:PropTypes.number,
        style:PropTypes.number,
    };

    render(){
        const {zIndex,children,className,style,...otherProps} = this.props
        return(
            <div className={"mdc-elevation-transition mdc-elevation--z"+zIndex+" "+className} style={style} {...otherProps}>
                {children}
            </div>
        )
    }
}