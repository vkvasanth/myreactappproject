import {useState } from "react"
import { useNavigate } from "react-router-dom"
import Customerservice from "../services/customerservice";

function LoginForm({setUsername,setAuthorities}){
    let navigate =useNavigate();

    const initialValues={email:"",password:""}
    const[formValues,setFormValues]=useState(initialValues)
    const [formErrors,setFormErrors]=useState({})
    const  [isSubmitted, setIsSubmitted]=useState(false)
    const handleChange=(event)=>
    {
        console.log(event.target);
        const {name,value}=event.target;
        setFormValues({...formValues,[name]:value});
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formValues);
        setFormErrors(validateForm(formValues));
        setIsSubmitted(true)
        if(Object.keys(formErrors).length===0 && isSubmitted)
            alert('condition true')
        login(formValues);
    }
    const login=(data)=>{
        alert('Entering 😅to login')
        console.log("inside valid user");
        localStorage.setItem("email",data.email)
        localStorage.setItem("password",data.password)
        Customerservice.login(data).then(response=>{
            alert('Success')
            // alert('response.data')
            // console.log('response.data');
            // let token=response.data
            // console.log(parseJwt(token));
            // let userData=parseJwt(token);
            // localStorage.setItem('token',JSON.stringify(token))
            // localStorage.setItem("username",response.data.username)
            localStorage.setItem("authorities",response.data.authorities[0].authority)
            setUsername(response.data.username)
            setAuthorities(response.data.authorities[0].authority)
            console.log(response.data);
            alert('Login succesfull')
            navigate("/products")
        })
        .catch(e=>{
            alert('error')
            console.log(e);
        }) 
    }
    const validateForm=(formValues)=>{
        const errors={}
        if(!formValues.email)
        errors.email='Email is required'
        if(!formValues.password)
        errors.password='Password is required'
        console.log(errors);
    return errors;
    }
    return(
        <div>
            <pre>{JSON.stringify(formValues)}</pre>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email"
                placeholder="enter a email" onChange={handleChange}
                value={formValues.email}></input>
                <b style={{color:'red'}}>{formErrors.email}</b>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password"
                placeholder="enter a password" onChange={handleChange}
                value={formValues.password}></input>
                 <b style={{color:'red'}}>{formErrors.password}</b>
                </div>
                <button>onSubmit</button>
            </form>
        </div>
    );
}
export default LoginForm;