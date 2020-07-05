import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { tutor_default } from '../data/TutorList';

const Login = (props) => {
  const { onLogin, dataSet } = props;

  console.log(dataSet);

  //전역 state에 저장
  const loginSubmit = () => {
    onLogin(tutor_default);
  };

  return (
    <div id="login">
      <h2>데이터</h2>
      <div className="loginBox">
        초기 데이터는 :{' '}
        {dataSet.map((value, idx) => {
          return <div key={idx}>{value.name}</div>;
        })}
        <br />
        {/* 클릭후 데이터는 : {dataText} */}
        <div className="btnLogin">
          <button onClick={loginSubmit}>데이터 전역 state에 저장</button>
        </div>
      </div>
    </div>
  );
};

let mapStateToProps = (state) => {
  return {
    dataSet: state.loginApp.dataSet,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onLogin: (value1) => dispatch(login(value1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
