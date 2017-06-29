/**
 * Created by Utku on 23/06/2017.
 */
import ReactDOM from 'react-dom';
import React from 'react';
import {Card, CardHeader,Table,TableRow, TableHeaderColumn, TableHeader,TableRowColumn, TableBody,Tab,Tabs} from './index';

export default class ComponentTestPage extends React.Component {

    state={custom:false};

    render() {
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Tab"/>
                <Card shadow={3} style={{padding: 29}}>
                    <Tabs >
                        <Tab label="First">
                            First Tab
                        </Tab>
                        <Tab label="Second">
                            Second Tab
                        </Tab>
                    </Tabs>

                </Card>
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
                            <TableRowColumn>selectedLabelColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of selected tab label.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>unSelectedLabelColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of unselected tabs label.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>selectedBackgroundColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Color of selected tab background.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>unSelectedBackgroundColor</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Color of unselected tabs background.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>indicatorColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn longText>Color of indicator.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Get the info of selected tab.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>defaultSelectedIndex</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn longText>Default selected index whend view did load.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>style</TableRowColumn>
                            <TableRowColumn>Object</TableRowColumn>
                            <TableRowColumn longText>Style of tabs.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>fullWidth</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn longText>If true, width of component set 100%.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>

                <CardHeader title="Tab properties"/>
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
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of tabs.</TableRowColumn>
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
ReactDOM.render(
    <ComponentTestPage/>, document.getElementById("root")
);
//