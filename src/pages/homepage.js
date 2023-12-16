import "../assets/css/homepage.css";

import React from "react";
import { Link } from "react-router-dom";

import Nav from "../components/nav";

import _1 from "../assets/images/_3.jpg";
import _4 from "../assets/images/_4.jpg";
import _5 from "../assets/images/_5.jpeg";
import _6 from "../assets/images/_6.jpeg";
import _7 from "../assets/images/_7.jpeg";

import Home1 from "../assets/images/home1.jpg";
import Home2 from "../assets/images/home2.jpg";
import { ReactComponent as ArrowRight } from "../assets/images/icons/arrow-right.svg";
import { ReactComponent as TargetIcon } from "../assets/images/icons/target-cropped.svg";
import { ReactComponent as HexagonIcon } from "../assets/images/icons/hexagon-cropped.svg";
import { ReactComponent as PlusIcon } from "../assets/images/icons/plus.svg";
import { ReactComponent as RocketIcon } from "../assets/images/icons/rocket-t-cropped.svg";

import ManSmiling from "../assets/images/home/ev.webp";

import { Collapse } from "antd";
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

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
    const { Panel } = Collapse;
    const breakpoints = {
        0: {
            slidesPerView: 1.2
        },
        600: {
            slidesPerView: 2.2
        },
        1000: {
            slidesPerView: 4
        }
    }
    return (
        <div className="homepage-hero">
            <Nav />
            <div className="school-props school-hero">
                <div className="school-hero-content">
                    <div className="school-hero-main-content">
                        <div className="contain">
                            <div className="school-props-inner-content">
                                <h2 className="desktop-only">Elevate Learning, Embrace Excellence: <br />Welcome to Isador Model Schools</h2>
                                <h2 className="mobile-only">Elevate Learning, Embrace Excellence: Welcome to Isador Model Schools</h2>
                                <p>IMS is more than just a place of academics; it's a vibrant community where
                                    curiosity meets creativity and friendships last a lifetime.</p>
                                <div className="btn-flex">
                                    <button className="btn-black">Reach out to us</button>
                                    <button className="btn-grey">See how we work</button>
                                </div>
                            </div>
                            {/* <div className="school-props-inner-images">
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
                            </div> */}
                            <div className="school-props-img-display">
                                <div className="grid-5">
                                    <div>
                                        <div className="long-img-cover _1">
                                            <div className="absolute-div">
                                                <button>Join Community <ArrowRight /></button>
                                            </div>
                                        </div>
                                        <div className="short-img-cover _1 desktop-only">
                                            <div className="short-cover">
                                                <div>
                                                    <TargetIcon />
                                                </div>
                                                <div>
                                                    <h4>Your home for help</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desktop-only">
                                        <div className="long-img-cover _2"></div>
                                    </div>
                                    <div className="desktop-only">
                                        <div className="medium-img-cover _1">
                                            <div className="cover-content">
                                                <h2>Join our community of tech enthusiasts</h2>
                                            </div>
                                            <div className="absolute-div">
                                                <button>Join Community <ArrowRight /></button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="desktop-only">
                                        <div className="long-img-cover _3"></div>
                                    </div>
                                    <div>
                                        <div className="long-img-cover _4">
                                            <div className="absolute-div">
                                                <button>Join Community <ArrowRight /></button>
                                            </div>
                                        </div>
                                        <div className="short-img-cover _2 desktop-only">
                                            <div className="short-cover">
                                                <div>
                                                    <HexagonIcon />
                                                </div>
                                                <div>
                                                    <h4>Your home for help</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-bg">

                    </div>
                </div>
            </div>
            <div className="homepage-props mt_5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h3>Welcome to IGS, <br />Where Dreams Take Flight!</h3>
                        </div>
                        <div>
                            <p>Beyond textbooks, we focus on nurturing leadership skills, critical thinking, and a sense of social responsibility. Our
                                goal is to empower students to become not only successful professionals but also compassionate global citizens.</p>
                        </div>
                    </div>
                    <div className="desktop-only">
                        <div className="grid-4">
                            <div className="school-extra-1 _1">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>Discover, Learn, Thrive</h3>
                                <p>We provide an environment where every student can discover their unique talents
                                    and unleash their full potential.</p>
                            </div>
                            <div className="school-extra-1 _2">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>Community and Connection</h3>
                                <p>We celebrate diversity, encourage collaboration, and cherish the individuality
                                    of each student.</p>
                            </div>
                            <div className="school-extra-1 _3">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>Empowering Tomorrow's Leaders</h3>
                                <p>Our goal is to empower students to become not only successful professionals
                                    but also compassionate global citizens.</p>
                            </div>
                            <div className="school-extra-1 _4">
                                <div className="school-extra-img">
                                    <img src={ManSmiling} alt="man smiling" />
                                </div>
                                <h3>Holistic Development</h3>
                                <p> Our approach to education focuses on developing well-rounded
                                    individuals, preparing them for success in life.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-only">
                        <Swiper
                            spaceBetween={5} slidesPerView={4.2} breakpoints={breakpoints}>
                            <SwiperSlide key={1}>
                                <div className="school-extra-1 _1">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>Discover, Learn, Thrive</h3>
                                    <p>We provide an environment where every student can discover their unique talents
                                        and unleash their full potential.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div className="school-extra-1 _2">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>Community and Connection</h3>
                                    <p>We celebrate diversity, encourage collaboration, and cherish the individuality
                                        of each student.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div className="school-extra-1 _3">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>Empowering Tomorrow's Leaders</h3>
                                    <p>Our goal is to empower students to become not only successful professionals
                                        but also compassionate global citizens.</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={4}>
                                <div className="school-extra-1 _4">
                                    <div className="school-extra-img">
                                        <img src={ManSmiling} alt="man smiling" />
                                    </div>
                                    <h3>Holistic Development</h3>
                                    <p> Our approach to education focuses on developing well-rounded
                                        individuals, preparing them for success in life.</p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="school-why mt_5">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h5>A Gateway to Limitless Learning</h5>
                            <h3>Unleash Potential, Ignite Passion: Your Journey to Excellence Begins Here!</h3>
                            <p>We believe in the power of education to transform lives and ignite a passion for lifelong
                                learning. Our school is more than just a place of academics; it's a vibrant community where curiosity meets
                                creativity and friendships last a lifetime.</p>
                            <ul>
                                <li><ion-icon name="rocket-outline"></ion-icon> <p>Fueling Ambitions: Your Child's Future, Our Priority!</p></li>
                                <li><ion-icon name="american-football-outline"></ion-icon> <p>Beyond the Classroom: Fueling Minds and Bodies for Triumph!</p></li>
                                <li><ion-icon name="footsteps-outline"></ion-icon> <p>More Than Educators: Mentors Guiding Success Every Day!</p></li>
                            </ul>
                        </div>
                        <div className="desktop-only">
                            <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/certification_business_fee5432f08.png"
                                alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-props testimonial-disp teacher-list mt_5">
                <div className="contain">
                    <div className="center-div">
                        <h2 className="desktop-only">Testimonials that Tell the Tale of Excellence.</h2>
                        <h2 className="mobile-only">Testimonials that Tell <br /> the Tale of Excellence.</h2>
                        <p>Find narratives that go beyond statistics, giving insight into the real impact our school
                            has on the lives of students. This is your backstage pass to the heart of our educational ethos</p>
                    </div>
                    <div className="desktop-only">
                        <div className="grid-3 mt_7">
                            <div className="school-extra-1 _1">
                                <div className="school-extra-content">
                                    <div className="testimonial-author-img">
                                        <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                            alt="" />
                                    </div>
                                    <div className="testimonial-message">
                                        <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                            practical exercises, I can increase student performance and learning outcomes.”</h3>
                                    </div>
                                    <div className="testimonial-author">
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>School Principal.</p>
                                    </div>
                                    <div className="testimonial-bottom-div _1"></div>
                                </div>
                            </div>
                            <div className="school-extra-1 _2">
                                <div className="school-extra-content">
                                    <div className="testimonial-author-img">
                                        <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                            alt="" />
                                    </div>
                                    <div className="testimonial-message">
                                        <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                            practical exercises, I can increase student performance and learning outcomes.”</h3>
                                    </div>
                                    <div className="testimonial-author">
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>School Principal.</p>
                                    </div>
                                    <div className="testimonial-bottom-div _2"></div>
                                </div>
                            </div>
                            <div className="school-extra-1 _3">
                                <div className="school-extra-content">
                                    <div className="testimonial-author-img">
                                        <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                            alt="" />
                                    </div>
                                    <div className="testimonial-message">
                                        <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                            practical exercises, I can increase student performance and learning outcomes.”</h3>
                                    </div>
                                    <div className="testimonial-author">
                                        <h5>Adeleke Ifeoluwase</h5>
                                        <p>School Principal.</p>
                                    </div>
                                    <div className="testimonial-bottom-div _3"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mobile-only">
                        <Swiper
                            spaceBetween={5} slidesPerView={4.2} breakpoints={breakpoints}>
                            <SwiperSlide key={1}>
                                <div className="school-extra-1 _1">
                                    <div className="school-extra-content">
                                        <div className="testimonial-author-img">
                                            <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                                alt="" />
                                        </div>
                                        <div className="testimonial-message">
                                            <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                                practical exercises, I can increase student performance and learning outcomes.”</h3>
                                        </div>
                                        <div className="testimonial-author">
                                            <h5>Adeleke Ifeoluwase</h5>
                                            <p>School Principal.</p>
                                        </div>
                                        <div className="testimonial-bottom-div _1"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={2}>
                                <div className="school-extra-1 _2">
                                    <div className="school-extra-content">
                                        <div className="testimonial-author-img">
                                            <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                                alt="" />
                                        </div>
                                        <div className="testimonial-message">
                                            <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                                practical exercises, I can increase student performance and learning outcomes.”</h3>
                                        </div>
                                        <div className="testimonial-author">
                                            <h5>Adeleke Ifeoluwase</h5>
                                            <p>School Principal.</p>
                                        </div>
                                        <div className="testimonial-bottom-div _2"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide key={3}>
                                <div className="school-extra-1 _3">
                                    <div className="school-extra-content">
                                        <div className="testimonial-author-img">
                                            <img src="https://images.datacamp.com/f_auto,c_limit,w_3840,q_auto/Quote_Jeremy_Petranka_ded9e7a967.jpg"
                                                alt="" />
                                        </div>
                                        <div className="testimonial-message">
                                            <h3>“DataCamp delivers data science courses for all skill sets. Using case studies and
                                                practical exercises, I can increase student performance and learning outcomes.”</h3>
                                        </div>
                                        <div className="testimonial-author">
                                            <h5>Adeleke Ifeoluwase</h5>
                                            <p>School Principal.</p>
                                        </div>
                                        <div className="testimonial-bottom-div _3"></div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className="school-feature mt_5">
                <div className="contain">
                    <div>
                        {/* <h4>JOIN THE BEST</h4> */}
                        <p>Join our community for donating and be a part of positive change in the world. With over:</p>
                        <h2>120,859+</h2>
                        <p>people already joining</p>
                        <button>Yes, I want to join community</button>
                        {/* <h2>Powering 100,000+ of the best customer experiences</h2> */}
                        {/* <div className="button-flex">
                            <button className="btn-purple">Start Your Free Trial</button>
                            <button className="btn-purple-border">View Demo</button>
                        </div> */}
                    </div>
                    <div className="img-disp left _1">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-0.jpg" alt="" />
                    </div>
                    <div className="img-disp left _2">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-1.jpg" alt="" />
                    </div>
                    <div className="img-disp left _3">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-2.jpg" alt="" />
                    </div>
                    {/* <div className="img-disp left _4">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-3.jpg" alt="" />
                    </div>
                    <div className="img-disp left _5">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-4.jpg" alt="" />
                    </div> */}
                    <div className="img-disp right _1">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-3.jpg" alt="" />
                    </div>
                    <div className="img-disp right _2">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-5.jpg" alt="" />
                    </div>
                    <div className="img-disp right _3">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-6.jpg" alt="" />
                    </div>
                    {/* <div className="img-disp right _4">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-7.jpg" alt="" />
                    </div>
                    <div className="img-disp right _5">
                        <img src="https://web-assets.zendesk.com/images/p-service/jointhebest-square-9.jpg" alt="" />
                    </div> */}
                </div>
            </div>
            {/* <div className="school-across-story mt_7">
                <div className="school-across-dark">
                    <ul>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                    </ul>
                </div>
                <div className="school-across-light">
                    <ul>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                        <li>let's help each other</li>
                    </ul>
                </div>
            </div> */}
            <div className="homepage-props teacher-list mt_5">
                <div className="contain">
                    <div className="center-div">
                        <h2>Meet the Inspiring Minds Shaping Futures at IMS</h2>
                        <p>Behind the scenes, our staff is hard at work shaping dreams
                            into reality. Learn about the educators, administrators, and support staff who form the backbone of our school.</p>
                    </div>
                    <div className="grid-4">
                        <div className="school-extra-1 _1">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>School Principal.</p>
                        </div>
                        <div className="school-extra-1 _2">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>School Administrator</p>
                        </div>
                        <div className="school-extra-1 _3">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>Class Teacher</p>
                        </div>
                        <div className="school-extra-1 _4">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>Class Teacher</p>
                        </div>
                        <div className="school-extra-1 _1">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>School Principal.</p>
                        </div>
                        <div className="school-extra-1 _2">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>School Administrator</p>
                        </div>
                        <div className="school-extra-1 _3">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>Class Teacher</p>
                        </div>
                        <div className="school-extra-1 _4">
                            <div className="school-extra-img">
                            </div>
                            <h3>Adeleke Ifeoluwase</h3>
                            <p>Class Teacher</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="user-faq mt_5">
                <div className="contain">
                    <div className="user-faq-cover">
                        <div className="container">
                            <div className="collapse-div">
                                <div className="center-div">
                                    <h2>Questions we get asked often</h2>
                                    <p>Have any other questions? Email us at isadormodelschools@gmail.com</p>
                                </div>
                                <Collapse expandIconPosition="right"
                                    expandIcon={() => <PlusIcon />} ghost>
                                    <Panel key={1} header={<p><span>01.</span>Is the platform free for us to use?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    <Panel key={2} header={<p><span>02.</span>What other benefit can we get from this platform?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    <Panel key={3} header={<p><span>03.</span>May I know how I can be a member?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    <Panel key={4} header={<p><span>04.</span>How does the platform work for Influencers?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className="sec-faq mt_5">
                <div className="contain">
                    <div className="grid-2">
                        <div className="content-sect">
                            <h2>FAQs</h2>
                            <p>Have any other questions? Email us at isadormodelschools@gmail.com</p>
                            <button>Ask a question</button>
                        </div>
                        <div>
                            <div className="collapse-div">
                                <Collapse expandIconPosition="right"
                                    expandIcon={() => <PlusIcon />} ghost>
                                    <Panel key={1} header={<p><span>01.</span>Is the platform free for us to use?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    <Panel key={2} header={<p><span>02.</span>What other benefit can we get here?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    <Panel key={3} header={<p><span>03.</span>May I know how I can be a member?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel>
                                    {/* <Panel key={4} header={<p><span>04.</span>How does the platform work for Influencers?</p>}>
                                        <p>Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling. Nothing excites me more than visualizing and bringing things to life! From storyboarding to
                                            character design, props, composition, story analysis, Fx. I love the whole process of story
                                            telling.</p>
                                    </Panel> */}
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5"></div>
            <Footer />
            {/* <img src={_1} /> */}
        </div>
    )
}

export default Homepage;