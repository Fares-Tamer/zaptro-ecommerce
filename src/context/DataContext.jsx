import axios from "axios";
import { createContext, useState } from "react";

export const DataContext = createContext(null);

export const DataContextProvider = ({children})=>{
    const [data, setData] = useState()
    // fetching all products from api

    const fetchAllProducts = async () => {
        try {
            const res = await axios.get('https://fakestoreapi.com/products?limit=20')
            // console.log(res) 
            setData(res.data) 
            // console.log(res.data) 

        } catch (error) {
            console.log(error)
        }
    }



    return <DataContext.Provider value={{data,setData,fetchAllProducts}}> 
        {children} 
    </DataContext.Provider>
}
