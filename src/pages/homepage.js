import React from "react";
import Nav from "../components/nav";

import _1 from "../assets/images/_3.jpg";
import _4 from "../assets/images/_4.jpg";
import _5 from "../assets/images/_5.jpeg";
import _6 from "../assets/images/_6.jpeg";
import _7 from "../assets/images/_7.jpeg";

import Hero1 from "../assets/images/hero1.png";
import Hero2 from "../assets/images/hero2.png";
import Hero3 from "../assets/images/hero3.png";
import Hero4 from "../assets/images/hero4.png";
import Footer from "../components/footer";

const Homepage = () => {
    return (
        <div>
            <Nav />
            <div className="hero-display">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h1>Join the millions learning to code with Codecademy for free</h1>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations. This short quiz will sort you out to answer a few
                                simple questions.</p>
                            <button>See how we work</button>
                        </div>
                        <div>
                            <div className="grid-3">
                                <div>
                                    <img src={Hero1} alt="student headshot" />
                                </div>
                                <div>
                                    <img src={Hero2} alt="student headshot" />
                                </div>
                                <div>
                                    <img src={Hero3} alt="student headshot" />
                                </div>
                                <div>
                                    <img src={Hero4} alt="student headshot" />
                                </div>
                                <div>
                                    <img src={Hero3} alt="student headshot" />
                                </div>
                                <div>
                                    <img src={Hero4} alt="student headshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
            style={{background: 'red', height: 400, width: 700}}
            className="owlslider owl-carousel owl-theme">
              <div className="item join join-1">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
              <div className="item join join-2">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
              <div className="item join join-3">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
              <div className="item join join-4">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
              <div className="item join join-5">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
              <div className="item join join-6">
                <div className="join-image">
                  <p>unox.me/DesmondElliot</p>
                </div>
              </div>
            </div>
            {/* <div className="colored-bg">
                <div className="grid-4">
                    <div>
                        <h2>23+</h2>
                        <p>Features and Benefits</p>
                    </div>
                    <div>
                        <h2>23+</h2>
                        <p>Features and Benefits</p>
                    </div>
                    <div>
                        <h2>23+</h2>
                        <p>Features and Benefits</p>
                    </div>
                    <div>
                        <h2>23+</h2>
                        <p>Features and Benefits</p>
                    </div>
                </div>
            </div>
            <div className="feature-display">
                <div className="contain">
                    <div className="center-div">
                        <p>What we offer</p>
                        <h2>Features and Benefits</h2>
                    </div>
                    <div className="grid-4">
                        <div className="feature-block">
                            <div className="feature-circle feature-1">

                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-2">

                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-3">

                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-4">

                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="prop-display">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h1>Join the millions learning to code with Codecademy for free</h1>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations. This short quiz will sort you out. Answer a
                                few simple questions to get personal career advice and course recommendations.</p>
                            <button>Reach out to us</button>
                        </div>
                        <div>
                            <div className="prop-grid-bg">
                                <div>
                                    <img src={Hero1} alt="student headshot" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-display testimonial">
                <div className="contain">
                    <div className="center-div">
                        <p>What we offer</p>
                        <h2>What Students and Teachers Say</h2>
                    </div>
                    <div className="grid-4">
                        <div className="feature-block">
                            <div className="feature-circle feature-1">
                                <img src={Hero1} alt="" />
                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-2">
                                <img src={Hero2} alt="" />
                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-3">
                                <img src={Hero3} alt="" />
                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                        <div className="feature-block">
                            <div className="feature-circle feature-4">
                                <img src={Hero4} alt="" />
                            </div>
                            <h3>Personalization</h3>
                            <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                advice and course recommendations.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feature-display blog-showcase">
                <div className="contain">
                    <div className="center-div">
                        <p>What we offer</p>
                        <h2>What Students and Teachers Say</h2>
                    </div>
                    <div className="grid-4">
                        <div className="blog-cover">
                            <img src={_4} alt="_4" />
                            <div className="blog-cover-text">
                                <h3>What does Inflation look like in Nigeria?</h3>
                                <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                    advice and course recommendations.</p>
                            </div>
                        </div>
                        <div className="blog-cover">
                            <img src={_5} alt="_4" />
                            <div className="blog-cover-text">
                                <h3>What does Inflation look like in Nigeria?</h3>
                                <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                    advice and course recommendations.</p>
                            </div>
                        </div>
                        <div className="blog-cover">
                            <img src={_6} alt="_4" />
                            <div className="blog-cover-text">
                                <h3>What does Inflation look like in Nigeria?</h3>
                                <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                    advice and course recommendations.</p>
                            </div>
                        </div>
                        <div className="blog-cover">
                            <img src={_7} alt="_4" />
                            <div className="blog-cover-text">
                                <h3>What does Inflation look like in Nigeria?</h3>
                                <p>This short quiz will sort you out. Answer a few simple questions to get personal career
                                    advice and course recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <img src={_1} /> */}
            <div className="">

            </div>
            <Footer />
        </div>
    )
}

export default Homepage;