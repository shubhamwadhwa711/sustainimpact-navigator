"use client"
import "./home.css";
import Image from "next/image";
import FilterIcon from "../../public/icons/filter_icon.svg"
import { useState } from "react";
import CardCarousel from "@/components/Carousel";



export default function Home() {

  const [tab, setTab] = useState<number>(1)


  return (
    <main className="flex  bg-gray-100">

      <div className="p-10  border border-b-gray-600  w-full">
        <div className="h-20 flex justify-between ">
          <div className="flex w-full">
            <p className="text-4xl font-semibold">Open Initiatives</p> <span className=" ml-4 rounded flex font-semibold w-11 h-11 items-center justify-center text-white bg-zinc-500">12</span>
          </div>
          <div className="flex grow">
            <button type="button" style={{ width: "200px", height: "40px" }} className="text-[#3C6E71] bg-gray-100 border border-[#3C6E71] focus:outline-none hover:bg-zinc-500 focus:ring-2 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 w-30 ">
              Open New Initiative
            </button>
            <div>
              <Image
                className="mr-2"
                src={FilterIcon}
                alt="filter"

              /></div>
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setTab(1)} className="me-2">
              <div className="pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</div>
            </li>
            <li onClick={() => setTab(2)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">In-Progress</div>
            </li>
            <li onClick={() => setTab(3)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">On Hold</div>
            </li>
          </ul>
        </div>
        <div className="md:py-2">
          {tab === 1 && <CardCarousel />}
          {tab === 2 && <CardCarousel />}
          {tab === 3 && <CardCarousel />}

        </div>
        <div className="h-20 flex justify-between mt-8 ">
          <div className="flex w-full">
            <p className="text-4xl font-semibold">Closed Initiatives</p> <span className=" ml-4 rounded flex font-semibold w-11 h-11 items-center justify-center text-white bg-zinc-500">6</span>
          </div>
          <div className="flex grow">
            <div>
              <Image
                className="mr-2"
                src={FilterIcon}
                alt="filter"

              /></div>
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setTab(1)} className="me-2">
              <div className="pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</div>
            </li>
            <li onClick={() => setTab(2)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">In-Progress</div>
            </li>
            <li onClick={() => setTab(3)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">On Hold</div>
            </li>
          </ul>
        </div>
        <div className="md:py-2">
          {tab === 1 && <CardCarousel />}
          {tab === 2 && <CardCarousel />}
          {tab === 3 && <CardCarousel />}

        </div>
      </div>
    </main>


  );
}
