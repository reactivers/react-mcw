/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {Tab,Tabs} from '../Tab';


export default class CheckBoxPage extends React.Component{
    render(){
        return(
            <Card style={{justifyContent: "flex-start",height:"100%"}}>
                <CardHeader title="Title" />
                <Tabs >
                    <Tab label="Okan">
                        <span>Deneme</span>
                    </Tab>
                    <Tab label="Murat">
                        <span>Deneme 2</span>
                    </Tab>
                </Tabs>
            </Card>
        )
    }
}