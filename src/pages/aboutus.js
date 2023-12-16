import "../assets/css/about.css";

import React from "react";

import { Rate, Avatar, Collapse, Input } from "antd";
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

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
    const { handleSubmit, control } = useForm({});
    return (
        <div>
            <Nav />
            <div className="about-hero">
                <div className="container">
                    <div>
                        <h2>We combine data and technology for world leading enterprise solutions</h2>
                        {/* <p>Discover the optimal match for your startup and get the results together. Expanding rapidly? With our
                            unique combination of relocation services. Discover the optimal match for your startup and get the
                            results together. Expanding rapidly? With our unique combination of relocation services.</p> */}
                        <div className="action-bars">
                            <Link to={AllAppRoutes.notes} className="main">What we Do</Link>
                            <Link to={AllAppRoutes.contact_us} className="sec">Reach out to us</Link>
                        </div>
                    </div>
                </div>
            </div>
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
                        <h2>Welcome to IMS - Where Dreams Take Flight!</h2>
                        <div className="grid-2">
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="boat-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Discover, Learn, Thrive</h4>
                                    <p>Our commitment to academic excellence is unwavering. With our innovative teaching methods, we provide an
                                        environment where every student can discover their unique talents and unleash their full potential.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="diamond-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Holistic Development</h4>
                                    <p>IMS is committed to nurturing not just students' minds but also their character. Our holistic approach
                                        to education focuses on developing well-rounded individuals, preparing them for success in every aspect of life.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="rocket-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Empowering Tomorrow's Leaders</h4>
                                    <p>Beyond textbooks, we focus on nurturing leadership skills, critical thinking, and a sense of social responsibility. We aim
                                        to empower students to not only become successful professionals but also compassionate citizens.</p>
                                </div>
                            </div>
                            <div className="inner-structure-flex">
                                <div>
                                    <ion-icon name="ribbon-outline"></ion-icon>
                                </div>
                                <div>
                                    <h4>Community and Connection</h4>
                                    <p>IMS is not just a school; it's a family. Our close-knit community fosters connections that go beyond the classroom. We
                                        celebrate diversity, encourage collaboration, and cherish the individuality of each student.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-numbers">
                <div className="container">
                    <h3>Uncover the essence of our school's identity and the transformative journey that awaits.</h3>
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
                        <h3>Peek behind the curtain and meet the passionate minds and dedicated hearts that shape the vision of our educational community.</h3>
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
            <div className="about-sign-up">
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
        </div>
    )
}

export default AboutUs;