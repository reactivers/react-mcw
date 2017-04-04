/**
 * Created by Utku on 26/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/snackbar/dist/mdc.snackbar.css'
import '@material/button/dist/mdc.button.css'
import {MDCSnackbar,MDCSnackbarFoundation} from '@material/snackbar/dist/mdc.snackbar';
export default class Snackbar extends React.PureComponent{
    static propTypes={
        open : PropTypes.bool.isRequired,
        message : PropTypes.string.isRequired,
        multiline : PropTypes.bool,
        buttonOnBottom : PropTypes.bool,
        buttonText : PropTypes.string,
        buttonColor : PropTypes.string,
        barColor : PropTypes.string,
        barTextColor : PropTypes.string,
        onClose : PropTypes.func,
        timeout : PropTypes.number,
    }
    componentDidMount(){
        this.snackbar = new MDCSnackbar(document.querySelector('.mdc-snackbar'));
        window.snackbar = this.snackbar
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.open){

            this.snackbar.show({
                message:nextProps.message,
                timeout:nextProps.timeout,
                actionHandler : ()  => {this.snackbar.foundation_.cleanup_(); this.props.onClose()},
                actionText : nextProps.buttonText,
                multiline:nextProps.multiline,
                actionOnBottom : nextProps.buttonOnBottom
            });
            this.snackbar.foundation_.setActionHidden_ = ()=>nextProps.onClose()
        }
    }
    render(){
        const{open,message,timeout,multiline,buttonOnBottom,buttonText,buttonColor,barColor,barTextColor,onClose} = this.props;

        return(
            <div className="mdc-snackbar"
                 style={{backgroundColor : barColor}}
                 aria-live="assertive"
                 aria-atomic="true"
                 aria-hidden="true">
                <div className="mdc-snackbar__text" style={{color : barTextColor}}></div>
                <div className="mdc-snackbar__action-wrapper">
                    <button type="button" style={{color : buttonColor}} className="mdc-button mdc-snackbar__action-button"></button>
                </div>
            </div>
        )
    }
}