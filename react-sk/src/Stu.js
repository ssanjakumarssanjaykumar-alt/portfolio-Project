
import './Stu.css'
import { React,use,useState } from "react";
 function Stu(){
   
      const [Email,setEmail]=useState();
     const [Age,setAge]=useState(0);
    const [submit,setsubmit]=useState();
     const [Values,setValues]=useState(
     {
      name:"sanjay",
      id:91,
      age:19,
      dept:"IT",
      mark:19
     })
   function change(event){
    setValues({
      ...Values,
      name:event.target.Values
    })
   }  
  function Student(event){
    event.prevenDefault();
    setValues(
      {
      ...Values,
      name: Values.name,
      age: Values.age        
      }
      )}  
    return(
       <>
       <div className='ss'>
       <h1>Student Management </h1>
        <h3>hello  {Values.name}</h3>
      <form onSubmit={submit}>
       <ladel>Name</ladel><br /><input onChange={change} name={"name"} /><br/>
      <label>Email</label><br /><input onChange={Email}/><br />
      <label>age</label><br /><input onChange={change} name={"age"} /><br />
     <button onClick={submit}>submit</button>
      </form> 
            
       </div>
        
       </>
    )
 }
 export default Stu;