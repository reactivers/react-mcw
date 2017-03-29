/**
 * Created by muratguney on 28/03/2017.
 */
import React, {PureComponent, PropTypes} from 'react';
import Button from '../Button'
import generateId from '../utils/generateId';
import './Tab.css';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.defaultSelectedIndex || 0, id: ''};
    }

    componentWillMount() {
        this.content = this.props.children[this.state.selected] ? this.props.children[this.state.selected].props.children : this.props.children.props.children;
    }

    componentDidMount() {
        this.position = document.getElementById(this.id + '').getBoundingClientRect();
        this.setState({a:2})
    }

    render() {
            if(document.getElementById(this.state.id + '')) {
                this.position = document.getElementById(this.state.id + '').getBoundingClientRect();
            }
        const {defaultSelectedIndex, tabContentStyle, fullWidth, style, indicatorColor,selectedBackgroundColor, selectedLabelColor, content, changeTab, index, selectedTab, unSelectedBackgroundColor, unSelectedLabelColor, label, children, ...otherProps} = this.props;
        return (
            <div {...otherProps} style={{width:"100%",...style}}>
                <div className="rmd-centered-item">
                    {React.Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            selectedTab: this.state.selected,
                            getId: (e,v) => {this.id = e; this.position = v},
                            changeTab: (e, content, id) => {
                                this.setState({selected: e, id}, () => this.props.onChange && this.props.onChange(e));
                                this.content = content
                            },
                            index: index,
                            defaultSelectedIndex,
                            tabContentStyle,
                            selectedBackgroundColor,
                            selectedLabelColor,
                            unSelectedBackgroundColor,
                            unSelectedLabelColor,
                            fullWidth
                        })
                    })}
                   <Indicator position={this.position} selected={this.state.selected} {...this.props}/>

                </div>

                <div style={{margin: 8, padding: 8, ...tabContentStyle}} >{this.content}</div>
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
        fullWidth: PropTypes.bool,
    };
}

class Tab extends PureComponent {

    static propTypes = {
        label: PropTypes.string,
        style: PropTypes.object,
    };

    componentWillMount() {
        this.id = generateId();
        window.id = this.id;
    }

    componentDidMount() {
        this.position = document.getElementById(this.id + '').getBoundingClientRect;
        this.props.selectedTab === this.props.index && this.props.getId(this.id,this.position);
    }

    isSelected() {
        return this.props.selectedTab === this.props.index
    }

    render() {
        this.props.selectedTab === this.props.index && this.props.getId(this.id);
        const {style, selectedBackgroundColor, fullWidth, selectedLabelColor, content, changeTab, index, selectedTab, unSelectedBackgroundColor, unSelectedLabelColor, label, children, ...otherProps} = this.props;
        return (
            <Button
                id={this.id}
                style={{width: fullWidth ? "100%" : "88px",...style}}
                textColor={this.isSelected() ? (selectedLabelColor || "black") : (unSelectedLabelColor || "white")}
                buttonColor={this.isSelected() ? (selectedBackgroundColor || "") : (unSelectedBackgroundColor || "") }
                onClick={(e) => changeTab(index, children, this.id)}
                accent={this.isSelected()}
                primary={!selectedBackgroundColor}
                raised>
                {label}
            </Button>
        )
    }
}


class Indicator extends React.Component{

    render(){
        return(
            <div style={{
                position: "absolute",
                margin:0,
                padding:0,
                backgroundColor: this.props.indicatorColor || "white",
                transition: "0.4s",
                top: this.props.position ? this.props.position.top + this.props.position.height -2 : 35,
                height: 3,
                zIndex: 99,
                left: this.props.position ? this.props.position.left: 0,
                width: this.props.position ? 88 : 1
            }}/>
        )
    }
}


export {Tabs, Tab}