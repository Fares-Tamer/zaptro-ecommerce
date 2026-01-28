import { useContext, useEffect, useState } from 'react'
import { DataContext } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import Loading from "../assets/src_assets_Loading4.webm"
import ProductCard from '../components/ProductCard'
import Lottie from 'lottie-react'
import notfound from '../assets/notfound.json'
import MobileFiltre from '../components/MobileFiltre'

export default function Products() {
  const { data, fetchAllProducts } = useContext(DataContext)
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [openFiltre,setOpenFiltre] = useState(false) 

  useEffect(() => {
    fetchAllProducts();
    window.scroll(0,0)
  }, [])

  const handleCategoryChange = (e) => {
    setCategory(e.target.value)
  }
  const filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === 'All' || item.category == category) &&
    item.price >= priceRange[0] && item.price <= priceRange[1]
  )


  return <>
    <div>
      <div className='max-w-6xl mx-auto px-4 mb-10 mt-4'>
        <MobileFiltre openFiltre={openFiltre} setOpenFiltre={setOpenFiltre} search={search} setCategory={setCategory} setPriceRange={setPriceRange} priceRange={priceRange} category={category} handleCategoryChange={handleCategoryChange} setSearch={setSearch}/> 
        {
          data?.length > 0 ?
            <div className='flex gap-8'>
              
              <FilterSection search={search} setSearch={setSearch} category={category} handleCategoryChange={handleCategoryChange} priceRange={priceRange} setPriceRange={setPriceRange} setCategory={setCategory}/>



              {filteredData.length > 0 ?
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-7 mt-10 w-full'>
                  {filteredData?.map((product, index) => {
                    return <ProductCard product={product} key={index} />
                  })}
                </div> 

                :
                
                <div className='flex justify-center items-center md:h-150 md:w-225'> 
                  <Lottie animationData={notfound} className='md:w-125'/>
                </div> 
              }

            </div>

            :

            <div>
              <div className='flex justify-center items-center h-100'>
                <video muted loop autoPlay>
                  <source src={Loading} type='video/webm' />
                </video>
              </div>
            </div>
        }
      </div>
    </div>



  </>
}
