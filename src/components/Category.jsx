import { useContext } from 'react'
import { DataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

export default function Category() {
    const { data } = useContext(DataContext)
    const navigate = useNavigate() 
    const getUniqueCategory = (data, property) => {
        let newval = data?.map((curElement) => {
            return curElement[property]
        })
        newval = ["All",...new Set(newval)] // no repeat
        return newval;
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
    console.log(categoryOnlyData)




    return <>
        {/* <div className='bg-[#101829]'> 
            <div className='max-w-7xl mx-auto flex items-center gap-7 justify-around py-7'>
                {
                    categoryOnlyData?.map((item,index)=>{
                        return <div key={index} className='text-white'>
                            <button onClick={()=>navigate(`/category/${item}`)} className='uppercase bg-linear-to-r from-red-500 to-purple-500 py-1 px-2 rounded-md cursor-pointer'>{item}</button> 
                        </div> 
                    }) 
                }
            </div> 
        </div> */}


    </>
}
