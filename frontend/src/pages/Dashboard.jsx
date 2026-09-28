import React from "react";
import "./Dashboard.css";

function Dashboard() {
    // Temporary structure.
    // These values will later come from AuthContext / backend API.
    const user = {
    name: "User",
    incomingRequests: 0,
    upcomingSession: {
    day: "Saturday",
    time: "6:00 PM",
    skill: "React",
    partner: "Skillor Member",
},

    stats: {
        skillsOffered: 0,
        skillsLearned: 0,
        hoursExchanged: 0,
        rating: 0,
    },
    progress: {
        learningHours: 6,
        teachingHours: 4,
        targetHours: 10,
},
};

    return (
        <div className="dashboard">
            {/* Hero Section */}
            <section className="dashboard-hero">
                <div className="hero-content">
                    <span className="hero-badge">
                        Reciprocal Timebank Active
                    </span>

                    <h1>
                        Good morning, {user.name} 👋
                    </h1>

                    <p>
                        You have{" "}
                        <strong>
                            {user.incomingRequests} incoming exchange requests
                        </strong>
                        {user.upcomingSession
                            ? ` and an upcoming session with ${user.upcomingSession.partner}.`
                            : "."}
                    </p>
                </div>

                <div className="hero-actions">
                    <button type="button">
                        + Add New Skill
                    </button>

                    <button type="button">
                        Explore Matches
                    </button>
                </div>
            </section>
            <section className="dashboard-stats">
    <div className="stat-card">
        <span className="stat-value">
            {user.stats.skillsOffered}
        </span>
        <span className="stat-label">
            Skills Offered
        </span>
    </div>

    <div className="stat-card">
        <span className="stat-value">
            {user.stats.skillsLearned}
        </span>
        <span className="stat-label">
            Skills Learned
        </span>
    </div>

    <div className="stat-card">
        <span className="stat-value">
            {user.stats.hoursExchanged}
        </span>
        <span className="stat-label">
            Hours Exchanged
        </span>
    </div>

    <div className="stat-card">
        <span className="stat-value">
            {user.stats.rating}
        </span>
        <span className="stat-label">
            Rating
        </span>
    </div>
</section>
<section className="dashboard-session-progress">

    <div className="session-card">
        <div className="section-heading">
            <span className="section-label">
                UPCOMING LIVE SESSION
            </span>

            <span className="session-day">
                {user.upcomingSession.day}
            </span>
        </div>

        <h2>
            {user.upcomingSession.skill} Session
        </h2>

        <p>
            {user.upcomingSession.time} with{" "}
            <strong>
                {user.upcomingSession.partner}
            </strong>
        </p>

        <button type="button">
            Join Session
        </button>
    </div>


    <div className="progress-card">
        <div className="section-heading">
            <span className="section-label">
                RECIPROCAL PROGRESS
            </span>
        </div>

        <div className="progress-item">
            <div className="progress-info">
                <span>Learning Hours</span>
                <span>
                    {user.progress.learningHours}/
                    {user.progress.targetHours} hrs
                </span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${
                            (user.progress.learningHours /
                                user.progress.targetHours) *
                            100
                        }%`,
                    }}
                ></div>
            </div>
        </div>

        <div className="progress-item">
            <div className="progress-info">
                <span>Teaching Hours</span>
                <span>
                    {user.progress.teachingHours}/
                    {user.progress.targetHours} hrs
                </span>
            </div>

            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{
                        width: `${
                            (user.progress.teachingHours /
                                user.progress.targetHours) *
                            100
                        }%`,
                    }}
                ></div>
            </div>
        </div>
    </div>

</section>
        </div>
    );
}

export default Dashboard;