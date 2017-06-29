import React from 'react';
import PropTypes from 'prop-types';
import Fab from '../FAB';
import IconButton from '../IconButton';
import TextBox from '../TextField';

/* FABNav için FabNav.css import et*/

import './FabMenu.css'

class FabMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            new: false,
            title: null,
            values: [],
            val: '',
            ara: '',
            delete: false,
            search: '',
            hide: 1,
            edit: false,
            menuSwitcher: props.initialOpen || false,
            type: '',
        };
    }

    searchBttn() {
        this.setState({ara: !this.state.ara})
    }

    searchField(e) {
        const val = e.target.value;
        this.setState({search: val}, () => this.props.onSearch && this.props.onSearch(val))
    }

    componentWillMount() {
        this.maxIndexes = [0, 0, 0, 0, 0, 0];
        this.buttonIndexes = Object.keys(this.props).map(key => typeof  this.props[key] === "number" && this.props[key]).filter(i => i).sort();
        this.buttonIndexes.forEach((i, ind) => this.maxIndexes[i - 1] += 1);
    }

    componentWillReceiveProps(nextProps, nextState) {
        if (nextProps != this.props) {
            this.maxIndexes = [0, 0, 0, 0, 0, 0];
            this.buttonIndexes = Object.keys(this.props).map(key => typeof  this.props[key] === "number" && this.props[key]).filter(i => i).sort();
            this.buttonIndexes.forEach((i, ind) => this.maxIndexes[i - 1] += 1);
        }

    }
    render() {
        this.maxIndexes = [0, 0, 0, 0, 0, 0];
        this.buttonIndexes = Object.keys(this.props).map(key => typeof  this.props[key] === "number" && this.props[key]).filter(i => i).sort();
        this.buttonIndexes.forEach((i, ind) => this.maxIndexes[i - 1] += 1);

        this.index = 0;
        const {showSearch,showAdd,showPeopleAdd,showCopy,showDelete,showEdit,switcherColor,onSearch,children,onDelete,onPeopleAdd,onEdit,onCopy,onAdd}  =this.props;

        const add = this.state.ara && showSearch <= showAdd ? showAdd - 1 : showAdd;
        const edit = this.state.ara && showSearch <= showEdit ? showEdit - 1 : showEdit;
        const remove = this.state.ara && showSearch <= showDelete ? showDelete - 1 : showDelete;
        const copy = this.state.ara && showSearch <= showCopy ? showCopy - 1 : showCopy;
        const peopleAdd = this.state.ara && showSearch <= showPeopleAdd ? showPeopleAdd - 1 : showPeopleAdd;
        const search = this.state.ara ? showSearch - 1 : showSearch;

        return (
            <div className="fab-menu" id="fab-menu">
                <Fab className={this.state.menuSwitcher ? "menu-fab-button" : "menu-fab-button-off"}
                     icon="menu"
                     style={{display:"flex",justifyContent:"center",alignItems:"center"}}
                     onClick={() => this.setState({menuSwitcher: !this.state.menuSwitcher, ara: false})}/>
                {showAdd > -1 &&
                <Fab
                    className={"add-fab-button " + (this.state.menuSwitcher ? "fab-button-" + add : "fab-button-off")}
                    onClick={onAdd} icon="add"/>}
                {showEdit > -1 &&
                <Fab
                    className={"edit-fab-button " + (this.state.menuSwitcher ? "fab-button-" + edit : "fab-button-off")}
                    onClick={onEdit} icon="mode_edit"/>}
                {showDelete > -1 &&
                <Fab
                    className={"delete-fab-button " + (this.state.menuSwitcher ? "fab-button-" + remove : "fab-button-off")}
                    onClick={onDelete} icon={this.props.delete ? "close" : "delete_forever"} /> }
                {showPeopleAdd > -1 &&
                <Fab
                    className={"person-add-fab-button " + (this.state.menuSwitcher ? "fab-button-" + peopleAdd : "fab-button-off")}
                    onClick={onPeopleAdd} icon="person_add"/>}
                {showCopy > -1 &&
                <Fab
                    className={"copy-fab-button " + (this.state.menuSwitcher ? "fab-button-" + copy : "fab-button-off")}
                    onClick={onCopy} icon="content_copy"/>}
                {showSearch > -1 &&
                <span>
                        <div
                            className={this.state.menuSwitcher ? this.state.ara ? "search-textfield-background-fab-button search-textfield-background-fab-button-" + search : "search-textfield-background-fab-off-button search-textfield-background-fab-off-button-" + showSearch : "search-textfield-background-fab-off-button-" + showSearch}>
                        </div>
                            <Fab onClick={this.searchBttn.bind(this)}
                                 className={"search-fab-button " + (this.state.menuSwitcher ? this.state.ara ? "search-on-fab-button search-on-fab-button-" + search : "fab-button-" + search : "fab-button-off")}
                                 style={{borderRadius: this.state.ara && "50%"}}
                                 icon="search"
                            />
                            <TextBox label="Aramak İstediğiniz Kelimeyi Yazın"
                                     onChange={this.searchField.bind(this)}
                                     value={this.state.search}
                                     textfieldStyle={{width:290}}
                                     className={this.state.menuSwitcher ? this.state.ara ? "search-fab-button-textfield search-fab-button-textfield-" + search : "search-fab-off-button-textfield search-fab-off-button-textfield-" + search : "search-fab-off-button-textfield search-fab-off-button-textfield-" + search}
                                     onKeyPress={e => e.key == 'Enter' && this.setState({ara: false})}
                            />

                            <IconButton iconName="clear"
                                        onClick={this.state.search ? () => this.setState({search: ''}, () => onSearch && onSearch('')) : null}
                                        className={this.state.menuSwitcher ? this.state.ara ? "search-fab-clear-button search-fab-clear-button-" + search : "search-fab-off-clear-button search-fab-off-clear-button-" + search : "search-fab-off-clear-button search-fab-off-clear-button-" + search}/>

                    </span>
                }
                {children &&
                this.maxIndexes.map((i1, index) => {
                    if (i1 == 0 && this.index >= 0) {
                        if(children.length) {
                            this.index++;
                        } else {
                            this.index = -1
                        }
                        return (
                            <div key={index}
                                 className={this.state.menuSwitcher ? "fab-button-" + ((this.state.ara && showSearch < index + 1 ) ? index + 1 - 1 : index + 1) : "fab-button-off"}>
                                {children.length ? children[this.index - 1] : children}
                            </div>
                        )
                    }
                })
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
        initialOpen: PropTypes.bool,
    };
}

export default FabMenu