
import Image from "next/image";
import Link from 'next/link'
import CardPhoto from "../../../public/images/cardImg.png"

const Card = (props: any) => {

    const { data } = props;

    return (
  
            <div key={data._id} className="flex-col h-[480px] sm:mx-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href={`/project/${encodeURIComponent(data._id)}`}>
                <Image
                    src={CardPhoto}
                    alt="Card Imagpriority"
                    priority
                />
                <div className="p-4 flex flex-col">
                    <p className="font-semibold text-lg m-auto text-black	dark:text-white">{data.title}</p>
                    <div className="text-[#727272] flex justify-center text-[16px] font-medium py-2 px-4 line-clamp-2">{data.description}</div>
                    <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                    <div className="flex   self-start">
                        <div className="rounded-[5px] bg-green-400 w-[10px] h-[10px] my-auto" ></div>
                        <div className=" ml-3 font-normal text-[#C4C4C4] text-[14px]" >{data.status} Completed</div>
                    </div>
                </div>
                </Link>
            </div>
     

    )

}

export default Card;