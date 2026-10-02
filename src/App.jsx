import { useState } from "react";
import "./App.css";

function App() {
  const [activeMember, setActiveMember] = useState("lian");

  const members = {
    lian: {
      name: "Lian Grace Tero",
      initial: "L",
      image: "/images/lian.jpg",
      role: "GROUP LEADER",
      address: "Brgy. Tagburos, Puerto Princesa City, Palawan",
      age: "18",
      born: "Palawan Hospital",
      birthday: "April 14, 2008",
      number: "09508833909",
      tiktok: "ley.grcy",
      facebook: "Liana Tero",
      github: "lianaaa-grcy",
      instagram: "leygcy",
      email: "liangracetero@gmail.com",
      description:
        "Hi! I'm Lian, the leader of LAKIMY. I help our group organize our tasks, share ideas, and make sure that we work together. I enjoy learning new things and creating something meaningful with my group.",
    },

    asli: {
      name: "Malline-Jane F. Asli",
      initial: "A",
      image: "/images/asli.jpg",
      role: "MEMBER",
      address: "Bancalaan, Balabac, Palawan",
      age: "20",
      born: "Singcab, Bancalaan, Balabac, Palawan",
      birthday: "March 27, 2006",
      number: "09701448607",
      tiktok: "Mal FariolenA28",
      facebook: "Malline-Jane Fariolen Asli",
      github: "fariolenmallinejane-ux",
      instagram: "Mal Ash",
      email: "fariolenmallinejane@gmail.com",
      description:
        "Hi! I'm Malline-Jane, one of the members of LAKIMY. I enjoy sharing my ideas with the group and helping whenever I can. Being part of this team allows me to learn, contribute, and experience new things with my friends.",
    },

    kim: {
      name: "Kim Jessa Sancho",
      initial: "K",
      image: "/images/kim.jpg",
      role: "MEMBER",
      address: "Brgy Tanatanaon, Dumaran, Palawan",
      age: "19",
      born: "Tanatanaon, Dumaran Palawan",
      birthday: "October 04, 2006",
      number: "09354847958",
      tiktok: "kymm",
      facebook: "Kim Sancho",
      github: "sanchokim39-del",
      instagram: "kym_js",
      email: "sanchokim39@gmail.com",
      description:
        "Hi! I'm Kim, one of the members of LAKIMY. I like sharing ideas, helping with our activities, and working together with my groupmates. Through LAKIMY, I get to learn new things while enjoying the experience with my friends.",
    },
  };

  const member = members[activeMember];

  return (
    <div className="website">

      {/* BACKGROUND */}
      <div className="background">
        <div className="bubble bubble1"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>

        <span className="star star1">✦</span>
        <span className="star star2">✧</span>
        <span className="star star3">✦</span>

        <span className="heart heart1">♡</span>
        <span className="heart heart2">♡</span>
      </div>

      {/* FLOATING NAVIGATION */}
      <div className="floating-nav">
        <a href="#home">⌂</a>
        <a href="#about">♡</a>
        <a href="#members">✦</a>
        <a href="#projects">◆</a>
        <a href="#contact">✉</a>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          LAKIMY<span>♡</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#members">Members</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HOME */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="mini-badge">
            ✦ THREE MINDS • ONE TEAM ✦
          </div>

          <p className="welcome">WELCOME TO</p>

          <h1>
            LAKIMY<span>♡</span>
          </h1>

          <p className="hero-description">
            We are LAKIMY, a group of three students who came together
            to learn, create, share ideas, and help one another.
          </p>

          <div className="hero-buttons">
            <a href="#members" className="main-button">
              Meet Us ✦
            </a>

            <a href="#about" className="outline-button">
              Our Story ♡
            </a>
          </div>

          <p className="hero-note">
            Made with teamwork, creativity & a little bit of purple magic ✨
          </p>
        </div>

        <div className="hero-card">
          <div className="hero-card-top">
            <span>OUR GROUP</span>
            <span>✦ ✧ ✦</span>
          </div>

          <div className="big-logo">
            LAKIMY
          </div>

          <div className="tiny-stars">
            ✦ ✦ ✦ ✦ ✦
          </div>

          <p>
            Lian + Asli + Kim
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">

        <div className="section-heading">
          <p>GET TO KNOW US</p>
          <h2>About <span>LAKIMY</span></h2>
        </div>

        <div className="about-grid">

          <div className="about-text">

            <h3>
              Hi! We are <span>LAKIMY</span> 💜
            </h3>

            <p>
              We are a group of three students: Lian, Asli, and Kim.
              We created the name LAKIMY from our names. The letter
              <strong> L </strong> comes from Lian, <strong>A</strong> comes
              from Asli, and <strong>KIMY</strong> represents Kim.
            </p>

            <p>
              As a group, we want to learn from each other, share our
              ideas, and help one another whenever we have challenges.
              We believe that working together makes our projects more
              enjoyable and meaningful.
            </p>

            <p>
              This website is one way for us to introduce ourselves,
              show our personalities, and share the things we create
              together.
            </p>

            <button
              className="story-button"
              onClick={() =>
                document
                  .getElementById("members")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Meet Our Members ✦
            </button>

          </div>

          <div className="name-card">

            <div className="name-card-label">
              HOW WE GOT OUR NAME
            </div>

            <div className="name-breakdown">

              <div className="name-piece">
                <strong>L</strong>
                <span>Lian</span>
              </div>

              <div className="plus">+</div>

              <div className="name-piece">
                <strong>A</strong>
                <span>Asli</span>
              </div>

              <div className="plus">+</div>

              <div className="name-piece">
                <strong>KIMY</strong>
                <span>Kim</span>
              </div>

            </div>

            <div className="name-result">
              L + A + KIMY
              <strong> = LAKIMY</strong>
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="section values-section">

        <div className="section-heading center">
          <p>WHAT MATTERS TO US</p>
          <h2>Our <span>Values</span></h2>
        </div>

        <div className="value-cards">

          <div className="value-card">
            <div className="value-icon">♡</div>
            <h3>Friendship</h3>
            <p>
              We support and encourage each other while enjoying
              the experience of working together.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">✦</div>
            <h3>Creativity</h3>
            <p>
              We share our ideas and try to make our projects
              interesting, unique, and enjoyable.
            </p>
          </div>

          <div className="value-card">
            <div className="value-icon">◆</div>
            <h3>Teamwork</h3>
            <p>
              We believe that listening, helping, and cooperating
              makes a group stronger.
            </p>
          </div>

        </div>
      </section>

      {/* MEMBERS */}
      <section id="members" className="section members-section">

        <div className="section-heading center">
          <p>THE PEOPLE BEHIND LAKIMY</p>
          <h2>Meet <span>Our Members</span></h2>
        </div>

        {/* MEMBER TABS */}
        <div className="member-tabs">

          <button
            className={activeMember === "lian" ? "active-tab" : ""}
            onClick={() => setActiveMember("lian")}
          >
            Lian
          </button>

          <button
            className={activeMember === "asli" ? "active-tab" : ""}
            onClick={() => setActiveMember("asli")}
          >
            Asli
          </button>

          <button
            className={activeMember === "kim" ? "active-tab" : ""}
            onClick={() => setActiveMember("kim")}
          >
            Kim
          </button>

        </div>

        {/* PROFILE */}
        <div className="profile-card">

          <div className="profile-visual">

            <div className="profile-circle">

              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
              ) : (
                <div className="profile-initials">
                  {member.initial}
                </div>
              )}

              <div className="circle-decoration">
                ✦
              </div>

            </div>

            <div className="profile-number">
              0{activeMember === "lian" ? "1" : activeMember === "asli" ? "2" : "3"}
            </div>

          </div>

          <div className="profile-info">

            <p className="member-role">
              {member.role}
            </p>

            <h3>{member.name}</h3>

            <p className="profile-description">
              {member.description}
            </p>

            <div className="profile-details">

              <div>
                <strong>📍 Address</strong>
                <span>{member.address}</span>
              </div>

              <div>
                <strong>🎂 Age</strong>
                <span>{member.age} years old</span>
              </div>

              <div>
                <strong>🏥 Born</strong>
                <span>{member.born}</span>
              </div>

              <div>
                <strong>🎀 Birthday</strong>
                <span>{member.birthday}</span>
              </div>

              <div>
                <strong>📱 Number</strong>
                <span>{member.number}</span>
              </div>

              <div>
                <strong>✉ Email</strong>
                <span>{member.email}</span>
              </div>

            </div>

            <div className="social-title">
              FIND ME ONLINE
            </div>

            <div className="socials">

              <div className="social">
                TikTok
                <span>{member.tiktok}</span>
              </div>

              <div className="social">
                Facebook
                <span>{member.facebook}</span>
              </div>

              <div className="social">
                GitHub
                <span>{member.github}</span>
              </div>

              <div className="social">
                Instagram
                <span>{member.instagram}</span>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FACTS */}
      <section className="section facts-section">

        <div className="facts">

          <div className="fact">
            <strong>03</strong>
            <span>Members</span>
          </div>

          <div className="fact">
            <strong>01</strong>
            <span>Team</span>
          </div>

          <div className="fact">
            <strong>∞</strong>
            <span>Ideas</span>
          </div>

          <div className="fact">
            <strong>♡</strong>
            <span>Friendship</span>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">

        <div className="section-heading center">
          <p>WHAT WE CREATE</p>
          <h2>Our <span>Projects</span></h2>
        </div>

        <p className="projects-intro">
          We enjoy creating projects where we can use our creativity,
          learn new skills, and apply what we learn in school.
        </p>

        <div className="project-grid">

          <div className="project-card pink-card">
            <div className="project-icon">💻</div>
            <h3>Web Design</h3>
            <p>
              Creating websites and exploring different ways to
              make a website look creative and interactive.
            </p>
          </div>

          <div className="project-card purple-card">
            <div className="project-icon">✦</div>
            <h3>Creative Projects</h3>
            <p>
              Working together on school activities and projects
              where we can share our ideas and creativity.
            </p>
          </div>

          <div className="project-card white-card">
            <div className="project-icon">♡</div>
            <h3>Future Ideas</h3>
            <p>
              We want to continue learning and create more projects
              that show how much we can improve as a team.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">

        <div className="contact-box">

          <div className="contact-sparkle">
            ✦
          </div>

          <p>LET'S CONNECT</p>

          <h2>
            Thanks for visiting
            <span> LAKIMY ♡</span>
          </h2>

          <p className="contact-description">
            We are happy that you took the time to visit our website.
            We hope you enjoyed getting to know our group and our
            individual members.
          </p>

          <a href="#home" className="main-button">
            Back to Home ↑
          </a>

        </div>
      </section>

      {/* FOOTER */}
      <footer>

        <div className="footer-logo">
          LAKIMY<span>♡</span>
        </div>

        <div className="footer-line"></div>

        <p>
          Lian • Asli • Kim
        </p>

        <p className="copyright">
          © 2026 LAKIMY. Made with ♡ and teamwork.
        </p>

      </footer>

    </div>
  );
}

export default App;
