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
} from "lucide-react";

import "./Home.css";

function Home(){
    const [learnInput, setLearnInput] = useState('');
    return (
      <div className="container">
        <section className="home-sec">
            <div>
                <Sparkles className="sp-icons" size={15} />
                <span>Introducing Smart Two-Way Skill Matching</span>
                <Sparkles className="sp-icons" size={15} />
            </div>

            <h1>
              Learn a Skill. <span>Teach a Skill.</span>{" "}
              <span>Teach a Skill.</span>
            </h1>
            <p>
              Exchange knowledge directly with peers who want to learn what you
              master. No expensive bootcamps or passive video libraries—just
              reciprocal, human-to-human mastery.
            </p>

            <form action="">
                <div>
                    <div>
                        <BookOpen/>
                        <label >I WANT TO LEARN</label>
                    </div>

                    <input 
                        type="text"
                        placeholder="e.g. React, Python, UI/UX"
                        value={learnInput}
                        onChange={(e) => setLearnInput(e.target.value)}
                    />
                </div>

                <button>
                    <ArrowLeftRight size={15}/>
                </button>

                <div>
                    <div>
                        <BrainCog size={15}/>
                        <label>I CAN TEACH</label>
                    </div>

                    <input 
                        type="text"
                        placeholder="e.g. Figma, Video Editing"
                        value={learnInput}
                        onChange={(e) => setLearnInput(e.target.value)}
                    />
                </div>

                <button>
                    <span>Find Matches</span>
                    <ArrowRight size={15}/>
                </button>
            </form>

            <div>
                <div>
                    <Star size={14}/>
                    <span><b>4.9/5</b> from 12,000+ verified sessions</span>
                </div>
                <div><Dot size={15}/></div>

                <div>
                    <CircleCheck size={15}/>
                    <span><b>100% Free</b> Peer Learning</span>
                </div>
                <div><Dot size={15}/></div>

                <div>
                    <ShieldCheck size={15} />
                    <span>Verified Members & Students</span>
                </div>
            </div>

            <div>
                <div>
                    <div>
                        <span><Dot size={15}/></span>
                        <span>Live Algorithmic Pair Generated</span>
                    </div>

                    <div>
                        <span><CalendarCheck size={15}/></span>
                        <span>Exchange Approved • Scheduled Saturday 6:00 PM</span>
                    </div>
                </div>

                <div>
                    
                </div>
            </div>

        </section>
      </div>
    );
};

export default Home;