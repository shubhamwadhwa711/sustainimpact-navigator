"use client"
import "./home.css";
import Image from "next/image";
import FilterIcon from "../../public/icons/filter_icon.svg"
import { useEffect, useState } from "react";
import CardCarousel from "@/components/Carousel";
import Head from "next/head";
import { cardData ,closedData} from "@/utils/demoData";






export default function Home() {

  const [allData,setData] = useState([cardData])
  const [inProgressData,setInProgress] = useState([])
  const [holdData,setHoldData] = useState([])
  const [closedList,setClosedList] = useState([closedData])
  const [completedsData,setCompletedsData] = useState([])
  const [cancelledData,setCancelledData] = useState([])
  const [tab, setTab] = useState<number>(1)
  const [tabs, setTabs] = useState<number>(1)


  useEffect(()=>{
   setHoldData(cardData.filter((item: { status: string; }):any => item.status ==="hold"))
   setInProgress(cardData.filter((item: { status: string; }):any => item.status ==="progress"))
   setCompletedsData(closedData.filter((item: { status: string; }):any => item.status ==="completed"))
   setCancelledData(closedData.filter((item: { status: string; }):any => item.status ==="cancelled"))
  },[])

  return (
    <>

    <main className=" bg-gray-100 w-[calc(100%)]">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="p-10  border border-b-gray-600">
        <div className=" flex flex-row  sm:mb-2 sm:flex-col ">
          <div className="flex w-full m-2 sm:justify-center">
            <p className="lg:text-[32px] flex md:text-2xl sm:text-2xl font-semibold self-center">Open Initiatives</p> 
            <span className=" sm:ml-2 ml-4 rounded flex font-semibold sm:p-2 md:p-4 lg:p-2 lg:w-10 lg:h-10 md:w-6 md:h-6 items-center justify-center text-white bg-zinc-500">12</span>
          </div>
          <div className="flex grow sm:justify-center">
            <button type="button" className="text-[#3C6E71] bg-gray-100 border border-[#3C6E71]  hover:bg-zinc-500  font-medium rounded-full w-[240px]  sm:text-xs text-sm px-5 py-2.5 me-2 mb-2">
              Open New Initiative
            </button>
          
            <div className="sm:self-center">
              <Image
                className="mr-2 sm:size-[25px]"
                src={FilterIcon}
                alt="filter"

              /></div>
       
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setTab(1)} className="me-2">
              <div className="pointer inline-block p-4 border-b-2 sm:text-xs border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</div>
            </li>
            <li onClick={() => setTab(2)} className="me-2">
              <div className="inline-block p-4 border-b-2 sm:text-xs  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">In-Progress</div>
            </li>
            <li onClick={() => setTab(3)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent sm:text-xs  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">On Hold</div>
            </li>
          </ul>
        </div>
        <div className="md:py-2">
          {(tab === 1) &&(cardData.length> 0) && <CardCarousel  data ={cardData}/>}
          {(tab === 2 )&&  (inProgressData.length> 0) &&<CardCarousel data ={inProgressData} />}
          {(tab === 3 )&&  (holdData.length> 0)&& <CardCarousel data ={holdData} />}

        </div>
        <div className=" flex flex-row sm:mt-4 sm:flex-col mt-10">
          <div className="flex w-full sm:mb-2 sm:justify-center">
            <p className="lg:text-[32px] text-2xl font-semibold self-center">Closed Initiatives</p> 
            <span className="sm:ml-2 ml-4 rounded flex font-semibold sm:p-2 md:p-4 lg:p-2 lg:w-10 lg:h-10 md:w-6 md:h-6 items-center justify-center text-white bg-zinc-500">6</span>
          </div>
          <div className="flex grow sm:self-end ">
            <div className="sm:self-end">
              <Image
                className="mr-2 sm:size-[25px] "
                src={FilterIcon}
                alt="filter"

              /></div>
          </div>
        </div>
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px">
            <li onClick={() => setTabs(1)} className="me-2">
              <div className="pointer inline-block p-4 border-b-2 sm:text-xs border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">All</div>
            </li>
            <li onClick={() => setTabs(2)} className="me-2">
              <div className="inline-block p-4 border-b-2 sm:text-xs  border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Completed</div>
            </li>
            <li onClick={() => setTabs(3)} className="me-2">
              <div className="inline-block p-4 border-b-2 border-transparent sm:text-xs  rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Cancelled</div>
            </li>
          </ul>
        </div>
        <div className="md:py-2">
          {(tabs === 1) && (closedData.length> 0) && <CardCarousel data ={closedData} />}
          {(tabs === 2) && (completedsData.length> 0) &&<CardCarousel data ={completedsData} />}
          {(tabs === 3)&& (cancelledData.length > 0) && <CardCarousel  data ={cancelledData}/>}

        </div>
      </div>
    </main>

    </>
  );
}
