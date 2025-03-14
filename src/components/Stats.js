import React from 'react';
import './Stats.css';

const Stats = () => {
  return (
    <section className="stats section">
      <div className="container">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>客户</p>
          </div>
          <div className="stat-item">
            <h3>1000+</h3>
            <p>项目</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>国家</p>
          </div>
          <div className="stat-item">
            <h3>98%</h3>
            <p>客户满意度</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 