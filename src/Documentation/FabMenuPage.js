/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import FabMenu from '../FabMenu';
import FAB from '../FAB';
import Button from '../Button';
import Highlight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class FabMenuPage extends React.Component {

    state={custom:false};

    render() {

        let document = [

            'import React from "react";',
            'import {FabMenu} from "react-material-design";',
            'export default class DefaultFabMenu extends React.Component {',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <FabMenu showAdd={1} ',
            '                       showCopy={2} ',
            '                       showSearch={3} ',
            '                       showEdit={4} ',
            '                       showPeopleAdd={5} ',
            '                       showDelete={6} ',
            '                       onAdd={this.onAdd} ',
            '                       onCopy={this.onCopy} ',
            '                       onDelete={this.onDelete} ',
            '                       onEdit={this.onEdit} ',
            '                       onPeopleAdd={this.onPeopleAdd} ',
            '                       onSearch={this.onSearch}/>',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

        let document2 = [

            'import React from "react";',
            'import {FabMenu,FAB} from "react-material-design";',
            'export default class Custom FabMenu extends React.Component {',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <FabMenu>',
            '                      <FAB switcherColor="#3f51b5" icon="share" icon="school" />',
            '                   </FabMenu>',
            '               </div>',
            '            )',
            '       }',
            '  }',

        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="FabMenu"/>
                <div style={{position: "relative", overflow: "hidden"}}>
                    <Button accent={this.state.custom} primary={!this.state.custom} raised onClick={()=>this.setState({custom:!this.state.custom})}>{this.state.custom ? "Default Fab Menu" : "Custom Fab Menu"}</Button>
                    {this.state.custom ?
                        <FabMenu switcherColor="#3f51b5">
                            <FAB icon="share"/>
                            <FAB icon="school"/>
                        </FabMenu>:

                    <FabMenu showAdd={1}
                             showCopy={2}
                             showDelete={6}
                             showEdit={4}
                             showPeopleAdd={5}
                             showSearch={3}
                             onAdd={()=>null}
                             onCopy={()=>null}
                             onDelete={()=>null}
                             onEdit={()=>null}
                             onPeopleAdd={()=>null}
                             onSearch={(p)=>console.log(p)}
                    />
                    }

                </div>
                <Highlight language="javascript">{document}</Highlight>
                <Highlight language="javascript">{document2}</Highlight>

                <CardHeader title="FabMenu properties"/>
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
                            <TableRowColumn>showAdd</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of add button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>showEdit</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of edit button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>showPeopleAdd</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of people add button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>showCopy</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of copy button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>showSearch</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of search button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>showDelete</TableRowColumn>
                            <TableRowColumn>Number</TableRowColumn>
                            <TableRowColumn>Index of delete button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>switcherColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of menu button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onAdd</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Fire when click to add button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onEdit</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Fire when click to edit button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onDelete</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Fire when click to delete button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onCopy</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Fire when click to copy button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onPeopleAdd</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Fire when click to people add button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onSearch</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn >Gives the text in search text field.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}