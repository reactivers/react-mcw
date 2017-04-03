/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Button from '../Button';
import Markdown from 'react-markdown'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class CheckBoxPage extends React.Component {


    render() {

        let document = [
            '```js',
            'import React from "react";',
            'import {Button} from "react-material-design";',
            'export default class Example extends React.Component {',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <Button accent style={{marginRight:8}}>Action 1</Button>',
            '                   <Button dense style={{marginRight:8}}>Action 2</Button>',
            '                   <Button compact style={{marginRight:8}}>Action 3</Button>',
            '                   <Button accent raised style={{marginRight:8}}>Action 4</Button>',
            '                   <Button primary raised style={{marginRight:8}}>Action 5</Button>',
            '                   <Button raised style={{marginRight:8}}>Action 6</Button>',
            '                   <Button raised disabled style={{marginRight:8}}>Action 7</Button>',
            '                   <Button primary style={{marginRight:8}}>Action 8</Button>',
            '               </div>',
            '            )',
            '       }',
            '  }',
            '```',
        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Button"/>
                <div>
                    <Button accent style={{marginRight: 8}}>Action 1</Button>
                    <Button dense style={{marginRight: 8}}>Action 2</Button>
                    <Button compact style={{marginRight: 8}}>Action 3</Button>
                    <Button accent raised style={{marginRight: 8}}>Action 4</Button>
                    <Button primary raised style={{marginRight: 8}}>Action 5</Button>
                    <Button raised style={{marginRight: 8}}>Action 6</Button>
                    <Button raised disabled style={{marginRight: 8}}>Action 7</Button>
                    <Button primary style={{marginRight: 8}}>Action 8</Button>
                </div>
                <Markdown source={document}/>

                <CardHeader title="Button properties"/>
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
                            <TableRowColumn>raised</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Gives raised effect.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>compact</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Gives a compact button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>dense</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Gives a dense button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>accent</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Gives a accent button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>primary</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Gives primary color.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>disabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>If true, button's onClick function doesn't fire and colors changes.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>textColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>You can set text color textColor props</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>buttonColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>You can set button color.</TableRowColumn>
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