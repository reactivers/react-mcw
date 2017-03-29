/**
 * Created by muratguney on 29/03/2017.
 */
import React, {Component} from 'react';
import '../App.css';
import {AppBar, AppBarTitle} from '../AppBar/index'
import IconButton from '../IconButton';
import Icon from '../Icon'
import Drawer from '../Drawer';
import {List, ListItem} from '../List';
import FabMenu from '../FabMenu'
import FabButton from '../FAB/index'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {Grid,GridContainer} from '../Grid/index';


export default class CardPage extends React.Component{
    render(){
        return(
            <Card shadow={10}>
                <CardHeader title="Card" />
                <CardBody>
                    <h4>Props</h4>
                    <List>
                        <ListItem>Yok</ListItem>
                    </List>
                </CardBody>
            </Card>
        )
    }
}