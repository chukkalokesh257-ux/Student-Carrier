import { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="dashboard">

      {/* Top Bar */}
      <header className="topbar">
        <button
          className="menu-button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>

        <h2>Student Career Assistant</h2>
      </header>


      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>

        <div className="sidebar-header">
          <h2>Career Assistant</h2>

          <button
            className="close-button"
            onClick={() => setSidebarOpen(false)}
          >
            ×
          </button>
        </div>


        <nav className="sidebar-menu">

        {/* HOME */}

        <div className="menu-section">

        <Link
        to="/dashboard"
        className="menu-item"
        onClick={() => setSidebarOpen(false)}
        >
        🏠
        <span>Dashboard</span>
        </Link>

        </div>


  {/* CAREER */}

  <div className="menu-section">
    <p className="section-title">CAREER</p>
            <button className="menu-item">
              👤
              <span>Student Profile</span>
            </button>

            <Link 
              to="/roadmap" 
              className="menu-item"
              onClick={() => setSidebarOpen(false)}
            >
              🗺️
              <span>Roadmap</span>
            </Link>

            <button className="menu-item">
              📊
              <span>Skill Gap Analysis</span>
            </button>
          </div>


          <div className="menu-section">
            <p className="section-title">PRACTICE</p>

            <button className="menu-item">
              💻
              <span>DSA Tracker</span>
            </button>

            <button className="menu-item">
              🚀
              <span>Project Hub</span>
            </button>
          </div>


          <div className="menu-section">
            <p className="section-title">OPPORTUNITIES</p>

            <button className="menu-item">
              📄
              <span>Resume Builder</span>
            </button>

            <button className="menu-item">
              🎯
              <span>Job Matcher</span>
            </button>
          </div>


          <div className="menu-section">
            <p className="section-title">AI & PREPARATION</p>

            <button className="menu-item">
              🤖
              <span>AI Assistant</span>
            </button>

            <button className="menu-item">
              🎤
              <span>Interview Preparation</span>
            </button>
          </div>

        </nav>


        {/* Bottom Menu */}
        <div className="sidebar-bottom">

          <button className="menu-item">
            ⚙️
            <span>Settings</span>
          </button>

          <button className="menu-item logout">
            🚪
            <span>Logout</span>
          </button>

        </div>

      </aside>


      {/* Dashboard Content */}
      <main className="dashboard-content">

        <h1>Welcome to your Dashboard 👋</h1>

        <p>
          Build your skills, track your progress and prepare for your career.
        </p>


        <div className="dashboard-cards">

          <div className="dashboard-card">
            <h3>🎯 Career Goal</h3>
            <p>Set your target role and start your journey.</p>
          </div>

          <div className="dashboard-card">
            <h3>📚 Learning Progress</h3>
            <p>Track your roadmap and skill development.</p>
          </div>

          <div className="dashboard-card">
            <h3>💻 DSA Progress</h3>
            <p>Track your coding practice and problems solved.</p>
          </div>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;