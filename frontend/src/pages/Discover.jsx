import React, { useState, useEffect, useMemo } from 'react';
import {
  Search,
  Users,
  Star,
  MapPin,
  Sparkles,
  ArrowRight,
  Filter,
  CheckCircle2,
  BookOpen,
  Send,
  MessageSquare,
  SlidersHorizontal,
  X
} from 'lucide-react';
import { api } from '../services/api';
import { useNavigate } from '../router/Router';
import './Discover.css';

const CATEGORIES = [
  'All',
  'Engineering',
  'Design',
  'AI & Data',
  'Media',
  'Languages',
  'Business'
];

export default function Discover({ openChat }) {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [skills, setSkills] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState('');

  // Proposal modal
  const [selectedPeer, setSelectedPeer] = useState(null);
  const [proposalData, setProposalData] = useState({
    offered: '',
    requested: '',
    message: '',
  });

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      try {
        const [usersRes, skillsRes] = await Promise.all([
          api.users.getUsers(),
          api.skills.getAll(),
        ]);
        if (usersRes.success && usersRes.users) {
          setUsers(usersRes.users);
        }
        if (skillsRes.success && skillsRes.skills) {
          setSkills(skillsRes.skills);
        }
      } catch (err) {
        console.error('Database connection error in Discover:', err);
      } finally {
        setLoading(false);
      }
    }
    loadData();
  }, []);

  const filteredUsers = useMemo(() => {
    const q = search.toLowerCase().trim();
    return users.filter((u) => {
      const matchesCategory =
        category === 'All' ||
        (u.categories && u.categories.includes(category)) ||
        (u.teaches && u.teaches.some((s) => s.toLowerCase().includes(category.toLowerCase()))) ||
        (u.wants && u.wants.some((s) => s.toLowerCase().includes(category.toLowerCase())));

      const matchesSearch =
        !q ||
        u.name.toLowerCase().includes(q) ||
        (u.username && u.username.toLowerCase().includes(q)) ||
        (u.teaches && u.teaches.some((s) => s.toLowerCase().includes(q))) ||
        (u.wants && u.wants.some((s) => s.toLowerCase().includes(q))) ||
        (u.location && u.location.toLowerCase().includes(q)) ||
        (u.bio && u.bio.toLowerCase().includes(q));

      const matchesLevel =
        selectedLevel === 'All' ||
        (u.experienceLevel && u.experienceLevel.toLowerCase() === selectedLevel.toLowerCase());

      return matchesCategory && matchesSearch && matchesLevel;
    });
  }, [users, search, category, selectedLevel]);

  const handleOpenProposal = (peer) => {
    setSelectedPeer(peer);
    setProposalData({
      offered: peer.wants?.[0] || 'Web Development',
      requested: peer.teaches?.[0] || 'UI/UX Design',
      message: `Hi ${peer.name}! I found your profile in Discover and would love to exchange skills with you!`,
    });
  };

  const handleSendProposal = async (e) => {
    e.preventDefault();
    if (!selectedPeer) return;
    try {
      const res = await api.requests.createRequest({
        receiverId: selectedPeer.id,
        senderSkills: [proposalData.offered],
        receiverSkills: [proposalData.requested],
        message: proposalData.message,
      });
      if (res.success) {
        setToastMsg(`Proposal sent to ${selectedPeer.name}!`);
        setSelectedPeer(null);
        setTimeout(() => setToastMsg(''), 3500);
      } else {
        setToastMsg(res.message || 'Could not send proposal.');
      }
    } catch (e) {
      setToastMsg('Error submitting proposal.');
    }
  };

  return (
    <div className="discover-page-container">
      {toastMsg && (
        <div className="discover-toast" role="status">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Hero Search Section */}
      <section className="discover-hero">
        <div className="discover-hero-content">
          <span className="discover-badge">
            <Sparkles size={14} /> Peer Marketplace Directory
          </span>
          <h1>Discover Talented Peers & Skills</h1>
          <p>
            Explore verified mentors, engineers, designers, and creators eager to exchange their superpowers 1:1.
          </p>

          <div className="discover-search-bar">
            <Search size={20} className="search-icon discover-search-icon" />
            <input
              type="text"
              placeholder="Search by skill (e.g. React, Figma, Python), name, or city..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              autoFocus
            />
            {search && (
              <button
                type="button"
                className="clear-search-btn discover-clear-btn"
                onClick={() => setSearch('')}
                title="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Quick Categories */}
          <div className="discover-category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`cat-pill ${category === cat ? 'active' : ''}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Directory Grid */}
      <section className="discover-content-section">
        <div className="discover-toolbar">
          <div className="discover-results-count">
            <Users size={18} />
            <span>
              Showing <strong>{filteredUsers.length}</strong> available peers
            </span>
          </div>

          <div className="discover-filters-row">
            <label>
              Level:
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <option value="All">All Levels</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
                <option value="Expert">Expert</option>
              </select>
            </label>
          </div>
        </div>

        {loading ? (
          <div className="discover-loading">
            <div className="discover-spinner" />
            <p>Loading peers from database...</p>
          </div>
        ) : filteredUsers.length === 0 ? (
          <div className="discover-empty">
            <Search size={36} />
            <h3>No members found matching &quot;{search}&quot;</h3>
            <p>Try searching for a broader skill like &quot;React&quot;, &quot;Design&quot;, or &quot;Python&quot;.</p>
            <button
              type="button"
              className="discover-reset-btn"
              onClick={() => {
                setSearch('');
                setSelectedLevel('All');
                setCategory('All');
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="discover-grid">
            {filteredUsers.map((user) => (
              <div className="discover-card" key={user.id}>
                <div className="discover-card-head">
                  <div className="discover-avatar">
                    {user.avatar || (user.name ? user.name.slice(0, 2).toUpperCase() : 'SK')}
                    {user.online && <span className="discover-online-dot" />}
                  </div>

                  <div className="discover-head-meta">
                    <h3>{user.name}</h3>
                    <span className="discover-username">@{user.username || 'member'}</span>
                    <span className="discover-location">
                      <MapPin size={12} /> {user.location || 'Remote'}
                    </span>
                  </div>

                  <div className="discover-rating-badge">
                    <Star size={13} fill="#FBBF24" color="#FBBF24" />
                    <span>{user.rating || 4.9}</span>
                  </div>
                </div>

                <p className="discover-bio">
                  {user.bio || 'Passionate about continuous learning and peer-to-peer knowledge sharing.'}
                </p>

                {/* Skills Section */}
                <div className="discover-skills-group">
                  <span className="skills-group-title">CAN TEACH</span>
                  <div className="discover-chips">
                    {(user.teaches || ['Web Development']).map((s) => (
                      <span
                        key={s}
                        className="chip teach-chip"
                        onClick={() => navigate(`/skills/${encodeURIComponent(s)}`)}
                        title={`View ${s} skill page`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="discover-skills-group">
                  <span className="skills-group-title">WANTS TO LEARN</span>
                  <div className="discover-chips">
                    {(user.wants || ['UI/UX Design']).map((s) => (
                      <span
                        key={s}
                        className="chip learn-chip"
                        onClick={() => navigate(`/skills/${encodeURIComponent(s)}`)}
                        title={`View ${s} skill page`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="discover-card-actions">
                  <button
                    type="button"
                    className="discover-btn outline"
                    onClick={() => navigate(`/profile/${user.id}`)}
                  >
                    View Profile
                  </button>

                  <button
                    type="button"
                    className="discover-btn primary"
                    onClick={() => handleOpenProposal(user)}
                  >
                    <Send size={14} /> Swap
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Popular Skills Showcase */}
        <div className="popular-skills-showcase">
          <h2>Trending Skills on Skillor</h2>
          <p>Click any skill to view tutors offering mentorship and active learners seeking peers.</p>

          <div className="popular-skills-grid">
            {skills.slice(0, 12).map((skill) => (
              <div
                key={skill.id || skill.name}
                className="popular-skill-card"
                onClick={() => navigate(`/skills/${encodeURIComponent(skill.name)}`)}
              >
                <div className="popular-skill-info">
                  <h4>{skill.name}</h4>
                  <span>{skill.category || 'Specialization'} {skill.peersCount ? `• ${skill.peersCount} peers` : ''}</span>
                </div>
                <ArrowRight size={16} className="popular-arrow" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Propose Modal */}
      {selectedPeer && (
        <div className="discover-modal-backdrop" onClick={() => setSelectedPeer(null)}>
          <div className="discover-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="discover-modal-close"
              onClick={() => setSelectedPeer(null)}
            >
              <X size={18} />
            </button>

            <h2>Send Swap Proposal to {selectedPeer.name}</h2>
            <p className="modal-sub">
              Propose a reciprocal 1:1 skill exchange. Both peers give and receive guidance.
            </p>

            <form onSubmit={handleSendProposal} className="discover-modal-form">
              <div className="form-group">
                <label>Skill You Will Teach</label>
                <input
                  type="text"
                  value={proposalData.offered}
                  onChange={(e) => setProposalData({ ...proposalData, offered: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Skill You Want to Learn from {selectedPeer.name}</label>
                <input
                  type="text"
                  value={proposalData.requested}
                  onChange={(e) => setProposalData({ ...proposalData, requested: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Note / Intro Message</label>
                <textarea
                  rows={3}
                  value={proposalData.message}
                  onChange={(e) => setProposalData({ ...proposalData, message: e.target.value })}
                  required
                />
              </div>

              <div className="discover-modal-actions">
                <button
                  type="button"
                  className="discover-btn outline"
                  onClick={() => setSelectedPeer(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="discover-btn primary">
                  Send Proposal
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

