import React from "react";
 function Push(){
    const num=[1,2,3,4,5,6];
    console.log("pop",num.pop(),num)
    console.log("push",num.push(7),num)
    console.log("shift",num.shift(),num)
    console.log("unshift",num.unshift(0),num)
    function numb(x){
        return x<5
    }
 } 
 export default Push;