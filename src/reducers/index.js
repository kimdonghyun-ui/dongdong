import { LOGIN } from '../actions/index';
import { combineReducers } from 'redux';

const loginState = {
  dataSet: [
    {
      name: '배부른 튜터1',
      achievement: '경희대',
      grade: '초/중/고 전문',
      subject: '전과목',
      introduce: '기초부터 고급영어까지 함께해요!',
      score: '4.6',
      totalnum: '37명',
      access: true,
      type: '맛보기 강의/대표 강의',
      title: '초등영어 Speaking & Writing',
      time: '1시간 (총1회) - 시간협의가능',
      price: '5000원',
    },
  ],
};

const loginApp = (state = loginState, action) => {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        dataSet: action.dataSet,
      });
    default:
      return state; //
  }
};

const did_client = combineReducers({
  loginApp,
});

export default did_client;
