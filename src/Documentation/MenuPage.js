/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {Menu,MenuItem} from '../Menu';
import IconButton from '../IconButton';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class ChipPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [

            'import React from "react";',
            'import {Menu, MenuItem} from "react-material-design";',
            'export default class Example extends React.Component {',
            '',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <Menu target={<IconButton iconName={"menu"} />}>',
            '                       <MenuItem>Menu 1</MenuItem>',
            '                       <MenuItem hoverableMenuItem>Menu 2</MenuItem>',
            '                       <MenuItem>Menu 3</MenuItem>',
            '                   </Menu>',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Menu"/>
                <Card shadow={3} style={{padding: 29}}>
                    <div style={{display:"flex"}}>
                        <Menu  target={<IconButton iconName={"menu"} />}>
                            <MenuItem>Menu 1</MenuItem>
                            <MenuItem hoverableMenuItem>Menu 2</MenuItem>
                            <MenuItem>Menu 3</MenuItem>
                        </Menu>
                    </div>
                </Card>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="Menu properties"/>
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
                            <TableRowColumn>target</TableRowColumn>
                            <TableRowColumn>Any</TableRowColumn>
                            <TableRowColumn>Target for show the menu</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>getSelectedIndex</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Index of selected menu item</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onMenuClose</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Fire when menu close.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <CardHeader title="MenuItem properties"/>
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
                            <TableRowColumn>hoverableMenuItem</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, on mouse enter the menu item backgrodund color changes.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}