export const LOGIN = 'LOGIN';

export function login(dataValue) {
  return {
    type: LOGIN,
    dataSet: dataValue,
  };
}
