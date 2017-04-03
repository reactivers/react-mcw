/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Button from '../Button';
import IconButton from '../IconButton';
import Markdown from 'react-markdown'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class IconButtonPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [
            '```js',
            'import React from "react";',
            'import {Card, CardHeader,CardActions, CardBody} from "react-material-design";',
            'export default class Example extends React.Component {',
            '',
            'state = {dialog: false};',
            '     render(){',
            '           return (',
            '               <div>',
            '               <Button raised onClick={() => this.setState({dialog: true})}>Open Dialog</Button>',
            '                   <Dialog open={this.state.dialog} onClose={() => this.setState({dialog: false})}>',
            '                       <DialogHeader>',
            '                           <DialogTitle>Example Dialog</DialogTitle>',
            '                       </DialogHeader>',
            '                       <DialogContent>',
            '                       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis ',
            '                       lectus cursus nulla euismod,eu pellentesque est blandit. Cras ac massa ',
            '                       justo. Ut dapibus laoreet ligula, id venenatis risusplacerat nec. Aliquam dapibus odio ',
            '                       vel lectus sagittis, id luctus erat mattis.',
            '                       </DialogContent>',
            '                       <DialogFooter>',
            '                           <Button style={{marginRight: 8}} primary raised onClick={() => this.setState({dialog: false})}>Cancel</Button>',
            '                           <Button accent primary raised>Action</Button>',
            '                       </DialogFooter>',
            '                   </Dialog>',
            '               </div>',
            '            )',
            '       }',
            '  }',
            '```',
        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Card"/>
                <CardActions>
                    <IconButton iconName="add" style={{marginRight:8}} />
                    <IconButton iconName="add" style={{marginRight:8}} iconColor={"blue"} />
                    <IconButton iconName="add" iconColor={"red"} />
                </CardActions>


                <Markdown source={document}/>

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