/**
 * Created by Utku on 26/03/2017.
 */
import React,{PropTypes} from 'react';
import '@material/layout-grid/dist/mdc.layout-grid.css';
import classNames from 'classnames';

export class GridContainer extends React.PureComponent {
    render() {
        return (
            <div className="mdc-layout-grid" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}
export class Grid extends React.PureComponent {
    render() {
        const {col,tablet,phone,...otherProps}=this.props;
        const gridClasses = classNames("mdc-layout-grid__cell", {
            ["mdc-layout-grid__cell--span-" + this.props.col]: this.props.col,
            ["mdc-layout-grid__cell--span-" + this.props.tablet + "-tablet"]: this.props.tablet,
            ["mdc-layout-grid__cell--span-" + this.props.phone + "-phone"]: this.props.phone
        })
        return (
            <div className={gridClasses} {...otherProps}>
                {this.props.children}
            </div>
        )
    }

    static propTypes = {
        col: PropTypes.number,
        tablet: PropTypes.number,
        phone: PropTypes.number,
    }
}

/*
 <Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid>
 <Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid>
 <Grid col="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col3</Card></Grid><Grid col="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col3</Card></Grid><Grid col="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col3</Card></Grid><Grid col="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col3</Card></Grid>
 <Grid col="4"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4</Card></Grid><Grid col="4"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4</Card></Grid><Grid col="4"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4</Card></Grid>
 <Grid col="5"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col5</Card></Grid><Grid col="5"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col5</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid>
 <Grid col="6"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col6</Card></Grid><Grid col="6"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col6</Card></Grid>
 <Grid col="7"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col7</Card></Grid><Grid col="5"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col5</Card></Grid>
 <Grid col="8"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col8</Card></Grid><Grid col="4"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4</Card></Grid>
 <Grid col="9"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col9</Card></Grid><Grid col="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col3</Card></Grid>
 <Grid col="10"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col10</Card></Grid><Grid col="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col2</Card></Grid>
 <Grid col="11"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col11</Card></Grid><Grid col="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col1</Card></Grid>
 <Grid col="12"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col12</Card></Grid>
 <Grid col="4" tablet="1" phone="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet1-phone1</Card></Grid>
 <Grid col="4" tablet="5" phone="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet5-phone1</Card></Grid>
 <Grid col="4" tablet="2" phone="2"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet2-phone2</Card></Grid>
 <Grid col="4" tablet="4" phone="1"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet4-phone1</Card></Grid>
 <Grid col="4" tablet="4" phone="3"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet4-phone3</Card></Grid>
 <Grid col="4" tablet="8" phone="4"><Card style={{backgroundColor : "#3F51B5",color:"white",display: "flex",justifyContent:"center",alignItems : "center",height : "100px",textAlign : "center"}}>col4-tablet8-phone4</Card></Grid>

 */