import React, {useState} from "react";
import './style.css'

function Todo ({inputs, onDeleteHandler, onEditHandler}){
    
    return  ( 
    <div className = "ListBox" >
        <h2>{inputs.title}</h2>
        <h4>{inputs.content}</h4>
        <div className ="buttons">
        <button onClick ={() => onDeleteHandler (inputs.id)} className = "buttonA">삭제</button>
        <button onClick={() => onEditHandler (inputs.id)} className = "buttonB">{inputs.isDone ? "취소" : "완료"}</button>
        
        </div>
    </div>    
)
}

// function TodoList2({todolists}){

//     return ( <div>
//         {todolists.map(todolist => (
//             <Todo todolist ={todolist} key = {todolist.id}/>
//         ))}
//     </div>
// )
//         }
export default Todo;