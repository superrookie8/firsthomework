import React from "react";
import './style.css'

function Form ({ title, content, onChange, onSubmit}){
      
    return (
    <div className = "FormBox">
        <div className = "InputBoxes">
            <div className = "label1"> 
                        <label for = "제목" className = "title"> 제목</label>
                        <input className = "Input1"
                        name = "title"
                        onChange = {onChange}
                        value = {title}
                    />
     
           
                    <label for = "내용" className = "content"> 내용</label>
                    <input className = "Input2"
                        name = "content"
                        onChange = {onChange}
                        value = {content}
                        /> 
            
             </div>  
   </div>
     <button className = "Button1" onClick = {onSubmit} >추가하기</button>       

    </div> 
      )};

    //   <List formName ={title, content}/>

export default Form; 

