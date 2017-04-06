/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader,Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody,Tabs, Tab} from '../../lib';
import Highlight from 'react-highlight.js'


export default class TabPage extends React.Component {

    state = {dialog: false};

    render() {

        let document = [

            'import React from "react";',
            'import {Tabs,Tab} from "react-material-design";',
            'export default class Example extends React.Component {',
            '',
            '     render(){',
            '           return (',
            '               <div>',
            '                  <Tabs>',
            '                      <Tab label="First">',
            '                         First Tab',
            '                      </Tab>',
            '                      <Tab label="Second">',
            '                          Second Tab',
            '                     </Tab>',
            '                  </Tabs>',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

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