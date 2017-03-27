/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PureComponent, PropTypes} from 'react'
import "@material/list/dist/mdc.list.css";
import "@material/list/mdc-list.scss";
import classnames from 'classnames'

class List extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        twoLine: PropTypes.bool,
        dense: PropTypes.bool,
        avatar: PropTypes.bool,
    };

    render() {

        const {className, children, twoLine, dense, avatar, ...otherProps} = this.props

        return (
            <ul className={classnames("mdc-list", {
                "mdc-list--two-line": twoLine,
                "mdc-list--dense": dense,
                "mdc-list--avatar-list": avatar,

            }, className)} {...otherProps}>
                {children}
            </ul>
        )
    }
}

class ListItem extends PureComponent {

    static propTypes = {
        className: PropTypes.string,
        style: PropTypes.object,
        subText: PropTypes.object,
        iconName: PropTypes.string,
        avatar: PropTypes.object,
        actionIconName: PropTypes.string,
        dividerInset: PropTypes.bool,
        dividerOutset: PropTypes.bool,

    };

    render() {

        const {className, children, subText, iconName, avatar, actionIconName, dividerInset, dividerOutset, ...otherProps} = this.props

        return (
            <span>
            <li className={classnames("mdc-list-item", {}, className)} {...otherProps}>
                {iconName ?
                    <i className="mdc-list-item__start-detail material-icons" aria-hidden="true">{iconName}</i>
                    : avatar ?
                        avatar
                        : null
                }
                {subText ?
                    <span className={classnames("mdc-list-item__text", className)}>
                        <span className="mdc-list-item__text__primary">{children}</span>
                        <span className="mdc-list-item__text__secondary">{subText}</span>
                        {actionIconName ?
                            <i className="mdc-list-item__end-detail material-icons">
                                {actionIconName}
                            </i> : null
                        }
                    </span>
                    :

                    <span className={classnames("mdc-list-item__text", className)}>
                        {children}
                    </span>
                }
                {actionIconName ?
                    <a className="mdc-list-item__end-detail material-icons">
                        {actionIconName}
                    </a> : null
                }
            </li>
                {dividerOutset ? <li role="separator" className="mdc-list-divider"></li> : dividerInset ?  <li role="separator" className="mdc-list-divider mdc-list-divider--inset"></li> : null }
                </span>
        )
    }
}


export {List, ListItem}