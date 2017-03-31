/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import Badge from '../Badge';
import {List, ListItem} from '../List';


export default class BadgePage extends React.Component {
    state = {};

    render() {
        return (
            <Card style={{justifyContent: "flex-start", height: "100%",minHeight:300}}>
                <CardHeader title="Title"/>
                <Badge iconName="notifications" buttonStyle={{}} style={{margin:"0 auto"}} badgeStyle={{}}
                       onClick={() => {}} label="10"/>
            </Card>
        )
    }
}