"use client"
import Link from 'next/link';
import Image from 'next/image';
import SidebarImg from '../../../public/icons/sidebar_icon.svg'
import Icon1 from "../../../public/icons/Challenge_mgmt.svg"
import Icon2 from "../../../public/icons/Dashboard.svg"
import Icon3 from "../../../public/icons/Iphone.svg"
import Icon4 from "../../../public/icons/brush.svg"
import Icon5 from "../../../public/icons/calendar.svg"
import Icon6 from "../../../public/icons/handshake.svg"
 
const SidebarCollaspe = () => {

    const menuItems = [
        {
            href: '/',
            title: 'Homepage',
            src:Icon1
        },
        {
            
            title: 'About',
            src:Icon2
        },
        {
           
            title: 'Contact',
            src:Icon3
        },
        {
           
            title: 'About',
            src:Icon2
        },
        {
       
            title: 'Contact',
            src:Icon4
        },
        {
       
            title: 'Contact',
            src:Icon5
        },
        {
       
            title: 'Contact',
            src:Icon6
        },
    ];
    return (

        < aside className='bg-zinc-300  h-full w-[80px] sm:w-[60px]' >
            <nav>
                <ul>
                    {menuItems.map(({ src}, index) => (
                        <li className='m-2' key={index}>
                            <div

                                className={`flex p-2 bg-zinc-300 rounded hover:bg-zinc-400 cursor-pointer`}
                            >
                                <Image
                                    src ={src}
                                    alt ="logsdgsdgfo" 
                                    className=''  
                                />
                                
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside >
    )


};

export default SidebarCollaspe;