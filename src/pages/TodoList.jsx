import React, {useState} from "react";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";
import Layout from "../components/layout/Layout";




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
    title : "리액트 정복하기",
    content : "꿈은 클수록..  ",
    isDone: false,
  
  },
  {
    id:3,
    title : "리액트 코드 읽기",
    content : "이게 왜 되지? ",
    isDone: false,
  
  },
  
  
  ])
 
  console.log(todolists)



  return (
  <Layout>
    <Header/>
    <Form todolists = {todolists} setTodolists = {setTodolists}/>
     <List todolists = {todolists} setTodolists = {setTodolists}/>
  </Layout>
  )
  }

export default TodoList;
