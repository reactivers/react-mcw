/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import FAB from '../FAB';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    render() {
        let document = `
<div style={{display: "flex"}}>
    <FAB style={{marginRight: 8}} icon="add" buttonColor="lightblue"/>
    <FAB style={{marginRight: 8}} icon="edit" buttonColor="lightgreen" />
    <FAB style={{marginRight: 8}} icon="people" buttonColor="purple"/>
    <FAB icon="share" buttonColor="orange"/>
</div>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="FAB"/>
                <div style={{display: "flex"}}>
                    <FAB style={{marginRight: 8}} icon={"add"} buttonColor={"lightblue"}/>
                    <FAB style={{marginRight: 8}} icon={"edit"} buttonColor={"lightgreen"} />
                    <FAB style={{marginRight: 8}} icon={"people"} buttonColor={"purple"}/>
                    <FAB icon={"share"} buttonColor={"orange"}/>
                </div>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="FAB properties"/>
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
                            <TableRowColumn>buttonColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of FAB.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can add your own css inline-style</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>buttonSize</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Size of FAB</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>mini</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, FAB looks mini.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>icon</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any material icons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClick</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Fire when FAB clicked.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}