import "../assets/css/about.css";

import React from "react";

import { Rate, Avatar, Collapse } from "antd";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";

import { ReactComponent as PlusIcon } from "../assets/images/icons/plus.svg";
import _11 from "../assets/images/images_to/_11.jpg";
import _12 from "../assets/images/images_to/_12.jpg";
import _13 from "../assets/images/images_to/_13.jpg";

import Nav from "../components/nav";
import Footer from "../components/footer";

import { ReactComponent as ArrowLeft } from "../assets/images/icons/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../assets/images/icons/arrow-right.svg";
import AllAppRoutes from "../utils/routes";

const AboutUs = () => {
    const { Panel } = Collapse;
    return (
        <div>
            {/* <Nav /> */}
            <div className="about-bg-blue">
                <div className="container">
                    <div className="about-testimonial">
                        <div>
                            <div className="avatar">

                            </div>
                        </div>
                        <div>
                            <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                                unique combination of relocation services. Discover the optimal match for your startup and get the
                                results together. Expanding rapidly? With our unique combination of relocation services.</p>
                            <div className="inner-testi-grid">
                                <div>
                                    <h3>Adeleke Ifeoluwase</h3>
                                    <p>Student</p>
                                </div>
                                <div>
                                    <ArrowLeft />
                                    <ArrowRight />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-divider-line"></div>
                    <div className="about-structure">
                        <h2>They like how we structure their business models</h2>
                        <div className="grid-2">
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="boat-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Define the strategy</h4>
                                    <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                                        unique combination of relocation services. Discover the optimal match for your startup.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="diamond-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Define the strategy</h4>
                                    <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                                        unique combination of relocation services. Discover the optimal match for your startup.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="rocket-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Define the strategy</h4>
                                    <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                                        unique combination of relocation services. Discover the optimal match for your startup.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="ribbon-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Define the strategy</h4>
                                    <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                                        unique combination of relocation services. Discover the optimal match for your startup.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-numbers">
                <div className="container">
                    <h3>We have succeeded in increasing various services  with innovations and product development</h3>
                    <div className="grid-2">
                        <div>
                            <h5>300+</h5>
                            <p>Enterprise collaboration</p>
                        </div>
                        <div>
                            <h5>180+</h5>
                            <p>projects and product innovations</p>
                        </div>
                    </div>
                    <div className="img-block">

                    </div>
                </div>
            </div>
            <div className="final-student-data">
                <div className="container">
                    <div className="center">
                        <h3>We have succeeded in increasing various services  with innovations and product development</h3>
                    </div>
                    <div className="grid-4">
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                        <div className="student-display"></div>
                    </div>
                    <div className="center">
                        <Link to={AllAppRoutes.contact_us}>React out to us <ArrowRight /></Link>
                    </div>
                </div>
                <div className="banner">

                </div>
            </div>
            <div className="about-hero">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <div>
                                <p className="sect-tag">#1 Academic system in Singapore</p>
                                <h2>Achieve Seamless Administrative Data Management With Our Comprehensive Solutions</h2>
                                <div className="button-flex">
                                    <button>Products & Features</button>
                                    <button>Book Demo</button>
                                </div>
                            </div>
                            <div className="grid-2">
                                <div>
                                    <Rate value={5} />
                                    <p>Discover the optimal match for your startup and get the results together. Expanding
                                        rapidly? With our unique combination of relocation services.</p>
                                    <h5>Adeleke Ifeoluwase, <span>Student</span></h5>
                                </div>
                                <div>
                                    <Rate value={5} />
                                    <p>Discover the optimal match for your startup and get the results together. Expanding
                                        rapidly? With our unique combination of relocation services.</p>
                                    <h5>Adeleke Ifeoluwase, <span>Parent</span></h5>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="about-us-inner-story mt-5">
                <div className="contain">
                    <div className="inner-story-grid">
                        <div className="inner-story-card">
                            <div>
                                <div>
                                    <Avatar.Group>
                                        <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" />
                                        <a href="https://ant.design">
                                            <Avatar
                                                style={{
                                                    backgroundColor: '#f56a00',
                                                }}
                                            >
                                                K
                                            </Avatar>
                                        </a>
                                        <Avatar
                                            style={{
                                                backgroundColor: '#87d068',
                                            }}
                                            icon={<UserOutlined />}
                                        />
                                        <Avatar
                                            style={{
                                                backgroundColor: '#1677ff',
                                            }}
                                            icon={<AntDesignOutlined />}
                                        />
                                    </Avatar.Group>
                                </div>

                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly?</p>
                            </div>
                            <div className="divider"></div>
                            <div>
                                <h3>3.9M<span>+</span></h3>
                                <h5>Daily Active Users</h5>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services.</p>
                            </div>
                            <div className="divider"></div>
                            <div>
                                <h3>6.4K<span>+</span></h3>
                                <h5>Community Members</h5>
                                <p>Discover the optimal match for your startup and get the results together. Expanding
                                    rapidly? With our unique combination of relocation services.</p>
                                <button className="btn-white">Join Our Community</button>
                            </div>
                        </div>
                        <div>
                            <div>
                                {/* <img src={_11} alt="_11" /> */}
                                <div className="show_me_bg _1">

                                </div>
                            </div>
                            <div className="grid-2">
                                <div className="show_me_bg _2">
                                </div>
                                <div className="show_me_bg _3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="final-props-story mt-5">
                <div className="contain">
                    <div className="final-props-grid">
                        <div>
                            <div className="final-story-img">

                            </div>
                        </div>
                        <div>
                            <h2>Final Enrollment</h2>
                            <p>Discover the optimal match for your startup and get the results together. Expanding
                                rapidly? With our unique combination of relocation services. Discover the optimal match
                                for your startup and get the results together. Expanding
                                rapidly? With our unique combination of relocation services.</p>
                            <div>
                                <Collapse defaultActiveKey={['1']} ghost expandIconPosition="right" accordion>
                                    <Panel header="This is panel header 1" key="1">
                                        <p>Discover the optimal match for your startup and get the results together. Expanding
                                            rapidly? With our unique combination of relocation services
                                            and language courses, we take the pain out of hiring international talent.</p>
                                    </Panel>
                                    <Panel header="This is panel header 2" key="2">
                                        <p>Discover the optimal match for your startup and get the results together. Expanding
                                            rapidly? With our unique combination of relocation services
                                            and language courses, we take the pain out of hiring international talent.</p>
                                    </Panel>
                                    <Panel header="This is panel header 3" key="3">
                                        <p>Discover the optimal match for your startup and get the results together. Expanding
                                            rapidly? With our unique combination of relocation services
                                            and language courses, we take the pain out of hiring international talent.</p>
                                    </Panel>
                                    <Panel header="This is panel header 4" key="4">
                                        <p>Discover the optimal match for your startup and get the results together. Expanding
                                            rapidly? With our unique combination of relocation services
                                            and language courses, we take the pain out of hiring international talent.</p>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-5"></div>
            <Footer />
        </div>
    )
}

export default AboutUs;