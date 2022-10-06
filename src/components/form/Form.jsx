import React, {useState} from "react";
import './style.css'

let number =4;
function Form ({ todolists, setTodolists}){
  //Todolist에서 가져온 props 값들 
  const initialState = {
    id: 0,
    title: "",
    content: "",
    isDone: false,
};  //초기값 
const [inputs, setInputs] = useState(initialState);
//useState 선언 , 초기값 설정. inputs

const {title, content} = inputs
const onChangeHandler = (e) => {
    const {name, value} = e.target;
    //구조분해할당??? title, content 값을 가져올 예정 

    setInputs({...inputs,[name]:value });
    



}

const onSubmitHandler = (event) => {
  event.preventDefault();

  if (inputs.title.trim()=== "" || inputs.content.trim() === "") {return;

  // if(id>0){return id+1 } = if(id>0) return id +1
  }
  setTodolists([...todolists,{...inputs, id:number}])
  setInputs(initialState);
  number++;

};


      
    return (
    <form onSubmit={onSubmitHandler} className = "FormBox" >
        <div className = "InputBoxes"  >
            <div className = "label1"> 
                        <label for = "제목" className = "title"> 제목</label>
                        <input className = "Input1"
                        name = "title"
                        onChange = {onChangeHandler}
                        value = {title}
                    />
     
           
                    <label for = "내용" className = "content"> 내용</label>
                    <input className = "Input2"
                        name = "content"
                        onChange = {onChangeHandler}
                        value = {content}
                        /> 
            
             </div>  
   </div>
     <button className = "Button1" >추가하기</button>       

    </form> 
      )};

export default Form; 

