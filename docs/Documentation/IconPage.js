/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader,Icon,Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../../lib';
import HighLight from 'react-highlight.js'

export default class CardPage extends React.Component {

    state = {open: false};

    render() {
        let document = `
<Icon iconName="menu"/>
<Icon iconName="add" iconSize={54}/>
<Icon iconName="mode_edit" iconSize={54} iconColor="green"/>
<Icon iconName="share" iconSize={54} iconColor="white" 
    style={{backgroundColor:"orange",borderRadius:"50%",padding:"4px"}}/>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Icon"/>
                <div style={{display: "flex", alignItems: "center", justifyContent: "space-around"}}>
                    <Icon iconName="menu"/>
                    <Icon iconName="add" iconSize={54}/>
                    <Icon iconName="mode_edit" iconSize={54} iconColor="green"/>
                    <Icon iconName="share" iconSize={54} iconColor="white"
                          style={{backgroundColor: "orange", borderRadius: "50%", padding: 4}}/>
                </div>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Icon properties"/>
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
                            <TableRowColumn>iconName</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any material icons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconSize</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Size of icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>Also you can set style of icon by inline-style.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}