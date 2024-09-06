import { useEffect, useState } from "react";
import {  useParams } from 'react-router-dom';


export default function Footer() {


const [product,setproducts]=useState({});

const {prodId}=useParams();
const getproduct1= async()=>{

console.log(prodId);
const response=await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${prodId}`);

const data= await response.json();
console.log(data);
setproducts(data.recipe);


}

useEffect(()=>{
  getproduct1();
},[]);

    return (
      <div >
<p>anas</p>
<h2>{product.publisher}</h2>
<img src={product.image_url}></img>
       
        </div>
  
  
    
    )
  }