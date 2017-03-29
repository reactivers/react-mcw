import React, {Component} from 'react';
import '../App.css';
import {AppBar, AppBarTitle} from '../AppBar'
import IconButton from '../IconButton';
import Icon from '../Icon'
import Drawer from '../Drawer';
import {List, ListItem} from '../List';
import FabMenu from '../FabMenu'
import CardPage from './CardPage'
import CheckBoxPage from './CheckBoxPage'
import AppBarPage from './AppBarPage'
import ButtonPage from './ButtonPage'
import DatePickerPage from './DatePickerPage'
import TextFieldPage from './TextFieldPage'
import TabPage from './TabPage'
import SwitchPage from './SwitchPage'
import SnackbarPage from './SnackbarPage'
import SelectFieldPage from './SelectFieldPage'
import RadioButtonPage from './RadioButtonPage'
import MenuPage from './MenuPage'
import ListPage from './ListPage'
import IconTogglePage from './IconTogglePage'
import IconPage from './IconPage'
import IconButtonPage from './IconButtonPage'
import GridPage from './GridPage'
import FabPage from './FabPage'
import FabMenuPage from './FabMenuPage'
import ElevationPage from './ElevationPage'
import DrawerPage from './DrawerPage'
import DialogPage from './DialogPage'
import FabButton from '../FAB'
import {Card, CardHeader, CardActions, CardBody} from '../CardComponent';
import {Grid, GridContainer} from '../Grid/Grid';

const pages = [
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
];

const pageComponents = {
  card:<CardPage/>,
  dialog:<DialogPage/>,
  drawer:<DrawerPage/>,
  elevation:<ElevationPage/>,
  fabmenu:<FabMenuPage/>,
  iconbutton:<IconButtonPage/>,
  icontoggle:<IconTogglePage/>,
  list:<ListPage/>,
  menu:<MenuPage/>,
  radio:<RadioButtonPage/>,
  selectfield:<SelectFieldPage/>,
  snackbar:<SnackbarPage/>,
  tab:<TabPage/>,
  textfield:<TextFieldPage/>,
  button:<ButtonPage/>,
  checkbox:<CheckBoxPage/>,
  fab:<FabPage/>,
  switch:<SwitchPage/>,
  icon:<Icon/>,

};


class App extends Component {

    state = {open: false,selectedPage:'card'};

    render() {
        return (
            <div style={{
                fontFamily: "Roboto",
                height: "100%",
                background: "linear-gradient(to bottom right,white,#ccc)"
            }}>
                <AppBar
                    leftElements={<IconButton onClick={() => this.setState({open: !this.state.open})} iconName={"menu"}
                                              iconColor={"white"}/>}
                    middleElements={<AppBarTitle title={"React Material Design"} icon={<Icon iconName={"android"}/>}/>}
                />
                <Drawer hasButton headerStyle={{padding: 0, margin: 0}} open={this.state.open} header={<span style={{
                    backgroundColor: "lightblue",
                    color: "white",
                    height: "100%",
                    width: "100%",
                    fontSize: 24,
                    fontWeight: 200,
                    fontFamily: "Roboto",
                    margin: 0,
                    padding: 0
                }} className="rmd-centered-item">React Material Design</span>}
                        onClose={() => this.setState({open: false})}>
                    <div>
                        <List>
                            <ListItem className="rmd-hover-list-item" style={{fontSize: 18}}>Description</ListItem>
                            <ListItem className="rmd-hover-list-item" style={{fontSize: 18}}>Installation</ListItem>
                            <ListItem className="rmd-hover-list-item" style={{fontSize: 18}}>Components</ListItem>
                            <ListItem className="rmd-hover-list-item" style={{fontSize: 18}}>About</ListItem>
                        </List>
                    </div>
                </Drawer>
                <div style={{display: "flex", height: "100%"}}>
                    <Grid col={3} style={{margin: 0, padding: 0, height: "100%"}}>
                        <Card style={{height: "100%", backgroundColor: "white"}}>
                            <CardHeader title={"Components"}/>
                            <CardBody style={{height: "100%", padding: 0}}>
                                <List style={{width: "100%", padding: 0, textIndent: 20}}>
                                    {pages.map((page, index) =>
                                        <ListItem key={index} className="rmd-hover-list-item" style={{fontSize: 14}}
                                                  onClick={() => this.setState({selectedPage: page.value})}>{page.dsc}</ListItem>
                                    )}
                                </List>
                            </CardBody>
                        </Card>
                    </Grid>
                    <Grid col={10}>
                        {pageComponents[this.state.selectedPage]}
                    </Grid>
                </div>
                <FabMenu showSearch={1} showEdit={2} showPeopleAdd={3} showDelete={4} showCopy={5} showAdd={6}/>

            </div>
        )
    }
}

export default App;