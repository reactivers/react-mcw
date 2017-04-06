/**
 * Created by muratguney on 28/03/2017.
 */
import React, { PropTypes} from 'react';
import Button from '../Button'
import WaveEffect from '../WaveEffect'
import generateId from '../utils/generateId';
import '../index.scss';

class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selected: props.defaultSelectedIndex || 0, id: ''};
    }

    componentWillMount() {
        this.content = this.props.children[this.state.selected] ? this.props.children[this.state.selected].props.children : this.props.children.props.children;
    }

    render() {
        const {defaultSelectedIndex, tabContentStyle, style, indicatorColor,selectedBackgroundColor, selectedLabelColor, content, changeTab, index, selectedTab, unSelectedBackgroundColor, unSelectedLabelColor, label, children, ...otherProps} = this.props;
        return (
            <div {...otherProps} style={{width:"100%",...style}}>
                <WaveEffect/>
                <div className="rmd-centered-item">
                    {React.Children.map(this.props.children, (child, index) => {
                        return React.cloneElement(child, {
                            selectedTab: this.state.selected,
                            getId: (e) => this.id = e,
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
                        })
                    })}

                </div>
                   <Indicator  selected={this.state.selected} {...this.props}/>

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

class Tab extends React.Component {

    static propTypes = {
        label: PropTypes.string,
        style: PropTypes.object,
    };

    componentWillMount() {
        this.id = generateId();
        window.id = this.id;
    }

    componentDidMount() {
        this.props.selectedTab === this.props.index && this.props.getId(this.id);
    }

    isSelected() {
        return this.props.selectedTab === this.props.index
    }

    render() {
        this.props.selectedTab === this.props.index && this.props.getId(this.id);
        const {style, selectedBackgroundColor, selectedLabelColor, changeTab, index, unSelectedBackgroundColor, unSelectedLabelColor, label, children} = this.props;
        return (
            <Button
                id={this.id}
                className="wave-effect"
                style={{width: "100%",minHeight:48,...style}}
                textColor={this.isSelected() ? (selectedLabelColor || "white") : (unSelectedLabelColor || "white")}
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
                position: "relative",
                margin:0,
                padding:0,
                backgroundColor: this.props.indicatorColor || "white",
                transition: "0.4s",
                height: 3,
                top:-2,
                zIndex: 10,
                left: this.props.selected*(100 / this.props.children.length)+"%",
                width: 100/this.props.children.length+"%"
            }}/>
        )
    }
}


export {Tabs, Tab}