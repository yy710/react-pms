import React, { Component } from "react";
//import logo from './logo.svg';
import './App.css';

import Pmboard from './components/Pmboard'

function App() {
  return (
    <div className="board">
      <Pmboard color="orange" title="客户需求记录" boardid="aaa"></Pmboard>
      <Pmboard color="blue" title="已分配任务" boardid="bbb"></Pmboard>
      <Pmboard color="green" title="已完成任务" boardid="ccc"></Pmboard>
    </div>
  );
}

export default App;
