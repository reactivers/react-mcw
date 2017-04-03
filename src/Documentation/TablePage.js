/**
 * Created by muratguney on 03/04/2017.
 */
import React, {Component} from 'react';
import {List, ListItem} from '../List';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {Table,TableRow,TableHeaderColumn,TableHeader,TableRowColumn,TableBody} from '../Table';


export default class TablePage extends React.Component{
    render(){
        return(
            <Card>
                <CardHeader>Table</CardHeader>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Header 1</TableHeaderColumn>
                            <TableHeaderColumn>Header 2</TableHeaderColumn>
                            <TableHeaderColumn>Header 3</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>Row 1</TableRowColumn>
                            <TableRowColumn>Row 1</TableRowColumn>
                            <TableRowColumn>Row 1</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Row 2</TableRowColumn>
                            <TableRowColumn>Row 2</TableRowColumn>
                            <TableRowColumn>Row 2</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>Row 3</TableRowColumn>
                            <TableRowColumn>Row 3</TableRowColumn>
                            <TableRowColumn>Row 3</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>

        )
    }
}