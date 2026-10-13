// import {React,useState} from "react";
// const Inc=()=>{
//     const[Data,setData]=useState(false);
//     const[input,setInput]=useState("your data will be visible here")
//     const[email,setEmail]=useState("")
//      const[age,setAge]=useState(0)
//     function inc(){
//         setData(!Data)
//     }
//     function getData(e){
//     console.log(e.target.value);
//     }
//     //  function getData(e){
//     // console.log(e.target.value);
//     //  }
// //     function getData(e){
// //     console.log(e.target.value);
// // }

//     function handleSubmit(event){
//        event.previntDefault();
//        alert(input)
//        alert(email)
//        alert(age)
//     }
//     return(
//         <div style={{ backgroundColor:Data ? "red":"waiht",height:"100vh"}}>
//             {Data}
//              <span stail={{cursor:"not-allowed"}}onClick={inc}>{Data ?"☀️":"🌙"}</span>

    
//              <form onSubmit={handleSubmit}>
//                Name: <input onChange={getData}/><br/>
//               Email:  <input onChange={}></input><br/>
//               Age: <input onChange={(e)=>setAge(e.target.value)} ></input><br/>
//                 <button type="submit">Submit</button> <br/>
                
//              </form>
//              {/* {Data} */}

//    </div>)
    
// }
// export default Inc;
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
// import App from "./App";
// import './App.css'
// import { React,use,useState } from "react";



//  function Usestate(){
    
//     const [submit,setsubmit]=useState();
//      const [Values,setValues]=setValues()
//   const Value=
//      {
//       name:"sanjay",
//       id:91,
//       age:20,
//       dept:"IT",
//       mark:85
//      };


//    function change(event){
//     setValues({
//       ...Values,
//       name:event.target.Values
//     })
//    }  
//   function submit(event){
//     event.prevenDefault();
//     setform(
//       {
//       ...form,
//       name: Values.name,
//       age: Values.age
          
//       }
//       )

//   }
     
//     return(
//        <>
//        <div>
//         {Values.name}

//        {/* <div style={{backgroundColor: (Value) ? "white":"black",height:"100vh"}}> */}
        
//         <h1>hello</h1>

        
//         {/* <span style={{cursor:"not-allowed"}}on onClick={setData}>{Value ?"☀️":"🌙"}</span> */}
//         {/* <button onClick={()=>setValue(!Value)}>{Value ?"☀️":"🌙"}</button> */}
//         {/* <button onClick={()=>sethide(!hide)}>hide</button> */}
//         {/* {hide && <p>sakthivel</p>}
//         <button onClick={()=>setData(Data+1)}>INCREMENT</button>
//         <button onClick={()=>setData(Data-1)}>DECREMENT</button>
//         <h2>{Data}</h2>
//         <h3>{Email}</h3>
        
//         <form onSubmit={handlesubmit}> */}
//             {/* <input onChange={getData}/> */}
//              <form onSubmit={submit}>
//             <ladel>Name</ladel><br /><input onChange={change} name={"name"} placeholder="Enter Your name"/><br/>
//             <label>Email</label><br /><input onChange={Emails}/><br />
//             <label>age</label><br /><input onChange={change} name={"age"} /><br />
//             <button onClick={submit}>submit</button>
//             </form> 
//             {/* <button type="submit">submit</button> */}
//             {/* <input onChange={(event)=>{setData(event.target.value)}}></input> */}
//         {/* </form> */}
//        </div>
        
//        </>
//     )
//  }
//  export default Usestate;