/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PureComponent, PropTypes} from 'react'
import '@material/menu/dist/mdc.menu.css'
import '@material/list/dist/mdc.list.css'
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import classnames from 'classnames'


class MenuItem extends PureComponent {
    render() {
        return (
            <li className="mdc-list-item" role="menuitem" tabIndex="0" {...this.props}>
                {this.props.children}
            </li>
        )
    }
}

class Menu extends React.Component {

    componentDidMount() {

        this.menu = new MDCSimpleMenu(document.querySelector('.mdc-simple-menu'));
        this.menu.open = this.props.open;
        window.menu = this.menu;
        this.menu.listen("click", this.props.onClose);
        this.menu.foundation_.adapter_.setPosition({...this.props.target.props.style});
        this.menu.open = this.props.open;
        this.menu.foundation_.adapter_.registerInteractionHandler('click', this.props.onClose)
    }

    componentWillReceiveProps(nextProps) {
        this.menu.open = nextProps.open;
        this.menu.foundation_.adapter_.registerInteractionHandler('MDCSimpleMenu:click', nextProps.onClose)
    }

    render() {

        const {style, children, topToLeft, topToRight, onClose, bottomToRight, bottomToLeft, target, ...otherProps} = this.props;

        return (

            <div className="mdc-menu-anchor" style={style} {...otherProps}>
                {target}
                <div className={classnames("mdc-simple-menu", {
                    "mdc-simple-menu--open-from-top-left": topToLeft,
                    "mdc-simple-menu--open-from-top-right": topToRight,
                    "mdc-simple-menu--open-from-bottom-left": bottomToLeft,
                    "mdc-simple-menu--open-from-bottom-right": bottomToRight,
                })} tabIndex="-1">
                    <ul className="mdc-simple-menu__items mdc-list" role="menu" aria-hidden="true">
                        {children}
                    </ul>
                </div>
            </div>
        )
    }
}

export {Menu, MenuItem}