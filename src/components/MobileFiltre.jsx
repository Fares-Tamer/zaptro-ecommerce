import { useContext } from "react";
import { FaFilter } from "react-icons/fa6";
import { DataContext } from "../context/DataContext";


export default function MobileFiltre({ openFiltre, setOpenFiltre, search, setSearch, category, handleCategoryChange, priceRange, setPriceRange, setCategory }) {
    const { data } = useContext(DataContext)
    const getUniqueCategory = (data, property) => {
        let newval = data?.map((curElement) => {
            return curElement[property]
        })
        newval = ["All", ...new Set(newval)] // no repeat
        return newval;
    }

    const categoryOnlyData = getUniqueCategory(data, "category")
    return <>
        <div className="bg-gray-100 flex justify-between items-center md:hidden px-4 pt-2 mt-5 rounded-t-md">
            <h1 className="text-xl font-semibold pb-2">Filtres</h1>
            <FaFilter onClick={() => setOpenFiltre(!openFiltre)} className="text-gray-800 cursor-pointer" />
        </div>
        <div>
            {
                openFiltre ? <div className="bg-gray-100 p-4 rounded-b-md h-max md:hidden">
                    <input type="text"
                        placeholder="Search..."
                        className="bg-white p-2 rounded-md border-2 border-gray-400 text-black w-full"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search} />
                    {/* category only date */}
                    <h1 className="mt-5 font-semibold text-xl">Category</h1>
                    <div className="flex flex-col gap-2 mt-3">
                        {
                            categoryOnlyData?.map((item, index) => {
                                return <div key={index} className="flex gap-2">
                                    <input type="checkbox" name={item} checked={category === item} value={item} onChange={handleCategoryChange} />
                                    <button className="uppercase text-sm cursor-pointer">{item}</button>
                                </div>
                            })
                        }
                    </div>
                    {/* price range */}
                    <h1 className="mt-5 font-semibold text-xl">Price Range</h1>
                    <div className="flex flex-col gap-2">
                        <label className="mt-2">Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                        <input type="range" min={0} max={1000} name="" id="" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])} className="w-50"/>
                    </div>
                    <button className="text-white bg-red-500 mt-5 px-2 py-1 rounded-md cursor-pointer" onClick={() => { setSearch(''), setCategory('All'), setPriceRange([0, 1000]), setOpenFiltre(false) }}>Reset Filters</button>
                </div> : null
            }
        </div>





    </>
}




