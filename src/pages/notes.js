import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const NotesPage = () => {
    return (
        <div>
            <Nav />
            <div className="notes-page">
                <div className="contain">
                    <div>
                        <h3>JSS 3 Notes</h3>
                        <div className="grid-4">
                            <div className="notes-block">
                                <div className="notes-block-body">
                                    <div>
                                        <p className="notes-date">May 20, 2023</p>
                                        <p className="notes-subject">Mathematics</p>
                                        <h3 className="notes-topic">Socialization and Communication</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="notes-block">
                                <div className="notes-block-body">
                                    <div>
                                        <p className="notes-date">May 20, 2023</p>
                                        <p className="notes-subject">Mathematics</p>
                                        <h3 className="notes-topic">Socialization and Communication</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="notes-block">
                                <div className="notes-block-body">
                                    <div>
                                        <p className="notes-date">May 20, 2023</p>
                                        <p className="notes-subject">Mathematics</p>
                                        <h3 className="notes-topic">Socialization and Communication</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="notes-block">
                                <div className="notes-block-body">
                                    <div>
                                        <p className="notes-date">May 20, 2023</p>
                                        <p className="notes-subject">Mathematics</p>
                                        <h3 className="notes-topic">Socialization and Communication</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotesPage;