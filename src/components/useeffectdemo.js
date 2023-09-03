import { useEffect, useState } from "react"

function UseEffectDemo(){
   const[color,setColor]=useState('black')
   const handleChange=(e)=>{
    console.log(e.target.value);
    setColor(e.target.value)
   }
   
   useEffect(()=>{
    document.getElementById('content').innerHTML=
    `<span style="color:${color}">
    Welcome to vasanthkumar project ${color} </span>`
   },[color]);
   
   
   return(<>
    <select name="color" onChange={handleChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="green">Green</option>
        <option value="violet">Violet</option>
    </select>

    <h1 id="content"></h1>
    </>
     );
}
export default UseEffectDemo;