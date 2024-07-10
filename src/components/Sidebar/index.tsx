"use client"
import Link from 'next/link';
import Image from 'next/image';
import SidebarImg from '../../../public/icons/sidebar_icon.svg'
const SidebarCollaspe = () => {

    const menuItems = [
        {
            href: '/',
            title: 'Homepage',
        },
        {
            href: '/about',
            title: 'About',
        },
        {
            href: '/contact',
            title: 'Contact',
        },
    ];
    return (

        < aside className='bg-zinc-300  h-full w-[80px]' >
            <nav>
                <ul>
                    {menuItems.map(({ href}) => (
                        <li className='m-2' key={href}>
                            <Link href={href}

                                className={`flex p-2 bg-zinc-300 rounded hover:bg-zinc-400 cursor-pointer`}
                            >
                                <Image
                                  
                                    src ={SidebarImg}
                                    alt ="logsdgsdgfo"
                                    
                                />
                                
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside >
    )


};

export default SidebarCollaspe;