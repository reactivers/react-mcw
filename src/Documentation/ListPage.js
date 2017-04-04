/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {List,ListItem} from '../List';
import Icon from '../Icon';
import HighLight from 'react-highlight.js'
import {Table,TableRow,TableHeaderColumn,TableHeader,TableRowColumn,TableBody} from '../Table';

export default class CardPage extends React.Component {


    render() {

        let document = [
            'import React from "react";',
            'import {Card, CardHeader,CardActions, CardBody} from "react-material-design";',
            'export default class Example extends React.Component {',
            '     render(){',
            '           return (',
            '               <List>',
            '                   <ListItem>',
            '                       List Item 1',
            '                   </ListItem>',
            '                   <ListItem iconName="menu">',
            '                       List Item 2',
            '                   </ListItem>',
            '                   <ListItem onClick={this.handleClick}>',
            '                       List Item 3',
            '                   </ListItem>',
            '                   <ListItem avatar={<Icon iconName={"person"} ></Icon>}>',
            '                       List Item 4',
            '                   </ListItem>',
            '                   <ListItem subText={"Subtext of list"} onClick={this.handleClick}>',
            '                       List Item 5',
            '                   </ListItem>',
            '                   <ListItem dividerInset>',
            '                       List Item 6',
            '                   </ListItem>',
            '                   <ListItem dividerOutset>',
            '                       List Item 7',
            '                   </ListItem>',
            '                   <ListItem dividerOutset action={<Icon iconName={"chevron_right"} />} >',
            '                       List Item 8',
            '                   </ListItem>',
            '               </List>',
            '            )',
            '       }',
            '  }',
        ].join('\n');

        return (
            <Card style={{padding:8}}>
                <CardHeader title="List"/>
                <List avatar={<Icon iconName={"person"} />} style={{marginBottom:20}}>
                    <ListItem>
                        List Item 1
                    </ListItem>
                    <ListItem iconName={"menu"}>
                        List Item 2
                    </ListItem>
                    <ListItem onClick={()=>null}>
                        List Item 3
                    </ListItem>
                    <ListItem avatar={<Icon iconName={"person"} />}>
                        List Item 4
                    </ListItem>
                    <ListItem subText={"Subtext of list"} onClick={()=>null}>
                        List Item 5
                    </ListItem>
                    <ListItem dividerInset>
                        List Item 6
                    </ListItem>
                    <ListItem dividerOutset>
                        List Item 7
                    </ListItem>
                    <ListItem action={<Icon iconName={"chevron_right"} />} dividerOutset>
                        List Item 8
                    </ListItem>
                </List>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="List properties" />
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
                            <TableRowColumn>className</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>You can add your ownd css classes</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can add your own css inline-style</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>twoLine</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, height of list items changed.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>avatar</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Avatar layout for list.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dense</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>List looks dense.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <CardHeader title="ListItem properties" />
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
                            <TableRowColumn>className</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>You can add your ownd css classes.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can add your own css inline-style.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>subText</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Subtitle of list item.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>iconName</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Any material icons.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>avatar</TableRowColumn>
                            <TableRowColumn>Component</TableRowColumn>
                            <TableRowColumn>You can set avatar as a component.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dividerInset</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>A divider from inset.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dividerOutset</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>A divider from outset.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClick</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Fires when clicked the list item. If an onclick function set, on mouse enter the list item background color changes. </TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}