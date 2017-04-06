/**
 * Created by Utku on 27/03/2017.
 */
import React, {PropTypes} from 'react';
import '@material/menu/dist/mdc.menu.css'
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import classNames from 'classnames';
import '../../docs/index.scss';

export class MenuItem extends React.PureComponent {
    static propTypes = {
        hoverAtMenuItem: PropTypes.bool,
    }

    render() {
        const {className, hoverAtMenuItem, ...rest} = this.props;
        const menuItemClasses = classNames("mdc-list-item", {
            "rmd-menu-item": hoverAtMenuItem
        }, className);
        return (
            <li className={menuItemClasses} {...rest} role="menuitem" tabIndex="0">
                {this.props.children}
            </li>
        )
    }
}
export class Menu extends React.PureComponent {
    static propTypes = {
        target: PropTypes.node,
        onMenuClose: PropTypes.func,
        getSelectedIndex: PropTypes.func,

    }

    componentDidMount() {
        this.menu = new MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
        if (this.props.onMenuClose) {
            this.menu.foundation_.adapter_.notifyCancel = () => this.props.onMenuClose();
        }
        if (this.props.getSelectedIndex) {
            this.menu.foundation_.adapter_.notifySelected = (e) => this.props.getSelectedIndex(e);
        }
        window.menu = this.menu;
    }

    openMenu() {
        if (this.menu.open === true) {
            this.props.onMenuClose();
            this.menu.foundation_.close();
        } else {
            this.menu.show();
        }
    }

    render() {
        const {className, getSelectedIndex, onMenuClose, style, ...rest} = this.props;
        return (
            <div className={className} style={style}>
                {React.cloneElement(this.props.target, {
                    onClick: () => {
                        if (this.props.target.props && this.props.target.props.onClick) {
                            this.props.target.props.onClick();
                            this.openMenu();
                        } else {
                            this.openMenu();
                        }
                    }
                })}
                <div className="mdc-simple-menu" tabIndex="-1" {...rest}>
                    <ul className="mdc-simple-menu__items mdc-list deleleteMargin" role="menu" aria-hidden="true">
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }
}