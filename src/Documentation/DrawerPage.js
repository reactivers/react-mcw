/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Drawer from '../Drawer';
import IconButton from '../IconButton';
import Markdown from 'react-markdown'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class ChipPage extends React.Component {

    state = {opens: false};

    render() {

        let document = [
            '```js',
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
            '```',
        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Card"/>
                <Card shadow={3} style={{padding: 29}}>
                    <IconButton onClick={()=>this.setState({opens:true})} iconName={"menu"}/>
                    <Drawer key={2} open={this.state.opens} onClose={()=>this.setState({opens:false})}>
                        Drawer Content
                    </Drawer>
                </Card>
                <Markdown source={document}/>
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