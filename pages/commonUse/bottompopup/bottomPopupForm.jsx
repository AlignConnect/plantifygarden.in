import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";

const BottomPopupForm = () => {
    const router = useRouter()

    const [seconds, setSeconds] = useState(3600); // 1 hour in seconds

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        return () => clearInterval(interval); // Cleanup the interval on component unmount

    }, []); // Empty dependency array means this effect will run once after the initial render

    const hours = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const minutes = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const remainingSeconds = Math.floor(seconds % 60).toString().padStart(2, '0');

    return (
        <div className='w-full bg-[#262525] py-1' onClick={() => window.location.href = "#order-now"}>
            <div className='text-center text-[1.2rem] m-0'>डिस्काउंट का अंत: <span className='text-[#e1c231]'>{`${hours}:${minutes}:${remainingSeconds}`}</span></div>
            <div className='flex justify-center items-center gap-2 text-white'>
                <BsArrowRightCircleFill className='arrow-3 commonArrow' />
                <a href="#order-now"><button  className='text-center decoration-none border-0 rounded-lg pt-1  px-3 font-bold bg-[red]' >पैक 55% छूट के साथ</button></a>
                <BsArrowLeftCircleFill className='arrow-4 commonArrow' />
            </div>
        </div>
    )
}
export default BottomPopupForm;