import React from "react";
import "./MainPage1.css";

const MainPage1 = () => {
  return (
    <div className="inner">
      <div className="title">
        <h1>프로젝트 PROJECTS</h1>
      </div>
      <div className="box">
        <div className="leftbx">
          <img src="./img/indigo.PNG" />
        </div>
        <div className="rightbx">
          <div className="right_title">
            <h2>01.INDIGO</h2>
            <p>반응형을 학습하여 제작한 페이지입니다.</p>
          </div>
          <ul>
            <il>퍼센트(%) 값을 이용한 컨텐츠의 유동적인 크기 설정</il>
            <li></li>
          </ul>
          <button>GoTo</button>
          <table className="file_link">
            <thead>
              <tr>
                <th id="col1">Category</th>
                <th is="col2">Source(click!)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>HTML</span>
                </td>
                <td>
                  <a>index.html</a>
                </td>
              </tr>
              <tr>
                <td>
                  <span>CSS</span>
                </td>
                <td>
                  <a>index.css</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MainPage1;
