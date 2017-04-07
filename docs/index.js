import React from 'react';
import ReactDOM from 'react-dom';
import CardPage from './Documentation/CardPage';
import AutoCompletePage from './Documentation/AutoCompletePage';
import DialogPage from './Documentation/DialogPage';
import DrawerPage from './Documentation/DrawerPage';
import DatePickerPage from './Documentation/DatePickerPage';
import ElevationPage from './Documentation/ElevationPage';
import FabMenuPage from './Documentation/FabMenuPage';
import IconButtonPage from './Documentation/IconButtonPage';
import IconTogglePage from './Documentation/IconTogglePage';
import ListPage from './Documentation/ListPage';
import MenuPage from './Documentation/MenuPage';
import RadioButtonPage from './Documentation/RadioButtonPage';
import SelectFieldPage from './Documentation/SelectFieldPage';
import SnackbarPage from './Documentation/SnackbarPage';
import TabPage from './Documentation/TabPage';
import TextFieldPage from './Documentation/TextFieldPage';
import ButtonPage from './Documentation/ButtonPage';
import CheckBoxPage from './Documentation/CheckBoxPage';
import WaveEffectPage from './Documentation/WaveEffectPage';
import AcordionPage from './Documentation/AcordionPage';
import FabPage from './Documentation/FabPage';
import ChipPage from './Documentation/ChipPage';
import BadgePage from './Documentation/BadgePage';
import SwitchPage from './Documentation/SwitchPage';
import IconPage from './Documentation/IconPage';
import TablePage from './Documentation/TablePage';
import '../src/index.scss';

const pages = [
    {dsc: 'Acordion', value: 'acordion'},
    {dsc: 'AutoComplete', value: 'autocomplete'},
    {dsc: 'Button', value: 'button'},
    {dsc: 'Badge', value: 'badge'},
    {dsc: 'Card', value: 'card'},
    {dsc: 'CheckBox', value: 'checkbox'},
    {dsc: 'Chip', value: 'chip'},
    {dsc: 'DatePicker', value: 'datepicker'},
    {dsc: 'Dialog', value: 'dialog'},
    {dsc: 'Drawer', value: 'drawer'},
    {dsc: 'Elevation', value: 'elevation'},
    {dsc: 'Fab', value: 'fab'},
    {dsc: 'FabMenu', value: 'fabmenu'},
    {dsc: 'Icon', value: 'icon'},
    {dsc: 'IconButton', value: 'iconbutton'},
    {dsc: 'IconToggle', value: 'icontoggle'},
    {dsc: 'List', value: 'list'},
    {dsc: 'Menu', value: 'menu'},
    {dsc: 'Radio Button', value: 'radio'},
    {dsc: 'SelectField', value: 'selectfield'},
    {dsc: 'Snackar', value: 'snackbar'},
    {dsc: 'Switch', value: 'switch'},
    {dsc: 'Tab', value: 'tab'},
    {dsc: 'Table', value: 'table'},
    {dsc: 'TextField', value: 'textfield'},
    {dsc: 'Wave Effect', value: 'waveeffect'},
];
const pageComponents = {
    acordion: AcordionPage,
    autocomplete: AutoCompletePage,
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
    datepicker: DatePickerPage,
    waveeffect: WaveEffectPage,

};
import App from './App';
import {Router,browserHistory,Route} from 'react-router';

class Deneme extends React.Component{
    render(){
        return(
            <div>asd</div>
        )
    }
}

class Deneme2 extends React.Component{
    render(){
        return(
            <div>sayfa bulunamadık</div>
        )
    }
}
ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={App}>
            <Route path="/" component={Deneme}/>
            {pages.map((page, index) => {
                return (
                    <Route key={index} path={page.value}
                           component={pageComponents[page.value]}/>
                )
            })}
            <Route path='*' component={Deneme2} />
        </Route>
    </Router>,
    document.getElementById('root')
);
