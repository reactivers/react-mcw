/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import IconToggle from '../IconToggle';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    render() {
        let document = `
<IconToggle toggleOffIcon={"add"} toggleOnIcon={"clear"} 
    primary 
    toggleText={"Add/Clear"} />
    
<IconToggle toggleOffIcon={"menu"} toggleOnIcon={"share"} 
toggleText={"Menu/Social"} />
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Icon Toggle"/>

                    <IconToggle toggleOffIcon={"add"} toggleOnIcon={"clear"} primary toggleText={"Add/Clear"} />

                    <IconToggle toggleOffIcon={"menu"} toggleOnIcon={"share"} toggleText={"Menu/Social"} />

                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Icon Toggle properties"/>
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
                            <TableRowColumn>iconColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of icon toggle.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>textColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of text.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>toggleOnIcon</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any material icons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>toggleOffIcon</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any material icons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>toggleText</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of toggle.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Disabled swith for icon toggle.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onStatusChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gives icon toggle status.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>primary</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, icon toggle gets theme primary color.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>accent</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, icon toggle gets theme accent color.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}