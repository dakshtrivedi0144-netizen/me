'use client';

export default function Home() {
  return (
    <>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>

      {/* NAV */}
      <nav>
        <div className="nav-logo">DAKSH_TRIVEDI<span className="cursor"></span></div>
        <ul className="nav-links">
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#cert">CERTS</a></li>
          <li><a href="#achievements">ABOUT</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
        <div className="nav-avail"><div className="pulse"></div>Available for Internship</div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-tag">Security Engineer &amp; Builder</div>
              <h1 className="hero-name">
                <span className="f">DAKSH</span>
                <span className="l">TRIVEDI</span>
              </h1>
              <div className="hero-roles">
                <span className="role-pill sec">Web App Security</span>
                <span className="role-pill sec">Malware Analysis</span>
                <span className="role-pill sec">Bug Bounty Hunter</span>
                <span className="role-pill dev">React &amp; Node.js</span>
                <span className="role-pill dev">FastAPI</span>
                <span className="role-pill bug">OWASP Top 10</span>
              </div>
              <p className="hero-desc">
                3rd-year B.Tech CS student (CGPA <strong>9.06/10</strong>) who builds real security tools —
                not just learns concepts. Shipped <strong>WebHound</strong>, a production async vulnerability scanner,
                <strong>ReconX</strong>, an attack surface mapper, and a <strong>9-class malware classifier</strong>.
                Also fluent in modern web dev (React, Node.js) as a complementary skill.
              </p>
              <div className="hero-btns">
                <a href="#contact" className="btn-primary">Hire Me →</a>
                <a href="#projects" className="btn-outline">View Projects</a>
                <a href="#skills" className="btn-ghost">Web Dev Skills</a>
              </div>
            </div>
            <div className="hero-right">
              <div className="terminal">
                <div className="t-bar">
                  <div className="t-dot r"></div><div className="t-dot y"></div><div className="t-dot g"></div>
                  <div className="t-title">daksh@kali:~/tools</div>
                </div>
                <div className="t-body">
                  <div className="t-line"><span className="t-prompt">➜</span><span className="t-path">~/WebHound</span><span className="t-cmd"> git status</span></div>
                  <div className="t-line"><span className="t-out green">✔ 8 scanners active, 0 errors</span></div>
                  <div className="t-blank"></div>
                  <div className="t-line"><span className="t-prompt">➜</span><span className="t-path">~/WebHound</span><span className="t-cmd"> python scan.py target.com</span></div>
                  <div className="t-line"><span className="t-out">[*] Crawling 48 endpoints...</span></div>
                  <div className="t-line"><span className="t-out red">[!] XSS found — reflected, param: q</span></div>
                  <div className="t-line"><span className="t-out red">[!] SQLi found — error-based, /login</span></div>
                  <div className="t-line"><span className="t-out amber">[~] CORS misconfiguration detected</span></div>
                  <div className="t-line"><span className="t-out">[*] Generating PoC + CVSS scores...</span></div>
                  <div className="t-line"><span className="t-out green">[✔] PDF report exported (ReportLab)</span></div>
                  <div className="t-blank"></div>
                  <div className="t-line"><span className="t-prompt">➜</span><span className="t-path">~/ReconX</span><span className="t-cmd"> python recon.py example.com</span></div>
                  <div className="t-line"><span className="t-out">[*] 4 discovery methods running...</span></div>
                  <div className="t-line"><span className="t-out red">[!] Takeover risk: staging.example.com</span></div>
                  <div className="t-line"><span className="t-out blue">[i] 23 live subdomains mapped</span></div>
                  <div className="t-blank"></div>
                  <div className="t-line"><span className="t-prompt">➜</span><span className="t-path">~</span><span className="t-cmd"> </span><span className="t-cursor"></span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-inner">
            <div className="stat"><div className="stat-num">9.06</div><div className="stat-label">CGPA / 10.0</div></div>
            <div className="stat-div"></div>
            <div className="stat"><div className="stat-num">3</div><div className="stat-label">Security Tools Built</div></div>
            <div className="stat-div"></div>
            <div className="stat"><div className="stat-num">8</div><div className="stat-label">OWASP Scanners</div></div>
            <div className="stat-div"></div>
            <div className="stat"><div className="stat-num">9</div><div className="stat-label">Malware Classes</div></div>
            <div className="stat-div"></div>
            <div className="stat"><div className="stat-num">2</div><div className="stat-label">Certifications</div></div>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <section id="skills">
        <div className="container">
          <div className="sec-eyebrow">// 01. skills</div>
          <h2 className="sec-title">Technical <span className="accent">Arsenal</span></h2>
          <p className="sec-sub">Security-first by nature, web dev as a superpower. Both sides work together — I understand apps from both the builder's and attacker's perspective.</p>

          <div className="skills-layout reveal">
            <div className="skill-group sec">
              <div className="sg-header"><div className="sg-icon">🔐</div><div className="sg-title">SECURITY</div></div>
              <div className="skill-tags">
                <span className="skill-tag">OWASP Top 10</span>
                <span className="skill-tag">Web App Pentesting</span>
                <span className="skill-tag">Static PE Analysis</span>
                <span className="skill-tag">Bug Bounty</span>
                <span className="skill-tag">SIEM &amp; IDS</span>
                <span className="skill-tag">Incident Response</span>
                <span className="skill-tag">Kill-Chain Analysis</span>
                <span className="skill-tag">CVSS Scoring</span>
                <span className="skill-tag">PoC Documentation</span>
              </div>
            </div>

            <div className="skill-group tools">
              <div className="sg-header"><div className="sg-icon">🛠️</div><div className="sg-title">TOOLS</div></div>
              <div className="skill-tags">
                <span className="skill-tag">Burp Suite</span>
                <span className="skill-tag">OWASP ZAP</span>
                <span className="skill-tag">Nmap + NSE</span>
                <span className="skill-tag">Wireshark</span>
                <span className="skill-tag">GDB</span>
                <span className="skill-tag">Metasploit</span>
                <span className="skill-tag">Kali Linux</span>
                <span className="skill-tag">FastAPI</span>
              </div>
            </div>

            <div className="skill-group lang">
              <div className="sg-header"><div className="sg-icon">💻</div><div className="sg-title">PROGRAMMING</div></div>
              <div className="skill-tags">
                <span className="skill-tag">Python (primary)</span>
                <span className="skill-tag">JavaScript / TypeScript</span>
                <span className="skill-tag">Bash / Shell</span>
                <span className="skill-tag">C / C++</span>
                <span className="skill-tag">HTML / CSS</span>
                <span className="skill-tag">asyncio</span>
                <span className="skill-tag">REST APIs</span>
              </div>
            </div>

            <div className="skill-group dev">
              <div className="sg-header"><div className="sg-icon">⚛️</div><div className="sg-title">WEB DEVELOPMENT</div></div>
              <div className="skill-tags">
                <span className="skill-tag">React</span>
                <span className="skill-tag">Node.js</span>
                <span className="skill-tag">Express</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">SQLite / aiosqlite</span>
                <span className="skill-tag">SSE Streaming</span>
                <span className="skill-tag">Git / GitHub</span>
              </div>
            </div>

            <div className="webdev-note reveal">
              <div className="webdev-note-icon">💡</div>
              <div className="webdev-note-text">
                <strong>Why web dev matters here:</strong> Every security tool I've built — WebHound, ReconX, the Malware Classifier — has a polished front-end dashboard with real-time SSE streaming, responsive UI, and clean API design.
                I can build the product <em>and</em> break it. That dual perspective is rare in entry-level candidates.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact">
        <div className="container">
          <div className="contact-inner">
            <div className="sec-eyebrow">// 05. contact</div>
            <h2 className="sec-title">Let's <span className="accent">Connect</span></h2>
            <p className="sec-sub">Open to internships, freelance security work, and collaborations. Reach out anytime.</p>
            
            <div className="contact-grid">
              <a href="https://github.com/dakshtrivedi0144-netizen" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <div className="icon">🐙</div>
                <div>GitHub</div>
              </a>
              <a href="https://linkedin.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <div className="icon">💼</div>
                <div>LinkedIn</div>
              </a>
              <a href="https://twitter.com" className="contact-btn" target="_blank" rel="noopener noreferrer">
                <div className="icon">𝕏</div>
                <div>Twitter</div>
              </a>
              <a href="mailto:daksh@example.com" className="contact-btn">
                <div className="icon">✉️</div>
                <div>Email</div>
              </a>
            </div>

            <div className="contact-email">
              daksh.trivedi@example.com
            </div>

            <div className="avail-banner">
              <div className="pulse"></div>
              Available for Internship
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>© 2026 Daksh Trivedi. All rights reserved.</div>
        <div>Built with <span>Next.js</span> & deployed on <span>Vercel</span></div>
      </footer>
    </>
  );
}
