import "../assets/css/home.css";

import React from "react";
import { Link } from "react-router-dom";
import Nav from "../components/nav";
import { Collapse } from "antd";

import { ReactComponent as PlusIcon } from "../assets/images/icons/plus.svg";
import ManSmiling from "../assets/images/home/ev.webp";
import Footer from "../components/footer";

const Homepage = () => {
    const { Panel } = Collapse;
    return (
        <div className="homepage-display">
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
            <div className="hero-sect">
            </div>
            <div className="homepage-props mt_10">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h3>Choose a Quality School <br />for a Bright Future</h3>
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
                                membership also includes benefits, such as discounts.</p>
                        </div>
                        <div className="school-extra-1 _2">
                            <div className="school-extra-img">
                                <img src={ManSmiling} alt="man smiling" />
                            </div>
                            <h3>What Girl Scouts Do</h3>
                            <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                membership also includes benefits, such as discounts.</p>
                        </div>
                        <div className="school-extra-1 _3">
                            <div className="school-extra-img">
                                <img src={ManSmiling} alt="man smiling" />
                            </div>
                            <h3>What Girl Scouts Do</h3>
                            <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                membership also includes benefits, such as discounts.</p>
                        </div>
                        <div className="school-extra-1 _4">
                            <div className="school-extra-img">
                                <img src={ManSmiling} alt="man smiling" />
                            </div>
                            <h3>What Girl Scouts Do</h3>
                            <p>Join a distinguished list of partners that invest in the future. Your lifetime
                                membership also includes benefits, such as discounts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-detail-prop mt_10">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h1>Let's create a brilliant future with our School</h1>
                            <p>Dancerapy’s long-term vision is to inspire our community with non-competitive dance
                                education and many performance opportunities. We have 3 centers spread out across
                                Lagos coupled with our numerous online training sessions to fit your schedule.</p>
                            <ul>
                                <li>Level up your teamwork with benefits such as unlimited app integrations, audio
                                    and video capabilities and more</li>
                                <li>Save 50% for the first three months of Slack Pro</li>
                            </ul>
                            <div className="button-flex">
                                <Link to="" className="btn-blue">Join with us</Link>
                            </div>
                        </div>
                        <div>
                            <div className="blue-me"></div>
                        </div>
                    </div>
                    <div className="company-details">
                        <p>Limited-time offer for new teams upgrading to the Slack Pro subscription. Terms apply.</p>
                        <ul>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-airbnb-black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-spotify-black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-uber-black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/35f0b60/marketing/img/logos/company/etsy_black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-tdameritrade-black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-intuit-black.png" />
                            </li>
                            <li>
                                <img src="https://a.slack-edge.com/65bc061/marketing/img/logos/trials/logo-time-black.png" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="final-props mt_10">
                <div className="contain">
                    <div className="first-final-message">
                        <img src="https://a.slack-edge.com/613463e/marketing/img/homepage/bold-existing-users/create-new-workspace-module/woman-with-laptop-color-background.png" alt="" />
                        <p>Looking for flexibility and power to meet your regulatory requirements and your
                            growth? Consider Enterprise Grid.</p>
                        <button>REACH OUT TO US</button>
                    </div>
                    <div className="grid-4">
                        <div>
                            <img src="https://a.slack-edge.com/d0f4981/marketing/img/trials/img-move-faster.png" alt="" />
                            <h4>Move faster with organised conversations</h4>
                            <p>Streamline collaboration with channels: dedicated spaces for any topic.</p>
                        </div>
                        <div>
                            <img src="https://a.slack-edge.com/d0f4981/marketing/img/trials/img-solve-problems-huddles.png" alt="" />
                            <h4>Move faster with organised conversations</h4>
                            <p>Streamline collaboration with channels: dedicated spaces for any topic.</p>
                        </div>
                        <div>
                            <img src="https://a.slack-edge.com/d0f4981/marketing/img/trials/img-audio-video-clips.png" alt="" />
                            <h4>Move faster with organised conversations</h4>
                            <p>Streamline collaboration with channels: dedicated spaces for any topic.</p>
                        </div>
                        <div>
                            <img src="https://a.slack-edge.com/d0f4981/marketing/img/trials/img-slack-connect.png" alt="" />
                            <h4>Move faster with organised conversations</h4>
                            <p>Streamline collaboration with channels: dedicated spaces for any topic.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage-detail-prop mt_10">
                <div className="contain">
                    <div className="grid-2">
                        <div>
                            <h1>Let's create a brilliant future with our School</h1>
                            <p>Dancerapy’s long-term vision is to inspire our community with non-competitive dance
                                education and many performance opportunities. We have 3 centers spread out across
                                Lagos coupled with our numerous online training sessions to fit your schedule.</p>
                            <ul>
                                <li>Level up your teamwork with benefits such as unlimited app integrations, audio
                                    and video capabilities and more</li>
                                <li>Save 50% for the first three months of Slack Pro</li>
                            </ul>
                            <div className="button-flex">
                                <Link to="" className="btn-blue">Join with us</Link>
                            </div>
                        </div>
                        <div>
                            <div className="blue-me"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="user-faq mt_10">
                <div className="container">
                    <div className="container">
                        <div className="collapse-div">
                            <div className="center-div">
                                <h2>Questions we get asked often.</h2>
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
                                {/* <Panel key={5} header={<p><span>05.</span>How much money must I invest in this platform?</p>}>
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
            <div className="school-feature mt_10">
                <div className="contain">
                    <div>
                        <h4>JOIN THE BEST</h4>
                        <h2>Powering 100,000+ of the best customer experiences</h2>
                        <div className="button-flex">
                            <button className="btn-purple">Start Your Free Trial</button>
                            <button className="btn-purple-border">View Demo</button>
                        </div>
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
            <Footer />
        </div>
    )
}

export default Homepage;