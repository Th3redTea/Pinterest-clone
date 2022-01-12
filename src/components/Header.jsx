import React from 'react'
import { FlatButton } from './Buttons'



export function Logo() {
    return (
        <div className='flex'>
            <div className='h-[32px] w-[32px]'>
                <img  src='/logo.svg' alt='pinterest'/>
            </div>
            <h1 className='text-vermilion-100 text-xl ml-1'>Pinterest</h1>
        </div>
    )
}



function NavBar() {
    return (
        <div className='flex  w-[40%]  justify-around '>
            <div>
                <ul className='flex'>
                    <li className='mx-6 text-lg'><FlatButton text="About" textColor="black" dst="/about" /></li>
                    <li className='mx-6 text-lg'><FlatButton text="Business" textColor="black" dst="/business" /></li>
                    <li className='mx-6 text-lg'><FlatButton text="Blog" textColor="black" dst="/blog" /></li>
                </ul>
            </div>
            <div >
                <a href="login" className="mx-2 px-4 py-3 bg-vermilion-100 rounded-full text-white hover:bg-vermilion-200">Log in</a>
                <a href="signup" className="px-4 py-3 bg-gray rounded-full  text-black hover:bg-gray-200">Sign up</a>
            </div>
        </div>
    )
}




function Header() {
    return (
        <header id='header' className='flex p-6 justify-between bg-white'>
            <Logo />
            <NavBar />
        </header>
    )
}

export default Header
