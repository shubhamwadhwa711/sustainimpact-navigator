"use client"
import Image from "next/image";
import ProjectShow from "../../../../public/images/project_photo.png"
import { title } from "process";
import Link from "next/link";


const KpiData = [
    { title: " Percentage reduction in PM2.5 levels" },
    { title: "Number of green infrastructure projects implemented." },
    { title: "Number of green infrastructure projects implemented." }
]

const ProjectPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div className="h-full">
            <div className="lg:p-40 m-10 sm:m-6">
                <Link href={"/"}>
                <div className=" flex m-4">
                    <div className=" text-[#3C6E71] sm:text-sm font-medium">Initiative Management  &nbsp;</div>  <div className=" text-black font-medium sm:text-sm"> / Urban Air Quality Improvement Projects</div>
                </div>
                </Link>
                <div className="2xl:mt-10 xl:mt-10 md:mt-3  mt-2 ">

                    <div className="flex flex-1 flex-col  w-full bg-white rounded-lg px-4 py-4 lg:px-20 lg:py-16" >
                        <div className="flex  lg:flex-row flex-col">
                            <div className=" flex lg:w-4/5  w-full">
                                <Image
                                    src={ProjectShow}
                                    alt="project_pic"
                                    className="w-full"
                                />
                            </div>
                            <div className=" flex flex-col lg:w-2/3 w-full lg:pl-8 line">
                                <div className=" font-semibold flex text-black text-4xl sm:text-lg justify-start sm:justify-center">
                                    Urban Air Quality Improvement Projects
                                </div>
                                <div className="flex mt-4 lg:w-full sm:w-full justify-center ">
                                    <div className="bg-[#E8E8E8] px-4 py-2 sm:px-2 sm:py-1 text-black lg:text-[14px] rounded-md text-sm sm:text-xs flex self-center">
                                         2024
                                    </div>
                                    <div className="bg-[#E8E8E8] mx-4 px-4 py-2 lg:px-1 sm:px-2 sm:py-1 text-black lg:text-[14px] rounded-md text-sm sm:text-xs flex self-center">
                                     Charlotte,NC
                                    </div>
                                    <div className="bg-[#E8E8E8] px-4 py-2 sm:px-2 sm:py-1 text-black lg:text-[14px] rounded-md text-sm flex  sm:text-xs self-center">
                                     33% Complete
                                    </div>
                                </div>

                                <hr className="h-px my-6 bg-gray-500  border-1 dark:bg-gray-700"></hr>

                                <div className="text-lg text-[#727272] inline-block ">
                                    Urban Air Quality Improvement Projects implement measures to reduce urban air pollution and improve air quality in urban areas.
                                    They aim to achieve public health and environmental sustainability by reducing pollution levels and improving air quality.< span className="text-[#278FFF]">(more)</span>
                                </div>
                            </div>

                        </div>
                        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">

                            <ul className="flex flex-wrap -mb-px">
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Actions</div>
                                </li>
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Performance</div>
                                </li>
                                <li className="me-2">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Journey Map</div>
                                </li>
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Outcomes</div>
                                </li>
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Budget</div>
                                </li>
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">History</div>
                                </li>
                                <li className="me-2 ">
                                    <div className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Schedule</div>
                                </li>
                            </ul>
                        </div>

                        <div className="h-20 flex justify-between py-4 sm:py-2 flex-row sm:flex-col">
                            <div className="flex w-full sm:justify-center">
                                <p className="text-xl font-semibold sm:text-sm">Key Performance Indicators</p>
                            </div>
                            <div className="flex grow">
                            <button type="button"  className="text-[#3C6E71] w-[200px] h-[40px] sm:w-[150px] sm:h-[28px] sm:text-sm  bg-white border border-[#3C6E71]  hover:bg-zinc-500  font-medium rounded-full text-lg m-auto  ">
                                Add or Edit KPI
                                </button>
                            </div>
                        </div>


                        <div className="w-full bg-[#F2F2F2]  rounded-md xl:p-6 ">
                            {KpiData.length > 0 && KpiData.map((item, index) => (
                                <div key={index} className="rounded-md bg-white p-4 m-2 drop-shadow-lg flex">
                                    <div className=" w-10 h-10 bg-[#F2F2F2]  border border-[#C4C4C4]  m-auto">
                                    </div>
                                    <div className="text-lg sm:text-sm text-black font-semibold pl-4 sm:pl-2 flex-1 justify-start">

                                        {item.title}
                                     </div>   
                                </div>
                            ))}
                        </div>


                        <div className="h-20 flex justify-between py-4 sm:py-2 flex-row sm:flex-col">
                            <div className="flex w-full sm:justify-center">
                                <p className="text-xl font-semibold sm:text-sm">Macro-level Objectives - UN Sustainable Development Goals</p>
                            </div>
                            <div className="flex grow">
                            <button type="button"  className="text-[#3C6E71] w-[200px] h-[40px] sm:w-[150px] sm:h-[28px] sm:text-sm  bg-white border border-[#3C6E71]  hover:bg-zinc-500  font-medium rounded-full text-lg m-auto  ">
                                Add or Edit SGD
                                </button>
                            </div>
                        </div>


                        <div className="w-full bg-[#F2F2F2]  rounded-md xl:p-6 ">
                            {KpiData.length > 0 && KpiData.map((item, index) => (
                                <div key={index} className="rounded-md bg-white p-4 m-2 drop-shadow-lg flex">
                                    <div className=" w-10 h-10 bg-[#F2F2F2]  border border-[#C4C4C4]  m-auto">
                                    </div>
                                    <div className="text-lg sm:text-sm text-black font-semibold pl-4 sm:pl-2 flex-1 justify-start">

                                        {item.title}
                                     </div>   
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;