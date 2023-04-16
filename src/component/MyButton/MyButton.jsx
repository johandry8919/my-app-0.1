import React from "react";
import './Mybotton.css'



function MyButton(props) {
    const { MyButtons } = props;
    return (
      
            <button  className="button1  btn btn-primary w-100">{MyButtons}</button>
     
    );
  }


  export default MyButton