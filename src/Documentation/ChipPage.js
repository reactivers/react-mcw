/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Chip from '../Chip';
import Icon from '../Icon';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class ChipPage extends React.Component {

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
            '                   <Chip>Default Chip</Chip>',
            '                   <Chip avatar={<Icon iconName="people" ></Icon>}>Avatar Chip</Chip>',
            '                   <Chip avatar={<Icon iconName="people" />} onCancel={this.onCancel}>Avatar Chip</Chip>',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Card"/>
                <Card shadow={3} style={{padding: 29}}>
                    <div style={{display:"flex"}}>
                        <Chip>Default Chip</Chip>
                        <Chip avatar={<Icon iconName={"people"} />}>Avatar Chip</Chip>
                        <Chip avatar={<Icon iconName={"people"} />} onCancel={()=>null}>Avatar Chip</Chip>
                    </div>
                </Card>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="Tabs properties"/>
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
                            <TableRowColumn>avatar</TableRowColumn>
                            <TableRowColumn>Any</TableRowColumn>
                            <TableRowColumn>You can set any avatar</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>avatarStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>Style of avatar.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Set style of chip.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>cancelButtonStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Style of cancel button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onCancel</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Fire when clicked cancel button.If you don't define any func cancel button doesn't shown.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}