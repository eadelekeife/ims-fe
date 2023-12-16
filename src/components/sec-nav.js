import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = props => {
    const [fixedNav, setFixedNav] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 100) {
            setFixedNav(true);
        } else {
            setFixedNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    return (
        <div>
            <div className={`sec-navigation ${fixedNav ? 'fix' : ''}`}>
                <div className="sec-logo"></div>
                <div>
                    <ul>
                        <li>
                            <Link to="" className="active-nav">Home</Link>
                        </li>
                        <li>
                            <Link to="">Learning Program</Link>
                        </li>
                        <li>
                            <Link to="">About Us</Link>
                        </li>
                        <li>
                            <Link to="">Admission</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <Link to="">(+234) 813 227 7316</Link>
                        </li>
                        <li>
                            <Link className="btn-blue" to="">Student Panel</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navigation;