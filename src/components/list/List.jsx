import React, {useState} from "react";
import Form from '../form/Form' 
import Todo from "../todo/Todo";
import './style.css'

function List (props){

    return  ( 
<div>
    <div><h2 className = "WorkingTitle">Working..</h2></div> 
    <div className = "DivBoxes1"> {props.children}
    </div>
   
    <div><h2 className = "DoneTitle">Done!!!</h2></div>
    <div className = "DivBoxes2">{props.children}
     </div>
    
    
</div>
)
}

export default List;