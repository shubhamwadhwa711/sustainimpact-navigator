"use client"
import Image from "next/image";
import ProjectShow from "../../../../public/images/project_photo.png"
import { title } from "process";


const KpiData = [
    { title: " Percentage reduction in PM2.5 levels" },
    { title: "Number of green infrastructure projects implemented." },
    { title: "Number of green infrastructure projects implemented." }
]

const ProjectPage = ({ params }: { params: { id: string } }) => {
    const { id } = params;
    return (
        <div className="h-full">
            <div className="2xl:p-40">
                <div className=" flex m-4">
                    <div className=" text-[#3C6E71] font-medium">Initiative Management  &nbsp;</div>  <div className=" text-black font-medium"> / Urban Air Quality Improvement Projects</div>
                </div>
                <div className="2xl:mt-10 xl:mt-10 md:mt-3  mt-2 ">

                    <div className="flex flex-1 flex-col w-full bg-white rounded-lg px-16 py-12" >
                        <div className="flex ">
                            <div className=" flex w-4/5">
                                <Image
                                    src={ProjectShow}
                                    alt="project_pic"
                                    className="w-full"
                                />
                            </div>
                            <div className=" flex flex-col w-2/3 xl:pl-8 line">
                                <div className=" font-semibold text-black text-4xl">
                                    Urban Air Quality Improvement Projects
                                </div>
                                <div className="flex justify-between mt-4 w-4/5">
                                    <div className="bg-[#E8E8E8] px-4 py-2 text-black text-base rounded-md">
                                        2024
                                    </div>
                                    <div className="bg-[#E8E8E8] px-4 py-2 text-black text-base rounded-md">
                                        Charlotte, NC
                                    </div>
                                    <div className="bg-[#DDF8E4] border border-[#54DA7A] px-4 py-2 text-black text-base rounded-md">
                                        33% Complete
                                    </div>
                                </div>

                                <hr className="h-px my-6 bg-gray-500  border-1 dark:bg-gray-700"></hr>

                                <div className="text-lg text-[#727272]">
                                    Urban Air Quality Improvement Projects implement measures to reduce urban air pollution and improve air quality in urban areas.
                                    They aim to achieve public health and environmental sustainability by reducing pollution levels and improving air quality.< span className="text-[#278FFF]">(more)</span>
                                </div>
                            </div>

                        </div>
                        <div className=" py-3 text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px">
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Actions</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Performance</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Journey Map</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Outcomes</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Budget</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">History</div>
                                </li>
                                <li className="me-2 px-3">
                                    <div className=" text-lg font-medium pointer inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300">Schedule</div>
                                </li>
                            </ul>
                        </div>

                        <div className="h-20 flex justify-between xl:py-4  sm:py-2">
                            <div className="flex w-full">
                                <p className="text-xl font-semibold">Key Performance Indicators</p>
                            </div>
                            <div className="flex grow">
                            <button type="button" style={{ width: "200px", height: "40px" }} className="text-[#3C6E71]  bg-white border border-[#3C6E71]  hover:bg-zinc-500  font-medium rounded-full text-lg m-auto w-30 ">
                                Add or Edit KPI
                                </button>
                            </div>
                        </div>


                        <div className="w-full bg-[#F2F2F2]  rounded-md xl:p-6 ">
                            {KpiData.length > 0 && KpiData.map((item, index) => (
                                <div key={index} className="rounded-md bg-white flex p-4 m-2 drop-shadow-lg">
                                    <div className=" w-10 h-10 bg-[#F2F2F2] flex-initial border border-[#C4C4C4]">
                                    </div>
                                    <div className="text-lg text-black font-semibold pl-4 self-center">

                                        {item.title}
                                     </div>   
                                </div>
                            ))}
                        </div>


                        <div className="h-20 flex justify-between xl:py-4 mt-2  sm:py-2">
                            <div className="flex w-full">
                                <p className="text-xl font-semibold">Macro-level Objectives - UN Sustainable Development Goals</p>
                            </div>
                            <div className="flex grow">
                                <button type="button" style={{ width: "200px", height: "40px" }} className="text-[#3C6E71]  bg-white border border-[#3C6E71]  hover:bg-zinc-500  font-medium rounded-full text-lg m-auto w-30 ">
                                Add or Edit SDG
                                </button>
                            </div>
                        </div>


                        <div className="w-full bg-[#F2F2F2]  rounded-md xl:p-6 ">
                            {KpiData.length > 0 && KpiData.map((item, index) => (
                                <div key={index} className="rounded-md bg-white flex p-4 m-2 drop-shadow-lg">
                                    <div className=" w-10 h-10 bg-[#F2F2F2] flex-initial border border-[#C4C4C4]">
                                    </div>
                                    <div className="text-lg text-black font-semibold pl-4 self-center">

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