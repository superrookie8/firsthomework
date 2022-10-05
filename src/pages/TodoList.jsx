import React, {useState} from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";
import Layout from "../components/layout/Layout";
import { isDocument } from "@testing-library/user-event/dist/utils";

function TodoList() {
 
  const [todos, setTodos] = useState([
    {
    id:1,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isdone: false,

  },
  {
    id:2,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isdone: false,

  },
  {
    id:3,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isdone: false,

  },


])
  // const [nextId, setNextId] = useState({})
  // const [isdone, setIsdone] = useState(false)
// const {title, content, id, isdone} = inputs
// const onChange = (e) => {
//     const {name, value} = e.target.value;

//     setInputs({
//         ...inputs,
//         [name]:value,
//     })

// }

// const [todolists, setTodolists] = useState([
//   {
//     id :1, 
//     title : "리액트 공부하기",
//     content : "어렵지만 해내기",
//     isdone: false
//   }

// ])


// const onSubmit = () => {
//   const todolist = {
//     id,
//     title,
//     content,
//     isdone,
//   }
//   setTodolists([...todolists,todolist])

// setInputs({
//   id : id,
//   title : title,
//   content :content,
//   isdone: isdone,
// })
// };



// console.log(inputs)


  return (
  <Layout>
    <Header/>
    <Form
           title = {title}
        content = {content}
        onChange={onChange}
        onSubmit={onSubmit} 
     
     />
      
     <List>
        <Todo TodoList todolists = {todolists}/>
     </List>  
  </Layout>
  )
  }

export default TodoList;

console.log(TodoList)