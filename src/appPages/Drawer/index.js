/**
 * Created by muratguney on 26/03/2017.
 */

import React, {PureComponent,PropTypes} from 'react';
import "@material/drawer/dist/mdc.drawer.css";
import "@material/drawer/permanent/mdc-permanent-drawer.scss";
import {MDCTemporaryDrawer} from  "@material/drawer/dist/mdc.drawer";


export default class Drawer extends PureComponent {

    componentDidMount() {

        if (document.querySelector('.mdc-temporary-drawer')) {
            this.drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-temporary-drawer'));
            document.querySelector('.mdc-temporary-drawer').addEventListener('click', this.props.onClose);
        }
        this.render();
    }

    render() {
        if (this.drawer) {
            if(this.props.open !== undefined) {
                this.drawer.open  = this.props.open;
            }else{
                this.drawer.open = true
            }
        }
        console.log(this.props.open);
        if (this.props.open !== undefined)
            return (
                <aside className="mdc-temporary-drawer mdc-typography">
                    <nav className="mdc-temporary-drawer__drawer">
                        <header className="mdc-temporary-drawer__header">
                            <div className="mdc-temporary-drawer__header-content">
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
                <div className="content">
                    <nav className="mdc-permanent-drawer mdc-typography">
                        <div className="mdc-permanent-drawer__toolbar-spacer">{this.props.header}</div>
                        <div className="mdc-permanent-drawer__content">
                            <nav id="icon-with-text-demo" className="mdc-list">
                                {this.props.children}
                            </nav>
                        </div>
                    </nav>
                </div>
            )
    }

    static  displayName = "Drawer";
    static  propTypes = {
        header: PropTypes.any,
        onClose: PropTypes.func,
        open: PropTypes.bool,
    };

}