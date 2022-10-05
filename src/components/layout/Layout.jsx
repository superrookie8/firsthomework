import React from "react";
import './style.css'

function Layout (props){
   return (
     <div className = "Layout-Style"> 
     {props.children}
    
     </div>
   )
}

export default Layout

