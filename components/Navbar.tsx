import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/assets/icons/logo.svg'

const navIcons=[
    {src:'/assets/icons/search.svg',alt:'search'},
    {src:'/assets/icons/black-heart.svg',alt:'heart'},
    {src:'/assets/icons/user.svg',alt:'user'},
]

const Navbar = () => {
    return (
        <div>
            <header className="w-full">
                <nav className="nav">
                    <Link className="flex items-center gap-1" href="/">
                        <Image
                        src={logo}
                        width={27}
                        height={27}
                        alt="logo">
                        </Image>
                        <p className="nav-logo">
                            Price<span className='text-primary'>Tracker</span>
                        </p>
                    </Link>
                    <div className="flex items-center gap-5">
                        {navIcons.map((icon)=>(
                            <Image
                            key={icon.alt}
                            src={icon.src}alt={icon.alt}
                            width={28}
                            height={28}
                            className="object-contain" >

                            </Image>
                        ))}
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar
