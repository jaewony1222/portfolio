import React from "react";
import "./MainPage1.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MainPage1 = () => {
  return (
    <div className="inner">
      <div className="title">
        <h1>PROJECTS</h1>
      </div>
      <div className="box">
        <div className="leftbx">
          <img src="./img/indigo.PNG" />
        </div>
        <div className="rightbx">
          <div className="right_title">
            <h2>
              <span className="number">01.</span>
              INDIGO
            </h2>
            <p>반응형을 학습하여 제작한 페이지입니다.</p>
          </div>
          <button>Go To</button>
          <table className="file_link">
            <thead>
              <tr>
                <th id="col1">Category</th>
                <th is="col2">Source(click!)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td headers="col1">
                  <span className="category html">HTML</span>
                </td>
                <td headers="col2">
                  <a>index.html</a>
                </td>
              </tr>
              <tr>
                <td headers="col1">
                  <span className="category css">CSS</span>
                </td>
                <td headers="col2">
                  <a>index.css</a>
                  <br />
                  <a>reset.css</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="movebtn">
          <MdKeyboardDoubleArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default MainPage1;
