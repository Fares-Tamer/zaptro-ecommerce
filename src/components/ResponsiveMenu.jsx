import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/clerk-react';

import { Link } from "react-router-dom"


export default function ResponsiveMenu({ open, setOpen }) {
    const { user } = useUser()
    // console.log(user)
    return (
        <div className={`${open ? "left-0" : "-left-full"} h-screen fixed bottom-0 top-0 flex w-[75%] flex-col bg-white px-8 pb-6 pt-16 md:hidden rounded-r-xl shadow-md transition-all justify-between text-black z-50`}>
            <div>
                {
                    user ? <div className='flex items-center justify-start'>
                        <UserButton size={50} />
                        <div>
                            <h1 className="pl-2">Hello, {user?.firstName}</h1>
                            <h1 className="pl-2 text-slate-500">Premium User</h1>
                        </div>
                    </div>
                        :
                        <div>
                            <SignedOut>
                                <SignInButton className="bg-red-500 text-white rounded-md px-3 py-1 cursor-pointer" />
                            </SignedOut>
                            <SignedIn>
                                <UserButton />
                            </SignedIn>
                        </div>
                }
                <nav className="mt-12">
                    <ul className='flex flex-col gap-7 font-semibold text-2xl '>
                        <Link to={'/'} onClick={() => setOpen(false)} className="cursor-pointer"><li>Home</li></Link>
                        <Link to={'/products'} onClick={() => setOpen(false)} className="cursor-pointer"><li>Products</li></Link>
                        <Link to={'/about'} onClick={() => setOpen(false)} className="cursor-pointer"><li>About</li></Link>
                        <Link to={'/contact'} onClick={() => setOpen(false)} className="cursor-pointer"><li>Contact</li></Link>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

