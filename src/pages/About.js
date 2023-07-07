import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="inner">
      <div className="title">
        <h1>Profile</h1>
      </div>
      <div className="h1">
        <div className="up">
              <h4>NAME</h4>
              <p>김재원</p>
              <h4>BIRTH</h4>
              <p>98.12.22</p>
              <h4>ADDRESS</h4>
              <p>경기도 성남시</p>
          </div>
        <div className="down">
        <h4>PHONE</h4>
        <p>010-5068-0498</p>
        <h4>EMAIL</h4>
        <p>sdrjseka9@naver.com</p>
        </div>
      </div>
    </div>
  );
};

export default About;
