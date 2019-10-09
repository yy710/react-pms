import React, { useState } from "react";
//import logo from './logo.svg';
import './App.css';
import Pmboard from './components/Pmboard'

let _pmList = [
  [
    { id: 1, auther: "张三1", attach: "PSD" },
    { id: 2, auther: "李四1", attach: "EXCEL" },
    { id: 3, auther: "王五1", attach: "WORD" }
  ],
  [
    { id: 4, auther: "张三2", attach: "PSD" },
    { id: 5, auther: "李四2", attach: "EXCEL" },
    { id: 6, auther: "王五2", attach: "WORD" }
  ],
  [
    { id: 7, auther: "张三3", attach: "PSD" },
    { id: 8, auther: "李四3", attach: "EXCEL" },
    { id: 9, auther: "王五3", attach: "WORD" }
  ]
];

function App() {
  function addList(n, r) {
    //console.log("click e: ", e.target.id);
    console.log("addList(", n, ")");
    console.log(r);
  }

  return (
    <div className="board">
      <Pmboard key="collections" color="orange" title="客户需求记录" onAddList={r => addList(1, r)} pmList={_pmList[0]}></Pmboard>
      <Pmboard key="tasks" color="blue" title="已分配任务" onAddList={r => addList(2, r)} pmList={_pmList[1]}></Pmboard>
      <Pmboard key="finished" color="green" title="已完成任务" onAddList={r => addList(3, r)} pmList={_pmList[2]}></Pmboard>
    </div>
  );
}

export default App;
