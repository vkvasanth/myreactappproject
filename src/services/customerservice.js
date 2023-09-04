import http from '../http.common'
const login=(data)=>{
    alert('inside service validate')
    // return http.post("/public/Login",data),{auth:{username:email,password:password}};
    return http.post("/public/Login",data);
}; 
const register=(data)=>{
    return http.post("/public/register",data);
};

const Customerservice ={
    login,
    register,
}
export default Customerservice; 