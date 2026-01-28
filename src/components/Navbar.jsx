import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';
import { MapPin } from 'lucide-react'
import { useContext, useState } from 'react';
import { CgClose } from 'react-icons/cg';
import { FaCaretDown } from 'react-icons/fa';
import { IoCartOutline } from 'react-icons/io5';

import { Link, NavLink } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';
import { toast } from 'react-toastify';

export default function Navbar({ location, openDropDown, setOpenDropDown, setLocation }) {
    const { cartItem } = useContext(CartContext)
    const [open, setOpen] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [manaualLocation, setManaualLocation] = useState({
        town: '',
        country: '',
        state: ''
    })

    const { user } = useUser()
    const toggleDropdown = () => {
        setOpenDropDown(!openDropDown);
    }

    const isValidLocation = () => {
        if (
            !manaualLocation.country.trim() ||
            !manaualLocation.state.trim() ||
            !manaualLocation.town.trim()
        ) {
            return false;
        }
        return true;
    };

    const isFormValid =
        manaualLocation.country.trim() &&
        manaualLocation.state.trim() &&
        manaualLocation.town.trim();


    return <>
        <div className='bg-white py-3 shadow-2xl px-4 md:px-0'>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                {/* logo Section */}
                <div className='flex gap-7 items-center'>
                    <Link to={'/'}><h1 className='font-bold text-3xl '><span className='text-red-500 font-serif'>Z</span>aptro</h1></Link>
                    <div className='cursor-pointer md:flex gap-1 text-gray-700 items-center hidden'>
                        <MapPin className='text-red-500' />
                        <span className='font-semibold'>{location ? <div className='-space-y-2'>
                            <p>{location.country}</p>
                            <p>{location.state}</p>
                            <p>{location.town}</p>
                        </div>
                            : "Add Location"}</span>
                        <FaCaretDown onClick={toggleDropdown} />
                    </div>
                    {openDropDown ? <div className='top-20 left-60 z-50 border-2 border-gray-100 w-75 h-max shadow-2xl fixed rounded-md p-5 bg-white'>
                        <h1 className='font-semibold mb-4 text-xl flex justify-between items-center'>Change Location <span onClick={toggleDropdown} className='cursor-pointer'><CgClose /></span></h1>
                        <button className='bg-red-500 px-2 py-1 text-white hover:bg-red-400 rounded-md cursor-pointer' onClick={() => { setShowModal(true); setOpenDropDown(false) }} >Detect my location</button>
                    </div> : null}
                    {
                        showModal ? <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
                            <div className='bg-white p-6 rounded-md w-85 space-y-4'>
                                <h2 className='font-semibold text-lg'>Change Your Location</h2>
                                <input type="text" placeholder='country' value={manaualLocation.country} onChange={(e) => setManaualLocation({ ...manaualLocation, country: e.target.value })} className='w-full border p-2 rounded' />

                                <input type="text" placeholder='state' value={manaualLocation.state} onChange={(e) => setManaualLocation({ ...manaualLocation, state: e.target.value })} className='w-full border p-2 rounded' />

                                <input type="text" placeholder='town' value={manaualLocation.town} onChange={(e) => setManaualLocation({ ...manaualLocation, town: e.target.value })} className='w-full border p-2 rounded' />

                                <div className='flex justify-end gap-3'>
                                    <button onClick={() => setShowModal(false)}>Cancel</button>
                                    <button disabled={!isFormValid} type='button' onClick={() => { setLocation(manaualLocation); localStorage.setItem("location", JSON.stringify(manaualLocation)); setShowModal(false); if (!isValidLocation()) { toast.error("Location isn't Validation") } }} className='bg-red-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-red-600 transition-all disabled:bg-gray-500 disabled:cursor-not-allowed'>Save</button>
                                </div>
                            </div>

                        </div> : null
                    }
                </div>
                {/* Menu Section  */}
                <nav className='flex gap-7 items-center'>
                    <ul className='md:flex gap-7 items-center font-semibold text-xl hidden'>
                        <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Home</li></NavLink>
                        <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Products</li></NavLink>
                        <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>About</li></NavLink>
                        <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-3 transition-all border-red-500" : "text-black"} cursor-pointer`}><li>Contact</li></NavLink>
                    </ul>
                    <Link to={'/cart'} className='relative'>
                        <IoCartOutline className='w-7 h-7' />
                        {user ? <span className='bg-red-500 absolute -top-3 -right-3 text-white rounded-full px-2'>{cartItem.length}</span> : null}
                    </Link>
                    <div className='hidden md:block'>
                        <SignedOut>
                            <SignInButton className="bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer" />
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                    {
                        open ? <HiMenuAlt3 onClick={() => setOpen(false)} className='text-2xl cursor-pointer md:hidden' /> : <HiMenuAlt1 onClick={() => setOpen(true)} className='text-2xl cursor-pointer md:hidden' />
                    }
                </nav>
            </div>
            <ResponsiveMenu open={open} setOpen={setOpen} />
        </div>


    </>
}
