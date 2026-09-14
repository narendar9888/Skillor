# 🌐 Skillor

## 1. Project Overview

**Skillor** is a full-stack web platform where people can find other users who have skills they want to learn and exchange skills with them.

The core idea is:

> **"I teach you something I know, and you teach me something you know."**

Instead of paying for a course, users can learn through **peer-to-peer skill exchange**.

### Simple Example

**Person X**

Can teach:
- Python
- C++

Wants to learn:
- Photoshop
- Video Editing

**Person Y**

Can teach:
- Photoshop
- Video Editing

Wants to learn:
- Python
- C++

The platform detects that:

```text
X teaches Python
       ↓
Y wants Python

Y teaches Photoshop
       ↓
X wants Photoshop
```

Therefore, the system recommends:

> 🎯 **You have a potential skill exchange with Y.**

---

# 2. Brand Identity

## 🌐 Skillor

**Tagline:**  
> **Learn. Share. Grow.**

**Skillor** is a peer-to-peer skill exchange platform where users can teach the skills they know and learn the skills they want.

The platform's core idea is:

```text
I know something you want to learn.
You know something I want to learn.
              ↓
         Skillora Match
              ↓
       Learn • Share • Grow
```

# 2. Problem Statement

Many people want to learn new skills but face problems such as:

- Courses can be expensive.
- Finding a suitable teacher can be difficult.
- People often have useful skills but no platform to exchange them.
- Traditional learning platforms are usually one-directional: one person teaches and another pays.
- Students may know one skill while wanting to learn another.

### Proposed Solution

Build a platform where users can:

1. Create a profile.
2. Add skills they can teach.
3. Add skills they want to learn.
4. Discover other users.
5. Get matched based on complementary skills.
6. Send exchange requests.
7. Accept or reject requests.
8. Chat and schedule learning sessions.
9. Complete exchanges.
10. Rate and review each other.

---

# 3. Main Objective

The main objective is to create a **peer-to-peer learning marketplace without mandatory monetary payment**.

The platform should answer one important question:

> **"Who can teach me what I want to learn, and what can I teach them in return?"**

---

# 4. Target Users

The platform can be useful for:

### 🎓 Students

Students can exchange academic and technical skills.

Example:

```text
Student A:
Can teach → Java
Wants → Web Development

Student B:
Can teach → React
Wants → Java
```

### 💻 Developers

Developers can exchange programming knowledge.

Example:

```text
Can teach:
JavaScript, React

Want to learn:
Python, Machine Learning
```

### 🎨 Creators

Creators can exchange creative skills.

Example:

```text
Can teach:
Graphic Design

Want to learn:
Video Editing
```

### 🧑‍💼 Professionals

Professionals can exchange career-related skills.

Example:

```text
Can teach:
Digital Marketing

Want to learn:
UI/UX Design
```

### 🌱 Beginners

Beginners can find people who are at a similar learning level.

---

# 5. Core Concept

The platform has two important skill lists.

## Skills I Can Teach

Skills the user already knows.

Example:

```text
Python
Java
React
Git
```

## Skills I Want to Learn

Skills the user wants to learn.

Example:

```text
UI/UX
Photoshop
Video Editing
```

The matching system compares these lists between users.

---

# 6. Matching System

This is the most important feature of the project.

Suppose:

### User A

```text
Teach:
Python
React

Learn:
Photoshop
Figma
```

### User B

```text
Teach:
Photoshop
Figma

Learn:
Python
React
```

The system finds:

```text
A teaches Python → B wants Python
B teaches Photoshop → A wants Photoshop

A teaches React → B wants React
B teaches Figma → A wants Figma
```

This produces a **strong two-way match**.

---

# 7. Types of Matches

The system can support different match levels.

## 🟢 Perfect Match

Both users can teach something the other wants.

```text
A teaches X → B wants X
B teaches Y → A wants Y
```

This is the strongest match.

---

## 🟡 One-Way Match

Only one side gets what they want.

```text
A teaches Python
B wants Python

But B does not teach anything A wants.
```

This can still be useful, but it is weaker than a two-way exchange.

---

## 🔵 Multi-Skill Match

Users can have multiple matching skills.

Example:

```text
A:
Teach → Python, JavaScript, React
Learn → Photoshop, Figma

B:
Teach → Photoshop, Figma, UI/UX
Learn → Python, React
```

The system can calculate a high compatibility score.

---

# 8. Match Score

A useful feature is a **compatibility score**.

For example:

```text
Teach Match = number of skills I can teach that you want
Learn Match = number of skills you can teach that I want
```

A simple score could be:

```text
Match Score = Teach Match + Learn Match
```

Example:

```text
User A teaches 2 skills that B wants
User B teaches 2 skills that A wants

Score = 2 + 2
      = 4
```

A more advanced system could assign different weights:

```text
Exact skill match       → high score
Related skill           → medium score
Same learning level     → bonus
Same language           → bonus
Same availability       → bonus
Good rating             → bonus
```

---

# 9. User Registration

Users should be able to create an account.

### Registration fields

```text
Name
Email
Password
Profile Photo
Location (optional)
Bio
Experience Level
```

Experience level could be:

```text
Beginner
Intermediate
Advanced
Expert
```

---

# 10. User Profile

Every user should have a public profile.

Example:

```text
--------------------------------
        Rahul Sharma
--------------------------------

Frontend Developer

⭐ 4.8 Rating

Can Teach:
• JavaScript
• React
• HTML
• CSS

Wants to Learn:
• Python
• Machine Learning

Experience:
Intermediate

Availability:
Evening

[Find Exchange]
--------------------------------
```

---

# 11. Skill Management

Users should be able to add, edit, and remove skills.

### Add Skill

```text
Skill Name: React
Level: Intermediate
Experience: 1 year
```

### Skill Categories

Possible categories:

```text
Programming
Web Development
Mobile Development
Design
Video Editing
Photography
Marketing
Communication
Languages
Academics
Music
Fitness
Business
Finance
Other
```

---

# 12. Discover Users

The Discover page allows users to search for people.

Example:

```text
Search: React
```

Results:

```text
Aarav
Can teach: React
Wants: Python

Priya
Can teach: React, JavaScript
Wants: UI/UX

Rahul
Can teach: React
Wants: Photoshop
```

---

# 13. Filters

Users should be able to filter results by:

- Skill
- Skill category
- Experience level
- Rating
- Availability
- Online / Offline
- Location
- Language

Example:

```text
Skill: React
Level: Intermediate
Availability: Evening
Rating: 4+
```

---

# 14. Recommended Matches

The dashboard should contain a section such as:

> 🎯 Recommended Skilloras

Example:

```text
You matched with Priya!

You can teach:
✓ React

Priya can teach:
✓ Photoshop

Compatibility:
92%

[View Profile]
[Send Exchange Request]
```

---

# 15. Exchange Request

When a user finds a suitable match, they can send an exchange request.

Example:

```text
Hi Priya,

I can teach you React.
I noticed that you can teach Photoshop.

Would you like to exchange skills?

[Send Request]
```

---

# 16. Request Status

Requests can have different states:

```text
Pending
Accepted
Rejected
Cancelled
Completed
```

Example:

```text
Narendar → Priya
Skill: React ↔ Photoshop

Status: Pending
```

---

# 17. Chat System

After accepting an exchange request, users can communicate through chat.

Features:

- Text messages
- Skill discussion
- Session planning
- File sharing (optional)
- Meeting link sharing
- Notifications

Example:

```text
Narendar:
When are you available for the Photoshop session?

Priya:
Saturday at 6 PM works for me.

Narendar:
Perfect 👍
```

---

# 18. Learning Session

Users can create learning sessions.

Example:

```text
Session:
React Basics

Teacher:
Narendar

Learner:
Priya

Date:
Saturday

Time:
6:00 PM

Duration:
60 minutes

Status:
Scheduled
```

---

# 19. Session Management

Users should be able to:

- Schedule sessions
- Reschedule sessions
- Cancel sessions
- Mark sessions as completed
- View upcoming sessions
- View past sessions

Dashboard:

```text
Upcoming Sessions

Today
6:00 PM → React Basics

Tomorrow
5:00 PM → Photoshop Fundamentals
```

---

# 20. Rating and Review

After completing an exchange, users can rate each other.

Example:

```text
Rate Priya

★★★★★

Review:
"Very good Photoshop teacher.
Explained concepts clearly."
```

Ratings can help improve future matching.

---

# 21. Notifications

Users should receive notifications for:

```text
New Match
Exchange Request
Request Accepted
Request Rejected
New Message
Upcoming Session
Session Reminder
New Review
```

---

# 22. Dashboard

The dashboard is the central part of the application.

Possible sections:

```text
-----------------------------------------
Welcome, Narendar 👋
-----------------------------------------

🎯 Your Top Matches

1. Priya
   React ↔ Photoshop
   92% Match

2. Rahul
   Python ↔ UI/UX
   84% Match


📅 Upcoming Sessions

Today - React Basics
Tomorrow - Photoshop


📨 Pending Requests

3 Requests


⭐ Your Rating

4.8 / 5
-----------------------------------------
```

---

# 23. Main Pages

Recommended pages:

```text
/
├── Home
├── About
├── How It Works
├── Discover
├── Matches
├── Login
├── Register
├── Dashboard
├── Profile
├── Edit Profile
├── Skill Details
├── Requests
├── Chat
├── Sessions
├── Reviews
└── Settings
```

---

# 24. Website Navigation

Example navbar:

```text
Logo: Skillora

Home
Discover
Matches
How It Works

Login
Sign Up
```

After login:

```text
Dashboard
Discover
Matches
Messages
Sessions
Profile
Settings
```

---

# 25. Home Page

The homepage should immediately explain the concept.

### Hero Section

```text
Learn a Skill.
Teach a Skill.
Grow Together.

Exchange knowledge with people who
want to learn what you know.

[Find My Skill Match]
```

### Supporting Sections

```text
How It Works
↓
Create Profile
↓
Add Skills
↓
Find Matches
↓
Exchange Knowledge
↓
Grow Together
```

---

# 26. How It Works

## Step 1 — Create Profile

Tell the platform what you know.

## Step 2 — Add Skills

Add:

```text
Skills I Can Teach
Skills I Want to Learn
```

## Step 3 — Find Matches

The matching algorithm finds compatible users.

## Step 4 — Send Request

Send an exchange request.

## Step 5 — Start Learning

Chat, schedule sessions, and exchange knowledge.

## Step 6 — Review

Rate your learning partner.

---

# 27. Suggested Tech Stack

## Frontend

Recommended:

```text
React
Vite
Tailwind CSS
React Router
Lucide React
Framer Motion
```

Optional:

```text
React Hook Form
Axios
TanStack Query
```

---

# 28. Backend

Recommended:

```text
Node.js
Express.js
```

Backend responsibilities:

```text
Authentication
User management
Skills
Matching
Exchange requests
Chat
Sessions
Reviews
Notifications
```

---

# 29. Database

For a beginner-friendly full-stack version:

```text
MongoDB
```

Possible alternative:

```text
PostgreSQL
```

---

# 30. Authentication

Use:

```text
JWT Authentication
```

Flow:

```text
Register
   ↓
Hash Password
   ↓
Save User
   ↓
Login
   ↓
Generate JWT
   ↓
Frontend stores authentication state
   ↓
Protected API requests
```

Passwords should never be stored as plain text.

Use:

```text
bcrypt / bcryptjs
```

---

# 31. Database Design

## Users

```text
users
----------------
_id
name
email
password
bio
profileImage
experienceLevel
availability
rating
createdAt
```

## Skills

```text
skills
----------------
_id
name
category
```

## User Skills

```text
userSkills
----------------
_id
userId
skillId
type
level
experience
```

Where:

```text
type = teach
```

or

```text
type = learn
```

---

# 32. Exchange Requests

```text
exchangeRequests
----------------
_id
senderId
receiverId
senderSkills
receiverSkills
message
status
createdAt
```

Status:

```text
pending
accepted
rejected
cancelled
completed
```

---

# 33. Sessions

```text
sessions
----------------
_id
exchangeId
teacherId
learnerId
skill
date
startTime
duration
meetingLink
status
```

---

# 34. Reviews

```text
reviews
----------------
_id
reviewerId
revieweeId
exchangeId
rating
comment
createdAt
```

---

# 35. Chat

Possible structure:

```text
conversations
----------------
_id
participants
createdAt
```

```text
messages
----------------
_id
conversationId
senderId
message
createdAt
read
```

For real-time messaging, you can use:

```text
Socket.IO
```

---

# 36. API Structure

Example API endpoints:

## Authentication

```text
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
```

## Users

```text
GET    /api/users
GET    /api/users/:id
PUT    /api/users/:id
DELETE /api/users/:id
```

## Skills

```text
GET  /api/skills
POST /api/skills
```

## User Skills

```text
POST   /api/users/me/skills
DELETE /api/users/me/skills/:skillId
GET    /api/users/me/skills
```

## Matches

```text
GET /api/matches
GET /api/matches/:userId
```

## Exchange Requests

```text
POST /api/exchange-requests
GET  /api/exchange-requests
PUT  /api/exchange-requests/:id/accept
PUT  /api/exchange-requests/:id/reject
```

## Sessions

```text
POST /api/sessions
GET  /api/sessions
PUT  /api/sessions/:id
DELETE /api/sessions/:id
```

## Reviews

```text
POST /api/reviews
GET  /api/users/:id/reviews
```

---

# 37. Matching Algorithm

A basic algorithm can be implemented using set intersection.

Suppose:

```text
User A teaches = {Python, React}
User A learns  = {Photoshop, Figma}

User B teaches = {Photoshop, Figma}
User B learns  = {Python, React}
```

Calculate:

```text
A teaches ∩ B learns
```

Result:

```text
{Python, React}
```

And:

```text
B teaches ∩ A learns
```

Result:

```text
{Photoshop, Figma}
```

Therefore:

```text
Strong Two-Way Match
```

---

# 38. Pseudocode

```text
for every other user:

    teachMatch =
        currentUser.teach ∩ otherUser.learn

    learnMatch =
        currentUser.learn ∩ otherUser.teach

    score =
        size(teachMatch) + size(learnMatch)

    if score > 0:
        recommend otherUser
```

Sort recommendations by:

```text
highest score → lowest score
```

---

# 39. Advanced Matching

After implementing the basic algorithm, you can improve it.

### Skill Level

```text
Beginner
Intermediate
Advanced
```

### Availability

```text
Morning
Afternoon
Evening
Weekend
```

### Language

Users can specify languages they are comfortable using.

### Rating

Highly rated users can receive a small ranking bonus.

### Related Skills

For example:

```text
JavaScript → React
Python → Django
HTML/CSS → Frontend
Photoshop → Graphic Design
```

This requires a skill relationship system.

---

# 40. Example Match Formula

A more advanced score could be:

```text
Final Score =
    Skill Match × 50
  + Reverse Match × 30
  + Level Compatibility × 10
  + Availability Match × 5
  + Rating Bonus × 5
```

The exact weights can be changed during development.

---

# 41. Search Experience

Search should feel simple.

Example:

```text
What do you want to learn?

[ React................ ]

[Search]
```

Then:

```text
People who can teach React
```

Cards:

```text
┌─────────────────────────┐
│ 👤 Priya                │
│                         │
│ Teaches                 │
│ React • JavaScript      │
│                         │
│ Wants                   │
│ Photoshop               │
│                         │
│ ⭐ 4.8                  │
│                         │
│ [View Profile]          │
└─────────────────────────┘
```

---

# 42. UI/UX Design

A modern design could use:

```text
Clean cards
Rounded corners
Soft shadows
Glassmorphism
Responsive layout
Dark/Light mode
Smooth animations
Skill badges
Progress indicators
Match percentage
```

Suggested colors can be based around:

```text
Primary → Blue/Purple
Success → Green
Warning → Yellow
Danger → Red
Background → Light gray / Dark slate
```

---

# 43. Mobile Responsiveness

The website should work on:

```text
Mobile
Tablet
Laptop
Desktop
```

Mobile navigation:

```text
☰ Menu
```

Important pages should remain easy to use on small screens.

---

# 44. Security Requirements

Important security features:

- Password hashing
- JWT authentication
- Protected routes
- Input validation
- Authorization checks
- Rate limiting
- Secure HTTP headers
- CORS configuration
- No plain-text passwords
- Sanitize user-generated content

Never trust user input directly.

---

# 45. MVP Version

For the first version, do **not** build everything.

Build these features first:

### Phase 1

```text
Register
Login
Profile
Add Skills
Discover Users
```

### Phase 2

```text
Matching Algorithm
Match Score
Recommended Matches
```

### Phase 3

```text
Exchange Requests
Accept / Reject
```

### Phase 4

```text
Chat
Sessions
```

### Phase 5

```text
Ratings
Reviews
Notifications
```

---

# 46. Recommended Project Structure

The project is divided into three main parts:

- **Frontend** — user interface and client-side logic
- **Backend** — server, APIs, authentication, and business logic
- **Database** — schema, seed data, migrations, and database configuration

```text
skill-exchange/
│
├── frontend/
│   ├── public/
│   │   ├── favicon.svg
│   │   └── images/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SkillBadge.jsx
│   │   │   ├── UserCard.jsx
│   │   │   ├── MatchCard.jsx
│   │   │   ├── RequestCard.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Discover.jsx
│   │   │   ├── Matches.jsx
│   │   │   ├── Profile.jsx
│   │   │   ├── EditProfile.jsx
│   │   │   ├── Requests.jsx
│   │   │   ├── Chat.jsx
│   │   │   ├── Sessions.jsx
│   │   │   └── Settings.jsx
│   │   │
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── hooks/
│   │   │   ├── useAuth.js
│   │   │   └── useFetch.js
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── utils/
│   │   │   └── helpers.js
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── userController.js
│   │   │   ├── skillController.js
│   │   │   ├── matchController.js
│   │   │   ├── requestController.js
│   │   │   ├── sessionController.js
│   │   │   └── reviewController.js
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js
│   │   │   ├── errorMiddleware.js
│   │   │   └── validateMiddleware.js
│   │   │
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Skill.js
│   │   │   ├── ExchangeRequest.js
│   │   │   ├── Session.js
│   │   │   ├── Review.js
│   │   │   ├── Conversation.js
│   │   │   └── Message.js
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── userRoutes.js
│   │   │   ├── skillRoutes.js
│   │   │   ├── matchRoutes.js
│   │   │   ├── requestRoutes.js
│   │   │   ├── sessionRoutes.js
│   │   │   ├── reviewRoutes.js
│   │   │   └── chatRoutes.js
│   │   │
│   │   ├── services/
│   │   │   ├── matchingService.js
│   │   │   ├── notificationService.js
│   │   │   └── chatService.js
│   │   │
│   │   ├── utils/
│   │   │   ├── generateToken.js
│   │   │   └── hashPassword.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── .env
│   ├── package.json
│   └── README.md
│
├── database/
│   ├── schemas/
│   │   ├── users.schema.js
│   │   ├── skills.schema.js
│   │   ├── exchangeRequests.schema.js
│   │   ├── sessions.schema.js
│   │   ├── reviews.schema.js
│   │   ├── conversations.schema.js
│   │   └── messages.schema.js
│   │
│   ├── seed/
│   │   ├── users.seed.js
│   │   ├── skills.seed.js
│   │   └── seed.js
│   │
│   ├── migrations/
│   │   └── README.md
│   │
│   ├── indexes/
│   │   └── indexes.js
│   │
│   ├── database-design.md
│   └── README.md
│
├── .gitignore
├── README.md
└── package.json
```

## Folder Responsibilities

### Frontend

The frontend is responsible for:

- Displaying pages and components
- Handling user interactions
- Managing client-side state
- Calling backend APIs
- Showing matches, requests, and sessions
- Managing responsive design

### Backend

The backend is responsible for:

- Authentication and authorization
- User and skill management
- Matching logic
- Exchange requests
- Chat and sessions
- Reviews and notifications
- API validation and security

### Database

The database folder is responsible for:

- Database schema definitions
- Seed data for development
- Migrations
- Indexes
- Database documentation
- Relationships between collections or tables

> The actual MongoDB or PostgreSQL database runs separately. The `database` folder stores the code and configuration used to manage it.

## Recommended Database Choice

For the first version, use:

```text
MongoDB
```

The backend connects to MongoDB, while the database folder contains the schema and seed files.

```text
Frontend
   ↓
Backend API
   ↓
MongoDB Database
```

# 51. Example Complete User Flow

```text
User opens website
        ↓
Creates account
        ↓
Creates profile
        ↓
Adds "Python" to Teach
        ↓
Adds "UI/UX" to Learn
        ↓
System searches users
        ↓
Finds Rahul
        ↓
Rahul teaches UI/UX
        ↓
Rahul wants Python
        ↓
🎯 100% Two-Way Match
        ↓
User views Rahul's profile
        ↓
Sends exchange request
        ↓
Rahul accepts
        ↓
Chat opens
        ↓
They schedule a session
        ↓
Exchange skills
        ↓
Mark exchange completed
        ↓
Both rate each other
```

---

# 52. What Makes This Project Unique?

The project is more interesting than a normal CRUD application because it includes:

### 1. Matching Algorithm

The application makes recommendations based on user data.

### 2. Two-Sided Marketplace Concept

Both users provide and receive value.

### 3. Real-World Problem

People have skills they can share but often cannot find the right learning partner.

### 4. Social Learning

Users build connections while learning.

### 5. Full-Stack Complexity

The project can include:

```text
Authentication
CRUD
Search
Filtering
Algorithms
Real-time chat
Scheduling
Notifications
Ratings
Database relationships
```

This makes it a strong **2nd-year full-stack project**.

---

# 53. Future Features

After the MVP, you can add:

## AI Skill Matching

Use AI to understand related skills.

Example:

```text
User wants:
"Frontend development"

System understands:
HTML
CSS
JavaScript
React
Tailwind
```

## AI Profile Suggestions

AI can suggest:

```text
Skills you may want to learn
Skills you could teach
Potential matches
```

## Video Calling

Integrate a video meeting system.

## Skill Verification

Users can take quizzes to verify skills.

## Learning Paths

Example:

```text
HTML
 ↓
CSS
 ↓
JavaScript
 ↓
React
```

## Badges

```text
Python Mentor
Top Teacher
Fast Learner
Reliable Partner
100 Sessions Completed
```

## Gamification

```text
XP
Levels
Achievements
Leaderboards
Streaks
```

---

# 54. Possible Project Names

Some branding ideas:

```text
Skillora
SkillBridge
SkillLoop
SkillMate
SkillXchange
Learn2Teach
TeachTrade
SkillConnect
SkillCircle
SkillBuddy
```

A strong simple choice is:

> **Skillora — Learn. Share. Grow.**

---

# 55. Final Project Vision

The final platform should become a community where knowledge is exchanged rather than simply purchased.

The core loop is:

```text
Know Something
      ↓
Teach Someone
      ↓
Find What You Want
      ↓
Learn From Someone
      ↓
Build Connection
      ↓
Gain Experience
      ↓
Teach More
```

### One-line project description

> **Skillora is a peer-to-peer skill exchange platform that intelligently matches people who can teach what each other wants to learn.**

---

# 56. Short Resume Description

**Skillora — Peer-to-Peer Skillora Platform**

> Built a full-stack platform that matches users based on complementary teaching and learning skills. Implemented user authentication, skill management, recommendation/matching logic, exchange requests, scheduling, reviews, and real-time communication.

---

# 57. Recommended MVP Goal

For a college project, focus first on:

```text
Authentication
      +
Profile
      +
Teach/Learn Skills
      +
Search
      +
Matching Algorithm
      +
Exchange Request
```

Once this works reliably, add:

```text
Chat
Sessions
Reviews
Notifications
AI Matching
```
