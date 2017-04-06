/**
 * Created by muratguney on 03/04/2017.
 */
import React from 'react';
import classnames from 'classnames'
import '../index.scss'


class Table extends React.Component{
    render(){
        return(
            <table className="rmd-table" style={{width:"100%"}}>
                {this.props.children}
            </table>
        )
    }
}

class TableRow extends React.Component {

    render() {

        return (
            <tr className="rmd-table-row">
                {this.props.children}
            </tr>

        )
    }
}

class TableHeader extends React.Component {

    render() {

        return (
            <thead className="rmd-table-header">
                {this.props.children}
            </thead>
        )
    }
}
class TableHeaderColumn extends React.Component {
    render() {
        return (
            <th className="rmd-table-header-column">
                {this.props.children}
            </th>
        )
    }
}
class TableBody extends React.Component {
    render() {
        return (
            <tbody className="rmd-table-body">
            {this.props.children}
            </tbody>
        )
    }
}
class TableRowColumn extends React.Component {
    render() {
        return (
            <td className={classnames({"rmd-table-row-column-nowrap":this.props.nowrap,"rmd-table-row-column-long-dsc":!this.props.nowrap})}>
                {this.props.children}
            </td>
        )
    }
}


export {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn}