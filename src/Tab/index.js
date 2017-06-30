/**
 * Created by muratguney on 28/03/2017.
 */
import React from 'react'; import PropTypes from 'prop-types';
import Button from '../Button'
import WaveEffect from '../WaveEffect'
import generateId from '../utils/generateId';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.defaultSelectedIndex || 0, id: ''};
    }

    componentWillMount() {
        this.content = this.props.children[this.state.selected] ? this.props.children[this.state.selected].props.children : this.props.children.props.children;
    }

    changed = true;
    componentWillReceiveProps(nextProps){
        if(nextProps.defaultSelectedIndex != this.props.defaultSelectedIndex && this.changed){
            this.setState({selected: nextProps.defaultSelectedIndex});
            this.changed = false
        }
    }

    render() {
        const {defaultSelectedIndex, tabContentStyle, tabStyle, style, light,indicatorStyle, indicatorColor, selectedBackgroundColor, selectedLabelColor, content, changeTab, index, selectedTab, unSelectedBackgroundColor, unSelectedLabelColor, label, children, ...otherProps} = this.props;
        return (
            <div {...otherProps} style={{width: "100%", ...style}}>
                <div className="rmd-centered-item"
                     style={{display: "flex", padding: "8px 0 8px 0", margin: "8px 0 8px 0", ...tabStyle}}>
                    {React.Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            selectedTab: this.state.selected,
                            getId: (e) => this.id = e,
                            key:index,
                            changeTab: (e, content, id) => {
                                this.setState({selected: e, id}, () => this.props.onChange && this.props.onChange(e));
                                this.content = content
                            },
                            index: index,
                            light:light,
                            defaultSelectedIndex,
                            tabContentStyle,
                            selectedBackgroundColor,
                            selectedLabelColor,
                            unSelectedBackgroundColor,
                            unSelectedLabelColor,
                        })
                    })}

                </div>
                <Indicator selected={this.state.selected} {...this.props}/>

                <div style={{margin: 8, padding: 8, ...tabContentStyle}}>{this.content}</div>
            </div>
        )
    }

    static propTypes = {
        selectedLabelColor: PropTypes.string,
        unSelectedLabelColor: PropTypes.string,
        selectedBackgroundColor: PropTypes.string,
        unSelectedBackgroundColor: PropTypes.string,
        indicatorColor: PropTypes.string,
        defaultSelectedIndex: PropTypes.number,
        style: PropTypes.object,
        tabContentStyle: PropTypes.object,
        indicatorStyle: PropTypes.object,
        tabStyle: PropTypes.object,
        fullWidth: PropTypes.bool,
    };
}

class Tab extends React.Component {

    static propTypes = {
        label: PropTypes.any,
        style: PropTypes.object,
        onClick: PropTypes.func
    };

    componentWillMount() {
        this.id = generateId();
        window.id = this.id;
    }

    componentWillReceiveProps(nextProps){
        if(this.props.children !== nextProps.children && nextProps.selectedTab === this.props.index) {
            nextProps.changeTab && nextProps.changeTab(this.props.index, nextProps.children, this.id)
        }
    }

    componentDidMount() {
        this.props.selectedTab === this.props.index && this.props.getId && this.props.getId(this.id);
        this.props.selectedTab == this.props.index && this.props.changeTab && this.props.changeTab(this.props.index, this.props.children, this.id)
    }

    isSelected() {
        return this.props.selectedTab == this.props.index
    }

    render() {
        this.props.selectedTab === this.props.index && this.props.getId && this.props.getId(this.id);
        const {style, selectedBackgroundColor, onClick,selectedLabelColor, changeTab, index, unSelectedBackgroundColor, unSelectedLabelColor, label,light, children} = this.props;
        return (
            <WaveEffect light={light}>
                <Button
                    id={this.id}
                    style={{
                        width: "100%",
                        color: this.isSelected() ? (selectedLabelColor || "white") : (unSelectedLabelColor || "white"),
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        backgroundColor: this.isSelected() ? (selectedBackgroundColor || "") : (unSelectedBackgroundColor || ""),
                        minHeight: 48,
                        margin: 0,
                        ...style
                    }}
                    onClick={(e) =>{ onClick && onClick(e) ; changeTab && changeTab(index, children, this.id)} }
                    accent={this.isSelected()}
                    primary={!selectedBackgroundColor}
                    raised>
                    {label}
                </Button>
            </WaveEffect>
        )
    }
}


class Indicator extends React.Component {

    render() {
        return (
            <div style={{
                position: "relative",
                margin: 0,
                padding: 0,
                backgroundColor: this.props.indicatorColor || "white",
                transition: "0.4s",
                height: 3,
                top: -18,
                zIndex: 10,
                left: this.props.selected * (100 / this.props.children.length) + "%",
                width: 100 / this.props.children.length + "%",
                ...this.props.indicatorStyle
            }}/>
        )
    }
}


export {Tabs, Tab}