import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Sparkles,
  Users,
  CheckCircle2,
  Send,
  MapPin,
  Star,
  Layers,
  GraduationCap
} from 'lucide-react';
import { api } from '../services/api';
import { useNavigate } from '../router/Router';
import './SkillDetails.css';

export default function SkillDetails({ skillId }) {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [toastMsg, setToastMsg] = useState('');

  // Proposal modal
  const [targetPeer, setTargetPeer] = useState(null);
  const [proposalMsg, setProposalMsg] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function fetchSkill() {
      setLoading(true);
      try {
        const idToFetch = skillId || 'React';
        const res = await api.skills.getById(encodeURIComponent(idToFetch));
        if (res.success && res.skill) {
          setData(res);
        }
      } catch (err) {
        console.error('Error fetching skill details:', err);
      } finally {
        setLoading(false);
      }
    }
    fetchSkill();
  }, [skillId]);

  const handleOpenProposal = (peer, isTeaching) => {
    setTargetPeer({ ...peer, isTeaching });
    setProposalMsg(
      isTeaching
        ? `Hi ${peer.name}! I would love your 1:1 mentorship on ${data.skill.name}. In return, I'm glad to share my knowledge with you!`
        : `Hi ${peer.name}! I noticed you want to learn ${data.skill.name}. I'd love to mentor you in exchange for your skills!`
    );
  };

  const handleSubmitProposal = async (e) => {
    e.preventDefault();
    if (!targetPeer) return;

    setSending(true);
    try {
      const res = await api.requests.createRequest({
        receiverId: targetPeer.id,
        senderSkills: [targetPeer.isTeaching ? 'Peer Skills' : data.skill.name],
        receiverSkills: [targetPeer.isTeaching ? data.skill.name : 'Peer Skills'],
        message: proposalMsg,
      });

      if (res.success) {
        setToastMsg(`Proposal sent to ${targetPeer.name}!`);
        setTargetPeer(null);
        setTimeout(() => setToastMsg(''), 4000);
      } else {
        setToastMsg(res.message || 'Could not send proposal.');
      }
    } catch (e) {
      setToastMsg('Error submitting proposal.');
    } finally {
      setSending(false);
    }
  };

  if (loading) {
    return (
      <div className="skill-details-loading">
        <div className="skill-spinner" />
        <p>Loading skill information...</p>
      </div>
    );
  }

  const skill = data?.skill || {
    name: decodeURIComponent(skillId || 'React'),
    category: 'Software Engineering',
    description: 'Learn modern best practices, build production-grade workflows, and pair with experienced community practitioners.',
  };
  const teachers = data?.teachers || [];
  const learners = data?.learners || [];

  return (
    <div className="skill-details-container">
      {toastMsg && (
        <div className="skill-toast" role="status">
          <CheckCircle2 size={16} />
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Top Navigation */}
      <div className="skill-top-row">
        <button type="button" className="skill-back-btn" onClick={() => navigate('/discover')}>
          <ArrowLeft size={16} />
          <span>Back to Discover</span>
        </button>
      </div>

      {/* Hero Card */}
      <section className="skill-hero-card">
        <div className="skill-hero-meta">
          <span className="skill-category-badge">
            <Layers size={13} /> {skill.category || 'Specialization'}
          </span>
          <h1>{skill.name}</h1>
          <p className="skill-description">
            {skill.description ||
              `Master ${skill.name} through direct 1:1 reciprocal skill exchange with verified community peers.`}
          </p>
        </div>

        <div className="skill-stats-boxes">
          <div className="skill-stat-pill">
            <span className="num">{teachers.length}</span>
            <span className="lbl">Peers Teaching</span>
          </div>

          <div className="skill-stat-pill">
            <span className="num">{learners.length}</span>
            <span className="lbl">Peers Learning</span>
          </div>
        </div>
      </section>

      {/* Two Column Layout: Teachers & Learners */}
      <div className="skill-corridors-grid">
        {/* Column 1: People Teaching this Skill */}
        <section className="skill-column-card">
          <div className="column-header">
            <GraduationCap size={20} className="icon-green" />
            <div>
              <h2>Mentors Offering {skill.name} ({teachers.length})</h2>
              <p>Connect with peers who possess verified craft in this discipline.</p>
            </div>
          </div>

          <div className="peers-list">
            {teachers.length === 0 ? (
              <div className="empty-corridor">
                <p>No peers currently offering to teach this skill.</p>
                <button
                  type="button"
                  className="add-skill-corridor-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  + Add {skill.name} to what you teach
                </button>
              </div>
            ) : (
              teachers.map((teacher) => (
                <div className="peer-corridor-card" key={teacher.id}>
                  <div className="peer-corridor-avatar">
                    {teacher.avatar || teacher.name.slice(0, 2)}
                  </div>

                  <div className="peer-corridor-info">
                    <h4>{teacher.name}</h4>
                    <span className="peer-level-badge">{teacher.level || 'Expert'}</span>
                    <span className="peer-location">
                      <MapPin size={11} /> {teacher.location || 'Remote'}
                    </span>
                  </div>

                  <div className="peer-corridor-actions">
                    <button
                      type="button"
                      className="corridor-btn outline"
                      onClick={() => navigate(`/profile/${teacher.id}`)}
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      className="corridor-btn primary"
                      onClick={() => handleOpenProposal(teacher, true)}
                    >
                      Request
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Column 2: People Wanting to Learn this Skill */}
        <section className="skill-column-card">
          <div className="column-header">
            <Sparkles size={20} className="icon-purple" />
            <div>
              <h2>Learners Seeking {skill.name} ({learners.length})</h2>
              <p>Peers actively looking for guidance who can teach you in return.</p>
            </div>
          </div>

          <div className="peers-list">
            {learners.length === 0 ? (
              <div className="empty-corridor">
                <p>No peers currently seeking this skill.</p>
                <button
                  type="button"
                  className="add-skill-corridor-btn"
                  onClick={() => navigate('/dashboard')}
                >
                  + Add {skill.name} to your learning goals
                </button>
              </div>
            ) : (
              learners.map((learner) => (
                <div className="peer-corridor-card" key={learner.id}>
                  <div className="peer-corridor-avatar purple-avatar">
                    {learner.avatar || learner.name.slice(0, 2)}
                  </div>

                  <div className="peer-corridor-info">
                    <h4>{learner.name}</h4>
                    <span className="peer-level-badge learn">{learner.level || 'Beginner'}</span>
                    <span className="peer-location">
                      <MapPin size={11} /> {learner.location || 'Remote'}
                    </span>
                  </div>

                  <div className="peer-corridor-actions">
                    <button
                      type="button"
                      className="corridor-btn outline"
                      onClick={() => navigate(`/profile/${learner.id}`)}
                    >
                      Profile
                    </button>
                    <button
                      type="button"
                      className="corridor-btn primary"
                      onClick={() => handleOpenProposal(learner, false)}
                    >
                      Teach
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>

      {/* Proposal Modal */}
      {targetPeer && (
        <div className="skill-modal-backdrop" onClick={() => setTargetPeer(null)}>
          <div className="skill-modal-card" onClick={(e) => e.stopPropagation()}>
            <h2>
              Exchange Proposal with {targetPeer.name}
            </h2>
            <p className="modal-sub">
              Focus Discipline: <strong>{skill.name}</strong>
            </p>

            <form onSubmit={handleSubmitProposal} className="skill-modal-form">
              <div className="form-group">
                <label>Proposed Message</label>
                <textarea
                  rows={4}
                  value={proposalMsg}
                  onChange={(e) => setProposalMsg(e.target.value)}
                  required
                />
              </div>

              <div className="modal-actions">
                <button
                  type="button"
                  className="corridor-btn outline"
                  onClick={() => setTargetPeer(null)}
                >
                  Cancel
                </button>
                <button type="submit" className="corridor-btn primary" disabled={sending}>
                  {sending ? 'Sending...' : 'Send Bilateral Proposal'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

