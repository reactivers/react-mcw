/**
 * Created by muratguney on 27/03/2017.
 */
import React, {PropTypes} from 'react';
import Fab from '../FAB/index';
import IconButton from '../IconButton';
import '../index.scss'
import TextField from '../TextField/index';

const defaultStyle = {
    menuOff: {
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    fabsOff: {
        position: "fixed",
        right: -210,
        bottom: 20,
        opacity: 0,
        zIndex: 65,
        transition: "0.4s",
    },
    menu: {
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
        transform: "rotate(-450deg)"
    },
};
const style = [
    {
        position: "fixed",
        right: 20,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 86,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 152,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 218,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 285,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 352,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },
    {
        position: "fixed",
        right: 417,
        bottom: 20,
        zIndex: 65,
        transition: "0.4s",
    },

];

class FabMenu extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            open: false,
            new: false,
            title: null,
            values: [],
            val: '',
            ara: '',
            delete: false,
            search: '',
            edit: false,
            menuSwitcher: false,
            type: '',
        };
        this.rerender = this.rerender.bind(this);
    }

    searchBttn() {

        this.setState({ara: !this.state.ara})

    }

    componentWillMount() {
        this.lastFabIndex()
    }

    lastFabIndex() {
        let maxIndex = 0;
        Object.keys(this.props).map(key => typeof this.props[key] === "number" && this.props[key] > maxIndex ? maxIndex = this.props[key] : maxIndex);
        return maxIndex
    }

    searchField(e) {
        const val = e.target.value;
        this.setState({search: val}, () => this.props.onSearch && this.props.onSearch(val))
    }

    rerender() {
        this.setState({_ix: Math.random()});
    }

    render() {
        return (

            <div>
                <Fab icon="menu" style={this.state.menuSwitcher ? defaultStyle.menu : defaultStyle.menuOff}
                     buttonColor={this.props.switcherColor}
                     onClick={() => this.setState({menuSwitcher: !this.state.menuSwitcher, ara: false})}
                     className="rmd-menu-button"/>
                {this.props.showAdd > -1 &&
                <Fab icon="add" className="rmd-add-button"
                     style={this.state.menuSwitcher ? (!this.state.ara ? style[this.props.showAdd] : (this.props.showAdd > this.props.showSearch ? {
                         ...style[this.props.showAdd],
                         right: style[this.props.showAdd].right - 65
                     } : style[this.props.showAdd] )) : defaultStyle.fabsOff} onClick={this.props.onAdd}/>}
                {this.props.showEdit > -1 &&
                <Fab icon="mode_edit" className="rmd-edit-button"
                     style={this.state.menuSwitcher ? (!this.state.ara ? style[this.props.showEdit] : (this.props.showEdit > this.props.showSearch ? {
                         ...style[this.props.showEdit],
                         right: style[this.props.showEdit].right - 65
                     } : style[this.props.showEdit]) ) : defaultStyle.fabsOff} onClick={this.props.onEdit}/>}
                {this.props.showDelete > -1 &&
                <Fab icon={this.props.delete ? "close" : "delete_forever"} className="rmd-delete-button"
                     style={this.state.menuSwitcher ? (!this.state.ara ? style[this.props.showDelete] : (this.props.showDelete > this.props.showSearch ? {
                         ...style[this.props.showDelete],
                         right: style[this.props.showDelete].right - 65
                     } : style[this.props.showDelete])) : defaultStyle.fabsOff} onClick={this.props.onDelete}/>}
                {this.props.showPeopleAdd > -1 &&
                <Fab icon="person_add" className="rmd-person-add"
                     style={this.state.menuSwitcher ? (!this.state.ara ? style[this.props.showPeopleAdd] : (this.props.showPeopleAdd > this.props.showSearch ? {
                         ...style[this.props.showPeopleAdd],
                         right: style[this.props.showPeopleAdd].right - 65
                     } : style[this.props.showPeopleAdd]) ) : defaultStyle.fabsOff} onClick={this.props.onPeopleAdd}/>}
                {this.props.showCopy > -1 &&
                <Fab icon="content_copy" className="rmd-copy-button"
                     style={this.state.menuSwitcher ? (!this.state.ara ? style[this.props.showCopy] : (this.props.showCopy > this.props.showSearch ? {
                         ...style[this.props.showCopy],
                         right: style[this.props.showCopy].right - 65
                     } : style[this.props.showCopy]) ) : defaultStyle.fabsOff} onClick={this.props.onCopy}/>}
                {this.props.showSearch > -1 &&
                <span>
                        <div style={this.state.ara ? {
                            ...style[this.props.showSearch],
                            backgroundColor: 'gray',
                            width: 280,
                            opacity: 0.5,
                            right: 10,
                            bottom: 80,
                            position: "fixed",
                            height: 70,
                            transition: "0.4s"
                        } : {...style[this.props.showSearch], opacity: 0, width: 1, right: -320} }>

                        </div>
                            <Fab onClick={this.searchBttn.bind(this)}
                                 style={this.state.menuSwitcher ? (this.state.ara ? ({
                                     ...style[this.props.showSearch],
                                     right: 295,
                                     bottom: 80
                                 }) : style[this.props.showSearch]) : defaultStyle.fabsOff}
                                 className="rmd-search-button"
                                 icon="search"
                            />

                            <TextField label={"Aramak İstediğiniz Kelimeyi Yazın"}
                                       floatingLabel={true}
                                       placeholder={"Ara"}
                                       value={this.state.search}
                                       onChange={this.searchField.bind(this)}
                                       textfieldStyle={{width: "100%"}}
                                       style={this.state.ara ? {
                                           ...style[this.props.showSearch],
                                           opacity: 1,
                                           width: 230,
                                           right: 50,
                                           color: "white",
                                           zIndex: 67,
                                           bottom: 80
                                       } : {...style[this.props.showSearch], opacity: 0, width: 1, right: -320} }
                            />

                                <IconButton
                                    onClick={this.state.search ? () => this.setState({search: ''}, () => this.props.onSearch && this.props.onSearch('')) : null}
                                    style={(this.state.search && this.state.ara) ? {
                                        ...style[this.props.showSearch],
                                        right: 10,
                                        color: 'whitesmoke',
                                        cursor: "pointer",
                                        bottom: style[this.props.showSearch].bottom + 80,
                                        zIndex: 68
                                    } : {
                                        ...style[this.props.showSearch],
                                        right: -60,
                                        bottom: style[this.props.showSearch].bottom + 80
                                    }} iconName="clear"/>

                    </span>
                }
                {this.props.children &&
                <div style={!this.state.menuSwitcher ? defaultStyle.fabsOff : {...style[this.props.customStyle]}}>
                    {React.Children.map(this.props.children, (child, index) => {
                        return (
                            React.cloneElement(child, {
                                style: this.state.menuSwitcher ? (!this.state.ara ? {
                                    ...style[this.lastFabIndex()],
                                    right: style[this.lastFabIndex()].right + (67 * (index + 1))
                                } : (this.lastFabIndex() + index + 1 > this.props.showSearch ? {
                                    ...style[this.lastFabIndex()],
                                    right: style[this.lastFabIndex()].right + (67 * (index))
                                } : style[index]) ) : defaultStyle.fabsOff
                            })
                        )
                    })}
                </div>
                }

            </div>


        )
    }

    static  displayName = "FabMenu";
    static  propTypes = {
        showSearch: PropTypes.number,
        showAdd: PropTypes.number,
        showEdit: PropTypes.number,
        showCopy: PropTypes.number,
        showDelete: PropTypes.number,
        showPeopleAdd: PropTypes.number,
        onAdd: PropTypes.func,
        onEdit: PropTypes.func,
        onCopy: PropTypes.func,
        onDelete: PropTypes.func,
        onPeopleAdd: PropTypes.func,
        onSearch: PropTypes.func,
        switcherColor: PropTypes.string,
    };
}

export default FabMenu