import React from "react";
import "./MainPage4.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MainPage4 = () => {
  return (
    <div className="inner">
      <div className="box2">
        <div className="leftbx">
          <img src="./img/game.PNG" />
        </div>
        <div className="rightbx">
          <div className="right_title">
            <h2>
              <span className="number">04.</span>
              야구게임
            </h2>
            <p>자바스크립트를 학습하며 제작한 페이지입니다.</p>
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
                  <a>style.css</a>
                </td>
              </tr>
              <tr>
                <td headers="col1">
                  <span className="category js">JS</span>
                </td>
                <td headers="col2">
                  <a>game.js</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="movebtn2">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MainPage4;
