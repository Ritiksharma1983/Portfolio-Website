import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>BCA in Artificial Intelligence & Machine Learning</h4>
                <h5>JMS Group of Institutions</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Pursuing BCA with specialization in AI & ML at one of India's leading universities.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Kalpana Chawla High School Shahpur, Muzaffarnagar</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed intermediate education with a strong academic record.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>High School</h4>
                <h5>Kalpana Chawla High School Shahpur, Muzaffarnagar</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Completed high school education with a focus on foundational subjects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
