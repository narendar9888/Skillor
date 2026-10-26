import { useState } from "react";
import "./Request.css";
import {
  ArrowLeftRight,
  BadgeCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  CirclePlus,
  Filter,
  Inbox,
  Handshake,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  CircleX,
} from "lucide-react";

const initialRequests = [
  {
    id: 1,
    name: "Priya Patel",
    username: "@priyadesign",
    location: "San Francisco, CA (PST)",
    rating: "4.95",
    swaps: 48,
    badge: "VERIFIED TUTOR",
    avatar: "PP",
    avatarColor: "peach",
    online: true,
    availability: "Available Weekends",
    compatibility: 98,
    offeredTitle: "UI/UX Architecture & Figma Tokens",
    offeredSkills: ["Figma Variables", "Design Tokens", "Atomic Systems"],
    requestedTitle: "Python Architecture & FastAPI",
    requestedSkills: ["Python Async", "FastAPI", "Data Schemas"],
    quote:
      "Hey Narendar! I noticed your profile through the collaborative match graph. I am building an automated design token pipeline and need senior backend guidance on Python async workflows. In exchange, I can fully mentor you in production Figma variables, atomic token architectures, and design handoff systems. Let me know if Saturday works!",
    date: "Saturday, Nov 1",
    time: "10:00 AM PST",
    status: "incoming",
    matchLabel: "Match Synergy",
  },
  {
    id: 2,
    name: "Carlos Mendez",
    username: "@carlos_dev",
    location: "Berlin, Germany (CET)",
    rating: "4.89",
    swaps: 31,
    badge: "TOP CONTRIBUTOR",
    avatar: "CM",
    avatarColor: "blue",
    online: false,
    availability: "Weekday Evenings",
    compatibility: 94,
    offeredTitle: "PostgreSQL Optimization & Rust",
    offeredSkills: ["Index Tuning", "Rust FFI"],
    requestedTitle: "React 19 Server Actions & WebSockets",
    requestedSkills: ["Server Components", "Realtime Sync"],
    quote:
      "Hi Narendar! Saw your open exchange request on the dashboard. I have 8+ years tuning heavy Postgres database write workloads and can help diagnose your query bottlenecks. In turn, I'd appreciate your eyes on React 19 RSC streaming patterns. Can we coordinate next Tuesday?",
    date: "Tuesday, Nov 4",
    time: "6:30 PM CET",
    status: "incoming",
    matchLabel: "Compatibility",
  },
  {
    id: 3,
    name: "Elena Rostova",
    username: "@elena_polyglot",
    location: "London, UK (GMT)",
    rating: "5.0",
    swaps: 64,
    badge: "POLYMATH MASTER",
    avatar: "ER",
    avatarColor: "green",
    online: true,
    availability: "Available Weekends",
    compatibility: 88,
    offeredTitle: "NLP Vector Embeddings & French C2",
    offeredSkills: ["RAG Architecture", "French Fluency"],
    requestedTitle: "Fullstack WebSockets & State Sync",
    requestedSkills: ["Realtime Channels", "Redis PubSub"],
    quote:
      "Bonjour Narendar! I'd love to exchange either an intensive conversational French coaching session or an in-depth code session on multi-modal vector search in return for your guidance on WebSocket production stability!",
    date: "Sunday, Nov 2",
    time: "3:00 PM GMT",
    status: "incoming",
    matchLabel: "Compatibility",
  },
  {
    id: 4,
    name: "Aarav Sharma",
    username: "@aarav_codes",
    location: "Delhi, India (IST)",
    rating: "4.85",
    swaps: 18,
    badge: "RISING MEMBER",
    avatar: "AS",
    avatarColor: "purple",
    online: true,
    availability: "Weekday Evenings",
    compatibility: 91,
    offeredTitle: "Python & Data Structures",
    offeredSkills: ["Python", "Problem Solving"],
    requestedTitle: "Frontend React Development",
    requestedSkills: ["React", "CSS", "Responsive UI"],
    quote:
      "I'd like to improve my React development skills. I can help you practise Python and data structures in return. Let us schedule a session that works for both of us.",
    date: "Wednesday, Nov 5",
    time: "5:00 PM IST",
    status: "sent",
    matchLabel: "Great Match",
  },
  {
    id: 5,
    name: "Meera Kapoor",
    username: "@meeraux",
    location: "Mumbai, India (IST)",
    rating: "4.92",
    swaps: 27,
    badge: "VERIFIED TUTOR",
    avatar: "MK",
    avatarColor: "peach",
    online: true,
    availability: "Available Weekends",
    compatibility: 96,
    offeredTitle: "UI Design & Prototyping",
    offeredSkills: ["Figma", "Wireframes"],
    requestedTitle: "JavaScript & API Integration",
    requestedSkills: ["JavaScript", "REST APIs"],
    quote:
      "I can help you build better UI designs and prototypes. In return, I would love to learn more about JavaScript and integrating APIs into frontend applications.",
    date: "Saturday, Nov 8",
    time: "11:00 AM IST",
    status: "accepted",
    matchLabel: "Excellent Match",
  },
];

const tabs = [
  { id: "incoming", label: "Incoming" },
  { id: "sent", label: "Sent Proposals" },
  { id: "accepted", label: "Accepted" },
  { id: "closed", label: "Declined & Closed" },
];

export default function ExchangeRequests() {
  const [requests, setRequests] = useState(initialRequests);
  const [activeTab, setActiveTab] = useState("incoming");
  const [search, setSearch] = useState("");
  const [minMatch, setMinMatch] = useState("0");
  const [weekendOnly, setWeekendOnly] = useState(false);
  const [notice, setNotice] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  const counts = {
    incoming: requests.filter((r) => r.status === "incoming").length,
    sent: requests.filter((r) => r.status === "sent").length,
    accepted: requests.filter((r) => r.status === "accepted").length,
    closed: requests.filter((r) => r.status === "closed").length,
  };

  const filteredRequests = requests.filter((request) => {
    const tabMatches = request.status === activeTab;
    const searchText = [
      request.name,
      request.offeredTitle,
      request.requestedTitle,
      ...request.offeredSkills,
      ...request.requestedSkills,
    ]
      .join(" ")
      .toLowerCase();

    const searchMatches = searchText.includes(search.toLowerCase());
    const matchMatches = request.compatibility >= Number(minMatch);
    const weekendMatches =
      !weekendOnly || request.availability.toLowerCase().includes("weekend");

    return tabMatches && searchMatches && matchMatches && weekendMatches;
  });

  return (
    <main className="exchange-page">
      {notice && (
        <div className="exchange-toast" role="status">
          <CheckCircle2 size={17} /> {notice}
          <button
            onClick={() => setNotice("")}
            aria-label="Dismiss notification"
          >
            <CircleX size={17} />
          </button>
        </div>
      )}

      <section className="exchange-hero">
        <div className="exchange-hero-heading">
          <div>
            <h1>Exchange Requests</h1>
            <p>
              Review, manage, and coordinate your bilateral skill learning
              proposals and active peer invitations.
            </p>
          </div>

          <div className="exchange-hero-actions">
            <button
              className="exchange-btn exchange-btn-light"
              onClick={() => setActiveTab("sent")}
            >
              <Send size={15} /> Track Sent ({counts.sent})
            </button>
            <button
              className="exchange-btn exchange-btn-primary"
              onClick={() => {
                setNotice(
                  "Proposal creation will be connected to your backend next.",
                );
              }}
            >
              <CirclePlus size={15} /> New Swap Proposal
            </button>
          </div>
        </div>

        <div className="exchange-stats-grid">
          <div className="exchange-stat">
            <div className="exchange-stat-info">
              <span className="exchange-stat-label">Pending</span>
              <strong>{counts.incoming}</strong>
              <span className="exchange-stat-subtitle orange">
                Action Required
              </span>
            </div>
            <div className="exchange-stat-icon orange">
              <Mail size={19} />
            </div>
          </div>
          <div className="exchange-stat">
            <div className="exchange-stat-info">
              <span className="exchange-stat-label">Accepted</span>
              <strong>{counts.accepted}</strong>
              <span className="exchange-stat-subtitle teal">
                {counts.accepted} In Escrow • Active
              </span>
            </div>
            <div className="exchange-stat-icon teal">
              <Handshake size={20} />
            </div>
          </div>
          <div className="exchange-stat">
            <div className="exchange-stat-info">
              <span className="exchange-stat-label">Sent Proposals</span>
              <strong>{counts.sent}</strong>
              <span className="exchange-stat-subtitle purple">
                Awaiting peer reply
              </span>
            </div>
            <div className="exchange-stat-icon purple">
              <Send size={19} />
            </div>
          </div>
          <div className="exchange-stat">
            <div className="exchange-stat-info">
              <span className="exchange-stat-label">Completed Exchanges</span>
              <strong>
                38{" "}
                <small className="exchange-rating">
                  <Star size={12} fill="currentColor" /> 4.95
                </small>
              </strong>
              <span className="exchange-stat-subtitle slate">
                100% Reciprocal release
              </span>
            </div>
            <div className="exchange-stat-icon slate">
              <Settings size={19} />
            </div>
          </div>
        </div>
      </section>

      <section className="exchange-toolbar">
        <div
          className="exchange-tabs"
          role="tablist"
          aria-label="Request categories"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.id}
              className={`exchange-tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
              <span>{counts[tab.id]}</span>
            </button>
          ))}
        </div>

        <div className="exchange-filters">
          <div className="exchange-search">
            <Filter size={14} />
            <input
              type="search"
              placeholder="Filter by peer or skill..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search by peer or skill"
            />
          </div>

          <select
            value={minMatch}
            onChange={(event) => setMinMatch(event.target.value)}
            aria-label="Minimum compatibility"
          >
            <option value="0">Any Match</option>
            <option value="80">80%+ Match</option>
            <option value="90">90%+ Match</option>
            <option value="95">95%+ Match</option>
          </select>

          <button
            className={`exchange-filter-chip ${weekendOnly ? "selected" : ""}`}
            onClick={() => setWeekendOnly((value) => !value)}
          >
            This Weekend
          </button>
        </div>
      </section>

      <section className="exchange-list">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <article className="exchange-request-card" key={request.id}>
              <div className="exchange-person-row">
                <div className={`exchange-avatar ${request.avatarColor}`}>
                  {request.avatar}
                  <span
                    className={`exchange-online ${request.online ? "is-online" : ""}`}
                  />
                </div>
                <div className="exchange-person-info">
                  <div className="exchange-person-name">
                    <h3>{request.name}</h3>
                    <span className="exchange-username">
                      {request.username}
                    </span>
                    <span className="exchange-member-badge">
                      <BadgeCheck size={11} /> {request.badge}
                    </span>
                  </div>
                  <div className="exchange-person-meta">
                    <span>
                      <MapPin size={12} /> {request.location}
                    </span>
                    <span className="exchange-rating">
                      <Star size={12} /> {request.rating} ({request.swaps}{" "}
                      swaps)
                    </span>
                    <span>
                      <CalendarDays size={12} /> {request.availability}
                    </span>
                  </div>
                </div>
                <div className="exchange-match">
                  <strong>
                    <Sparkles size={13} /> {request.compatibility}%{" "}
                    {request.matchLabel}
                  </strong>
                  <span>Direct 1:1 Reciprocal Pair</span>
                </div>
              </div>
              <div className="exchange-skills-panel">
                <div className="exchange-skill-column">
                  <span className="exchange-skill-label">
                    THEY OFFER TO TEACH <b>Level: Lead / Senior</b>
                  </span>
                  <h4>{request.offeredTitle}</h4>
                  <div className="exchange-tags">
                    {request.offeredSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="exchange-duration">
                  <span className="exchange-swap-symbol">
                    <ArrowLeftRight size={19} />
                  </span>
                </div>
                <div className="exchange-skill-column requested">
                  <span className="exchange-skill-label">
                    YOUR REQUESTED SKILL <b>YOU TEACH</b>
                  </span>
                  <h4>{request.requestedTitle}</h4>
                  <div className="exchange-tags">
                    {request.requestedSkills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="exchange-quote">
                “{request.quote}”
              </blockquote>
              <div className="exchange-card-footer">
                <div className="exchange-proposal-info">
                  <span>
                    <CalendarDays size={13} /> Proposed: {request.date} •{" "}
                    {request.time}
                  </span>
                </div>
                <div className="exchange-actions">
                  {request.status === "incoming" ? (
                    <>
                      <button
                        className="exchange-btn exchange-btn-primary"
                        onClick={() => {
                          setRequests((current) =>
                            current.map((item) =>
                              item.id === request.id
                                ? { ...item, status: "accepted" }
                                : item,
                            ),
                          );
                          setNotice(`Exchange with ${request.name} accepted!`);
                          window.setTimeout(() => setNotice(""), 3000);
                        }}
                      >
                        <CheckCircle2 size={14} /> Accept Exchange
                      </button>
                      <button
                        className="exchange-btn exchange-btn-light"
                        onClick={() => {
                          setRequests((current) =>
                            current.map((item) =>
                              item.id === request.id
                                ? { ...item, status: "closed" }
                                : item,
                            ),
                          );
                          setNotice(`Request from ${request.name} declined.`);
                          window.setTimeout(() => setNotice(""), 3000);
                        }}
                      >
                        <CircleX size={14} /> Decline
                      </button>
                    </>
                  ) : (
                    <span
                      className={`exchange-status status-${request.status}`}
                    >
                      {request.status === "sent"
                        ? "Awaiting reply"
                        : request.status === "accepted"
                          ? "✓ Accepted"
                          : "Closed"}
                    </span>
                  )}
                  <button
                    className="exchange-icon-btn"
                    aria-label={`Message ${request.name}`}
                    onClick={() =>
                      setSelectedMember({ ...request, showProfile: false })
                    }
                  >
                    <MessageSquare size={15} />
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <div className="exchange-empty">
            <Inbox size={34} aria-hidden="true" />
            <h3>No requests found</h3>
            <p>Try another tab or change your search and filters.</p>
            <button
              className="exchange-btn exchange-btn-light"
              onClick={() => {
                setSearch("");
                setMinMatch("0");
                setWeekendOnly(false);
              }}
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      {selectedMember && (
        <div
          className="exchange-modal-backdrop"
          onClick={() => setSelectedMember(null)}
        >
          <section
            className="exchange-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="exchange-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h2 id="exchange-modal-title">{selectedMember.name}</h2>
            <p>
              {selectedMember.username} · {selectedMember.location}
            </p>
            <div className="exchange-modal-detail">
              <strong>{selectedMember.compatibility}% compatibility</strong>
              <p>Offers: {selectedMember.offeredTitle}</p>
              <p>Wants to learn: {selectedMember.requestedTitle}</p>
              <p>{selectedMember.quote}</p>
            </div>
            {!selectedMember.showProfile && (
              <p className="exchange-modal-note">
                Messaging UI can be connected to your backend chat API.
              </p>
            )}
            <button
              className="exchange-btn exchange-btn-primary full-width"
              onClick={() => setSelectedMember(null)}
            >
              Close
            </button>
          </section>
        </div>
      )}
    </main>
  );
}
