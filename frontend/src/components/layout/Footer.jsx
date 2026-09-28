import logo from "../../assets/logo.png"
import "./Footer.css";



function Footer() {
    return (
        <footer>
            <div className="footer-inner">
                <div className="footer-top">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <img src={logo} alt="Logo" className="img"/>
                        </div>
                        <p>The modern platform for peer knowledge
                             and skill exchange ecosystems. 
                             Connect reciprocally on complementary ambitions, 
                             and expand your craft together.
                        </p>
                        <span className="footer-tagline"> Learn. Share. Grow.</span>
                    </div>

                    <div className="footer-col">
                        <h4 className="footer-heading">PLATFORM</h4>
                        <ul className="footer-links">
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("how-it-works")}
                                >
                                    How It Works
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("explore-skills")}
                                >
                                    Skill Explorer
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("live-matching")}
                                >
                                    Smart Matching
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("community-peers")}
                                >
                                    Peer Showcase
                                </button>
                            </li>
                        </ul>
                    </div>


                     <div className="footer-col">
                        <h4 className="footer-heading">CATEGORIES</h4>
                        <ul className="footer-links">
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("community-peers")}
                                >
                                    Engineering & Code
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("community-peers")}
                                >
                                    Design & Creative
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("community-peers")}
                                >
                                    Language & Speech
                                </button>
                            </li>
                            <li>
                                <button 
                                    className="footer-link-btn"
                                    onClick={() => scrollToSection("community-peers")}
                                >
                                    Business & Product
                                </button>
                            </li>
                        </ul>
                    </div>



                    <div className="footer-col">
                        <h4 className="footer-heading">COMPANY</h4>
                        <ul className="footer-links">
                            <li><a href="#about">About Skillor</a></li>
                            <li><a href="#guidelines">Exchange Guidelines</a></li>
                            <li><a href="#privacy">Privacy & Safety</a></li>
                            <li><a href="#terms">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>



                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 Skillor Inc. All rights reserved. Built for peer learners everywhere.
                    </p>
                    <div className="footer-legal-links">
                        <a href="#terms">Terms</a>
                        <a href="#privacy">Privacy</a>
                        <a href="#community-code">Community Code</a>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer;