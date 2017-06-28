/**
 * Created by Utku on 27/03/2017.
 */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
moment.locale("tr");
import {Card} from '../Card';
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import TextField from '../TextField';
import {Menu} from '../Menu';
import IconButton from '../IconButton';
import Button from '../Button';
import {Dialog, DialogContent} from '../Dialog';

class DateMenu extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tempVal : "",
            displayVal : "",
        }
        this.recoverCloseFunction = this.closeFunction.bind(this);
    }

    componentDidMount() {
        this.dateMenu = new MDCSimpleMenu(document.querySelector(".mdc-simple-menu"));
        if (this.props.onMenuClose) {
            this.dateMenu.foundation_.adapter_.notifyCancel = () => this.props.onMenuClose();
        }
        if (this.props.getSelectedIndex) {
            this.dateMenu.foundation_.adapter_.notifySelected = (e) => this.props.getSelectedIndex(e);
        }
        this.tempClose = this.dateMenu.foundation_.close;
    }
    componentWillReceiveProps(nextProps){
        this.setState({displayVal : moment(nextProps.date).format('MM/DD/YYYY'),tempVal : moment(nextProps.date).format('MM/DD/YYYY')}, () => this.props.onChange(this.state.displayVal));
    }
    closeFunction(event) {
        if (event.target !== this.refs.dateMenuDiv && !this.refs.dateMenuDiv.contains(event.target)) {
            this.dateMenu.foundation_.close = this.tempClose;
            this.dateMenu.foundation_.close();
            document.body.removeEventListener('click', this.recoverCloseFunction, true);
        } else {
            this.dateMenu.foundation_.close = () => null;
        }
    }

    openMenu(event) {
        if (this.dateMenu.open === true) {
            if (event.target.parentElement.id == this.refs.dateTextRef.textFieldId) {
                document.body.removeEventListener('click', this.recoverCloseFunction, true);
                this.dateMenu.foundation_.close = this.tempClose;
                this.dateMenu.foundation_.close();
            }
        } else {
            document.body.addEventListener('click', this.recoverCloseFunction, true);
            this.dateMenu.show();
        }
    }

    render() {
        return (
            <div ref="dateMenuDiv">
                <TextField rightIcon={"date_range"} onChange={ (e) => this.setState({displayVal: e.target.value}) }
                           value={this.state.displayVal}
                           onBlur={ () =>{
                                if(!moment(this.state.displayVal).isValid()){
                                        window.dvl = this.state.displayVal;
                                        console.log(this.state.displayVal);
                                        this.setState({displayVal : ""});
                                }else{
                                    console.log("calisti")
                                    this.props.onChange(this.state.displayVal)
                                    this.setState({tempVal : ""});
                                }
                           }}
                           ref="dateTextRef"
                           rightIconClick={ (e) => {
                               this.openMenu(e)
                           }}/>
                <div className="mdc-simple-menu" tabIndex="-1">
                    <div className="mdc-simple-menu__items deleleteMargin">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}
class DatePick extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            monthCounter: props.value ? moment(props.value).diff(moment(), "months") : 0,
            selectedDate: props.value ? moment(props.value).format("D") * 1 : moment().format("D") * 1,
            initialValue: props.value,
        };
    }

    getNextMonth(count) {
        let vars;
        vars = {
            day_Today: moment().add(count, "months").format("D"),
            month_Today: moment().add(count, "months").format("MMM"),
            monthFull: moment().add(count, "months").format("MMMM"),
            year_Today: moment().add(count, "months").format("Y"),
            dayName_Today: moment().add(count, "months").format("ddd"),
            fullDate: moment().add(count, "months")
        }
        return vars;
    }

    localeWeekDays;

    componentWillMount() {
        this.localeWeekDays = moment()._locale._weekdaysMin
    }

    getFirstAndLastDay(datex) {
        var date = datex ? new Date(datex) : new Date();
        var y = date.getFullYear();
        var m = date.getMonth();
        var firstDay = new Date(y, m, 1);
        var lastDay = new Date(y, m + 1, 0);
        return {
            frstD: moment(firstDay).format("dd"),
            firstDayTh: parseInt(moment(firstDay).format("d")),
            lastDay: moment(lastDay).format("dd"),
            lastDayTh: parseInt(moment(lastDay).format("d"))
        }
    }

    render() {
        let {month_Today, monthFull, year_Today, fullDate} = this.getNextMonth(this.state.monthCounter);
        let firstAndLast = this.getFirstAndLastDay(fullDate)
        let dayArr = Array.apply(null, Array(42));
        let i, j = 1;
        for (i = 0; i < 42; i++) {
            if (i < firstAndLast.firstDayTh || i > (moment(fullDate).daysInMonth() + firstAndLast.firstDayTh - 1))
                dayArr[i] = -1;
            else {
                dayArr[i] = j
                j++;
            }
        }
        window.mom = moment;
        return (
            <Card style={{maxWidth: "310px", maxHeight: "512px"}} shadow={this.props.shadow}>
                <div className="rmd-date-picker" style={{width: "310px", height: "104px"}}>
                    <div style={{padding: "20px"}}>
                        <div style={{
                            fontSize: "16px",
                            fontWeight: "500",
                            color: "rgba(255,255,255,0.5)"
                        }}>{year_Today}</div>
                        <div style={{
                            fontSize: "36px",
                            height: "38px",
                            fontWeight: "500"
                        }}>{`${moment().year(year_Today).month(month_Today).date(this.state.selectedDate).format("ddd")}, ${month_Today} ${this.state.selectedDate}`}</div>
                    </div>
                </div>
                <div style={{width: "310px", height: "312px"}}>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "10px 10px 0px 10px"
                    }}>
                        <IconButton iconSize={24}
                                    onClick={ () => this.setState({monthCounter: this.state.monthCounter - 12}, () => this.props.onChange && this.props.onChange(moment().year(moment().add(this.state.monthCounter, "months").format("Y")).month(moment().add(this.state.monthCounter, "months").format("MMM")).date(this.state.selectedDate)._d))}
                                    iconName={"skip_previous"}/>
                        <IconButton iconSize={24}
                                    onClick={ () => this.setState({monthCounter: this.state.monthCounter - 1}, () => this.props.onChange && this.props.onChange(moment().year(moment().add(this.state.monthCounter, "months").format("Y")).month(moment().add(this.state.monthCounter, "months").format("MMM")).date(this.state.selectedDate)._d))}
                                    iconName={"navigate_before"}/>
                        {monthFull + " " + year_Today}
                        <IconButton iconSize={24}
                                    onClick={ () => this.setState({monthCounter: this.state.monthCounter + 1}, () => this.props.onChange && this.props.onChange(moment().year(moment().add(this.state.monthCounter, "months").format("Y")).month(moment().add(this.state.monthCounter, "months").format("MMM")).date(this.state.selectedDate)._d))}
                                    iconName={"navigate_next"}/>
                        <IconButton iconSize={24}
                                    onClick={ () => this.setState({monthCounter: this.state.monthCounter + 12}, () => this.props.onChange && this.props.onChange(moment().year(moment().add(this.state.monthCounter, "months").format("Y")).month(moment().add(this.state.monthCounter, "months").format("MMM")).date(this.state.selectedDate)._d))}
                                    iconName={"skip_next"}/>
                    </div>
                    <div>
                        <table style={{fontSize: "12px", fontWeight: "400"}}>
                            <thead>
                            <tr>
                                {this.localeWeekDays.map((i1, index) => {
                                    return (
                                        <td key={index}
                                            style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34,
                                                color: 'rgba(0,0,0,0.5)'
                                            }}>{i1}</td>
                                    )
                                })}
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (index < 7) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   className="rmd-days"
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       transition: "0.4s",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (7 <= index && index < 14) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   className="rmd-days"
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       transition: "0.4s",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (14 <= index && index < 21) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   className="rmd-days"
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       transition: "0.4s",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (21 <= index && index < 28) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   className="rmd-days"
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       transition: "0.4s",
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (28 <= index && index < 35) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   className="rmd-days"
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       transition: "0.4s",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (35 <= index && index < 42) {
                                        if (i2 === -1) {
                                            return <td key={index} style={{
                                                textAlign: 'center',
                                                verticalAlign: 'middle',
                                                width: 42,
                                                cursor: "auto",
                                                backgroundColor: "white",
                                                transition: "0.4s",
                                                height: 34
                                            }}></td>;
                                        }
                                        return <td key={index}
                                                   onClick={() => this.setState({selectedDate: i2}, () => this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d))}
                                                   className="rmd-days"
                                                   style={{
                                                       textAlign: 'center',
                                                       verticalAlign: 'middle',
                                                       width: 42,
                                                       backgroundColor: (this.state.selectedDate) === i2 && "#eee",
                                                       transition: "0.4s",
                                                       height: 34
                                                   }}>{i2}</td>;
                                    }
                                })}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {this.props.open !== undefined &&
                <div style={{width: '310px'}}>
                    <Button primary={true} onClick={() => {
                        this.props.onChange && this.props.onChange(this.state.initialValue || moment()._d);
                        this.state.initialValue ? this.setState({
                            monthCounter: moment(this.props.value).diff(moment(), "months"),
                            selectedDate: moment(this.props.value).format("D") * 1
                        }) : this.setState({monthCounter: 0, selectedDate: moment().format("D") * 1});
                        this.props.onClose()
                    }}>Cancel</Button>
                    <Button primary={true} onClick={() => {
                        this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d);
                        this.props.onClose()
                    }}>Ok</Button>
                </div>
                }
            </Card>
        )
    }
}

export default class DatePicker extends React.Component {
    state = {
        dateVal: null,
    }
    static propTypes = {
        open: PropTypes.bool,
        value: PropTypes.string,
        onClose: PropTypes.func.isRequired,
        onChange: PropTypes.func,
    };

    render() {
        if (this.props.open !== undefined) {
            return (
                <Dialog style={{width: "auto", minWidth: 0, padding: 0, margin: 0}} {...this.props}>
                    <DialogContent style={{width: "auto", minWidth: 0, padding: 0, margin: 0}}>
                        <DatePick {...this.props} shadow="20"/>
                    </DialogContent>
                </Dialog>
            );
        }
        else {
            return (
                <div>
                    <DateMenu date={this.state.dateVal} onChange={ (x) => console.log("x",x) }>
                        <DatePick {...this.props} onChange={ (e) => this.setState({dateVal: e}, this.props.onChange)}
                                  shadow="1"/>
                    </DateMenu>
                </div>
            )
        }
    }
}