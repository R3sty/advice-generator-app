import { useState, useEffect } from "react";
import fetchRandomAdvice from "./AdviceAPI";
import { Advice } from "../Types";

const AdviceBox = () => {
    const [advice, setAdvice] = useState<Advice | null>(null);
    const [slip_id, setSlip_id] = useState<number | null>(null);

    useEffect(() => {
        fetchRandomAdvice().then(advice => {
            setAdvice(advice);
            setSlip_id(advice.id);
        });
    }, []);

    const handleAdviceRefresh = () => {
        fetchRandomAdvice().then(advice => {
            setAdvice(advice);
            setSlip_id(advice.id);
        });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="w-[343px] h-[315px] desktop:w-[540px] desktop:h-[332px] bg-darkGrayishBlue rounded-md flex justify-center items-center pb-6">
                <div className="text-center">
                    <div>
                        <div className="text-neonGreen text-s desktop:text-m tracking-wide text-normal pt-6"><span>ADVICE #{slip_id}</span></div>
                    </div>
                    <div>
                        <div className="text-lightCyan text-l desktop:text-xl p-6">{advice ? <p>{advice.advice}</p> : <p>Loading advice...</p>}</div>
                    </div>
                    <div className="flex justify-center items-center px-4">
                        <svg className="desktop:w-[400px] desktop:pl-12  w-[295px] h-[16px]" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" /><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3" /><rect x="14" width="6" height="16" rx="3" /></g></g></svg>
                    </div>
                </div>
            </div>
            <div className="relative bottom-8 z-10 px-4">
                <button className="relative rounded-full w-[64px] h-[64px] bg-neonGreen hover:bg-neonGreen hover:shadow-lg hover:shadow-neonGreen z-10" onClick={handleAdviceRefresh}>
                    <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733" /></svg>
                </button>
            </div>
        </div>
        
    )
};

export default AdviceBox