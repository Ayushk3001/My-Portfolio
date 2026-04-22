import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
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
                <h4>Software Intern</h4>
                <h5>CraftTech 360</h5>
              </div>
              <h3>02/2025 - 05/2025</h3>
            </div>
            <p>
              Developed intuitive and responsive frontend modules for Boko, a hotel operations platform, using React.js and ShadCN UI. 
              Designed comprehensive UI/UX flows in Figma. Collaborated within an agile SCRUM team.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Geographic Information System Intern</h4>
                <h5>Bharat Electronic Limited</h5>
              </div>
              <h3>06/2024 - 07/2024</h3>
            </div>
            <p>
              Contributed to a secure GIS-based platform for the Indian defense sector. 
              Worked with distributed data and spatial analytics using PostgreSQL/PostGIS. 
              Practiced ownership of end-to-end lifecycle within an agile workflow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
