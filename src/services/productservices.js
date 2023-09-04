import http from "../http.common"
let email ;
let password;
function getEmailPassword(){
    email=localStorage.getItem("email")
    password=localStorage.getItem("password")
}
const create=(data)=>{
    getEmailPassword();
   // return http.post("/product/addproduct",data);
    return http.post("/product/addproduct",data,{auth:{username:email,password:password}});
   // return http.post("/product/addproduct",data,{auth:{username:email,password:password}});
};
const getAllProduct=()=>{
    alert('inside 😎 getallproducts')
    getEmailPassword();
    return http.get("/product/allproduct");
};
const getById=(id)=>{
    getEmailPassword();
    alert('email')
    alert('password')
    return http.get("/product/"+id,{auth:{username:email,password:password}});
}
const update =(data)=>{
    getEmailPassword();
   
    return http.put("/product/update",data,{auth:{username:email,password:password}})
};
const deleteProduct=(id)=>{
    getEmailPassword();
    return http.delete("/product/"+id,{auth:{username:email,password:password}});
}
const  logout=()=>{
    getEmailPassword();
    // let email=localStorage.getItem("email")
    // let password=localStorage.getItem("password")
    return http.get("/logoutsuccess",{auth:{username:email,password:password}})
}
const ProductService={
    create,
    getAllProduct,
    getById,
    update,
    deleteProduct,
    logout
 }
 export default ProductService;