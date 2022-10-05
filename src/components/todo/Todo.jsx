import React, {useState} from "react";
import './style.css'

function Todo ({todolist}){
    
    return  ( 
    <div className = "ListBox" >
        <h2>{todolist.title}</h2>
        <h4>{todolist.content}</h4>
        <div className ="buttons">
        <button className = "buttonA">삭제하기</button>
        <button className = "buttonB">취소</button>
        </div>
    </div>    
)
}

function TodoList2({todolists}){

    return ( <div>
        {todolists.map(todolist => (
            <Todo todolist ={todolist} key = {todolist.id}/>
        ))}
    </div>
)
        }
export default TodoList2;