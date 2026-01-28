import axios from 'axios'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function CategoryProduct() {
    const {category} = useParams() 
    // console.log(category)

    const fetchAllCategoryDetails = async () =>{
        const res = await axios.get(`https://fakestoreapi.com/products/category?type=${category}`) 
        console.log(res) 
    }
    useEffect(()=>{
        fetchAllCategoryDetails() 
    },[])
  return <>
  <h1>Fares</h1>
  
  </>
}

