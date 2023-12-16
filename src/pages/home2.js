import "../assets/css/homepage.css";

import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav";

import _1 from "../assets/images/_3.jpg";
import _4 from "../assets/images/_4.jpg";
import _5 from "../assets/images/_5.jpeg";
import _6 from "../assets/images/_6.jpeg";
import _7 from "../assets/images/_7.jpeg";

import Cara1 from "../assets/images/cara1.jpeg";
import Cara2 from "../assets/images/cara2.jpeg";
import Cara3 from "../assets/images/cara3.jpeg";
import Cara4 from "../assets/images/cara4.jpeg";

import Khan1 from "../assets/images/khan.png";
import Khan2 from "../assets/images/khan.png";

import { ReactComponent as CheckIcon } from "../assets/images/icons/check.svg";

import { ReactComponent as TopWave } from "../assets/images/wave_1.svg";
import { ReactComponent as BottomWave } from "../assets/images/wave_2.svg";

import Hero1 from "../assets/images/top-section.webp";
import HomeHero from "../assets/images/home-hero.png";
import { ReactComponent as SecProps } from "../assets/images/_1.svg";
import { ReactComponent as SecProps2 } from "../assets/images/_2.svg";
import Media2 from "../assets/images/media2.png";
import Testi1 from "../assets/images/cristian.jpeg";

// import Hero1 from "../assets/images/hero1.png";
import Hero2 from "../assets/images/hero2.png";
import Hero3 from "../assets/images/hero3.png";
import Hero4 from "../assets/images/hero4.png";
import Footer from "../components/footer";

import EventImage1 from "../assets/images/images_to/_1.jpg";
import EventImage2 from "../assets/images/images_to/_2.jpg";
import EventImage3 from "../assets/images/images_to/_3.jpg";
import EventImage4 from "../assets/images/images_to/_4.jpg";
import EventImage5 from "../assets/images/images_to/_5.jpg";
import EventImage6 from "../assets/images/images_to/_6.jpg";
import EventImage7 from "../assets/images/images_to/_7.jpg";
import EventImage8 from "../assets/images/images_to/_8.jpg";
import EventImage9 from "../assets/images/images_to/_9.jpg";
import EventImage10 from "../assets/images/images_to/_10.jpg";
import EventImage11 from "../assets/images/images_to/_11.jpg";
import EventImage12 from "../assets/images/images_to/_12.jpg";
import EventImage13 from "../assets/images/images_to/_13.jpg";
import EventImage14 from "../assets/images/images_to/_14.jpg";
import EventImage15 from "../assets/images/images_to/_15.jpg";
import EventImage16 from "../assets/images/images_to/_16.jpg";


const Homepage = () => {
    return (
        <div className="homepage-hero">
            <Nav />
            <div className="school-props school-hero">
                <div className="school-hero-content">
                    <div className="school-hero-main-content">
                        <div className="contain">
                            <div className="school-props-inner-content">
                                <h2>Find the best people for <br /> candidates for your startup</h2>
                                {/* <h2>We’re meeting the academic and nurturing needs of today’s busy families</h2> */}
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
                    <div className="bottom-bg">

                    </div>
                </div>
            </div>
            <div className="school-props-tab first-tab mt-5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <div>
                                <h2>We are always here. <br /> Employees come and go.</h2>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services
                                    and language courses, we take the pain out of hiring international talent.</p>
                                <button className="btn-green">Learn More</button>
                            </div>
                            <div className="grid-2">
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                            </div>
                        </div>
                        <div>
                            <div className="gray-bg">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="school-center-box mt-5">
                <div className="contain">
                    <div className="school-box-div">
                        <div className="center-me">
                            <h2>Leverage global world-class talented people</h2>
                            <p>Discover the optimal match for your startup and get the results together. Expanding
                                rapidly? With our unique combination of relocation services.</p>
                        </div>
                        <div className="grid-3">
                            <div className="simple-cover">
                                <div className="box-svg-cover"></div>
                                <h4>80% Faster Hiring</h4>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services.</p>
                            </div>
                            <div className="simple-cover active">
                                <div className="box-svg-cover"></div>
                                <h4>80% Faster Hiring</h4>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services.</p>
                            </div>
                            <div className="simple-cover">
                                <div className="box-svg-cover"></div>
                                <h4>80% Faster Hiring</h4>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="school-props-tab mt-5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <div className="gray-bg">

                            </div>
                        </div>
                        <div>
                            <div>
                                <h2>We are always here. <br /> Employees come and go.</h2>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services
                                    and language courses, we take the pain out of hiring international talent.</p>
                                <button className="btn-green">Learn More</button>
                            </div>
                            <div className="grid-2">
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="school-props-tab mt-5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <div>
                                <h2>We are always here. <br /> Employees come and go.</h2>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services
                                    and language courses, we take the pain out of hiring international talent.</p>
                                <button className="btn-green">Learn More</button>
                            </div>
                            <div className="grid-2">
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                                <p>
                                    <div>
                                        <CheckIcon />
                                    </div>Top 0.1% candidates</p>
                            </div>
                        </div>
                        <div>
                            <div className="gray-bg">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="school-contact-message mt-5">
                <div className="contain">
                    <div className="school-contact-message-content">
                        <h3>Get Started for Free Forever</h3>
                        <p>Discover the optimal match for your startup and get the results together. Expanding
                            rapidly? With our unique combination of relocation services
                            and language courses, we take the pain out of hiring international talent.</p>
                        <button className="btn-green">React out to us</button>

                        <div className="school-contact-wave _1"></div>
                        <div className="school-contact-wave _2"></div>
                    </div>
                </div>
            </div>
            <div className="mt-5"></div>
            {/* <div className="school-props-extra">
                <div className="contain">
                    <div className="school-props-extra-content">
                        <h3>Why Khan Academy works</h3>
                        <p>We create a plan of action unique to you and your condition. All based on the
                            latest science.</p>
                        <div className="grid-4">
                            <div className="school-props-grid">
                                <img src={Cara1} alt="" />
                                <h4>Personalized learning</h4>
                                <p>Students practice at their own pace, first filling in
                                    gaps in their understanding and then accelerating their learning.</p>
                            </div>
                            <div className="school-props-grid _2">
                                <img src={Cara2} alt="" />
                                <h4>Trusted content</h4>
                                <p>Students practice at their own pace, first filling in
                                    gaps in their understanding and then accelerating their learning.</p>
                            </div>
                            <div className="school-props-grid _3">
                                <img src={Cara3} alt="" />
                                <h4>Tools to empower teachers</h4>
                                <p>Students practice at their own pace, first filling in
                                    gaps in their understanding and then accelerating their learning.</p>
                            </div>
                            <div className="school-props-grid _4">
                                <img src={Cara4} alt="" />
                                <h4>Tools to empower teachers</h4>
                                <p>Students practice at their own pace, first filling in
                                    gaps in their understanding and then accelerating their learning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="school-extra-props">
                <TopWave />
                <div className="school-extra-props-content"></div>
                <BottomWave className="bottom-wave" />
            </div>
            <div className="school-testimonial">
                <div className="contain">
                    <div className="testimonial-content">
                        <h4>“The goal for us is not to just teach kids academically, but to teach them spiritually
                            and morally. And teach them how to be incredible leaders. That’s our passion.”
                        </h4>
                        <div>
                            <div className="principal-avatar">
                                <div className="avatar">

                                </div>
                            </div>
                            <h5>Dayo Moyo</h5>
                            <p>School Principal</p>
                        </div>
                    </div>
                </div>
            </div> */}
            <Footer />
            {/* <img src={_1} /> */}
        </div>
    )
}

export default Homepage;