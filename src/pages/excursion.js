import "../assets/css/about.css";

import React, { useState, useEffect } from "react";
import Nav from "../components/nav";
import { notification, Skeleton } from "antd";
import { connect } from "react-redux";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link } from "react-router-dom";

import { ReactComponent as ArrowRight } from "../assets/images/arrow-right.svg";

import PNGGG from "../assets/images/home/PNGGG.png";

import { ReactComponent as PlusIcon } from "../assets/images/plus.svg";
import Instructor2 from "../assets/images/team/_4.jpg";
import Instructor3 from "../assets/images/team/_5.jpg";
import Instructor4 from "../assets/images/team/_6.jpg";
import Instructor5 from "../assets/images/team/_7.jpg";

import Image1 from "../assets/images/new/new1.jpg";
import Image2 from "../assets/images/new/new8.jpg";
import Image3 from "../assets/images/new/new7.jpeg";
import Image4 from "../assets/images/new/new4.jpg";

import AllAppRoutes from "../utils/routes";
import Footer from "../components/footer";

const ExcursionPage = props => {

    const playerRef = React.useRef(null);
    const responsive = {
        0: {
            items: 1,
            nav: false,
            margin: 10,
            stagePadding: 50,
            loop: true
        },
        600: {
            items: 3,
            nav: false,
            margin: 20,
            stagePadding: 50,
            loop: true
        },
        1000: {
            items: 6,
            nav: false,
            margin: 10,
            stagePadding: 20,
            loop: true
        }
    }
    const openNotificationWithIcon = (type, message) => {
        notification[type]({
            message: '',
            description: message
        });
    };

    return (
        <div className="real-homepage about-us-page">
            <Nav />
            <div className="hero-section">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h2>Charting New Territories of Knowledge Through Excursions!</h2>
                            <p>
                                Our excursions redefine education, offering students immersive experiences that transcend
                                textbooks. Each trip is a doorway to new knowledge, cultural enrichment, and unforgettable
                                experiences. Come, explore the world with us.
                            </p>
                            <div className="btn-flex">
                                <Link
                                    to={AllAppRoutes.contact_us}
                                    className="btn-yellow">Reach out to us <ArrowRight /></Link>
                            </div>
                        </div>
                        <div>
                            <img src={PNGGG} alt="PNGGG" />
                            {/* <VideoJS options={videoJsOptions} playsinline controls={false} onReady={handlePlayerReady} /> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="dance-props-sect about-sub-props first-div mt_5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h3>Immerse Yourself in the Wonder of Our Excursions!</h3>
                        </div>
                        <div>
                            <p>Join us as we go beyond traditional learning methods, offering educational adventures
                                that stimulate the mind and nurture a sense of wonder. Our excursions are not just
                                field trips; they are journeys of discovery</p>
                        </div>
                    </div>
                    <div className="sec-grid-2">
                        <div className="video-message-bg desktop-only">
                        </div>
                        <div className="video-sec-bg">
                            <div className="video-sec-controls">
                                {/* <V */}
                                <div className="video-control-panel">
                                    <ion-icon name="play-circle-outline"></ion-icon>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-sub-message mt_5">
                <div className="contain">
                    <div className="about-flex">
                        <div>
                            <h2>These excursions are <span>carefully designed to provide</span> hands-on experiences that <span>bring lessons</span> to life</h2>
                            {/* <h2>Our mission is to ensure that <span>dance fitness</span> becomes a lifestyle for <span>millions of people</span> around the world.</h2> */}
                            <div className="btn-array">
                                <button className="btn-default">Hosting TedX</button>
                                <button className="btn-default">Attending DevFest</button>
                                <button className="btn-default">Visiting Unilag FM</button>
                                <button className="btn-default">Visiting AltSchool</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="desktop-only">
                    <div className="img-data-flex">
                        <div>
                            <div className='img-block'>
                                {/* <img src={Image1} alt="dance students smiling" /> */}
                            </div>
                        </div>
                        <div>
                            <div className='img-block'>
                                {/* <img src={Image2} alt="dance students smiling" /> */}
                            </div>
                        </div>
                        <div>
                            <div className='img-block'>
                                {/* <img src={Image3} alt="dance students smiling" /> */}
                            </div>
                        </div>
                        <div>
                            <div className='img-block'>
                                {/* <img src={Image4} alt="dance students smiling" /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mobile-only">
                    <OwlCarousel className="owl-theme" lazyLoad={true}
                        responsive={responsive}
                        responsiveClass={true} loop={true} margin={20} nav>
                        <div class='item'>
                            <div className='img-block'>
                                <img src={Image1} alt="dance students smiling" />
                            </div>
                        </div>
                        <div class='item'>
                            <div className='img-block'>
                                <img src={Image2} alt="dance students smiling" />
                            </div>
                        </div>
                        <div class='item'>
                            <div className='img-block'>
                                <img src={Image3} alt="dance students smiling" />
                            </div>
                        </div>
                        <div className='item'>
                            <div className='img-block'>
                                <img src={Image4} alt="dance students smiling" />
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            <div className="about-hero-sec">
                <div className="testimonial">
                    <div className="contain">
                        <div>
                            <h1>&ldquo;I've always been intimidated by dance workouts, but this app has made it so accessible
                                and enjoyable. The instructors break down the moves step by step, and the app's interface
                                is user-friendly. I've gained confidence, improved my fitness, and discovered a new passion
                                for dancing. I can't thank this app enough!&rdquo;</h1>
                        </div>
                        <div className="testimonial-author-sect">
                            <div>
                                <div className="avatar">

                                </div>
                            </div>
                            <div>
                                <h3 className="dance-author-name">Adeleke Ifeoluwase</h3>
                                <p className="dance-author-role">Student</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dance-props-sect sec-homepage-extra-desc mt_5">
                <div>
                    <div className="team">
                        <div className="contain">
                            <h3 className="page-title">Some of our Students on Excursions</h3>
                            <div className="grid-5">
                                <div className="">
                                    <div className="team_img_cover team_card _1">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _11">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _2">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _3">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _4">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _5">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _6">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _7">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _8">
                                    </div>
                                </div>
                                <div className="">
                                    <div className="team_img_cover team_card _9">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

const mapStateToProps = store => {
    return { auth: store.auth }
}

export default connect(mapStateToProps)(ExcursionPage);