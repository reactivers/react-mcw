import React from 'react'
import PropTypes from 'prop-types';
import {List, ListItem} from '../List';
import WaveEffect from '../WaveEffect'

export default class Acordion extends React.Component {
    state = {};

    static propTypes = {
        data: PropTypes.array,
        label: PropTypes.string,
        open: PropTypes.bool,
        child: PropTypes.any,
        waveEffect: PropTypes.any,
        light: PropTypes.any,
        onClick: PropTypes.func,
    };

    selectItem(index,element){
        if(this.state.index !== index)
            this.setState({index},()=>this.props.onClick && this.props.onClick());
        else
            this.setState({index: -1},()=>this.props.onClick && this.props.onClick())
    }

    render() {
        let {label,data,open,dscField,child,waveEffect,light,...otherProps} = this.props;

        if(!data){
            data = [{dsc:label}];
            dscField = "dsc"
        }else {
            if(!dscField){
                dscField = "dsc";
            }
        }
        return (
            <List {...otherProps}>
                {data && data.map((item,index)=>
                    <div key={index}>
                        {waveEffect ?
                            <WaveEffect light={light}>
                                <ListItem onClick={this.selectItem.bind(this,index)} >
                                    {item[dscField]}
                                </ListItem>
                            </WaveEffect>
                            :
                        <ListItem onClick={this.selectItem.bind(this,index)} >
                            {item[dscField]}
                        </ListItem>
                        }
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