import React from "react";
import Hello from "./hello";
export const users=[
    {
        id:1,
        name:'ulvi'
    },
    {
        id:2,
        name:'zulfiqar'
    },
    {
        id:3,
        name:'pervin'
    },

]
function Login() {
    return (
        <div style={{display:"flex",flexDirection:"column",gap:'10px',backgroundColor:"black", padding:'60px',justifyContent:'center'}}>
         <div> <p style={{color:"white"}}>Adiniz</p>
            <input style={{padding:'6px 30px',borderRadius:'10px',outline:"none"}} type="text" placeholder="name" /></div>
         <div> <p  style={{color:"white"}}>Email</p>
            <input style={{padding:'6px 30px',borderRadius:'10px',outline:"none"}} type="email" placeholder="email" /></div>
         <div><p  style={{color:"white"}}>Sifre</p>
             <input style={{padding:'6px 30px',borderRadius:'10px',outline:"none"}} type="password" placeholder="password" /></div>
         <div> <p  style={{color:"white"}}>Melumat</p>
            <textarea style={{borderRadius:'10px',outline:"none"}} name="" id="" cols="30" rows="7"></textarea></div>
         <div><button style={{borderRadius:'10px',outline:"none"}} type="submit">Submit</button></div>
        
         <Hello/>
        </div>
        
    )
}
export default Login