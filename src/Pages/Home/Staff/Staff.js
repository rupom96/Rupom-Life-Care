import React from 'react';


const Staff = () => {
    return (
        <div className="container mt-5 px-5">
            <h1>Our Team:</h1>

            <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/5WZvLT8/d1-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Helena Texas</h5>
                            <p className="card-text">Gynocologist</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/JF8NjYX/d2.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Nick Gear</h5>
                            <p className="card-text">Dermotologist</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/qjfDFm0/d3.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Sophie Turner</h5>
                            <p className="card-text">Heart Deseases Specialist</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://i.ibb.co/2jRVRZD/d4-1.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dr. Tony Stark</h5>
                            <p className="card-text">Eye Care Specialist</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Staff;