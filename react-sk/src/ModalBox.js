
// import React, { useState } from 'react'
// function ModelBox() {
//     const [Data,setData]=useState(false);
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


//   return (
//     <>
        
//         <h1>{numbers}</h1>
//         <h1>{moreNumbers}</h1>
//         <h1>{first}</h1>
//         <h1>{second}</h1>
//         <h1>{theRest}</h1>
//         <h1>{profileData.age}</h1>
//         <h1>{profileData.username}</h1>

//             {<table>
//                 <thead>
//                     <tr>
//                         <th>id</th>
//                         <th>name</th>
//                         <th>age</th>
//                         <th>dept</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {people.map((i)=>{
//                         return(
//                         <tr key={i.id}>
//                         <td>{i.id}</td>
//                         <td>{i.name}</td>
//                         <td>{i.age}</td>
//                         <td>{i.profession}</td>
//                         </tr>)
//                     })}
//                 </tbody>
//             </table>}
//     </>
//   )
// }

// export default ModelBox


// import {React,useState} from 'react'
// import './ModalBox.css'
// import Image from "./asset/image 1.jpeg"
// function ModalBox() {

//     const [Data,setData]=useState(false);
    
//   return (
//     <>

//       <div>ModalBox</div>
//       <div className='xbox'>
        
//         <button className='xButton'>X</button>
//         <img className="imgs"src={Image} width={"100px"}height={"100px"}/>
//         <h1>secure all you divices</h1>
//         <p>ensure your mobile phone,laptop and other<br/>
//         oevices are protected online</p>
//         <button className='premium'>purchase premium</button>
//        </div>
//     </>
//   )
// }

// export default ModalBox
import React, { useState } from 'react'

function ModalBox() {

  const [data,setdata]=useState(
          {name:"sanjay",age:"19",dept:"IT"}
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
       
    </>
  )
}

export default ModalBox
                   