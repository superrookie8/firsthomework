import React, {useState} from "react";
import Todo from "../todo/Todo";
import './style.css'

function List ({todolists, setTodolists}){

const onDeleteHandler = (inputsId)=> {
     const newTodolists = todolists.filter((inputs) =>{
     return inputs.id !== inputsId; });

     setTodolists(newTodolists); 
}


const onEditHandler = (inputsId) => {
    const newTodolists = todolists.map((inputs) => {
        if( inputs.id === inputsId) {
        return {...inputs, isDone :!inputs.isDone};
    } else {
        return {...inputs};
    }
    
});     
 setTodolists(newTodolists);
}
     
     const Done = todolists.filter((item) => item.isDone === true);

    return  ( 
<div>
    <div><h2 className = "WorkingTitle">Working..</h2></div> 
    <div className = "DivBoxes1"> {
        todolists.map((inputs)=> {
            if (!inputs.isDone){
                return (
                    <Todo 
                        inputs = {inputs} 
                        key = {inputs.id}
                        setTodolists = {setTodolists}
                        onDeleteHandler = {onDeleteHandler}
                        onEditHandler={onEditHandler}/>

                )
            } else {
                return null;
            }
        })}
    </div>
   
    <div><h2 className = "DoneTitle">Done!!!</h2></div>
    <div className = "DivBoxes2"> 
    {  todolists.map((inputs)=> {
        if (inputs.isDone) {
            return(
                <Todo 
                    inputs = {inputs} 
                    key = {inputs.id}
                    setTodolists = {setTodolists}
                    onDeleteHandler = {onDeleteHandler}
                    onEditHandler={onEditHandler}/>
            );
        } else {
            return null;
        }
    })}
    </div>  
</div>
)
}

export default List;