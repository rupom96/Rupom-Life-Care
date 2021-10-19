import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    return (
        <div className="mt-5">

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/k5bKxXB/b1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="carousel-caption text-left">
                        <h3 className="head-caption" >Welcome to Rupom LifeCare</h3>
                        <p className="head-para" >Dont worry about your health! We will do it for you.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/pJNR2q2/b2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Take Our Sevices</h3>
                        <p className="head-para">They cant be more affordable and high qualified than this! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/NpYfqg5/b3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="head-caption">Join Us</h3>
                        <p className="head-para">Contribute us for improvement!</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>




        </div>
    );
};

export default Banner;