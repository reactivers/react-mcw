/**
 * Created by Utku on 27/03/2017.
 */
/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {Card} from '../Card';
import {MDCSimpleMenu} from '@material/menu/dist/mdc.menu';
import TextField from '../TextField';
import IconButton from '../IconButton';
import Button from '../Button';
import {Dialog, DialogContent} from '../Dialog';

class DateDialog extends React.PureComponent {
    static defaultProps = {
        locale: 'en',
        disabled: false,
        disableTextInput: false,
        onChange: () => null,
        onClose: () => null,
        open: false,
    }

    constructor(props) {
        super(props);
        moment.locale(this.props.locale);
        this.state = {
            isOpen: this.props.open,
            format: moment.localeData()._longDateFormat.L,
            displayVal: "",
        }
    }

    componentWillMount() {
        if (this.props.format) {
            this.setState({format: this.props.format});
        }
        if (this.props.value) {
            this.setState({displayVal: this.props.value}, () => this.props.onChange(this.state.displayVal))
        }
    }

    render() {
        return (
            <div>
                <TextField
                    disabled={this.props.disabled || this.props.disableTextInput}
                    rightIcon={"date_range"}
                    onChange={ (e) => this.setState({displayVal: e.target.value}) }
                    value={this.state.displayVal}
                    onBlur={ () => {
                        if (!moment(this.state.displayVal, this.state.format).isValid()) {
                            this.setState({displayVal: ""});
                        } else {
                            if (this.props.onChange) {
                                this.props.onChange(this.state.displayVal);
                            }
                        }
                    }}
                    rightIconClick={ !this.props.disabled ? () => {
                        this.setState({isOpen: true})
                    } : null}/>
                <Dialog style={{width: "auto", minWidth: 0, padding: 0, margin: 0}} open={this.state.isOpen}
                        onClose={ () => this.setState({isOpen: false}, () => this.props.onClose())}>
                    <DialogContent style={{width: "auto", minWidth: 0, padding: 0, margin: 0}}>
                        <DatePick
                            format={this.state.format}
                            minDate={this.props.minDate}
                            maxDate={this.props.maxDate}
                            onChange={ (xdate) => this.setState({displayVal: moment(xdate).format(this.state.format)}, () => this.props.onChange(moment(xdate).format(this.state.format)))}
                            shadow="20"/>
                    </DialogContent>
                </Dialog>
            </div>
        )
    }
}
class DateMenu extends React.PureComponent {
    static defaultProps = {
        locale: 'en',
        disabled: false,
        disableTextInput: false,
        onChange: () => null
    }

    constructor(props) {
        super(props);
        moment.locale(this.props.locale);
        this.state = {
            displayVal: "",
            format: moment.localeData()._longDateFormat.L
        }
        this.recoverCloseFunction = this.closeFunction.bind(this);
    }

    componentWillMount() {
        if (this.props.format) {
            this.setState({format: this.props.format});
        }
        if (this.props.value) {
            this.setState({displayVal: this.props.value}, () => this.props.onChange(this.state.displayVal))
        }
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

    componentWillReceiveProps(nextProps) {
        this.setState({displayVal: moment(nextProps.date).format(this.state.format)}, () => this.props.onChange(this.state.displayVal));
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

    openMenu(event, exitCode) {
        if (this.dateMenu.open === true) {
            if ((typeof event == "object" && event.target.parentElement.id == this.refs.dateTextRef.textFieldId) || event == "menu_buttons") {
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
        console.log("format", this.props.format, "st", this.state.format)
        return (
            <div ref="dateMenuDiv">
                <TextField
                    disabled={this.props.disabled || this.props.disableTextInput}
                    rightIcon={"date_range"}
                    onChange={ (e) => this.setState({displayVal: e.target.value}) }
                    value={this.state.displayVal}
                    onBlur={ () => {
                        if (!moment(this.state.displayVal, this.state.format).isValid()) {
                            this.setState({displayVal: ""});
                        } else {
                            this.props.onChange(this.state.displayVal);
                        }
                    }}
                    ref="dateTextRef"
                    rightIconClick={ !this.props.disabled ? (e) => {
                        this.openMenu(e)
                    } : null }/>
                <div className="mdc-simple-menu" tabIndex="-1">
                    <div className="mdc-simple-menu__items deleleteMargin">
                        <DatePick
                            acceptLabel="Tamam"
                            cancelLabel="İptal"
                            onClose={ () => this.openMenu("menu_buttons")}
                            format={this.state.format}
                            minDate={this.props.minDate}
                            maxDate={this.props.maxDate}
                            onChange={ (xdate) => this.setState({displayVal: moment(xdate).format(this.state.format)}, () => this.props.onChange(moment(xdate).format(this.state.format)))}
                            shadow="1"/>
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

    canChangeDate(currentDate, months,) {
        let fullDate = Object.assign({}, currentDate);
        fullDate = moment(fullDate);
        console.log(fullDate);
        fullDate.add(months, "months");
        if (this.props.minDate) {
            let minDate = moment(this.props.minDate, this.props.format).startOf('day');
            if (fullDate.year() == minDate.year() && fullDate.month() == minDate.month() && this.state.selectedDate < minDate.date()) {
                this.setState({selectedDate: minDate.date()})
            }
            if (minDate.isAfter(moment().startOf('day').year(fullDate.year()).month(fullDate.month()).date(minDate.date()))) {
                return false;
            }
        }
        if (this.props.maxDate) {
            let maxDate = moment(this.props.maxDate, this.props.format);
            if (fullDate.year() == maxDate.year() && fullDate.month() == maxDate.month() && this.state.selectedDate > maxDate.date()) {
                this.setState({selectedDate: maxDate.date()})
            }

            if (maxDate.isBefore(moment().startOf('day').year(fullDate.year()).month(fullDate.month()).date(1))) {
                return false;
            }
        }

        console.log("returned", true)
        return true;
    }

    generateDay(year_Today, month_Today, day, index) {
        let isDisabled = false;

        if ((this.props.minDate || this.props.maxDate) && moment(this.props.maxDate, this.props.format).startOf('day').isBefore(moment().startOf('day').year(year_Today).month(month_Today).date(day))
            || moment(this.props.minDate, this.props.format).startOf('day').isAfter(moment().startOf('day').year(year_Today).month(month_Today).date(day))) {
            isDisabled = true;
        }
        return <td key={index}
                   className={isDisabled ? "rmd-days-disabled" : "rmd-days"}
                   onClick={isDisabled ? null : () => this.setState({selectedDate: day})}
                   style={{
                       textAlign: 'center',
                       verticalAlign: 'middle',
                       width: 42,
                       backgroundColor: (this.state.selectedDate) === day && "#eee",
                       transition: "0.4s",
                       height: 34
                   }}>{day}</td>;
    }

    emptyDay(index) {
        return <td key={index} style={{
            textAlign: 'center',
            verticalAlign: 'middle',
            width: 42,
            cursor: "auto",
            backgroundColor: "white",
            transition: "0.4s",
            height: 34
        }}/>;
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
                                    onClick={ () => this.canChangeDate(fullDate, -12) ? this.setState({monthCounter: this.state.monthCounter - 12}) : null}
                                    iconName={"skip_previous"}/>
                        <IconButton iconSize={24}
                                    onClick={ () => this.canChangeDate(fullDate, -1) ? this.setState({monthCounter: this.state.monthCounter - 1}) : null }
                                    iconName={"navigate_before"}/>
                        {monthFull + " " + year_Today}
                        <IconButton iconSize={24}
                                    onClick={ () => this.canChangeDate(fullDate, +1) ? this.setState({monthCounter: this.state.monthCounter + 1}) : null}
                                    iconName={"navigate_next"}/>
                        <IconButton iconSize={24}
                                    onClick={ () => this.canChangeDate(fullDate, +12) ? this.setState({monthCounter: this.state.monthCounter + 12}) : null}
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
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (7 <= index && index < 14) {
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (14 <= index && index < 21) {
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (21 <= index && index < 28) {
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (28 <= index && index < 35) {
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            <tr>
                                {dayArr.map((i2, index) => {
                                    if (35 <= index && index < 42) {
                                        if (i2 === -1) return this.emptyDay(index);
                                        else return this.generateDay(year_Today, month_Today, i2, index);
                                    }
                                })}
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={{width: '310px'}}>
                    <Button primary={true} onClick={() => {
                        this.props.onClose();
                    }}>{this.props.cancelLabel}</Button>
                    <Button primary={true} onClick={() => {
                        this.props.onChange && this.props.onChange(moment().year(year_Today).month(month_Today).date(this.state.selectedDate)._d);
                        this.props.onClose()
                    }}>{this.props.acceptLabel}</Button>
                </div>
            </Card>
        )
    }
}
export default class DatePicker extends React.Component {
    static propTypes = {
        type: PropTypes.string,
        open: PropTypes.bool,
        value: PropTypes.string,
        onClose: PropTypes.func,
        onChange: PropTypes.func,
        format: PropTypes.string,
        locale: PropTypes.string,
// disableYearSelection: PropTypes.bool,
        disableTextInput: PropTypes.bool,
        disabled: PropTypes.bool,
        minDate: PropTypes.string,
        maxDate: PropTypes.string,
    };

    render() {
        if (this.props.type == "dialog") {
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
                <DateMenu minDate="30/08/2009" locale="tr" maxDate="23/08/2018"/>
            )
        }
    }
}