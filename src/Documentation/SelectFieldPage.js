/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import {SelectField,Option} from '../SelectField';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

const data = [{
    value:"deneme",
    dsc:"Deneme",
}]

export default class CardPage extends React.Component {

    render() {

        let document =
            `
import React from "react";
import {SelectField,Option} from "react-material-design";
export default class Example extends React.Component {
render() {

const data = [{value:"deneme",dsc:"Deneme"}]
        return (
          <SelectField data={data} />
            )
        }
    }`;

        let document2 =  `
import React from "react";
import {SelectField,Option} from "react-material-design";

 

export default class Example extends React.Component {
render() {
        return (
          <SelectField style={{width:200}} 
                menuStyle={{width:200}} 
                menuItemStyle={{width:200}}>
                
                <Option>Option 1</Option>
                <Option>Option 2</Option>
                <Option>Option 3</Option>
                <Option>Option 4</Option>
                
          </SelectField>
            )
        }
    }`;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Radio Button"/>
                    <SelectField style={{width:200}} menuStyle={{width:200}} menuItemStyle={{width:200}}>
                        <Option>Option 1</Option>
                        <Option>Option 2</Option>
                        <Option>Option 3</Option>
                        <Option>Option 4</Option>
                    </SelectField>
                <SelectField data={data} />
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <HighLight source="javascript">
                    {document2}
                </HighLight>
                <CardHeader title="SelectField properties"/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Props</TableHeaderColumn>
                            <TableHeaderColumn>Type</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>menuStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You You can add your own css inline-style</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can add your own css inline-style</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>menuItemStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can add your own css inline-style</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dscField</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>If data defines dscField means shown in select field.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>valueField</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>If data defines valueField means value in select field.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>data</TableRowColumn>
                            <TableRowColumn>Array</TableRowColumn>
                            <TableRowColumn>A json-array for selectField.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>data</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gives value of selected field.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}