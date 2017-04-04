/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Textfield from '../TextField';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class TabPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [

            'import React from "react";',
            'import {TextField} from "react-material-design";',
            'export default class Example extends React.Component {',
            '',
            '     render(){',
            '           return (',
            '               <div>',
            '                  <TextField key="1" ' ,
            '                       placeholder="placeholder" ' ,
            '                       label="Label" ' ,
            '                       floatingLabel ' ,
            '                       helpText="Some Help" />',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="TextField"/>
                <Card shadow={3} style={{padding: 29}}>
                    <div style={{display:"flex"}}>
                        <Textfield key="1" placeholder="placeholder" label="Label" error floatingLabel helpText="Some Help" />
                    </div>
                </Card>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="TextField properties"/>
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
                            <TableRowColumn>placeholder</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Placeholder of textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>floatingLabel</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>If true, when focus to textfield label will come over .</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>helpText</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Underline of textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>If true, textfield disabled.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>error</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Underline of textfield.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Get value of textfield.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}