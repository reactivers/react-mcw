/**
 * Created by Utku on 23/06/2017.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {DatePicker,AutoComplete,Button} from './index'
export default class ComponentTestPage extends React.Component {
    render() {
        return (
            <div style={{display:'flex',alignItems : 'center',justifyContent : 'center'}}>
            <DatePicker open={undefined}/>
            </div>
        )
    }
}
ReactDOM.render(
    <ComponentTestPage/>, document.getElementById("root")
);
//