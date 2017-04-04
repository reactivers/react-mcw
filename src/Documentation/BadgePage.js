/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Badge from '../Badge';
import Icon from '../Icon';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class BadgePage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [
            'import React from "react";',
            'import {Badge} from "react-material-design";',
            '',
            'export default class Example extends React.Component {',
            '',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <Badge iconName="notifications" label="10" ></Badge>',
            '                   <Badge iconName="notifications" label="10" iconSize={40} badgeColor={"purple"} />',
            '               </div>',
            '            )',
            '       }',
            '  }',
        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Badge"/>
                <Card shadow={3} style={{padding: 29}}>
                    <div style={{display:"flex"}}>
                        <Badge iconName="notifications" label="10"/>
                        <Badge iconName="notifications" label="10" iconSize={40} badgeColor={"purple"} />
                    </div>
                </Card>

                <pre>
                    <code className="h">

                    </code>
                </pre>
                <HighLight language="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Badge properties"/>
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
                            <TableRowColumn>Any material icon for badge.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Badge text.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>badgeColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Color of badge.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Set style of badge.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>badgeStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Set style of badge.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>buttonStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Style of badge button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconSize</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn longText>Size of icon.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClick</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Fire when clicked badge button.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}