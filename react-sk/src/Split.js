import React, { useState } from 'react'
import Images from "./image/comp.jpeg"
function Modelbox() {
    const [Data,setData]=useState(false);
    const numbers = [1, 2];
    const moreNumbers = [...numbers, 3, 4];
    const [first, second, ...theRest] = [10, 20, 30, 40, 50];
    console.log(first);   
    console.log(theRest); 

    const user = { id: 1, username: "coder1", age: 25 };
    const { id, ...profileData } = user;
    console.log(profileData);

    const people = [
  {
    id: 1,
    name: "John Doe",
    age: 28,
    profession: "Software Engineer"
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 34,
    profession: "UX Designer"
  },
  {
    id: 3,
    name: "Alex Jones",
    age: 22,
    profession: "Data Analyst"
  }
];


  return (
    <>
        
        <h1>{numbers}</h1>
        <h1>{moreNumbers}</h1>
        <h1>{first}</h1>
        <h1>{second}</h1>
        <h1>{theRest}</h1>
        <h1>{profileData.age}</h1>
        <h1>{profileData.username}</h1>

            {<table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>age</th>
                        <th>dept</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((i)=>{
                        return(
                        <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.name}</td>
                        <td>{i.age}</td>
                        <td>{i.profession}</td>
                        </tr>)
                    })}
                </tbody>
            </table>}
    </>
  )
}

export default Modelbox
/ import {React, useState } from "react";
// import Modal from'./ModalBox.css'
// function ModalBox(){
//     const [Modal,setModal]=useState(false)

//     return(
//     <>
//     <div> ModalBox</div>
//         {
//             Modal ?<div className="modal">
//                 <span>Are you ok bro?</span>
//                 <button onClick={()=>setModal(false)}>ok  </button>
//             </div>:" "

//         }react-sk/src/WhatsApp Image 2026-10-07 at 15.03.19.jpeg
//         <button onClick={()=> setModal(true)}>confirm</button>

//         <div>
//         <button>x</button>    
//         <img 
        
//         ></img>
//         </div> 

// </>   ) }
// export default ModalBox