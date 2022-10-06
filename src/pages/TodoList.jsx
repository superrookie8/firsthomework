import React, {useState} from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Todo from "../components/todo/Todo";
import Layout from "../components/layout/Layout";
import { isDocument } from "@testing-library/user-event/dist/utils";



function TodoList() {

  const [todolists, setTodolists] = useState([
    {
    id:1,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isDone: false,
  
  },
  {
    id:2,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isDone: false,
  
  },
  {
    id:3,
    title : "리액트 어려워",
    content : "코드 보다가 뒤집어 지겠다 ",
    isDone: false,
  
  },
  
  
  ])
 
  console.log(todolists)
// const initialState = {
//     id: 0,
//     title: "",
//     content: "",
//     isDone: false,
// }; 
// const [inputs, setInputs] = useState(initialState);
 
//   // const [nextId, setNextId] = useState({})
//   // const [isdone, setIsdone] = useState(false)
// const {title, content, id, isdone} = inputs
// const onChange = (e) => {
//     const {name, value} = e.target;

//     setInputs({
//         ...inputs,
//         [name]:value,
//     })

// }

// const onSubmit = () => {
//   const todolist = {
//     id,
//     title,
//     content,
//     isdone,
//   }

//   setTodolists([...todolists, todolist])

  

// setInputs({
//   id : id,
//   title : title,
//   content :content,
//   isdone: false,
// })
// };




// const onSubmitHandler = (event) => {

//   event.preventDefault();

//   if (inputs.title.trim()=== "" || inputs.content.trim() === "") return;
//   setTodolists([...todolists,{...todolist, id:number}])
//   setInputs(initialState);
//   number++;

// }

 



// console.log(inputs)


  return (
  <Layout>
    <Header/>
    <Form todolists = {todolists} setTodolists = {setTodolists}/>
     <List todolists = {todolists} setTodolists = {setTodolists}/>
  </Layout>
  )
  }

export default TodoList;
