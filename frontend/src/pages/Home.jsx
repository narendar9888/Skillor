import { useState } from "react";
import {
    Sparkles,
    BookOpen,
    ArrowLeftRight,
    BrainCog,
    ArrowRight,
    Star,
    CircleCheck,
    Dot,
    ShieldCheck,
    CalendarCheck,
    CheckCircle
} from "lucide-react";

import "./Home.css";

function Home(){
    const [learnInput, setLearnInput] = useState('');
    const [teachInput, setTeachInput] = useState('');
    return (
      <div className="container">
        <section className="home-sec">
            <div className="top">
                <Sparkles className="sp-icons" size={15} />
                <span>Introducing Smart Two-Way Skill Matching</span>
                <Sparkles className="sp-icons" size={15} />
            </div>

            <h1 className="title">
              Learn a Skill. <span className="span1">Teach a Skill.</span>{" "}
              <span className="span2">Grow Together.</span>
            </h1>
            <p className="subtitle">
              Exchange knowledge directly with peers who want to learn what you
              master. No expensive bootcamps or passive video libraries—just
              reciprocal, human-to-human mastery.
            </p>

            <form className="find">
                <div className="input-group">
                    <div className="label-row">
                        <BookOpen className="book-text"/>
                        <label >I WANT TO LEARN</label>
                    </div>

                    <input 
                        type="text"
                        placeholder="e.g. React, Python, UI/UX"
                        value={learnInput}
                        onChange={(e) => setLearnInput(e.target.value)}
                    />
                </div>

                <button className="btn-swip">
                    <ArrowLeftRight size={16} className="swip"/>
                </button>

                <div className="input-group">
                    <div className="label-row">
                        <BrainCog size={15} className=""/>
                        <label>I CAN TEACH</label>
                    </div>

                    <input 
                        type="text"
                        placeholder="e.g. Figma, Video Editing"
                        value={learnInput}
                        onChange={(e) => setTeachInput(e.target.value)}
                    />
                </div>

                <button className="btn-find">
                    <span>Find Matches</span>
                    <ArrowRight size={15} className="find-arr"/>
                </button>
            </form>

            <div className="trust-bar">
                <div className="trust-item">
                    <Star className="star" size={14}/>
                    <span><b>4.9/5</b> from 12,000+ verified sessions</span>
                </div>
                <div className="trust-dot"><Dot size={15}/></div>

                <div className="trust-item">
                    <CircleCheck size={15}/>
                    <span><b>100% Free</b> Peer Learning</span>
                </div>
                <div className="trust-dot"><Dot size={15}/></div>

                <div className="trust-item">
                    <ShieldCheck size={15} />
                    <span>Verified Members & Students</span>
                </div>
            </div>

            <div className="">
                <div className="">
                    <div className="">
                        <span><Dot size={15}/></span>
                        <span>Live Algorithmic Pair Generated</span>
                    </div>

                    <div className="">
                        <span><CalendarCheck size={15}/></span>
                        <span>Exchange Approved • Scheduled Saturday 6:00 PM</span>
                    </div>
                </div>

            <div className="sim-grid">
                <div className="sim-col">
                <div className="sim-header">
                    <img
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80"
                    alt="Rahul Sharma"
                    className="sim-avatar"
                    />
                    <div className="sim-text">
                    <div className="sim-name-row">
                        <b>Rahul Sharma</b>
                        <CheckCircle size={14} className="verified-check orange" />
                    </div>
                    <span className="sim-role">Frontend Architect @ TechFlow</span>
                    <span className="sim-rating">★ 4.9 (42 exchanges)</span>
                    </div>
                </div>

                <div className="sim-skills-block">
                    <span className="sim-skill-label">TEACHES</span>
                    <div className="sim-chips-row">
                    <span className="sim-chip purple">React.js</span>
                    <span className="sim-chip purple">TypeScript</span>
                    <span className="sim-chip purple">Next.js</span>
                    </div>
                </div>

                <div className="sim-skills-block">
                    <span className="sim-skill-label">WANTS TO LEARN</span>
                    <div className="sim-chips-row">
                    <span className="sim-chip teal">Figma Design Systems</span>
                    <span className="sim-chip teal">UI Prototyping</span>
                    </div>
                </div>
                </div>

                <div className="sim-center-hub">
                <div className="sim-match-circle">
                    <span className="sim-match-pct">96%</span>
                    <span className="sim-match-text">MATCH</span>
                </div>
                <span className="sim-flow-tag">Two-Way ⇄</span>
                </div>

                <div className="sim-col">
                <div className="sim-peer-header">
                    <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Priya Kapoor"
                    className="sim-avatar"
                    />
                    <div className="sim-text">
                    <div className="sim-name-row">
                        <b>Priya Kapoor</b>
                        <CheckCircle size={14} className="verified-check orange" />
                    </div>
                    <span className="sim-role">Lead UX Designer @ AutoCreative</span>
                    <span className="sim-rating">★ 4.9 (38 exchanges)</span>
                    </div>
                </div>

                <div className="sim-skills-block">
                    <span className="sim-skill-label">TEACHES</span>
                    <div className="sim-chips-row">
                    <span className="sim-chip purple">Figma Design Systems</span>
                    <span className="sim-chip purple">Figma/UI/UX</span>
                    <span className="sim-chip purple">User Testing</span>
                    </div>
                </div>

                <div className="sim-skills-block">
                    <span className="sim-skill-label">WANTS TO LEARN</span>
                    <div className="sim-chips-row">
                    <span className="sim-chip teal">React.js Fundamentals</span>
                    <span className="sim-chip teal">Tailwind CSS</span>
                    </div>
                </div>
                </div>
            </div>

            </div>

        </section>
      </div>
    );
};

export default Home;