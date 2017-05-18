/**
 * Created by Utku on 26/03/2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import classNames from 'classnames';

export class GridContainer extends React.PureComponent {
    render() {
        return (
            <div className="mdc-layout-grid" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
export class Grid extends React.PureComponent {
    render() {
        const {col,tablet,phone,...otherProps}=this.props;
        const gridClasses = classNames("mdc-layout-grid__cell", {
            ["mdc-layout-grid__cell--span-" + this.props.col]: this.props.col,
            ["mdc-layout-grid__cell--span-" + this.props.tablet + "-tablet"]: this.props.tablet,
            ["mdc-layout-grid__cell--span-" + this.props.phone + "-phone"]: this.props.phone
        })
        return (
            <div className={gridClasses} {...otherProps}>
                {this.props.children}
            </div>
        )
    }

    static propTypes = {
        col: PropTypes.number,
        tablet: PropTypes.number,
        phone: PropTypes.number,
    }
}