/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Acordion from '../Acordion';
import Switch from '../Switch';
import HighLight from 'react-highlight.js'
import {Table, TableRow, TableHeaderColumn, TableHeader, TableRowColumn, TableBody} from '../Table';


const data2 = [
    {dsc: "List 7",id:1},
    {dsc: "List 8",id:1},
    {dsc: "List 9",id:1},
    {dsc: "List 10",id:1},
    {dsc: "List 11",id:1},
    {dsc: "List 12",id:1},
];
const data3 = [
    {dsc: "List 13",id:2},
    {dsc: "List 14",id:2},
    {dsc: "List 15",id:2},
    {dsc: "List 16",id:3},
    {dsc: "List 17",id:3},
    {dsc: "List 18",id:3},
];
const data4 = [
    {dsc: "List 19"},
    {dsc: "List 20"},
    {dsc: "List 21"},
    {dsc: "List 22"},
    {dsc: "List 23"},
    {dsc: "List 24"},
];

const data5 = [
    {dsc: "List 25"},
    {dsc: "List 26"},
    {dsc: "List 27"},
    {dsc: "List 28"},
    {dsc: "List 29"},
    {dsc: "List 30"},
];



const data1 = [
    {dsc: "List 1",id:1,children:data2},
    {dsc: "List 2",id:2,children:data3},
    {dsc: "List 3",id:3,children:data4},
    {dsc: "List 4",id:4,children:data5},
    {dsc: "List 5",id:5},
    {dsc: "List 6",id:6},
];

export default class CardPage extends React.Component {

    render() {
        let document = `


const data2 = [
    {dsc: "List 7",id:1},
    {dsc: "List 8",id:1},
    {dsc: "List 9",id:1},
    {dsc: "List 10",id:1},
    {dsc: "List 11",id:1},
    {dsc: "List 12",id:1},
];
const data3 = [
    {dsc: "List 13",id:2},
    {dsc: "List 14",id:2},
    {dsc: "List 15",id:2},
    {dsc: "List 16",id:3},
    {dsc: "List 17",id:3},
    {dsc: "List 18",id:3},
];
const data4 = [
    {dsc: "List 19"},
    {dsc: "List 20"},
    {dsc: "List 21"},
    {dsc: "List 22"},
    {dsc: "List 23"},
    {dsc: "List 24"},
];

const data5 = [
    {dsc: "List 25"},
    {dsc: "List 26"},
    {dsc: "List 27"},
    {dsc: "List 28"},
    {dsc: "List 29"},
    {dsc: "List 30"},
];



const data1 = [
    {dsc: "List 1",id:1,children:data2},
    {dsc: "List 2",id:2,children:data3},
    {dsc: "List 3",id:3,children:data4},
    {dsc: "List 4",id:4,children:data5},
    {dsc: "List 5",id:5},
    {dsc: "List 6",id:6},
];


<Acordion label="İlk">
    <Acordion label="İki" />
    <Acordion label="Üç" />
    <Acordion label="Dört" />
</Acordion>
<Acordion label="Ana">
    <Acordion label="İki" />
    <Acordion label="Üç" />
    <Acordion label="Dört" />
</Acordion>


<Acordion itemHeight={48} data={data1} child={(child,index)=> {
        if(child.item.children)
        return(
            <Acordion data={child.item.children} child={(child2,index2)=>{
                return(
                    <Card style={{justifyContent: "flex-start",height:"100%"}}>
                        <CardHeader title="Title"/>
                        <CardBody>{child2.item.dsc}</CardBody>
                    </Card>
                )
            }} />
        );
        else {
            return(
            <span>Empty Acordion</span>
            )
        }
    }
    }>
</Acordion>
    `;
        return (
            <Card style={{padding: 8}}>
                <CardHeader title="Acordion"/>
                    <Acordion label="İlk">
                        <Acordion label="İki" />
                        <Acordion label="Üç" />
                        <Acordion label="Dört" />
                    </Acordion>
                    <Acordion label="Ana">
                        <Acordion label="İki" />
                        <Acordion label="Üç" />
                        <Acordion label="Dört" />
                    </Acordion>


                    <Acordion itemHeight={48} data={data1} child={(child,index)=> {
                        if(child.item.children)
                            return(
                                <Acordion data={child.item.children} child={(child2,index2)=>{
                                    return(
                                        <Card style={{justifyContent: "flex-start",height:"100%"}}>
                                            <CardHeader title="Title"/>
                                            <CardBody>{child2.item.dsc}</CardBody>
                                        </Card>
                                    )
                                }} />
                            );
                        else {
                            return(
                                <span>aaa</span>
                            )
                        }
                    }
                    }>
                    </Acordion>
                <HighLight source="javascript">
                    {document}
                </HighLight>
                <CardHeader title="Acordion properties"/>
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
                            <TableRowColumn>data</TableRowColumn>
                            <TableRowColumn>Array</TableRowColumn>
                            <TableRowColumn>You can send your json-array data.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>label</TableRowColumn>
                            <TableRowColumn>String</TableRowColumn>
                            <TableRowColumn>Label of acordion item.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>open</TableRowColumn>
                            <TableRowColumn>Boolean</TableRowColumn>
                            <TableRowColumn>If true, acordion shows open.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>child</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>Function should return a component.</TableRowColumn>
                        </TableRow>
                        <TableRow>
                            <TableRowColumn>onClick</TableRowColumn>
                            <TableRowColumn>Function</TableRowColumn>
                            <TableRowColumn>You can set what does do after click the acordion item.</TableRowColumn>
                        </TableRow>
                    </TableBody>
                </Table>
            </Card>
        )
    }
}