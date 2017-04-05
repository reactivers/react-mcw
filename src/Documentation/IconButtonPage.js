/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions} from '../Card';
import IconButton from '../IconButton';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class IconButtonPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = `
<IconButton iconName="add" />
<IconButton iconName="add" iconColor="blue" />
<IconButton iconName="add" iconColor="red" />
        `;


        return (
            <Card style={{padding: 8}}>
                <CardHeader title="IconButton"/>
                <CardActions>
                    <IconButton iconName="add" style={{marginRight:8}} />
                    <IconButton iconName="add" style={{marginRight:8}} iconColor={"blue"} />
                    <IconButton iconName="add" iconColor={"red"} />
                </CardActions>


                <Highlight language="javascript">{document}</Highlight>

                <CardHeader title="IconButton properties"/>
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
                            <TableRowColumn>iconClassName</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>You can add your own css classes</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconSize</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>You can change size of icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconName</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Name of a material icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Color of icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClick</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>You can set what button does when clicked.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}