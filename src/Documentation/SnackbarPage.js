/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader} from '../Card';
import Snackbar from '../Snackbar';
import Button from '../Button';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';

export default class CardPage extends React.Component {

    state = {open: false};

    render() {
        let document = `
<Snackbar open={this.state.open} message="Snackbar message" timeout={1000} multiline 
    onClose={this.handleOnClose} buttonText="Close"  />
<Button primary onClick={this.openSnackbar}>Open Snackbar</Button>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Snackbar"/>
                <Snackbar open={this.state.open} message={"Snackbar message"} timeout={1000}
                          onClose={() => this.setState({open: false})} buttonText={"Close"} multiline/>
                <Button primary onClick={() => this.setState({open: !this.state.open})}>Open Snackbar</Button>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Snackbar properties"/>
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
                            <TableRowColumn>open</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Switch of snackbar.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>message</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Description on snackbar.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>multiline</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, snackbar's height changes.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>bottonOnBottom</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, button shown on the bottom.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>buttonText</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>buttonColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>barColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of snackbar's bar.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>barTextColor</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Color of snackbar's label.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClose</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Fires when timeout or click the button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>timeout</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>The time of snackbar's lifecyle.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}