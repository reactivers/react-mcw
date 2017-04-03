import React, {Component} from 'react';
import './App.css';
import {AppBar, AppBarTitle} from './AppBar';
import {default as Icon} from './Icon';
import {default as IconButton} from './IconButton';
import {List, ListItem} from './List';
import CardPage from './Documentation/CardPage';
import DialogPage from './Documentation/DialogPage';
import DrawerPage from './Documentation/DrawerPage';
import ElevationPage from './Documentation/ElevationPage';
import FabMenuPage from './Documentation/FabMenuPage';
import IconButtonPage from './Documentation/IconButtonPage';
import IconTogglePage from './Documentation/IconTogglePage';
import ListPage from './Documentation/ListPage';
import {Grid, GridContainer} from './Grid';
import MenuPage from './Documentation/MenuPage';
import RadioButtonPage from './Documentation/RadioButtonPage';
import SelectFieldPage from './Documentation/SelectFieldPage';
import SnackbarPage from './Documentation/SnackbarPage';
import TabPage from './Documentation/TabPage';
import TextFieldPage from './Documentation/TextFieldPage';
import ButtonPage from './Documentation/ButtonPage';
import CheckBoxPage from './Documentation/CheckBoxPage';
import AcordionPage from './Documentation/AcordionPage';
import FabPage from './Documentation/FabPage';
import ChipPage from './Documentation/ChipPage';
import BadgePage from './Documentation/BadgePage';
import SwitchPage from './Documentation/SwitchPage';
import IconPage from './Documentation/IconPage';
import TablePage from './Documentation/TablePage';
import WaveEffect from './WaveEffect'
import Drawer from './Drawer'
import {browserHistory} from 'react-router';
import {Route, Link} from 'react-router-dom'

const pages = [
    {dsc: 'Acordion', value: 'acordion'},
    {dsc: 'Card', value: 'card'},
    {dsc: 'Dialog', value: 'dialog'},
    {dsc: 'Drawer', value: 'drawer'},
    {dsc: 'Elevation', value: 'elevation'},
    {dsc: 'FabMenu', value: 'fabmenu'},
    {dsc: 'IconButton', value: 'iconbutton'},
    {dsc: 'IconToggle', value: 'icontoggle'},
    {dsc: 'List', value: 'list'},
    {dsc: 'Menu', value: 'menu'},
    {dsc: 'Radio Button', value: 'radio'},
    {dsc: 'SelectField', value: 'selectfield'},
    {dsc: 'Snackar', value: 'snackbar'},
    {dsc: 'Tab', value: 'tab'},
    {dsc: 'TextField', value: 'textfield'},
    {dsc: 'Button', value: 'button'},
    {dsc: 'CheckBox', value: 'checkbox'},
    {dsc: 'Fab', value: 'fab'},
    {dsc: 'Switch', value: 'switch'},
    {dsc: 'Icon', value: 'icon'},
    {dsc: 'Chip', value: 'chip'},
    {dsc: 'Badge', value: 'badge'},
    {dsc: 'Table', value: 'table'},
];
const pageComponents = {
    acordion: AcordionPage,
    card: CardPage,
    dialog: DialogPage,
    drawer: DrawerPage,
    elevation: ElevationPage,
    fabmenu: FabMenuPage,
    iconbutton: IconButtonPage,
    icontoggle: IconTogglePage,
    list: ListPage,
    menu: MenuPage,
    radio: RadioButtonPage,
    selectfield: SelectFieldPage,
    snackbar: SnackbarPage,
    tab: TabPage,
    textfield: TextFieldPage,
    button: ButtonPage,
    checkbox: CheckBoxPage,
    fab: FabPage,
    switch: SwitchPage,
    icon: IconPage,
    chip: ChipPage,
    badge: BadgePage,
    table: TablePage,

};


class App extends Component {
    state = {
        isDrawerOpen: false,
        open:false,
        hide:false,
    };

    componentWillMount(){
        if(window.outerWidth<=768){
            this.setState({hide:true})
        }else {
            this.setState({hide:false})
        }
        window.onresize = function (e) {
            let width = e.target.outerWidth;
            if(width<=768){
                this.setState({hide:true})
            }else {
                this.setState({hide:false})
            }
        }.bind(this)
    }
    
    render() {
        return (
            <div>

                <AppBar  leftElements={<AppBarTitle icon={this.state.hide ? <IconButton iconColor="white" iconName="menu" onClick={()=>this.setState({open:!this.state.open})}/> : <span></span>} title={"react-material-design"}/>}/>
                <GridContainer style={{height : "calc(100vh + 9px)",padding: 0, margin: 0}}>

                    <Drawer open={this.state.hide && this.state.open} onClose={()=>this.setState({open:false})}>
                        <List style={{paddingRight : 0,paddingLeft :0,textIndent : "10px"}}>
                            {pages.map((page, index) => {
                                return (
                                    <Link key={"li"+index} to={"/" + page.value} style={{textDecoration :"none",color : "black"}}>
                                        <ListItem style={{fontSize: "18px"}} onClick={ () => this.setState({a:Math.random()})}>
                                            {page.dsc}
                                        </ListItem>
                                    </Link>
                                )
                            })}
                        </List>
                    </Drawer>

                    <Grid col={2} phone={2} tablet={2}
                          style={{marginLeft:this.state.hide ? "-100%" : "0%",left:this.state.hide ? "-100%" : "0%",position:this.state.hide ? "absolute" : "relative",transition:"0.4s",padding: 0, margin: 0, boxShadow: "5px 5px 17px 0px rgba(0,0,0,0.39)"}}>
                        <List style={{paddingRight: 0, paddingLeft: 0, textIndent: "10px"}}>
                            {pages.map((page, index) => {
                                return (
                                    <Link key={"li" + index} to={"/" + page.value}
                                          style={{textDecoration: "none", color: "black"}}>
                                        <ListItem style={{fontSize: "18px"}} onClick={ () => null}>
                                            {page.dsc}
                                        </ListItem>
                                    </Link>
                                )
                            })}
                        </List>
                    </Grid>
                    <Grid style={{transition:"0.4s"}} col={!this.state.hide ? 10 : 12} phone={!this.state.hide ? 6 : 12} tablet={!this.state.hide ? 6 : 12}>
                        <div style={{padding: 8, margin: 8}}>
                            {pages.map((page, index) => {
                                return (
                                    <Route key={index} path={"/" + page.value} component={pageComponents[page.value]}/>
                                )
                            })}
                        </div>
                    </Grid>
                </GridContainer>
                <WaveEffect/>
            </div>
        )
    }
}

export default App;