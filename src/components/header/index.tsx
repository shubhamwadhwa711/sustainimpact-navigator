"use client"
import Image from "next/image";
import Logo from "../../../public/icons/header_logo.svg";
import ArrowSVG from "../../../public/icons/arrow_left.svg"
import { Menu, MenuItem, MenuButton, MenuItems } from '@headlessui/react'
const Header = () => {

    return (
        <div className="h-24   bg-white  w-full ">
            <div className="m-2 flex justify-between ">
                <div className="flex">
                    <Image
                        src={Logo}
                        priority
                        alt="Company Logo"
                    />
                    <div
                        className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-300 dark:bg-white/10"></div>
                </div>

                <div className="flex -space-x-2 overflow-hidden mr-2 mt-4">
                    <Menu>
                        <MenuButton className="px-4 py-2 text-sm font-medium text-gray-700 flex">
                            <Image
                                alt=""
                                src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                className="inline-block h-10 w-10 rounded-full ring-2 ring-white"
                                width={30}
                                height={30}
                            />
                            <Image
                                src={ArrowSVG}
                                priority
                                alt="down"
                                className="self-center"
                            />
                        </MenuButton>
                        <MenuItems className="py-2 text-sm font-medium text-gray-700">
                            <MenuItem>

                                <a
                                    className={`block px-4 py-2  text-gray-700`
                                    }
                                    href="/account-settings"
                                >
                                    Account settings
                                </a>

                            </MenuItem>
                        </MenuItems>
                    </Menu>
                </div>

            </div>
        </div>
    )


};

export default Header;