/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import Switch from '../Switch';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    render() {
        let document = `
 <Switch label="Switch"/>
 <Switch label="Checked Switch" defaultChecked={true}/>
 <Switch label="Unchecked Switch" checked={false}/>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Switch"/>
                <div style={{display: "flex",justifyContent:"space-around"}}>
                    <Switch label="Switch"/>
                    <Switch label="Checked Switch" defaultChecked={true}/>
                    <Switch label="Unchecked Switch" checked={false}/>
                </div>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Switch properties"/>
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
                            <TableRowColumn>checked</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, switch shows checked.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>className</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>You can set your own css class.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, switch disabled and can not change switch's value.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gets value of switch.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of switch.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can set style to switch by inline-style.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}