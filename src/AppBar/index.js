/**
 * Created by Utku on 25/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/toolbar/dist/mdc.toolbar.css';
import classNames from 'classnames';

export class AppBarTitle extends React.PureComponent {
    static propTypes = {
        iconAlignment: PropTypes.string,
        icon : PropTypes.node,
        title : PropTypes.string
    }

    render() {
        const {className,icon, iconAlignment, title,...rest} = this.props
        const style = Object.assign({
            display: "flex",
            justifyContent: 'center',
            alignItems: 'center'
        }, this.props.style);
        return (
            <span style={style} {...rest} className={className}>
            {icon && (!iconAlignment || iconAlignment !== "right") && icon}
                <span className="mdc-toolbar__title">{title}</span>
                {icon && iconAlignment && iconAlignment.toLowerCase() === "right" && icon}
        </span>
        )
    }
}
export class AppBar extends React.PureComponent {
    static propTypes = {
        leftElements : PropTypes.node,
        rightElements : PropTypes.node,
        middleElements : PropTypes.node,
        barColor : PropTypes.string,
        fixed : PropTypes.bool
    }
    render() {
        const {className,fixed, style, barColor, leftElements, rightElements, middleElements,...otherProps} = this.props
        const classes = classNames("mdc-toolbar", {"mdc-toolbar--fixed": fixed},className);
        let barStyle = Object.assign({}, style, {backgroundColor: barColor});
        return (
            <header className={classes} style={barStyle} {...otherProps}>
                {leftElements &&
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    {leftElements}
                </section>}
                {middleElements &&
                <section className="mdc-toolbar__section">
                    {middleElements}
                </section>}
                {rightElements &&
                <section className="mdc-toolbar__section mdc-toolbar__section--align-end">
                    {rightElements}
                </section>}
            </header>
        )
    }
}