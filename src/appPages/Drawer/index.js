/**
 * Created by muratguney on 26/03/2017.
 */

import React, {PureComponent, PropTypes} from 'react';
import "@material/drawer/dist/mdc.drawer.css";
import "@material/drawer/permanent/mdc-permanent-drawer.scss";
import {MDCTemporaryDrawer} from  "@material/drawer/dist/mdc.drawer";


export default class Drawer extends PureComponent {

    componentDidMount() {

        this.drawer = new MDCTemporaryDrawer(document.querySelector(this.props.open !== undefined ? '.mdc-temporary-drawer' : 'mdc-permanent-drawer'));

        document.querySelector(this.props.open !== undefined ? '.mdc-temporary-drawer' : 'mdc-permanent-drawer').addEventListener('click',(e)=> e.target.tagName === "ASIDE" && this.props.onClose());

        window.drawer = this.drawer
    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== undefined) {
            this.drawer.open = nextProps.open;
        } else {
            this.drawer.open = true
        }

    }

    render() {

        if (this.props.open !== undefined)
            return (
                <aside className="mdc-temporary-drawer mdc-typography" style={{zIndex:99}}>
                    <nav className="mdc-temporary-drawer__drawer">
                        <header className="mdc-temporary-drawer__header">
                            <div className="mdc-temporary-drawer__header-content" style={this.props.headerStyle}>
                                {this.props.header}
                            </div>
                        </header>
                        <nav id="icon-with-text-demo" className="mdc-temporary-drawer__content mdc-list">
                            {this.props.children}
                        </nav>
                    </nav>
                </aside>

            );
        else
            return (

                <nav className="mdc-permanent-drawer mdc-typography">
                    <nav id="icon-with-text-demo" className="mdc-list">
                        <a className="mdc-list-item mdc-permanent-drawer--selected" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">inbox</i>Inbox
                        </a>
                        <a className="mdc-list-item" href="#">
                            <i className="material-icons mdc-list-item__start-detail" aria-hidden="true">star</i>Star
                        </a>
                    </nav>
                    <main>
                        Page content goes here.
                    </main>
                </nav>
            )
    }

    static  displayName = "Drawer";
    static  propTypes = {
        header: PropTypes.any,
        onClose: PropTypes.func,
        open: PropTypes.bool,
        headerStyle: PropTypes.object,
    };

}