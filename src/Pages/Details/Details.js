import { useParams } from 'react-router';
import { React } from 'react';
import useData from '../../hooks/useData';



const Details = () => {

    const { serviceId } = useParams();
    const [data] = useData();

    // let found = data.find(e => e.id === "serviceId");
    console.log(data);
    console.log(parseInt(serviceId));

    let found = data?.find(e => e.id === parseInt(serviceId));




    return (
        <div className="mt-5 pt-5">


            <h1> Details:</h1>

            <img src={found?.image} className="w-50" alt="..." />
            <h4 className="mt-3">{found?.name}</h4>
            <p className="text-start container px-5">{found?.short_details}</p>
            <div className="text-start container px-5">
                <p>Details: {found?.details}</p>
                <p>Specialist: {found?.specialist}</p>
                <p>Cost:{found?.cost}</p>
            </div>

        </div>
    );
};

export default Details;
