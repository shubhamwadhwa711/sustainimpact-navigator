
import Image from "next/image";
import Link from 'next/link'
import CardPhoto from "../../../public/images/cardImg.png"

const Card = (props: any) => {

    const { data } = props;

    return (

        <div key={data._id} className="drop-shadow-lg flex-col flex h-[480px] sm:mx-4 bg-white border border-gray-200 rounded-lg shadow">
            <Link href={`/project/${encodeURIComponent(data._id)}`}>
                <Image
                    src={CardPhoto}
                    alt="Card Imagpriority"
                    priority
                />
                <div className="p-4 flex flex-col justify-between grow">
                    <p className="font-semibold text-lg m-auto text-black">{data.title}</p>
                    <div className="text-[#727272] flex justify-center text-[16px] font-medium py-2 px-4 line-clamp-2">{data.description}</div>
                    <hr className="h-px my-2 bg-gray-200 border-0 "></hr>
                    <div className="flex flex-1 h-full">
                        <div className="flex p-1 self-end">
                            <div className={"rounded-[5px]  w-[10px] h-[10px] my-auto " + (data.status === ("completed" || "progress") ? "bg-green-400" : data.status === "hold" ? "bg-yellow-400" : "bg-red-400")} ></div>
                            <div className=" ml-3 font-normal text-[#C4C4C4] text-[14px] " >{data.percent}%  {data.status}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>


    )

}

export default Card;