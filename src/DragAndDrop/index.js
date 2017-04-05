import React from 'react'

export default class DragAndDrop extends React.Component{

    state={};


    componentDidMount() {
        this.oldMouseDown = document.onmousedown;
        this.oldMouseUp = document.onmouseup;

        document.onmouseup = function (e) {
            this.setState({dad: false});
            this.oldMouseUp && this.oldMouseUp(e)
        }.bind(this);

        document.onmousedown = function (e) {
            if (e.target.classList.value.indexOf("rmd-draggable") > -1) {
                let dad = e.target;
                let position = dad.getBoundingClientRect();
                let dadOffsetX = parseInt(dad.style.left);
                let dadOffsetY = parseInt(dad.style.top);
                if(!dadOffsetX)
                    dadOffsetX = 0;
                if(!dadOffsetY)
                    dadOffsetY = 0;

                if(!this.state.initial){
                    this.setState({initial:{x:position.left - dadOffsetX,y:position.top - dadOffsetY,parentHeight:e.srcElement.offsetParent.clientHeight,parentWidth:e.srcElement.offsetParent.clientWidth}})
                }
                this.setState({dad: true,offset:{x:(e.clientX - position.left),y:(e.clientY - position.top)}});
            }
            this.oldMouseDown && this.oldMouseDown(e)
        }.bind(this);

        document.onmousemove = function (e) {
            let dad = e.target;
            let position = dad.getBoundingClientRect();


            let dadOffsetX = parseInt(dad.style.left);
            let dadOffsetY = parseInt(dad.style.top);
            if(!dadOffsetX)
                dadOffsetX = 0;
            if(!dadOffsetY)
                dadOffsetY = 0;


            if (this.state.dad && e.target.classList.value.indexOf("rmd-draggable") > -1) {

                const isRightEdgeOut = (dadOffsetX + position.width) <= this.state.initial.parentWidth;
                const isMouseDragToLeft =  e.clientX < (position.left + this.state.offset.x);

                const isBottomEdgeOut = (dadOffsetY + position.height) <= this.state.initial.parentHeight;
                const isMouseDragToTop =  e.clientY < (position.top + this.state.offset.y);

                const isTopEdgeOut = (e.clientY - position.top) + dadOffsetY - this.state.offset.y >= 0;
                const isMouseDragToBottom = e.clientY > (position.top + this.state.offset.y);

                const isLeftEdgeOut = (e.clientX - position.left) + dadOffsetX - this.state.offset.x >=0;
                const isMouseDragToRight = e.clientX > (position.left + this.state.offset.x);

                if(!this.props.limitToEdge || (isRightEdgeOut ||isMouseDragToLeft) && (isBottomEdgeOut || isMouseDragToTop ) && (isTopEdgeOut || isMouseDragToBottom) && (isLeftEdgeOut || isMouseDragToRight) ){

                    dad.style.left = ((e.clientX - position.left) + dadOffsetX - this.state.offset.x + 'px');
                    dad.style.top = ((e.clientY - position.top) + dadOffsetY - this.state.offset.y  + 'px');

                }

            }

        }.bind(this)
    }


    render(){

        return null
    }

}
