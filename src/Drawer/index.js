/**
 * Created by muratguney on 26/03/2017.
 */

import React, {PureComponent, PropTypes} from 'react';
import "@material/drawer/dist/mdc.drawer.css";
import "@material/list/dist/mdc.list.css";
import "@material/drawer/permanent/mdc-permanent-drawer.scss";
import {MDCTemporaryDrawer} from  "@material/drawer/dist/mdc.drawer";


export default class Drawer extends PureComponent {

    componentDidMount() {
        if (this.props.open !== undefined)
            this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));

        if (this.props.hasButton && this.props.open !== undefined) {
            this.drawer.foundation_.adapter_.deregisterInteractionHandler('click', this.drawer.foundation_.componentClickHandler_);
            this.drawer.foundation_.adapter_.deregisterDrawerInteractionHandler('click', this.drawer.foundation_.drawerClickHandler_);
        }
        if (this.props.open !== undefined)
            document.querySelector(this.props.open !== undefined ? '.mdc-temporary-drawer' : 'mdc-permanent-drawer').addEventListener('click', (e) => e.target.tagName === "ASIDE" && this.props.onClose());

        window.drawer = this.drawer
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.open === true || nextProps.open === false) {
            this.drawer.open = nextProps.open;
            if(nextProps.open === true){
                document.getElementsByTagName('body')[0].style.overflow = "hidden"
            }else {
                document.getElementsByTagName('body')[0].style.overflow = "scroll"
            }
        }

    }

    render() {

        if (this.props.open !== undefined)
            return (
                <aside className="mdc-temporary-drawer mdc-typography" style={{zIndex: 99}}>
                    <nav className="mdc-temporary-drawer__drawer">
                        {this.props.header &&
                        <header className="mdc-temporary-drawer__header" style={this.props.headerStyle}>
                            <div className="mdc-temporary-drawer__header-content" style={this.props.headerContentStyle}>
                                {this.props.header}
                            </div>
                        </header>
                        }
                        <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
                            {this.props.children}
                        </nav>
                    </nav>
                </aside>

            );
        else
            return (

                <nav className="mdc-permanent-drawer mdc-typography">
                    <nav id="icon-with-text-demo" style={this.props.headerStyle} className="mdc-list">
                        {this.props.header}
                    </nav>
                    <main>
                        {this.props.children}
                    </main>
                </nav>
            )
    }

    static  displayName = "Drawer";
    static  propTypes = {
        header: PropTypes.any,
        onClose: PropTypes.func,
        open: PropTypes.bool,
        hasButton: PropTypes.bool,
        headerStyle: PropTypes.object,
        headerContentStyle: PropTypes.object,
    };

}