/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader,RadioButton,Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../../lib';
import HighLight from 'react-highlight.js'

export default class CardPage extends React.Component {


    render() {

        let document =
            `
import React from "react";
import {RadioButton} from "react-material-design";
export default class Example extends React.Component {
render() {
        return (
           <div style={{display: "flex" }}>
                <RadioButton name="same" label="Same 1" setChecked={true}/>
                <RadioButton name="same" label="Same 2"/>
                <RadioButton name="different 1" label="Different 1"/>
                <RadioButton name="different 2" label="Different 2" setDisabled={true}/>
            </div>
            )
        }
    }`;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Radio Button"/>
                <div style={{display:"flex"}}>
                    <RadioButton name={"same"} setChecked={true} label="Same 1"/>
                    <RadioButton name={"same"} label="Same 2"/>
                    <RadioButton name={"different 1"} label="Different 1"/>
                    <RadioButton name={"different 2"} setDisabled={true} label="Different 2" />
                </div>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="RadioButton properties"/>
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
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label for radio button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onChange</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gives the value of selected radio button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>isChecked</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gives the checked/unchecked of selected radio button..</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>isDisabled</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Gives the disabled/enabled of selected radio button..</TableRowColumn>
                        </TableRow>

                        <TableRow>
                            <TableRowColumn>setChecked</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Set selected/unselected radio button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>setDisabled</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>Set disabled/enabled radio button.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>name</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Name of radio buttons. If two radio button's name are same then you check only one of them.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}