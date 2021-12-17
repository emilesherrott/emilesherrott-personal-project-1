import React from "react";

import MailingList from "../components/home/MailingList";

const Home = () => {

    return (
        <main>
        <h1 className="main-font">Hello World</h1>
        <div className="home-container">
            <section className="image"><h2>Images</h2></section>
            <section className="mailing-list">
                <MailingList />
            </section>
        </div>
        </main>

    )
}

export default Home