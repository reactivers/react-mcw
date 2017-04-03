/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Button from '../Button';
import {Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter} from '../Dialog';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class CheckBoxPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [

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

        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Card"/>
                <CardActions>
                    <Button raised onClick={() => this.setState({dialog: true})}>Open Dialog</Button>
                </CardActions>
                <Dialog open={this.state.dialog} onClose={() => this.setState({dialog: false})}>
                    <DialogHeader>
                        <DialogTitle>Example Dialog</DialogTitle>
                    </DialogHeader>
                    <DialogContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis lectus cursus nulla
                        euismod,
                        eu pellentesque est blandit. Cras ac massa justo. Ut dapibus laoreet ligula, id venenatis risus
                        placerat nec. Aliquam dapibus odio vel lectus sagittis, id luctus erat mattis. Pellentesque sit
                        amet
                        nisi euismod, lacinia lectus quis, porta velit. Nulla dapibus commodo lacinia. Etiam
                        pellentesque
                        turpis eu nisi sagittis, eu euismod dui ullamcorper. Aenean efficitur imperdiet quam.
                        Suspendisse
                        quis arcu erat.
                    </DialogContent>
                    <DialogFooter>
                        <Button style={{marginRight: 8}} primary raised onClick={() => this.setState({dialog: false})}>Cancel</Button>
                        <Button accent raised primary>Action</Button>
                    </DialogFooter>
                </Dialog>

                <Highlight language="javascript">{document}</Highlight>

                <CardHeader title="Dialog properties"/>
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
                            <TableRowColumn>open</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>Control the dialog.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClose</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Fire when the background of dialog.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <CardHeader title="DialogHeader properties"/>
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
                    </TableBody>
                </Table>
                <CardHeader title="DialogTitle properties"/>
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
                    </TableBody>
                </Table>
                <CardHeader title="DialogContent properties"/>
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
                            <TableRowColumn>scrollable</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, content scrolls.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <CardHeader title="DialogFooter properties"/>
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
                    </TableBody>
                </Table>
            </Card>
        )
    }
}