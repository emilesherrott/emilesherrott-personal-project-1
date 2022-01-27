import React from "react";

import Carousel from "../components/home/Carousel";

const Home = () => {

    return (
        <main>
        <div className="home-container">
        <section className="home-carousel grey">
            <Carousel />
        </section>
        </div>
        </main>
    )
}

export default Home