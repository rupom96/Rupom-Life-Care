import { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setData(data))

    }, [])


    return [data];
};

export default useData;