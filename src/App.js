import React, {Component} from 'react';
import './App.css';
import {AppBar, AppBarTitle} from './AppBar';
import {default as AutoComplete} from './AutoComplete';
import {default as Button} from './Button';
import {Card, CardActions, CardBody, CardHeader} from './Card';
import {default as Checkbox} from './Checkbox';
import {default as DatePicker} from './DatePicker';
import {Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle} from './Dialog';
import {default as Drawer} from './Drawer';
import {default as Elevation} from './Elevation';
import {default as FAB} from './FAB';
import {default as FabMenu} from './FabMenu';
import {Grid, GridContainer} from './Grid';
import {default as Icon} from './Icon';
import {default as IconButton} from './IconButton';
import {default as IconToggle} from './IconToggle';
import {List, ListItem} from './List';
import {Menu, MenuItem} from './Menu';
import {default as RadioButton} from './RadioButton';
import {Option, SelectField} from './SelectField';
import {default as Snackbar} from './Snackbar';
import {default as Switch} from './Switch';
import {Tabs, Tab} from './Tab';
import {default as TextField} from './TextField';

class App extends Component {
    state = {
        isDrawerOpen: false
    }

    render() {
        return (
            <div>
                <AppBar leftElements={<AppBarTitle title={"Deneme"}
                                                   icon={<IconButton iconName={"menu"} iconColor={"white"}
                                                                     onClick={ () => this.setState((prevState) => {
                                                                         return {isDrawerOpen: !prevState.isDrawerOpen}
                                                                     })}/>}/>}/>
                <Drawer onClose={  () => this.setState((prevState) => {
                    return {isDrawerOpen: !prevState.isDrawerOpen}
                })} headerStyle={{padding : '0'}} header={<div style={{backgroundColor : "#3f51b5",height : "100%",width : "100%",color : "white",display :'flex',justifyContent:'center',alignItems : "center",flexDirection : "column"}} > <h1>Reactivers Material Design</h1><h3>for ReactJS</h3> </div>} open={this.state.isDrawerOpen}>
                    <List>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        AutoComplete
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Button
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Card
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Checkbox
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        DatePicker
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Dialog
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Drawer
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Elevation
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        FAB
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        FabMenu
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Grid
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Icon
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        IconButton
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        IconToggle
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        List
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Menu
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        RadioButton
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        SelectField
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Snackbar
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Switch
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        Tab
                        </ListItem>
                        <ListItem clickable={true} style={{fontSize : "18px"}}>
                        TextField
                        </ListItem>
                    </List>
                </Drawer>
            </div>
        )
    }
}

export default App;