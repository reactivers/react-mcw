import React from 'react'
import {Card, CardHeader, CardActions, CardBody} from '../Card';
import {List, ListItem} from '../List';
import './main.css'


export default class Acordion extends React.Component {
    state = {};

    selectItem(index,element){
        if(this.state.index !== index)
            this.setState({index},()=>this.props.onClick && this.props.onClick());
        else
            this.setState({index: -1},()=>this.props.onClick && this.props.onClick())
    }

    render() {
        let {label,data,open} = this.props;
        if(!data){
            data = [{dsc:label}]
        }
        return (
            <List>
                {data && data.map((item,index)=>
                    <div key={index}>
                        <ListItem onClick={this.selectItem.bind(this,index)} >
                            {item.dsc}
                        </ListItem>
                        <div style={{
                            maxHeight:(open || this.state.index === index) ? 5000 : 0,
                            marginLeft:(open || this.state.index === index) ? 0 : -40,
                            opacity:(open || this.state.index === index) ? 1 : 0,
                            pointerEvents:(open || this.state.index === index) ? "auto" : "none",
                            transition:"1s",
                        }}>
                            {this.props.child ?
                                <this.props.child item={item} index={index}/>
                                :
                                this.props.children
                            }
                        </div>
                    </div>
                )}
            </List>
        )
    }
}


/*
 selectItem(index,element){

 if(!this.target) {
 this.target = element.target;
 this.setState({index});
 }
 else{
 this.target.classList.remove('rmd-acordion-item');
 this.target.parentElement.parentElement.classList.remove('rmd-acordion-item-fade-in-from-left');
 this.setState({a:Math.random()});
 this.target.classList.add('rmd-acordion-item-close');
 this.target.parentElement.parentElement.classList.add('rmd-acordion-item-fade-out-to-left');
 this.setState({a:Math.random()});
 console.log(this.target);

 setTimeout(function () {
 this.target.classList.add('rmd-acordion-item');
 this.target.parentElement.parentElement.classList.add('rmd-acordion-item-fade-in-from-left');
 this.setState({index});
 }.bind(this),10000);
 this.target = element.target

 }

 }

 render() {
 return (
 <List className="rmd-acordion">
 {this.props.data && this.props.data.map((item,index)=>
 <div className="rmd-acordion-item-fade-in-from-left" key={index}>
 <ListItem  className="rmd-acordion-item"  onClick={this.selectItem.bind(this,index)} >
 {item.dsc}
 </ListItem>
 <div >
 {this.state.index === index && <this.props.child item={item} index={index} /> }
 </div>
 </div>
 )}
 </List>
 )
 }
 */