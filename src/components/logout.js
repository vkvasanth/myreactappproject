
import { useEffect } from "react";
import productService from "../services/productservices";
import { Link } from "react-router-dom";

function Logout({setUsername,setAuthorities}){
    useEffect(()=>{
        productService.Logout().then(response=>{
            console.log(response.data)
            localStorage.removeItem('username')
            localStorage.removeItem('authorities')
            localStorage.removeItem("email")
            localStorage.removeItem('password')
        }).catch(e=>{console.log(e)})
        setUsername('')
        setAuthorities('')
    })
    return(
        <>
        You have successfully logged out!
        <Link to="loginform">Back to Login</Link>
        </>
    )

}
export default Logout