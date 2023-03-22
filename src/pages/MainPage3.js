import React from "react";
import "./MainPage3.css";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

const MainPage3 = () => {
  return (
    <div className="inner">
      <div className="box">
        <div className="leftbx">
          <img src="./img/todolist.PNG" />
        </div>
        <div className="rightbx">
          <div className="right_title">
            <h2>
              <span className="number">03.</span>
              Todo List
            </h2>
            <p>리액트를 학습하며 제작한 페이지입니다.</p>
            <p>할 일 추가,삭제,체크 등의 기능이 가능합니다.</p>
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
                  <span className="category html">React</span>
                </td>
                <td headers="col2">
                  <a>GitHub Page</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <button className="movebtn3">
          <MdKeyboardDoubleArrowLeft />
        </button>
      </div>
    </div>
  );
};

export default MainPage3;
