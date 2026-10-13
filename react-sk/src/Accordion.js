import React, { useState } from "react";
import './App.css'
import './Accordion.css'

const Accordion=()=>{
    const [open,setopen]=useState(false);
    function expand(){
        setopen(!open)
    }
    const mass=[
        {id:1,title:"accordion 1",para:" 1"},
        {id:2,title:"accordion 2",para:" 2"}
    ]
    function handleId(id){
        console.log(id)
        // setopen(id)
        setopen(open == id ? null : id)
    }
    
    return(
        <>
            {
                mass.map((res) => {
                   return(
                      <>
                        <p className="head" onClick={()=> handleId(res.id)}>{res.title}</p>  
                        {/* {res.id} */}
                        {open ==res.id ? <p>{res.para}</p>:""}
                      </>
                    ) 
                })
            }
{open}
        </>

    )
}

export default Accordion;