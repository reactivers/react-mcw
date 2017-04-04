/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Drawer from '../Drawer';
import IconButton from '../IconButton';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


export default class ChipPage extends React.Component {

    state = {opens: false};

    render() {

        let document = `
<IconButton onClick={this.openDrawer} iconName="menu"/>
<Drawer hasButton={true} open={this.state.opens} onClose={this.handle}>
    Drawer Content
</Drawer>
        `;

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Drawer"/>
                <Card shadow={3} style={{padding: 29}}>
                    <IconButton onClick={() => this.setState({opens: true})} iconName={"menu"}/>
                    <Drawer hasButton={true} key={2} open={this.state.opens}
                            onClose={() => this.setState({opens: false})}>
                        Drawer Content
                    </Drawer>
                </Card>
                <Highlight language="javascript">{document}</Highlight>
                <CardHeader title="Drawer properties"/>
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
                            <TableRowColumn>header</TableRowColumn>
                            <TableRowColumn>Component</TableRowColumn>
                            <TableRowColumn>You can set your own component to header of drawer.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClose</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Fires when drawer close.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>open</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, drawer will open.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>hasButton</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>In material design, drawer shouldn't have any button. So we add a props then
                                you can add button on the drawer.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>headerStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can set header's style by inline-style.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>headerContentStyle</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn>You can set header's content's style by inline-style.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}