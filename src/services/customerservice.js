import http from '../http.common'
let email ;
let password;
function getEmailPassword(){
    email=localStorage.getItem("email")
    password=localStorage.getItem("password")
}
const login=(data)=>{
    getEmailPassword();
    // return http.post("/public/Login",data),{auth:{username:email,password:password}};
    return http.post("/public/Login",data);
}; 
const register=(data)=>{
    getEmailPassword();
    return http.post("/public/register",data),{auth:{username:email,password:password}};
};

const Customerservice ={
    login,
    register,
}
export default Customerservice; 