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
            <p>리액트를 학습하며 제작한 페이지입니다.<br/>
              동영상 이미지 슬라이드, 회원가입 기능, <br/>
              로그인 기능, 아이디 찾기 비밀번호 찾기 등을 구현하였습니다<br/>
              사용된 기술로는 react, scss, javascript, html입니다.
            </p>
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
        <button className="movebtn1">
          <MdKeyboardDoubleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MainPage2;
