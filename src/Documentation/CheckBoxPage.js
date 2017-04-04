/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Checkbox from '../Checkbox';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    render() {
        let document = `
<Checkbox label="Simple Checkbox" indeterminate={true} onChange={this.handle} />
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Checkbox"/>

                <Checkbox label="Simple Checkbox" indeterminate={true} onChange={e=>console.log(e.target.labelId)} />

                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Checkbox properties"/>
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
                            <TableRowColumn>If true, checkbox shows always checked.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of checkbox item.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, checkbox shows disabled.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>indeterminate</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Checkbox gains animation.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gets state of checkbox.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}