import React from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Rate, Avatar, Collapse, Input } from "antd";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';

import Nav from "../components/nav";

import _1 from "../assets/images/_3.jpg";
import _4 from "../assets/images/_4.jpg";
import _5 from "../assets/images/_5.jpeg";
import _6 from "../assets/images/_6.jpeg";
import _7 from "../assets/images/_7.jpeg";

import { ReactComponent as ArrowRight } from "../assets/images/arrow-right.svg";
import { ReactComponent as ArrowLeft } from "../assets/images/arrow-left-circle.svg";
import CertificateImg from "../assets/images/home/certification.webp";
import Hero1 from "../assets/images/top-section.webp";
import HomeHero from "../assets/images/home-hero.png";
import { ReactComponent as SecProps } from "../assets/images/_1.svg";
import { ReactComponent as SecProps2 } from "../assets/images/_2.svg";
import { ReactComponent as CurveMe } from "../assets/images/home/wave.svg";
import Media2 from "../assets/images/media2.png";
import Testi1 from "../assets/images/cristian.jpeg";

import Main1 from "../assets/images/home/main1.png";
import Main2 from "../assets/images/home/main2.png";

import Main3 from "../assets/images/home/93.jpg";
import Main4 from "../assets/images/home/94.jpg";


import LogoGif from "../assets/images/home/logo.gif";
import ManSmiling from "../assets/images/home/ev.webp";
import { ReactComponent as Clock } from "../assets/images/illustrations/yoko-clock.svg";

// import Hero1 from "../assets/images/hero1.png";
import Hero2 from "../assets/images/hero2.png";
import Hero3 from "../assets/images/hero3.png";
import Hero4 from "../assets/images/hero4.png";
import Footer from "../components/footer";
import AllAppRoutes from "../utils/routes";

export const SwiperButtonNext = ({ children }) => {
    const swiper = useSwiper();
    return <button className="carousel-controller" onClick={() => swiper.slideNext()}>{children}</button>;
};

export const SwiperButtonPrev = ({ children }) => {
    const swiper = useSwiper();
    return <button className="carousel-controller" onClick={() => swiper.slidePrev()}>{children}</button>;
};

const Homepage = () => {
    const { handleSubmit, control } = useForm({});
    const breakpoints = {
        0: {
            slidesPerView: 2.1
        },
        600: {
            slidesPerView: 4.2
        },
        1000: {
            slidesPerView: 5.2
        }
    }
    return (
        <div className="homepage">
            <Nav />
            <div className="school-props school-hero">
                <div className="school-hero-content">
                    <div className="school-hero-main-content">
                        <div className="container">
                            <div className="school-props-inner-content">
                                <h2>Find the best people for <br /> candidates for your startup</h2>
                                <p>We take the best of traditional schooling and homeschooling to create a unique educational
                                    model.</p>
                                <button>Get Started</button>
                            </div>
                            <div className="school-props-inner-images">
                                <div className="grid-4">
                                    <div className="props-img _1">
                                        <img src="https://clatallahassee.org/wp-content/uploads/2022/12/morning-dropoff-646x1024.jpg" alt="school dropoff" />
                                    </div>
                                    <div className="props-img _2">
                                        <img src="https://clatallahassee.org/wp-content/uploads/2022/12/art-class-646x1024.jpg" alt="school dropoff" />
                                    </div>
                                    <div className="props-img _3">
                                        <img src="https://clatallahassee.org/wp-content/uploads/2022/12/student-teacher-646x1024.jpg" alt="school dropoff" />
                                    </div>
                                    <div className="props-img _4">
                                        <img src="https://clatallahassee.org/wp-content/uploads/2022/12/high-school-class-650x1024.jpg" alt="school dropoff" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="bottom-bg">
                    </div> */}
                </div>
            </div>
            <div className="inner-inner-props">
                {/* <div className="school-inner-props">
                    <div className="contain">
                        <div className="grid-2">
                            <div>
                                <div>
                                    <h2>Australia's leader in solar finance</h2>
                                    <p>With our network of over 2,200+ tradies, and working with Government, we're helping
                                        make sustainability affordable and accessible for everyone.</p>
                                    <img src={LogoGif} className="inner-logo" alt="" />
                                </div>
                            </div>
                            <div>
                                <h3>Australia's leader in solar finance</h3>
                                <p>With our network of over 2,200+ tradies, and working with Government, we're helping
                                    make sustainability affordable and accessible for everyone. Students integrate
                                    concepts, theories, and methods from multiple disciplines, deepening their understanding of a topic.</p>
                                <div className="grid-3">
                                    <div>
                                        <h4>Integrity</h4>
                                        <p>metric tons of CO2e emissions prevented each year </p>
                                    </div>
                                    <div>
                                        <h4>Integrity</h4>
                                        <p>metric tons of CO2e emissions prevented each year </p>
                                    </div>
                                    <div>
                                        <h4>Integrity</h4>
                                        <p>metric tons of CO2e emissions prevented each year </p>
                                    </div>
                                </div>
                                <button>Why choose Brighte</button>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className="school-extra-inner-props">
                    <div className="contain">
                        <div className="grid-2">
                            <div>
                                <h2>Unleash Your Inner Beat,<br /> Dance to Your Own Rhythm</h2>
                            </div>
                            <div>
                                <p>Dancerapy’s long-term vision is to inspire our community with non-competitive dance
                                    education and many performance opportunities. We have 3 centers spread out across
                                    Lagos coupled with our numerous online training sessions to fit your schedule.</p>
                            </div>
                        </div>
                        <div className="grid-4">
                            <div className="school-extra-1 _1">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _2">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _3">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                            <div className="school-extra-1 _4">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>What Girl Scouts Do</h3>
                                <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                    membership also includes benefits, such as discounts and invitations to special events.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="student-props">
                <div className="homepage-student-prop">
                    <div className="container">
                        <div className="grid-2">
                            <div>
                                <div>
                                    <h3>The best way to learn or practice a language is through fun!</h3>
                                </div>
                                <div>
                                    <p>Students integrate concepts, theories, and methods from multiple disciplines, deepening
                                        their understanding of a topic. Students acquire discipline-specific understandings and
                                        produce a synthesis across disciplines that allows them to explain concepts and solve
                                        problems of greater complexity.</p>
                                    <Link to={AllAppRoutes.contact_us}>Learn More</Link>
                                </div>
                            </div>
                            <div>
                                <img src={CertificateImg} alt="amn" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-student-prop mt_5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <div>
                                <h3>The best way to learn or practice a language is through fun!</h3>
                            </div>
                            <div>
                                <p>Students integrate concepts, theories, and methods from multiple disciplines, deepening
                                    their understanding of a topic. Students acquire discipline-specific understandings and
                                    produce a synthesis across disciplines that allows them to explain concepts and solve
                                    problems of greater complexity.</p>
                                <Link to={AllAppRoutes.contact_us}>Learn More</Link>
                            </div>
                        </div>
                        <div>
                            <img src={Main3} alt="amn" />
                        </div>
                    </div>
                    <div className="grid-2 mt_5">
                        <div>
                            <img src={Main4} alt="amn" />
                        </div>
                        <div>
                            <div>
                                <h3>The best way to learn or practice a language is through fun!</h3>
                            </div>
                            <div>
                                <p>Students integrate concepts, theories, and methods from multiple disciplines, deepening
                                    their understanding of a topic. Students acquire discipline-specific understandings and
                                    produce a synthesis across disciplines that allows them to explain concepts and solve
                                    problems of greater complexity.</p>
                                <Link to={AllAppRoutes.contact_us}>Learn More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="sec-homepage-testimonial">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h2>Customers Love Haystack</h2>
                            <p>We're honored to provide a modern, engaging digital home for some of
                                the most exciting organizations in the world.</p>
                            <div className="grid-4"></div>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="sec-homepage-testimonial mt_5">
                <div className="contain">
                    <div className="">
                        <div className="center-div">
                            <h2>Customers Love Haystack</h2>
                            <p>We're honored to provide a modern, engaging digital home for some of
                                the most exciting organizations in the world.</p>
                        </div>
                        <div className="grid-4">
                            <div className="sec-testimonial-cover">
                                <div className="testimonial-avatar-hero">
                                    <div className="testimonial-avatar">

                                    </div>
                                    <div>
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>Parent</p>
                                    </div>
                                </div>
                                <Rate value={5} />
                                <h5 className="testimonial-summary">Haystack keeps our team aligned, informed & engaged</h5>
                                <p className="testimonial-text">
                                    "We evaluated a number of platforms before landing on Haystack. For our team, the
                                    customization, speed, and overall UI/UX stood out clearly from all the other
                                    providers we checked out. Couldn't be happier using Haystack."
                                </p>
                            </div>
                            <div className="sec-testimonial-cover">
                                <div className="testimonial-avatar-hero">
                                    <div className="testimonial-avatar">

                                    </div>
                                    <div>
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <Rate value={5} />
                                <h5 className="testimonial-summary">Haystack keeps our team aligned, informed & engaged</h5>
                                <p className="testimonial-text">
                                    "We evaluated a number of platforms before landing on Haystack. For our team, the
                                    customization, speed, and overall UI/UX stood out clearly from all the other
                                    providers we checked out. Couldn't be happier using Haystack."
                                </p>
                            </div>
                            <div className="sec-testimonial-cover">
                                <div className="testimonial-avatar-hero">
                                    <div className="testimonial-avatar">

                                    </div>
                                    <div>
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>Parent</p>
                                    </div>
                                </div>
                                <Rate value={5} />
                                <h5 className="testimonial-summary">Haystack keeps our team aligned, informed & engaged</h5>
                                <p className="testimonial-text">
                                    "We evaluated a number of platforms before landing on Haystack. For our team, the
                                    customization, speed, and overall UI/UX stood out clearly from all the other
                                    providers we checked out. Couldn't be happier using Haystack."
                                </p>
                            </div>
                            <div className="sec-testimonial-cover">
                                <div className="testimonial-avatar-hero">
                                    <div className="testimonial-avatar">

                                    </div>
                                    <div>
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>Student</p>
                                    </div>
                                </div>
                                <Rate value={5} />
                                <h5 className="testimonial-summary">Haystack keeps our team aligned, informed & engaged</h5>
                                <p className="testimonial-text">
                                    "We evaluated a number of platforms before landing on Haystack. For our team, the
                                    customization, speed, and overall UI/UX stood out clearly from all the other
                                    providers we checked out. Couldn't be happier using Haystack."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="about-sign-up mt_5">
                <div className="container">
                    <div className="center">
                        <h2>Add your email to get our weekly updates</h2>
                        <div>
                            <form autoComplete={false}>
                                <div className="email-input-box">
                                    <Controller control={control} name="email" defaultValue=""
                                        render={({ field }) => (
                                            <Input {...field} name="email" type="email" />
                                        )} />
                                    <button>Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* <img src={_1} /> */}
        </div>
    )
}

export default Homepage;