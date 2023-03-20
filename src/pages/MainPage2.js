import React from "react";
import "./MainPage2.css";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const MainPage2 = () => {
  return (
    <div className="inner">
      <div className="box2">
        <div className="leftbx">
          <img src="./img/nexon.PNG" />
        </div>
        <div className="rightbx">
          <div className="right_title">
            <h2>
              <span className="number">02.</span>
              NEXON
            </h2>
            <p>리액트를 학습하며 제작한 페이지입니다.</p>
          </div>
          <ul className="right_ul">
            <li>React JS</li>
          </ul>
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
                  <span className="category html">React</span>
                </td>
                <td headers="col2">
                  <a>GitHub Page</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="movebtn1">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MainPage2;
