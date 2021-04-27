import React from 'react';
import ReactDOM from 'react-dom';

const name ="Ruchi Sinha";
const date = new Date().toLocaleDateString();
const time = new Date().toLocaleTimeString();
ReactDOM.render(
  <>
  <h1>{ `My name is ${name}` } </h1>
  <p>{`Today's date is ${date}`}</p>
  <p>{`Current time is ${time}`}</p>
  </>
  ,document.getElementById("root")
);

