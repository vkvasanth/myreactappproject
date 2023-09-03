import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import productService from "../services/productservices";

function Addproduct(){
    let navigate=useNavigate();
    const {id}=useParams();
    const initialValues={name:"",price:"",quantity:""}
    const [formValues,setFormValues]=useState(initialValues)
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
        setFormErrors(validateForm(formValues))
        setIsSubmitted(true)
        if(Object.keys(formErrors).length===0 && isSubmitted)
        {alert('no 😜errors')
            saveOrUpdateProduct(formValues)}
    }
        const saveOrUpdateProduct=(data)=>{  
        console.log('data.id'+data.id) 
        alert(data)
        if(data.id===0){
        productService.create(data)
        .then(response =>{
         console.log(response.status);
         navigate('/products')
        }) 
        .catch(e =>{
         console.log(e.message);
        })
     }
     else {
        productService.update(data).then(response=>{
            console.log(response.data)
            alert("Product details🚴🏿updated successfully...")
            navigate("/products")
        }).catch(e=>{
            console.log(e)
        });
     }
    }

    const validateForm=(formValues)=>{
        const errors={}
    
        if(!formValues.name)
        errors.name='name is required'
        if(!formValues.price)
        errors.price='price is required'
        if(!formValues.quantity)
        errors.quantity='quantity is required'
        console.log(errors);
    return errors;
    }
    useEffect(()=>{
        console.log('products id is'+id);
        if(id){
            productService.getById(id)
            .then(response=>{
                setFormValues(response.data)
                console.log(response.data)
                console.log(formValues)
            })
            .catch(e=>{
                console.log(e);
            });
        }
        else setFormValues(initialValues)
    },[])

    const formTitle=()=>{
        console.log(id)
        if(id){
            return 'Update the product'
        }
        return 'Add a new product'

    }
    const btnTxt=()=>{
if(id) return 'Update'
else return 'Add'
    }

    return(
        <div>
            <pre>{JSON.stringify(formValues)}</pre>
            <form onSubmit={handleSubmit} style={{border:'2px black solid',
             backgroundColor:'GrayText',width:'800px',height:'200px',borderBottomColor:'red',
             textAlign:'center',marginLeft:'auto',marginRight:'auto',
             borderBlockColor:'blue'}}>
                
        <h1 style={{backgroundColor:'rosybrown'}}>{formTitle()}</h1>
                <div>
                <label htmlFor="name"><b><emp>Name</emp></b></label>
                <input type="text" name="name"
                placeholder="enter a name" onChange={handleChange}
                value={formValues.name}></input>
                 <b style={{color:'red'}}>{formErrors.name}</b>
                </div>
                <div>
                <label htmlFor="price"><b><emp>Price</emp></b></label>
                <input type="text" name="price"
                placeholder="enter a price" onChange={handleChange}
                value={formValues.price}></input>
                 <b style={{color:'red'}}>{formErrors.price}</b>
                </div>
                <div>
                <label htmlFor="quantity"><b><emp>Quantity</emp></b></label>
                <input type="text" name="quantity"
                placeholder="enter a quantity" onChange={handleChange}
                value={formValues.quantity}></input>
                 <b style={{color:'red'}}>{formErrors.quantity}</b>
                </div>
                <button style={{backgroundColor:'Highlight'}}>{btnTxt()}</button>
            </form>
        </div>
    )

}
export default Addproduct;