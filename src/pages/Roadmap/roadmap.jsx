import { Link } from "react-router-dom";
import "./roadmap.css";

function Roadmap() {
  return (
    <div className="roadmap-page">

      {/* Top Bar */}
      <header className="topbar">
        <Link to="/dashboard" className="back-button">
          ←
        </Link>

        <h2>Student Career Assistant</h2>
      </header>

      {/* Roadmap Content */}
      <main className="roadmap-content">

        <h1>🗺️ Career Roadmap</h1>

        <p>
          Follow your personalized learning path and build the skills
          required for your target career.
        </p>

        <div className="roadmap-container">

          {/* Step 1 */}
          <div className="roadmap-step">
            <div className="step-number">1</div>

            <div className="step-content">
              <h2>Programming Fundamentals</h2>

              <p>
                Build a strong foundation in programming and problem solving.
              </p>

              <div className="roadmap-skills">
                <span>Python</span>
                <span>Java</span>
                <span>OOP</span>
              </div>

              <button>Start Learning</button>
            </div>
          </div>


          {/* Step 2 */}
          <div className="roadmap-step">
            <div className="step-number">2</div>

            <div className="step-content">
              <h2>Data Structures & Algorithms</h2>

              <p>
                Learn important data structures and improve your
                problem-solving skills.
              </p>

              <div className="roadmap-skills">
                <span>Arrays</span>
                <span>Linked List</span>
                <span>Stack</span>
                <span>Queue</span>
                <span>Binary Search</span>
              </div>

              <button>Start Learning</button>
            </div>
          </div>


          {/* Step 3 */}
          <div className="roadmap-step">
            <div className="step-number">3</div>

            <div className="step-content">
              <h2>Machine Learning</h2>

              <p>
                Learn machine learning concepts and build practical models.
              </p>

              <div className="roadmap-skills">
                <span>Regression</span>
                <span>Classification</span>
                <span>Scikit-learn</span>
                <span>Model Evaluation</span>
              </div>

              <button>Start Learning</button>
            </div>
          </div>


          {/* Step 4 */}
          <div className="roadmap-step">
            <div className="step-number">4</div>

            <div className="step-content">
              <h2>Deep Learning & AI</h2>

              <p>
                Move towards advanced AI concepts and neural networks.
              </p>

              <div className="roadmap-skills">
                <span>CNN</span>
                <span>RNN</span>
                <span>LSTM</span>
                <span>Transformers</span>
              </div>

              <button>Start Learning</button>
            </div>
          </div>


          {/* Step 5 */}
          <div className="roadmap-step">
            <div className="step-number">5</div>

            <div className="step-content">
              <h2>Projects & Portfolio</h2>

              <p>
                Apply your knowledge by building real-world projects.
              </p>

              <div className="roadmap-skills">
                <span>Projects</span>
                <span>GitHub</span>
                <span>Portfolio</span>
              </div>

              <button>Start Building</button>
            </div>
          </div>


          {/* Step 6 */}
          <div className="roadmap-step">
            <div className="step-number">6</div>

            <div className="step-content">
              <h2>Placement Preparation</h2>

              <p>
                Prepare your resume, interviews and job applications.
              </p>

              <div className="roadmap-skills">
                <span>Resume</span>
                <span>Interview</span>
                <span>Jobs</span>
              </div>

              <button>Start Preparing</button>
            </div>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Roadmap;