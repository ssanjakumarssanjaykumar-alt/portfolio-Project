// import {React,useState} from 'react'

// function Time(){
//     const {status,setSatus}=useState("");
//     constCtime=new Date().toLocaleTimeString();
//     console.log(Ctime);
//     if(Ctime>="16:10:00"&&status!="grey"){
//         console.log("System is offline")
//         setStatus("grey")
//     }
//     return(
//         <><div>
//        {/* <div style={{width:"100%",height:"100vh",backgroundColor:status}}> */}
//             colour
//             {status}
//         </div>
//         </>
//     )
// }
// export default Time;
// import App from "./App";
// import { React,useState } from "react";



//  function Usestate(){
//      const [Data,setData]=useState(0);
//      const [hide,sethide]=useState(0);
//      const [Value,setValue]=useState(false);
//      const [Regester,setRegester]=useState();
//      const [Email,setEmail]=useState();

//   function getData(event){
//     console.log(event.target.value)
//   }
//     function Regester(event){
//     setRegester(event.target.value)
//    console.log(event.target.value)
//   }
//   function Emails(event){
//     setEmail(event.target.value)
//    console.log(event.target.value)
//   }
//    function handlesubmit(event){
//      event.preventDefault();
//      alert([Data,Email])
//    }   

     
//     return(
//        <>
//        <div style={{backgroundColor: (Value) ? "white":"black",height:"100vh"}}>
        
//         <h1>hello</h1>
//         <span style={{cursor:"not-allowed"}}on onClick={setData}>{Value ?"☀️":"🌙"}</span>
//         <button onClick={()=>setValue(!Value)}>{Value ?"☀️":"🌙"}</button>
//         <button onClick={()=>sethide(!hide)}>hide</button>
//         {hide && <p>sakthivel</p>}
//         <button onClick={()=>setData(Data+1)}>INCREMENT</button>
//         <button onClick={()=>setData(Data-1)}>DECREMENT</button>
//         <h2>{Data}</h2>
//         <h3>{Email}</h3>
        
//         <form onSubmit={handlesubmit}>
//             <input onChange={getData}/>
//             <button type="submit">submit</button>
//             Name: <input onChange={Regester}/><br/>
//             Email:<input onChange={Emails}/><br />
//             <input onChange={(event)=>{setData(event.target.value)}}></input>
//         </form>
//        </div>
        
//        </>
//     )
//  }
//  export default Usestate;
import React, { useState } from "react";
import './App.css'

const Accordion=()=>{
    const [open,setopen]=useState(false);
    function expand(){
        setopen(!open)
    }
    
    return(
        <>

        <p className="head" onClick={expand}>Accordion 1</p>
       {open ? <p>AboutAnimals Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.</p>:""}
        <p className="head" onClick={expand}>Accordion 2</p>
       {open ? <p>Origin:The word comes from a shortening of the English word "animation".
Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.
Art Style:Distinctive features often include exaggerated physical features like large eyes, big hair, and dynamic emotional expressions.</p>:""}
        </>

    )
}

export default Accordion
import React, { useState } from "react";
import './App.css'
import './Accordion.css'

const Accordion=()=>{
    const [open,setopen]=useState(false);
    function expand(){
        setopen(!open)
    }
    const mass=[
        {id:1, title:"accordion 1",para:"paragraph 1"},
        {id:2, title:"accordion 2",para:"paragraph 2"}
    ]
    function handleId(id){
        console.log(id)
        setopen(id)
        setopen(open === id ? null : id)
    }
    
    return(
        <>

        {/* <p className="head" onClick={expand}>Accordion 1</p>
       {open ? <p>AboutAnimals Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.</p>:""}
        <p className="head" onClick={expand}>Accordion 2</p>
       {open ? <p>Origin:The word comes from a shortening of the English word "animation".
Usage:Outside Japan, the term refers specifically to animation produced in Japan. Inside Japan, it describes all animated works regardless of origin.
Art Style:Distinctive features often include exaggerated physical features like large eyes, big hair, and dynamic emotional expressions.</p>:""}
         */}
            {
                mass.map((res) => {
                   return(
                      <>
                        <p className="head" onClick={()=> handleId(res.id)}>{res.title}</p>  
                        {res.id}
                        {open ==res.id ? <p>{res.para}</p>:""}
                      </>
                    ) 
                })
            }

        </>

    )
}

export default Accordion
import {React,useState} from 'react'
import './ModalBox.css'
import Image from "./asset/image 1.jpeg"
function ModalBox() {

    const [Data,setData]=useState(false);
    
  return (
    <>

      <div>ModalBox</div>
      {/* <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
       
<div className='Modal'>
     {Data ?<div><span>Are You Continue</span>
      <button onClick={()=> setData(false)}>ok</button>
      </div> :""}
      </div>
      </div> */}

      {/* <div >

      <button onClick={()=> setData(true)}>confirm</button>
      </div> */}
     
      <div className='xbox'>
        
        <button className='xButton'>X</button>
        <img className="imgs"src={Image} width={"100px"}height={"100px"}/>
        <h1>secure all you divices</h1>
        <p>ensure your mobile phone,laptop and other<br/>
        oevices are protected online</p>
        <button className='premium'>purchase premium</button>
       </div>
    </>
  )
}

export default ModalBox
import React, { useState } from 'react'
import Images from "./image/comp.jpeg"
function Modelbox() {

  const [data,setdata]=useState(
          {name:"thirumaran",age:"19",dept:"IT"}
      );
    const [sum,setsum]=useState(
            {name:"",age:0,dept:""}
        );
        function a(event){
          return(
          setdata({...data, [event.target.name]: event.target.value,[event.target.age]: event.target.value,[event.target.dept]: event.target.value}))
        }
      function submit(event){
        event.preventDefault();
        setsum({...sum, name: data.name, age:data.age, dept:data.dept})
      }
      

      
      return (
        <>
        {/* <h1 className='top'>Modalbox</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <h3>are go next:</h3>
        {Data && <div className='box'>
        <h2>are you sure you want to sleep</h2>
        <p>Lorem ipsum dolor sit amet consectetur cum magni nulla soluta! Velit dolorum libero, aspernatur ut voluptates odio perspiciatis quia.</p>
        <button style={{marginTop:'0px'}} onClick={()=>{setData(false)}}>continue</button></div>}
        <br></br><button onClick={()=>{setData(true)}}>confirm</button> */}
        <div className='boxs'>
            <div style={{textAlign:'right',margin:'10px'}}>
                <p>X</p>
                <img src={Images} className='image'></img>
            </div>
            
            <h3>Secure all your devices</h3>
            <p>Ensure your mobile phone, laptop, and other devices are protected online.</p>
            <button>Purchase Premium</button>
        </div>
        <form onSubmit={submit}>
        Name:<input onChange={a} name='name'></input>
        Age:<input onChange={a} name='age'></input>
        Dept:<input onChange={a} name='dept'></input>
        <button type="submit">submit</button>
        </form>
        <h1>{sum.name}</h1>
        <h1>{sum.age}</h1>
        <h1>{sum.dept}</h1>
        {/* <h1>{numbers}</h1>
        <h1>{moreNumbers}</h1>
        <h1>{first}</h1>
        <h1>{second}</h1>
        <h1>{theRest}</h1>
        <h1>{profileData.age}</h1>
        <h1>{profileData.username}</h1>
        <h1>{more}</h1>

            <table>
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
            </table> */}
    </>
  )
}

export default Modelbox
                      //     const numbers = [1, 2];
                      //     const moreNumbers = [...numbers, 3, 4];
                      //     const [first, second, ...theRest] = [10, 20, 30, 40, 50];
                      //     console.log(first);   
                      //     console.log(theRest); 
                      
                      //     const user = { id: 1, username: "coder1", age: 25 };
                      //     const { id, ...profileData } = user;
                      //     console.log(profileData);
                      
                      //     const people = [
                      //   {
                      //     id: 1,
                      //     name: "John Doe",
                      //     age: 28,
                      //     profession: "Software Engineer"
                      //   },
                      //   {
                      //     id: 2,
                      //     name: "Jane Smith",
                      //     age: 34,
                      //     profession: "UX Designer"
                      //   },
                      //   {
                      //     id: 3,
                      //     name: "Alex Jones",
                      //     age: 22,
                      //     profession: "Data Analyst"
                      //   }
                      // ];
                      // const cars = {
                      // nane: "Citreon",
                      // price: "10,00,080",
                      // city: "salen",
                      // color: "black",
                      // model: "2026",
                      // variant: "shine",
                      // capacity: "45L",
                      // suspension: "mac",
                      // sunroof: "yes",
                      // wheelbase: "255m",
                      // wheelsize: "15inch",
                      // dualtone: "yes"}
                      // const { name, price, city, color, ... remains } = cars;
                      // const updatedCars ={
                      // ... cars,
                      // model: "2027"}
                      import React, { useState } from 'react'

function Modelboxs() {

  const [data,setdata]=useState(
          {name:"thirumaran",age:"19",dept:"IT"}
      );
    const [sum,setsum]=useState(
            {name:"",age:0,dept:""}
        );
        function a(event){
          return(
          setdata({...data, [event.target.name]: event.target.value,[event.target.age]: event.target.value,[event.target.dept]: event.target.value}))
        }
      function submit(event){
        event.preventDefault();
        setsum({...sum, name: data.name, age:data.age, dept:data.dept})
      }
      

      
      return (
        <>
        {/* <h1 className='top'>Modalbox</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet fugiat, debitis odio qui saepe nihil tempora. Suscipit, atque? Necessitatibus explicabo voluptatibus earum odio in illum commodi soluta exercitationem recusandae reprehenderit.lorem</p>
        <h3>are go next:</h3>
        {Data && <div className='box'>
        <h2>are you sure you want to sleep</h2>
        <p>Lorem ipsum dolor sit amet consectetur cum magni nulla soluta! Velit dolorum libero, aspernatur ut voluptates odio perspiciatis quia.</p>
        <button style={{marginTop:'0px'}} onClick={()=>{setData(false)}}>continue</button></div>}
        <br></br><button onClick={()=>{setData(true)}}>confirm</button> */}
        <div className='boxs'>
            <div style={{textAlign:'right',margin:'10px'}}>
                <p>X</p>
                
            </div>
            
            <h3>Secure all your devices</h3>
            <p>Ensure your mobile phone, laptop, and other devices are protected online.</p>
            <button>Purchase Premium</button>
        </div>
        <form onSubmit={submit}>
        Name:<input onChange={a} name='name'></input>
        Age:<input onChange={a} name='age'></input>
        Dept:<input onChange={a} name='dept'></input>
        <button type="submit">submit</button>
        </form>
        <h1>{sum.name}</h1>
        <h1>{sum.age}</h1>
        <h1>{sum.dept}</h1>
        {/* <h1>{numbers}</h1>
        <h1>{moreNumbers}</h1>
        <h1>{first}</h1>
        <h1>{second}</h1>
        <h1>{theRest}</h1>
        <h1>{profileData.age}</h1>
        <h1>{profileData.username}</h1>
        <h1>{more}</h1>

            <table>
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
            </table> */}
    </>
  )
}

export default Modelboxs
                      //     const numbers = [1, 2];
                      //     const moreNumbers = [...numbers, 3, 4];
                      //     const [first, second, ...theRest] = [10, 20, 30, 40, 50];
                      //     console.log(first);   
                      //     console.log(theRest); 
                      
                      //     const user = { id: 1, username: "coder1", age: 25 };
                      //     const { id, ...profileData } = user;
                      //     console.log(profileData);
                      
                      //     const people = [
                      //   {
                      //     id: 1,
                      //     name: "John Doe",
                      //     age: 28,
                      //     profession: "Software Engineer"
                      //   },
                      //   {
                      //     id: 2,
                      //     name: "Jane Smith",
                      //     age: 34,
                      //     profession: "UX Designer"
                      //   },
                      //   {
                      //     id: 3,
                      //     name: "Alex Jones",
                      //     age: 22,
                      //     profession: "Data Analyst"
                      //   }
                      // ];
                      // const cars = {
                      // nane: "Citreon",
                      // price: "10,00,080",
                      // city: "salen",
                      // color: "black",
                      // model: "2026",
                      // variant: "shine",
                      // capacity: "45L",
                      // suspension: "mac",
                      // sunroof: "yes",
                      // wheelbase: "255m",
                      // wheelsize: "15inch",
                      // dualtone: "yes"}
                      // const { name, price, city, color, ... remains } = cars;
                      // const updatedCars ={
                      // ... cars,
                      // model: "2027"}