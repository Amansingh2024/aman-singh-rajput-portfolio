import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>STEM Trainer</h4>
                <h5>D'robozone Innovative Center Pvt. Ltd.</h5>
              </div>
              <h3>2025 - Present</h3>
            </div>
            <p>
              Conducting Robotics, STEM, AI, IoT, and Coding sessions. Guiding students in project-based learning and innovation challenges. Developing activity-based learning modules.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ServiceNow Developer</h4>
                <h5>Soltrix Solutions</h5>
              </div>
              <h3>2023 - 2025</h3>
            </div>
            <p>
              Developed enterprise-grade ServiceNow applications. Worked on ITSM, ITOM, CMDB. Automated workflows using Flow Designer, Scheduled Jobs, and REST API integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in AI/ML</h4>
                <h5>Pursuing</h5>
              </div>
              <h3>2026 - 2029</h3>
            </div>
            <p>
              Pursuing Bachelor of Technology with a specialization in Artificial Intelligence and Machine Learning.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Diploma in CSE</h4>
                <h5>Completed</h5>
              </div>
              <h3>2018 - 2021</h3>
            </div>
            <p>
              Completed Diploma in Computer Science Engineering.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X</h4>
                <h5>Secondary Education</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Successfully completed 10th standard board examinations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
