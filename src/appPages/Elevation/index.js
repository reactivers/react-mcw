/**
 * Created by muratguney on 27/03/2017.
 */
import React,{PureComponent,PropTypes} from 'react'
import '@material/elevation/dist/mdc.elevation.css'

export default class Elevation extends PureComponent {

    static propTypes = {
        zIndex:PropTypes.number
    };

    render(){
        const {zIndex,children,...otherProps} = this.props
        return(
            <div className={"mdc-elevation-transition mdc-elevation--z"+zIndex} {...otherProps}>
                {children}
            </div>
        )
    }
}