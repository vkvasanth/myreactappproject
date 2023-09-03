import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productService from "./services/productservices";

function ViewProduct(){
    const [product,setProducts]=useState({});
    const {id}=useParams();
    useEffect(()=>{
        console.log('products id is'+id);
        productService.getById(id).then(response=>{
          setProducts(response.data)
        }).catch(e=>{
            console.log(e);
        })
    },[])

    return(<>
    <div>
        <div style={{border:'3px solid green',backgroundColor:'yellow'}}>Product</div>
    <img src={"../images/"+`${product.id}`+".jpg"} height={'40px'}
                        width={'40px'} alt="print image"></img>
       Name: {product.name}<br></br>
      price:  {product.price}<br></br>
       qualitity: {product.qualitity}<br></br>

       {/* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src={"../images/"+`${product.id}`+".jpg"}
  height={'40px'}  width={'40px'} alt="Card image cap"></img>
  <div class="card-body">
    <h5 class="card-title">Name:{product.name}</h5>
    <h5 class="card-title">price:{product.price}</h5>
    <h5 class="card-title">quantity:{product.qualitity}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="/product" class="btn btn-primary">back</a>
  </div>
</div> */}



        <a href="/products">Back</a>
    </div> 
    
    </>)
}
export default ViewProduct;