import axios from 'axios';

const fetchRandomAdvice = async () => {
    const response = await axios.get('https://api.adviceslip.com/advice');
    console.log("response:",response.data.slip);
    return response.data.slip;
};

export default fetchRandomAdvice;