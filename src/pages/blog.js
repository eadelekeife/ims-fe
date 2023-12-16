import React from "react";

import _1 from "../assets/images/_3.jpg";
import _4 from "../assets/images/_4.jpg";
import _5 from "../assets/images/_5.jpeg";
import _6 from "../assets/images/_6.jpeg";
import _7 from "../assets/images/_7.jpeg";
import Nav from "../components/nav";
import Footer from "../components/footer";

const BlogPage = () => {
    return (
        <div>
            {/* <div className="lane-blue">
                <p>Abihome is now Gradoo: Learn all about our name change and our new app in the blog post</p>
            </div> */}
            <Nav relativeNav={true} />
            <div className="first-content-display">
                <div className="first-content-text">
                    <h1>Our Stories</h1>
                    <p>
                        With Gradoo we are not only rethinking our brand, but also our platform. You benefit
                        from numerous new features, a better overview.
                    </p>
                    <button className="btn-yellow">Read latest blog story</button>
                </div>
            </div>
            <div>
                <div className="feature-display blog-showcase">
                    <div className="contain">
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
                </div>
            </div>
            <Footer margin={true} />
        </div>
    )
}

export default BlogPage;