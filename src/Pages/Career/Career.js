import React from 'react';

const Career = () => {
    return (
        <div className="mt-5 pt-5 container">
            <h1 className="mb-5">CAREER</h1>
            <div className="text-start">
                <p>Rupom Lifecare is a world-leading integrated cancer research, treatment and education centre. By becoming part of our family, you will work alongside highly trained, multidisciplinary teams, accelerating your learning, challenging your skills and broadening your experience.</p>
                <h4>Why Join Us:</h4>
                <p>Rupom Lifecare has a world-class, prestigious multipurpose facility on the fringe of Melbourne's CBD – right in the heart of the biomedical Parkville precinct.Globally we are facing one of the most pivotal times in the pursuit of cancer cures. Almost 70 years after our establishment, our sense of purpose and commitment to making life better for people affected by cancer continues at our centre today. Bring your best to be part of an internationally recognised hospital and research facility. Whether you’re involved in clinical care, research or a corporate profession, you will be contributing to world-leading innovation, research and cancer survivorship.</p>
                <br />

                <p>Here, by filling up the required informations, you can let us to have the oppurtunity to find out if you are a good fit or not:</p>
                <br />



                <div className="w-75 text-start">

                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>

                    <form className="row g-3">
                        <div className="col-auto">
                            <label htmlFor="inputPassword2" className="form-label">Name</label>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="Mr. Name" />
                        </div>

                        <div className="col-auto">
                            <label htmlFor="inputPassword2" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPassword2" placeholder="01********" />
                        </div>

                    </form>


                    <div className="mb-3 mt-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Why do you consider yourself as a fit candidate?</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6"></textarea>
                    </div>


                    {/* upload cv */}
                    <p>Upload your CV!</p>
                    <div className="input-group">
                        <input type="file" className="form-control" id="inputGroupFile04" aria-describedby="inputGroupFileAddon04" aria-label="Upload" />
                        <button className="btn btn-outline-secondary" type="button" id="inputGroupFileAddon04">Uplaod</button>
                    </div>
                    {/* apply button */}
                    <div className="mt-5">
                        <button type="button" className="btn btn-lg btn-primary">Apply!</button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Career;