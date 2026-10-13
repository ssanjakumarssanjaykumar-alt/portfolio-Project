// // import { useState } from "react";
// import {React,useState} from "react";
// const Project =()=>{

//     const[value,setValue]=useState(0);
// // function Project(){/         <div>
// //             <h1>HASHIRAMA</h1>
// //         </div>
// const value={
//     name:"sanjay":
// }
// function inc(){
//     console.log(value+1);
// }
//    return(
// <>
// {value}
// <button onClick={inc }>increas</button>
// </>
//     )
// }
// export default Project;

import App from "./App";
import './App.css'
import { React,use,useState } from "react";



 function Usestate(){
    //  const [Data,setData]=useState(0);
    //  const [hide,sethide]=useState(0);
      // const [Value,setValue]=useState(false);
    //  const [Regester,setregester]=useState();
      const [Email,setEmail]=useState();
     const [Age,setAge]=useState(0);
    //  const [change,setchange]=useState();
    const [submit,setsubmit]=useState();


     const [Values,setValues]=useState(
     {
      name:"sanjay",
      id:86,
      age:20,
      dept:"IT",
      mark:85
     })

  // function getData(event){
  //   console.log(event.target.value)
  // }
  //   function regester(event){
  //   setregester(event.target.value)
  //  console.log(event.target.value)
  // }
  // function Emails(event){
  //   setEmail(event.target.value)
  //  console.log(event.target.value)
  // }
  // function age(event){
  //   setAge(event.target.value)
  //  console.log(event.target.value)
  // }
  //  function handlesubmit(event){
  //    event.preventDefault();
  //    alert([Data,Email])
  //  } 

   function change(event){
    setValues({
      ...Values,
      name:event.target.Values
    })
   }  
  function S(event){
    event.prevenDefault();
    setValues(
      {
      ...Values,
      name: Values.name,
      age: Values.age
          
      }
      )

  }
     
    return(
       <>
       <div>
        {Values.name}

       {/* <div style={{backgroundColor: (Value) ? "white":"black",height:"100vh"}}> */}
        
        <h1>hello</h1>

        
        {/* <span style={{cursor:"not-allowed"}}on onClick={setData}>{Value ?"☀️":"🌙"}</span> */}
        {/* <button onClick={()=>setValue(!Value)}>{Value ?"☀️":"🌙"}</button> */}
        {/* <button onClick={()=>sethide(!hide)}>hide</button> */}
        {/* {hide && <p>sakthivel</p>}
        <button onClick={()=>setData(Data+1)}>INCREMENT</button>
        <button onClick={()=>setData(Data-1)}>DECREMENT</button>
        <h2>{Data}</h2>
        <h3>{Email}</h3>
        
        <form onSubmit={handlesubmit}> */}
            {/* <input onChange={getData}/> */}
             <form onSubmit={submit}>
            <ladel>Name</ladel><br /><input onChange={change} name={"name"} placeholder="Enter Your name"/><br/>
            <label>Email</label><br /><input onChange={Email}/><br />
            <label>age</label><br /><input onChange={change} name={"age"} /><br />
            <button onClick={submit}>submit</button>
            </form> 
            {/* <button type="submit">submit</button> */}
            {/* <input onChange={(event)=>{setData(event.target.value)}}></input> */}
        {/* </form> */}
       </div>
        
       </>
    )
 }
 export default Usestate;