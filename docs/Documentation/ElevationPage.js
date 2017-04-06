/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react';
import {Card, CardHeader,Elevation,GridContainer, Grid,Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../../lib';
import HighLight from 'react-highlight.js'

export default class CardPage extends React.Component {


    render() {

        let document = [
            'import React from "react";',
            'import {Elevation} from "react-material-design";',
            'export default class Example extends React.Component {',
            '     render(){',
            '           return (',
            '               <div>',
            '                   <Elevation style="width: 150px;height:150px;" zIndex={5}>',
            '                   </Elevation>',
            '               </div>',
            '            )',
            '       }',
            '  }',
        ].join('\n');

        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Elevation"/>
                <div>
                    <GridContainer>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={1}>
                                <div style={{padding: 20}}>Z-index 1</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={2}>
                                <div style={{padding: 20}}>Z-index 2</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={3}>
                                <div style={{padding: 20}}>Z-index 3</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={4}>
                                <div style={{padding: 20}}>Z-index 4</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={5}>
                                <div style={{padding: 20}}>Z-index 5</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={6}>
                                <div style={{padding: 20}}>Z-index 6</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={7}>
                                <div style={{padding: 20}}>Z-index 7</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={8}>
                                <div style={{padding: 20}}>Z-index 8</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={9}>
                                <div style={{padding: 20}}>Z-index 9</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={10}>
                                <div style={{padding: 20}}>Z-index 10</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={11}>
                                <div style={{padding: 20}}>Z-index 11</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={12}>
                                <div style={{padding: 20}}>Z-index 12</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={13}>
                                <div style={{padding: 20}}>Z-index 13</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={14}>
                                <div style={{padding: 20}}>Z-index 14</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={15}>
                                <div style={{padding: 20}}>Z-index 15</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={16}>
                                <div style={{padding: 20}}>Z-index 16</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={17}>
                                <div style={{padding: 20}}>Z-index 17</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={18}>
                                <div style={{padding: 20}}>Z-index 18</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={19}>
                                <div style={{padding: 20}}>Z-index 19</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={20}>
                                <div style={{padding: 20}}>Z-index 20</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={21}>
                                <div style={{padding: 20}}>Z-index 21</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={22}>
                                <div style={{padding: 20}}>Z-index 22</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={23}>
                                <div style={{padding: 20}}>Z-index 23</div>
                            </Elevation>
                        </Grid>
                        <Grid col={4} tablet={4} phone={4}>
                            <Elevation zIndex={24}>
                                <div style={{padding: 20}}>Z-index 24</div>
                            </Elevation>
                        </Grid>
                    </GridContainer>
                </div>
                <HighLight source="javascript">
                    {document}
                </HighLight>

                <CardHeader title="Elevation properties"/>
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
                            <TableRowColumn>You can set shadow level by shadow props</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}