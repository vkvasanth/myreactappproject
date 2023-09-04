import { useEffect, useState } from "react";
import productService from "../services/productservices";
import { Link } from "react-router-dom"; 
import{BsFillPencilFill,BsFillTrash3Fill} from "react-icons/bs"
function Product(){
     let [user,setUser]=useState({})
     let [username,setUsername]=useState('')
  let [products,setProducts]=useState([]);
  let [authorities,setAuthorities]=useState('')
  const [searchTerm,setSearchTerm]=useState('')
useEffect(()=>{
    setUsername(localStorage.getItem("username"))
  setAuthorities(localStorage.getItem("authorities"))
   getAllProducts()
},[])
function getAllProducts(){

    productService.getAllProduct()
    .then(response =>{
        console.log(response.data)
        setProducts(response.data)
    }).catch(e=>{
        console.log(e);
    })
}

const handleChange=(event)=>{
    setSearchTerm(event.target.value)
    console.log(searchTerm);
}
products=products.filter(
(p)=>p.name.toLowerCase().includes(searchTerm.toLowerCase()) )
   
const deleteProduct=(id)=>{
    if(window.confirm('Do you want to delete this product')){
    productService.deleteProduct(id).then(response=>{
        console.log(response.status);
        alert("Product delete 😜successful")
        getAllProducts();
    }).catch(e=>{
        console.log(e);
    })
}
}
return(<>
   Search <input type="text" name="search" onChange={handleChange}> 

   </input><br></br>
   
    <table className="table table-striped">
      
      
        <thead>
            <tr>
                <th>image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
            </tr>
        </thead>
   
    <tbody>
    {products.map(
        (p)=>{
            return(
                <tr key={p.id}>
                   
                    <td>
                        <img src={"../images/"+`${p.id}`+".jpg"} height={'40px'}
                        width={'40px'} alt="print image"></img>
                    </td>
                    <td><Link to={`/viewproduct/${p.id}`}>{p.name}</Link></td>
                    <td>{p.price}</td>
                    <td>{p.quantity}</td>
                    {authorities==="Admin"?
                   
                    <td>
                    <Link to={`/edit/${p.id}`}className="btn btn-primary">
                   < BsFillPencilFill></BsFillPencilFill>   update</Link>
                   </td>:
                    ""
                 }
                 {authorities==="Admin"?
                    <td>
                <button className="btn btn-danger"
                onClick={()=>{deleteProduct(p.id)}}> <BsFillTrash3Fill></BsFillTrash3Fill> Remove</button>
                </td>: ""
                }
                </tr>
            );
        }
    )}
    </tbody>
</table>
</>);
} 
export default Product;

    