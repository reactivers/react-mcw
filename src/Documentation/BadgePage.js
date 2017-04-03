/**
 * Created by muratguney on 29/03/2017.
 */
import React from 'react'
import {Card, CardHeader} from '../Card';
import Badge from '../Badge';

export default class BadgePage extends React.Component {
    state = {};

    render() {
        return (
            <Card style={{justifyContent: "flex-start", height: "100%",minHeight:300}}>
                <CardHeader title="Title"/>
                <Badge className="wave-effect" iconName="notifications" buttonStyle={{}} style={{margin:"0 auto",backgroundColor:"blue"}} badgeStyle={{}}
                       onClick={() => {}} label="10"/>
            </Card>
        )
    }
}