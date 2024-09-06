import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Footer() {
const [products,setproducts]=useState([]);
const getproducts=async()=>{

const response=await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');
  const data=await response.json();
setproducts(data.recipes);


}
useEffect(()=>{
  getproducts();
},[])

    return (
      <div className=' py-3 text-center'>
        <div className="container">
 
<div className="row">
{products.map(product=>

<div className="col-lg-4">
<div className="card">
  <div className="card-body">
<h2>{product.title}</h2>
<img src={product.image_url} className="card-img-top"></img>
<div className="card-footer">
  <Link className="btn btn-outline-info" to={`/product/${product.recipe_id}`}>Details</Link>
</div>
</div>

</div>


</div>



)

}




</div>

        </div>
  
  
      </div>
    )
  }