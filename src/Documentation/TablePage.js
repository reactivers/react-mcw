/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader} from '../Card';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    render() {
        let document = `
<Table>
    <TableHeader>
        <TableRow>
            <TableHeaderColumn>Id</TableHeaderColumn>
            <TableHeaderColumn>Description</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
        </TableRow>
    </TableHeader>
    <TableBody>
        <TableRow>
            <TableRowColumn>1</TableRowColumn>
            <TableRowColumn>Apple</TableRowColumn>
            <TableRowColumn>5$</TableRowColumn>
        </TableRow>
        <TableRow>
            <TableRowColumn>2</TableRowColumn>
            <TableRowColumn>Banana</TableRowColumn>
            <TableRowColumn>15$</TableRowColumn>
        </TableRow>
        <TableRow>
            <TableRowColumn>3</TableRowColumn>
            <TableRowColumn>Strawberry</TableRowColumn>
            <TableRowColumn>11$</TableRowColumn>
        </TableRow>
        <TableRow>
            <TableRowColumn>4</TableRowColumn>
            <TableRowColumn>Potato</TableRowColumn>
            <TableRowColumn>3$</TableRowColumn>
        </TableRow>
    </TableBody>
</Table>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Table"/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Id</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                            <TableHeaderColumn>Price</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableRowColumn>1</TableRowColumn>
                            <TableRowColumn>Apple</TableRowColumn>
                            <TableRowColumn>5$</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>2</TableRowColumn>
                            <TableRowColumn>Banana</TableRowColumn>
                            <TableRowColumn>15$</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>3</TableRowColumn>
                            <TableRowColumn>Strawberry</TableRowColumn>
                            <TableRowColumn>11$</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>4</TableRowColumn>
                            <TableRowColumn>Potato</TableRowColumn>
                            <TableRowColumn>3$</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <HighLight source="javascript">
                    {document}
                </HighLight>
            </Card>
        )
    }
}