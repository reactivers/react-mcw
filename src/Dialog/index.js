/**
 * Created by muratguney on 26/03/2017.
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import "@material/dialog/dist/mdc.dialog.css";
import generateId from '../utils/generateId';
import classnames from 'classnames'

class Dialog extends PureComponent {


    static propTypes = {
        className: PropTypes.string,
        open: PropTypes.bool,
        onClose: PropTypes.func,
        style: PropTypes.object,
    };

    componentWillReceiveProps(nextProps){
        if(nextProps.open){
            document.getElementsByTagName('body')[0].style.overflow = "hidden"
        }else {
            document.getElementsByTagName('body')[0].style.overflow = "scroll"
        }
    }
    render() {
        const id = generateId();
        const {open, onClose, children, className, ...otherProps} = this.props;

        return (
            <aside id={id}
                   className={classnames("mdc-dialog", {
                       "mdc-dialog--open": open
                   })}
            >
                <div className={classnames("mdc-dialog__surface", className)} {...otherProps}>
                    {children}
                </div>
                <div onClick={onClose} className="mdc-dialog__backdrop"></div>
            </aside>
        )
    }
}



class DialogHeader extends PureComponent {

    static propTypes = {
        classnames: PropTypes.string,
        children: PropTypes.node,
        style: PropTypes.object,
    };

    render() {

        const {className, children, ...otherProps} = this.props;
        return (
            <header className={classnames("mdc-dialog__header",className)} {...otherProps}>
                {children}
            </header>
        )
    }
}



class DialogTitle extends PureComponent {

    static propTypes = {
        classnames: PropTypes.string,
        children: PropTypes.node,
        style: PropTypes.object,
    };

    render() {
        const {className, children, ...otherProps} = this.props;
        return (
            <h2 className={classnames("mdc-dialog__header__title",className)} {...otherProps}>
                {children}
            </h2>
        )
    }
}



class DialogContent extends PureComponent {
    static propTypes = {
        classnames: PropTypes.string,
        children: PropTypes.node,
        style: PropTypes.object,
        scrollable: PropTypes.bool,
    };

    render() {
        const {className, children,scrollable , ...otherProps} = this.props;
        return (
            <section className={classnames("mdc-dialog__body",{"mdc-dialog__body--scrollable":scrollable},className)} {...otherProps}>
                {children}
            </section>
        )
    }
}



class DialogFooter extends PureComponent {
    static propTypes = {
        classnames: PropTypes.string,
        children: PropTypes.node,
        style: PropTypes.object,
    };

    render() {
        const {className, children, ...otherProps} = this.props;
        return (
            <footer className={classnames("mdc-dialog__footer", className)} {...otherProps}>
                {children}
            </footer>
        )
    }
}


export {Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter};