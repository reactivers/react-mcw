/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {
    Card,
    CardHeader,
    WaveEffect,
    Button,
    Table,
    TableRow,
    TableHeaderColumn,
    TableHeader,
    TableRowColumn,
    TableBody
} from '../../lib';
import Highlight from 'react-highlight.js'

export default class FabMenuPage extends React.Component {

    state = {custom: false};

    render() {

        let document = `

<WaveEffect>
    <Button  accent primary raised>Dark Wave Effect</Button>
</WaveEffect>
<WaveEffect light>
    <Button accent primary raised>Light Wave Effect</Button>
</WaveEffect>
        `;

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="WaveEffect"/>
                <div style={{position: "relative", overflow: "hidden"}}>
                    <WaveEffect>
                        <Button style={{marginRight: 8}} accent primary raised>Wave Effect</Button>
                    </WaveEffect>
                    <WaveEffect light>
                        <Button primary raised>Wave Effect</Button>
                    </WaveEffect>
                </div>
                <Highlight language="javascript">{document}</Highlight>

                <CardHeader title="WaveEffect properties"/>
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
                            <TableRowColumn>light</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, wave effect's color gets lighter..</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}