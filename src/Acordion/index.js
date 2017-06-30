/**
 * Created by muratguney on 16/06/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'
import {List, ListItem} from '../List'
import WaveEffect from '../WaveEffect'
import generateId from '../utils/generateId'

export default class Acordion extends React.Component {
    state = {height: 0, index: -1};

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
        listItemStyle: PropTypes.object
    };

    componentWillMount() {
        this.position = "absolute";
        this.closeChild = {};
        this.isOpened = true;
        this.elementHeights = [];
        this.ids = [];
        this.firstTime = true;
    }


    open(item, depth, index, otherProps) {

        if (this.props.open) {
            if (typeof this.props.open == "function") {
                if (this.props.open(item, depth, index, otherProps, [...this.props.parent, item]) && this.isOpened) {
                    this.isOpened = false;
                    this.openItem(item, index, this.props.childField);
                }
                return this.props.open(item, depth, index, otherProps, [...this.props.parent, item])
            } else {
                if (!!this.props.open && this.isOpened) {
                    this.isOpened = false;
                    this.openItem(item, index, this.props.childField);
                }
                return this.props.open
            }
        } else {
            return false
        }
    }


    selectItem(item, index) {

        const childField = this.props.childField;
        const oldState = this.state.index;

        if (this.state.index == index) {
            this.closeAllChild(index);
            this.closeItem(item, index, childField);
            this.sendToOnClick(item, this.props.depth, index, this.props.otherProps, this.props.parent);
        } else if (this.state.index != index && this.state.index == -1) {
            this.setState({index},
                () => this.props.getParentHeight && (item[childField] || this.props.child || this.props.children) && this.props.getParentHeight(this.elementHeights[index]));
            this.sendToOnClick(item, this.props.depth, index, this.props.otherProps, this.props.parent);
        } else if (this.state.index != index && this.state.index != -1) {
            this.closeAllChild(oldState);
            this.setState({index},
                () => {
                    this.props.getParentHeight && (this.props.child || item[childField] && this.props.data[oldState][childField]) && this.props.getParentHeight(this.elementHeights[index] - this.elementHeights[oldState])
                });
            this.sendToOnClick(item, this.props.depth, index, this.props.otherProps, this.props.parent);
        }

        setTimeout(() => {
            if (this.position == "absolute") {
                this.position = "initial"
            } else {
                this.position = "absolute"
            }
        }, 400);

        let height = document.getElementById(this.ids[index]);

        if (this.props.child)
            setTimeout(() => {
                this.elementHeights[index] = height.offsetHeight;
                this.setState({randx: Math.random()})
            }, 300);


    }

    sendToOnClick(item, depth, index, otherProps, parent) {
        this.props.onClick && this.props.onClick(item, depth, index, otherProps, [...parent, item])
    }

    openItem(item, index, childField) {
        this.setState({index}, () =>
        this.props.getParentHeight && (item[childField] || this.props.child || this.props.children) && this.props.getParentHeight(this.elementHeights[index]))
    }

    closeAllChild(index) {
        if (this.closeChild[index])
            for (let i = 0; i < this.closeChild[index].length; i++) {
                this.closeChild[index][i]();
            }
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

    closeItem(item, index, childField) {
        this.setState({index: -1},
            () => this.props.getParentHeight && (item[childField] || this.props.child || this.props.children) && this.props.getParentHeight(-1 * this.elementHeights[index]))
    }

    componentDidMount() {
        this.isOpened = false;
        let {data, childField, child, children} = this.props;
        if (data || children) {
            for (let i = 0; i < (data || children).length; i++) {
                let height = document.getElementById(this.ids[i]);
                if (height && (data ? data[i][childField] : children ? children[i] : child)) {
                    this.elementHeights.push(height.offsetHeight);
                } else {
                    this.elementHeights.push(0);
                }
            }
        } else if (child) {
            let height = document.getElementById(this.ids[0]);
            this.elementHeights[0] = height.offsetHeight;
        }
        this.firstTime = false;
    };


    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps.data) {
            for (let i = 0; i < nextProps.data.length; i++)
                if (nextProps.data[i] != this.props.data[i]) {
                    let height = document.getElementById(this.ids[i]);
                    if (height && nextProps.data[i][nextProps.childField])
                        this.elementHeights[i] = height.offsetHeight;
                }
        } else if (nextProps.child) {
            let height = document.getElementById(this.ids[0]);
            this.elementHeights[0] = height.offsetHeight;
        }
    }

    render() {
        let {label, data, open, dscLabel, dscField, index, child, children, closeChild, parent, dispatch, getParentHeight, id, getHeight, depth, otherProps, waveEffect, rightAvatar, childField, light, leftAvatar, listItemStyle, borderBottom, selectedBackgroundColor, ...rest} = this.props;

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

        let close = [];
        return (
            <List {...rest} id={id}>
                {data && data.map((item, index) => {
                        if ((item[childField] || this.props.child || this.props.children) && this.firstTime)
                            this.ids.push(generateId());
                        else if (this.firstTime)
                            this.ids.push(0);

                        if (this.state.index == -1 && this.isOpened)
                            this.open(item, depth, index, otherProps);
                        close = [...close, () => {
                            this.state.index == index && this.closeItem(item, index, childField);
                            this.closeAllChild(index)
                        }];
                        this.props.closeChild(close);
                        return (
                            <div key={index}>
                                {waveEffect ?
                                    <WaveEffect light={light}>
                                        <ListItem
                                            avatar={!!leftAvatar && this.leftAvatar(leftAvatar, item, index, otherProps) || ""}
                                            action={!!rightAvatar && this.rightAvatar(rightAvatar, item, index, otherProps)}
                                            style={{
                                                backgroundColor: (this.state.index === index) && "#eee" || selectedBackgroundColor, ...listItemStyle,
                                                borderBottom: borderBottom && "1px solid #bbb"
                                            }}
                                            className={this.props.child || this.props.onClick ? "iota-expandable-list" : null}
                                            onClick={(e) => (item[childField] || this.props.child || this.props.children) ? this.selectItem(item, index) : this.sendToOnClick(item, depth, index, otherProps, parent)}>
                                            {dscLabel ? item[dscField] + dscLabel : item[dscField]}
                                        </ListItem>
                                    </WaveEffect>
                                    :
                                    <ListItem
                                        avatar={!!leftAvatar && this.leftAvatar(leftAvatar, item, index, otherProps) || ""}
                                        action={!!rightAvatar && this.rightAvatar(rightAvatar, item, index, otherProps)}
                                        style={{
                                            backgroundColor: (this.state.index === index) && "#eee" || selectedBackgroundColor, ...listItemStyle,
                                            borderBottom: borderBottom && "1px solid #bbb"
                                        }}
                                        className={this.props.child || this.props.onClick ? "iota-expandable-list" : null}
                                        onClick={(e) => (item[childField] || this.props.child || this.props.children) ? this.selectItem(item, index) : this.sendToOnClick(item, depth, index, otherProps, parent)}>
                                        {dscLabel ? item[dscField] + dscLabel : item[dscField]}
                                    </ListItem>
                                }
                                <div style={{
                                    height: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? ((item[childField] || this.props.child || this.props.children) ? this.elementHeights[index] : 0) + (this.state.height || 0) || (this.state.height) : 0,
                                    position: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? "initial" : (this.position || "absolute"),
                                    marginLeft: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? 0 : -400,
                                    opacity: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? 1 : 0,
                                    pointerEvents: (this.state.index === index) && (item[childField] || this.props.child || this.props.children) ? "auto" : "none",
                                    overflowY: "hidden",
                                    transition: "0.4s",
                                }}>
                                    {this.props.child ?
                                        <div id={this.ids[index]}>
                                            <this.props.child item={item}
                                                              key={index}
                                                              otherProps={otherProps}
                                                              index={index}/>
                                        </div>
                                        :
                                        this.props.children ?
                                            <div id={this.ids[index]}>
                                                {this.props.children}
                                            </div>
                                            : item[childField] ?
                                            <div>
                                                <Acordion {...this.props}
                                                          data={item[childField]}
                                                          parent={[...parent, item]}
                                                          childField={childField}
                                                          closeChild={(e) => this.closeChild[index] = e}
                                                          id={this.ids[index]}
                                                          key={index}
                                                          getParentHeight={height => this.setState({height: this.state.height + height}, () => {
                                                              this.props.getParentHeight && this.props.getParentHeight(height);
                                                          })}
                                                          otherProps={otherProps}
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
    closeChild: (e) => {
    },
    parent: [],
    depth: 0,
};