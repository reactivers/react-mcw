/**
 * Created by muratguney on 16/06/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from '../List'
import WaveEffect from '../WaveEffect'

export default class Acordion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {index: -1}
    }

    static propTypes = {
        data: PropTypes.array,
        label: PropTypes.any,
        dscLabel: PropTypes.any,
        dscField: PropTypes.string,
        open: PropTypes.any,
        child: PropTypes.any,
        waveEffect: PropTypes.any,
        borderBottom: PropTypes.bool,
        childField: PropTypes.string,
        light: PropTypes.any,
        onClick: PropTypes.func,
        leftAvatar: PropTypes.any,
        rightAvatar: PropTypes.any,
        listItemStyle: PropTypes.object,
        bodyStyle: PropTypes.object
    };

    componentWillMount() {
        this.isOpened = true
        this.openInitial()
    }

    openInitial() {
        let {data, open, parent, childField, otherProps, depth} = this.props
        data && data.forEach((item, index) => {
            if (open && this.isOpened) {
                if (typeof open == "function") {
                    if (open(item, depth, index, otherProps, [...parent, item])) {
                        this.isOpened = false;
                        return this.setState({index})
                    }
                } else {
                    if (!!open) {
                        this.isOpened = false;
                        return this.setState({index})
                    }
                }
            }
        });
        this.isOpened = false
    }


    selectItem(index, item) {

        const {depth, otherProps, parent} = this.props
        if (this.state.index == index) {
            this.setState({index: -1});
        } else {
            this.setState({index})
        }
        this.props.onClick && this.props.onClick(item, depth, index, otherProps, [...parent, item])
    }

    rightAvatar(rightAvatar, item, index, otherProps) {
        if (typeof rightAvatar == "function") {
            return rightAvatar(item, index, otherProps);
        } else {
            return rightAvatar;
        }
    }

    leftAvatar(leftAvatar, item, index, otherProps) {
        if (typeof leftAvatar == "function") {
            return leftAvatar(item, index, otherProps)
        } else {
            return leftAvatar
        }
    }

    componentDidMount() {
        this.openInitial()
        this.isOpened = false;
    };

    render() {
        let {label, data, open, dscLabel, dscField, bodyStyle, style, index, child, children, parent, dispatch, depth, otherProps, waveEffect, rightAvatar, childField, light, leftAvatar, listItemStyle, selectedBackgroundColor, ...rest} = this.props;
        if (!data) {
            if (label)
                data = [{dsc: label}];
            else
                data = [];
            dscField = "dsc"
        } else {
            if (!dscField) {
                dscField = "dsc";
            }
        }
        return (
            <List {...rest} style={{padding: 0, ...style}}>
                {data && data.map((item, index) => {
                        return (
                            <div style={{marginLeft: depth * 4, ...bodyStyle}} key={index}>
                                {waveEffect ?
                                    <WaveEffect light={light}>
                                        <ListItem
                                            avatar={!!leftAvatar && this.leftAvatar(leftAvatar, item, index, otherProps) || ""}
                                            style={{
                                                backgroundColor: (this.state.index === index) && "#eee" || selectedBackgroundColor, ...listItemStyle,
                                                borderBottom: "1px solid #bbb",
                                                padding: 6
                                            }}
                                            action={rightAvatar ? this.rightAvatar(rightAvatar, item, index, otherProps) : <span/>}
                                            className={this.props.child || this.props.onClick ? "iota-expandable-list" : null}
                                            onClick={(e) => this.selectItem(index, item)}>
                                                {dscLabel ? item[dscField] + dscLabel : item[dscField]}
                                        </ListItem>
                                    </WaveEffect>
                                    :
                                    <ListItem
                                        action={this.rightAvatar ? this.rightAvatar(rightAvatar, item, index, otherProps) : <span/>}
                                        avatar={leftAvatar && this.leftAvatar(leftAvatar, item, index, otherProps) || ""}
                                        style={{
                                            backgroundColor: (this.state.index === index) && "#eee" || selectedBackgroundColor, ...listItemStyle,
                                            borderBottom: "1px solid #bbb",
                                            padding: 6
                                        }}
                                        className={this.props.child || this.props.onClick ? "iota-expandable-list" : null}
                                        onClick={() => (item[childField] || this.props.child || this.props.children) ? this.selectItem(index, item) : this.sendToOnClick(item, depth, index, otherProps, parent)}>
                                            {item[dscField]}
                                    </ListItem>
                                }
                                <div className="armut" style={{
                                    maxHeight: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? "10000px" : 0,
                                    height: "100%",
                                    marginLeft: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? 0 : -400,
                                    opacity: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? 1 : 0,
                                    pointerEvents: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? "auto" : "none",
                                    overflowY: "hidden",
                                    transition: "1s",
                                }}>
                                    {this.props.child ?
                                        <div>
                                            <this.props.child item={item}
                                                              key={index}
                                                              otherProps={otherProps}
                                                              index={index}/>
                                        </div>
                                        :
                                        this.props.children ? this.props.children
                                            : item[childField] ?
                                            <div>
                                                <Acordion {...this.props}
                                                          data={item[childField]}
                                                          parent={[...parent, item]}
                                                          key={index}
                                                          depth={depth + 1}
                                                          index={index}
                                                />
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>

                        )
                    }
                )}
            </List>
        )
    }
}


Acordion.defaultProps = {
    parent: [],
    depth: 0,
};