import { useState } from "react";
import Customerservice from "../services/customerservice";
import { Navigate } from "react-router-dom";

function Registation(){
    const initialValues={firstname:"",lastname:"",email:"",password:""}
    const[formValues,setFormValues]=useState(initialValues)
   
    const handleChange=(event)=>
    {
        console.log(event.target);
        const {name,value}=event.target;
        setFormValues({...formValues,[name]:value});
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        {alert(JSON.stringify(formValues))
           registerCustomer(formValues)}
    }
    const registerCustomer=(data)=>{
        Customerservice.register(data).then(response=>{
            console.log(response.data);
            alert('Register 🚴🏿succesfull')
        })
        .catch(e=>{
            console.log(e);
        }) 
    }

     return(
        <div>
            <pre>{JSON.stringify(formValues)}</pre>
            <form onSubmit={handleSubmit}>
                <div>
                    <label html="firstname">FirstName</label>
                    <input type="text" name="firstname"
                    placeholder="enter a firstname" onChange={handleChange}
                    values={formValues.values}></input>
                </div>
                <div>
                    <label html="lastname">LastName</label>
                    <input type="text" name="lastname"
                    placeholder="enter a lastname" onChange={handleChange}
                    values={formValues.lastname}></input>
                </div>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                placeholder="enter a email" onChange={handleChange}
                values={formValues.email}></input>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                placeholder="enter a password" onChange={handleChange}
                values={formValues.password}></input>
                </div>
                <button>onSubmit</button>
            </form>
        </div>
    )
}
export default Registation;