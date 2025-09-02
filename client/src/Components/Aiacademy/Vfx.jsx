import React from "react";
import "../Aiacademy/Ai.css";
const Vfx = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="acahome">
        <section id="home" className="hero">
          <div className="hero-background">
            <img src="/vfxmain.webp" alt="" loading="lazy" />
          </div>
          <div className="hero-contents">
            <h1 className="hero-titles">VFX</h1>
            <p className="hero-subtitle">Visual Effects</p>
            <p className="hero-description">
              "Master techniques to design stunning visual effects for films,
              advertisements, and gaming projects."
            </p>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="courses">
          <div className="containercs">
            <h2 className="section-title" style={{ textAlign: "center" }}>
              Course Offerings
            </h2>
            <div className="courses-grid">
              {/* Course 1 */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Beginner Foundation</h3>
                  <div className="price">₹1,000</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">1 Months</p>
                  <p className="description">Demo class</p>
                  <ul className="features">
                    <li>Introduction to VFX Basic rotoscopy</li>
                    <li>Sequence paint</li>
                    <li>Tracking</li>
                    <li>Pipe line over view</li>
                    <li>Softwares : Nuke, Silhouette, Photoshop</li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="beginner" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Course 2 */}
              <div className="course-card hover-lift">
                <div className="card-header">
                  <h3>Intermediate Foundation</h3>
                  <div className="price">₹4,500</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">3 Months</p>
                  <p className="description">Mid Level</p>
                  <ul className="features">
                    <li>
                      Beginner foundation focus area + understanding resolution
                    </li>
                    <li>Frame, Codes, Matte painting</li>
                    <li>Wire removal, Adv rotoscopy, Motion blur</li>
                    <li>Cutting edge, Stereo roto, Tracking</li>
                    <li>Softwares : Nuke, Silhouette, Mocha Pro</li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="Intermediate" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Course 3 */}
              <div className="course-card hover-lift featured">
                <div className="featured-badge">Most Popular</div>
                <div className="card-header">
                  <h3>Advanced VFX Artist Foundation</h3>
                  <div className="price">₹6,500</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">6 Months</p>
                  <p className="description">Expert Level</p>
                  <ul className="features">
                    <li>Intermediate foundation + keying techniques</li>
                    <li>Compositing</li>
                    <li>Grading, Mach move making, Demo works</li>
                    <li>After effects basics, Keymix, Merge</li>
                    <li>
                      Softwares : Nuke, Silhouette, Mocha Pro, After Effects
                    </li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="Advancedvfx" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>

              {/* Course 4 */}
              <div className="course-card hover-lift featured">
                <div className="card-header">
                  <h3>Professional Photoshop</h3>
                  <div className="price">₹1,300</div>
                  <br />
                </div>
                <div className="card-body">
                  <p className="duration">1 Months</p>
                  <ul className="features">
                    <li>Graphic Design</li>
                    <li>Photo Editing</li>
                    <li>Posters</li>
                    <li>Flyers, Notices</li>
                    <li>Typography, Effects</li>
                  </ul>
                </div>
                <br />
                <div className="hero-buttons">
                  <a href="Professional" className="ibn-btn btn--primary">
                    ENROLL NOW
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about">
          <div className="container">
            <div className="section-header">
              <h2 className="section-title">Course Benefits</h2>
              <p className="section-subtitle">
                Learn to use visual effects to bring imagination to life and
                engage audiences.
              </p>
            </div>
            <div className="about-content">
              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Industry-Relevant Skills: Learn VFX techniques used in
                      movies, ads, and gaming.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Hands-On Project Work: Create professional-level visuals
                      through real-world projects and assignments.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Software Mastery: Gain expertise in industry tools like
                      Adobe After Effects, Nuke, and Blender.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Creative Career Opportunities: Open doors to careers in
                      film, animation, advertising, and game design.
                    </span>
                  </div>
                </div>
              </div>

              <div className="about-text">
                <div className="mission-points">
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Portfolio Development: Build an impressive showreel to
                      showcase your creativity and technical skills.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Collaboration Experience: Work in team-based projects
                      similar to real studio environments.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Industry Insights: Learn current trends, workflows, and
                      best practices from experienced professionals.
                    </span>
                  </div>
                  <div className="point">
                    <i className="fas fa-check-circle"></i>
                    <span>
                      Global Job Market Access: Qualify for opportunities in
                      studios and production houses worldwide.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Vfx;
