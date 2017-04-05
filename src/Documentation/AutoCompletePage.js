/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import AutoComplete from '../AutoComplete';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

const data = [
    {text: "Ankara", value: "ankara"},
    {text: "Adana", value: "adana"},
    {text: "Bolu", value: "bolu"},
    {text: "İstanbul", value: "istanbul"},
    {text: "İzmir", value: "izmir"},
    {text: "Çorum", value: "çorum"},
    {text: "Denizli", value: "denizli"},
];


export default class AutoCompletePage extends React.Component {

    state = {dialog: false, open: false};

    render() {

        let document = `

const data = [
    {text: "Ankara", value: "ankara"},
    {text: "Adana", value: "adana"},
    {text: "Bolu", value: "bolu"},
    {text: "İstanbul", value: "istanbul"},
    {text: "İzmir", value: "izmir"},
    {text: "Çorum", value: "çorum"},
    {text: "Denizli", value: "denizli"},
];

    <AutoComplete data={data} label="Cities" floatingLabel dscField="text" 
        helpText="Select a city" valueField="value" onChange={this.handleChange}/>
        `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="AutoComplete"/>
                <AutoComplete data={data} label="Cities" floatingLabel dscField="text" helpText="Select a city"
                              valueField="value"/>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="AutoComplete properties"/>
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
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Label for textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>data</TableRowColumn>
                            <TableRowColumn>Array</TableRowColumn>
                            <TableRowColumn>A json-array for list.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>error</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Error for textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>floatingLabel</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, textfield transform floatinglabel form.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>helpText</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any help text for textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>placeholder</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>It shows when textfield empty.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, textfield gets disabled.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gets value of selected item.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dscField</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Descripton key field of json-array.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>valueField</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Value key field of json-array.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>className</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>You can add your css classes.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can set style.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}