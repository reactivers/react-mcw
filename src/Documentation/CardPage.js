/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Button from '../Button';
import Markdown from 'react-markdown'
import {Table,TableRow,TableHeaderColumn,TableHeader,TableRowColumn,TableBody} from '../Table';

export default class CardPage extends React.Component {


    render() {

        let document = [
            '```js',
            'import React from "react";',
            'import {Card, CardHeader,CardActions, CardBody} from "react-material-design";',
            'export default class Example extends React.Component {',
            '     render(){',
            '           return (',
            '               <Card>',
            '                   <CardHeader title="Card Header">',
            '                   <CardBody>',
            '                   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mollis ',
            '                   lectus cursus nulla euismod,eu pellentesque est blandit. Cras ac massa ',
            '                   justo. Ut dapibus laoreet ligula, id venenatis risusplacerat nec. Aliquam dapibus odio ',
            '                   vel lectus sagittis, id luctus erat mattis.',
            '                   </CardBody>',
            '                   <CardActions>',
            '                       <Button accent raised style={{marginRight:8}}>Action 1</Button>',
            '                       <Button primary raised>Action 2</Button>',
            '                   </CardActions>',
            '               </Card>',
            '            )',
            '       }',
            '  }',
            '```',
        ].join('\n');

        return (
            <Card style={{padding:8}}>
                <CardHeader title="Card"/>
                <Card>
                    <CardHeader title="Card Header" />
                    <CardBody >
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
                    </CardBody>
                    <CardActions>
                        <Button accent raised style={{marginRight:8}}>Action 1</Button>
                        <Button primary raised>Action 2</Button>
                    </CardActions>
                </Card>
                <Markdown source={document}/>

                <CardHeader title="Card properties" />
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
                            <TableRowColumn>shadow</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn longText>You can set shadow level by shadow props</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <CardHeader title="CardHeader properties" />
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
                            <TableRowColumn>title</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Title for card.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>subtitle</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>If you need more explanation you can use subtitle props.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
                <CardHeader title="CardBody properties" />
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
                <CardHeader title="CardActions properties" />
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