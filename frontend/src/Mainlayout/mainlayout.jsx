import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Home from "../pages/Home";
import HowToWork from "../pages/Howitwork";
import About from "../pages/About";
import Footer from "../components/layout/Footer";

function Mainlayout() {
    const [activePage, setActivePage] = useState("home");

    return (
        <div className="main-layout">
            <Navbar activePage={activePage} setActivePage={setActivePage} />
            <main className="main-content">
                {activePage === "home" && <Home />}

                {activePage === "how-to-work" && <HowToWork/>}

                {activePage === "about" && <About/>}
            </main>
            <Footer/>
        </div>
    );
}

export default Mainlayout;