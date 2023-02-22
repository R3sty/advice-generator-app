import { useState, useEffect } from "react";
import axios from 'axios';

interface Advice {
    slip_id: number;
    advice: string;
}

export const AdviceApi = () => {
    const [advice, setAdvice] = useState<Advice | null>(null);
    
        const fetchRandomAdvice = async () => {
            const response = await axios.get('https://api.adviceslip.com/advice');
            setAdvice(response.data.slip)
        };

        useEffect(() => {
            fetchRandomAdvice();
    }, []);

    return (
        <div>
            {advice ? <p>{advice.advice}</p> : <p>Loading advice...</p>}
            <button className="bg-red" onClick={fetchRandomAdvice}>Get Advice</button>
        </div>
    )

};