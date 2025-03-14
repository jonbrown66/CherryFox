import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
  return (
    <section className="sponsors section">
      <div className="container">
        <div className="section-title">
          <h2>我们的合作伙伴</h2>
          <p>值得信赖的行业领导者与我们合作</p>
        </div>
        <div className="sponsors-container">
          {/* 赞助商标志占位符 */}
          <div className="sponsor-logo">
            <img src="https://via.placeholder.com/150x80" alt="赞助商1" />
          </div>
          <div className="sponsor-logo">
            <img src="https://via.placeholder.com/150x80" alt="赞助商2" />
          </div>
          <div className="sponsor-logo">
            <img src="https://via.placeholder.com/150x80" alt="赞助商3" />
          </div>
          <div className="sponsor-logo">
            <img src="https://via.placeholder.com/150x80" alt="赞助商4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors; 