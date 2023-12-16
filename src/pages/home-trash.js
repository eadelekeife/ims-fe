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

import LogoGif from "../assets/images/home/logo.gif";

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
                <div className="school-inner-props">
                    <div className="contain">
                        <div className="grid-2">
                            <div>
                                <img src={LogoGif} className="inner-logo" alt="" />
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
                </div>
                <div className="school-extra-inner-props mt_5">
                    <div className="contain">
                        <h3>Making your home sustainable</h3>
                        <div className="grid-4">
                            <div className="school-extra-1 _1">

                            </div>
                            <div className="school-extra-1 _2">

                            </div>
                            <div className="school-extra-1 _3">

                            </div>
                            <div className="school-extra-1 _4">

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
            <div className="homepage-testimonial">
                <div>
                    <div className="contain">
                        <div className="center">
                            <h2>Don't just take our word for it.</h2>
                        </div>
                    </div>
                    <div className="mt_5">
                        <Swiper
                            spaceBetween={20} slidesPerView={4.2} centeredSlides={true}
                            breakpoints={breakpoints}>
                            <div className="new-swiper-box">
                                <SwiperButtonPrev><ArrowLeft /></SwiperButtonPrev>
                                <SwiperButtonNext><ArrowRight /></SwiperButtonNext>
                            </div>
                            <SwiperSlide key={0}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"As a manager, DataCamp helps me show my team new packages and
                                                new ways to solve problems."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={1}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"We think of it as everyone's responsibility in the organization to be
                                                more data-driven. After all, every single one of us is probably touching
                                                data in some way, regardless of your role."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"On DataCamp, you learn from the experts. As you
                                                are taking courses, you are really learning from the best instructors in the world."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"I've used other sites—Coursera, Udacity, things
                                                like that—but DataCamp's been the one that I've stuck with."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={4}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"We've trialed a number of other online learning
                                                solutions, but only DataCamp provides the interactive experience that reinforces learning."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={5}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"DataCamp is a lot better than other online learning platforms
                                                I've tried. It takes less time, it is more efficient, and you get hands-on practice."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={6}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"I've used other sites—Coursera, Udacity, things
                                                like that—but DataCamp's been the one that I've stuck with."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={7}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"We've trialed a number of other online learning
                                                solutions, but only DataCamp provides the interactive experience that reinforces learning."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={8}>
                                <div className="testimonial-div">
                                    <div className="testimonial-div-header"></div>
                                    <div className="testimonial-div-cover">
                                        <div className="testimonial-message">
                                            <p>"DataCamp is a lot better than other online learning platforms
                                                I've tried. It takes less time, it is more efficient, and you get hands-on practice."</p>
                                        </div>
                                        <div>
                                            <div className="testimonial-avatar">

                                            </div>
                                            <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
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
            <div className="sec-homepage-testimonial">
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
            </div>
            <div className="homepage-links mt_5">
                <div className="contain">
                    <div className="links-header">
                        <h2>Discover more</h2>
                        <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With
                            our unique combination of relocation services. Discover the optimal match for your startup and
                            get the results together. Expanding rapidly? With our unique combination of relocation services.</p>
                    </div>
                    <div className="grid-4">
                        <div>
                            <h4>Software development the JetBrains way: dogfooding</h4>
                            <p>Many of the world's most dynamic companies and individuals find JetBrains tools make
                                them more creative and effective...</p>
                            <Link to={AllAppRoutes.contact_us}>Read More</Link>
                        </div>
                        <div>
                            <h4>Software development the JetBrains way: dogfooding</h4>
                            <p>Many of the world's most dynamic companies and individuals find JetBrains tools make
                                them more creative and effective...</p>
                            <Link to={AllAppRoutes.contact_us}>Read More</Link>
                        </div>
                        <div>
                            <h4>Software development the JetBrains way: dogfooding</h4>
                            <p>Many of the world's most dynamic companies and individuals find JetBrains tools make
                                them more creative and effective...</p>
                            <Link to={AllAppRoutes.contact_us}>Read More</Link>
                        </div>
                        <div>
                            <h4>Software development the JetBrains way: dogfooding</h4>
                            <p>Many of the world's most dynamic companies and individuals find JetBrains tools make
                                them more creative and effective...</p>
                            <Link to={AllAppRoutes.contact_us}>Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
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